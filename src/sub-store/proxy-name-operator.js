import ResourceCache from './libs/ResourceCache';
import isRealValue from './libs/objects';
import parseRegex from './libs/regex';
import {
    isDomain,
    isValidIpAddress,
    getLastPartOfIP,
    areFirstThreePartsEqual,
    getIpFromDomain,
    ip2long,
    getCountryFromIp,
} from './libs/ip';
import getProxyConfig from './libs/config';
import getFlag from './libs/flag';

const RESOURCE_CACHE_KEY = '#sub-store-cached-dns';
const CACHE_EXPIRATION_TIME_MS = 7 * 24 * 60 * 60 * 1000;

const resourceCache = new ResourceCache(
    RESOURCE_CACHE_KEY,
    CACHE_EXPIRATION_TIME_MS,
);

const NUMBER_TEMPLATE = '<#>';
const FLAG_TEMPLATE = '<F>';

async function operator(proxies) {
    const proxyConfig = await getProxyConfig();

    const regexCondition = (config, proxy) =>
        parseRegex(config.regex).test(proxy.name);
    const portsCondition = (config, proxy) =>
        config.ports.some((port) => port === proxy.port);
    const ipsCondition = async (config, proxy) => {
        const validations = await Promise.all(
            config.ips.map((ip) => validateIp(proxy.server, ip)),
        );
        return validations.some((validation) => validation);
    };

    let index = 0;
    for (const proxy of proxies) {
        let pass = false;
        let newName = '';
        for (const property in proxyConfig) {
            const value = proxyConfig[property];
            if (!isRealValue(value)) {
                continue;
            }
            if (property === 'default') {
                if (isRealValue(value.name)) {
                    pass = true;
                    newName = value.name;
                }
                continue;
            }
            if (!isRealValue(value.skip) || !value.skip) {
                const conditions = [];

                if (isRealValue(value.regex)) {
                    conditions.push(regexCondition);
                }
                if (isRealValue(value.ports)) {
                    conditions.push(portsCondition);
                }
                if (isRealValue(value.ips)) {
                    conditions.push(ipsCondition);
                }

                const result = await runConditions(conditions, value, proxy);

                if (result && isRealValue(value.name)) {
                    pass = true;
                    newName = value.name;
                    break;
                }
            }
        }
        if (pass) {
            index++;
            await updateProxyName(proxy, newName, index);
        }
    }

    return proxies;
}

async function updateProxyName(proxy, newName, index) {
    let finalName = newName.replaceAll(NUMBER_TEMPLATE, index);

    if (newName.indexOf(FLAG_TEMPLATE) >= 0) {
        let flag = getFlag(proxy.name);
        if (flag === '') {
            const country = await getCountryFromIp(proxy.server);
            flag = getFlag(country);
        }
        finalName = finalName.replaceAll(FLAG_TEMPLATE, flag);
    }

    proxy.name = finalName;
}

async function runConditions(conditions, config, proxy) {
    const results = await Promise.all(
        conditions.map((condition) => condition(config, proxy)),
    );
    return results.every((result) => result);
}

async function validateIp(ip, subnet) {
    let result = ip;

    if (isDomain(ip)) {
        const cached = resourceCache.get(ip);

        if (cached) {
            result = cached;
        } else {
            const ipLookup = await getIpFromDomain(ip);
            result = ipLookup;

            if (ipLookup) {
                resourceCache.set(ip, ipLookup);
            }
        }
    }

    return inSubNet(result, subnet);
}

function inSubNet(ip, subnet) {
    if (!isValidIpAddress(ip)) {
        return false;
    }

    if (subnet.indexOf('/') < 0) {
        if (ip === subnet) {
            return true;
        }

        if (
            areFirstThreePartsEqual(ip, subnet) &&
            getLastPartOfIP(subnet) === '*'
        ) {
            return true;
        }

        return false;
    }

    let mask;
    let baseIp;
    const longIp = ip2long(ip);
    if (
        (mask = subnet.match(/^(.*?)\/(\d{1,2})$/)) &&
        (baseIp = ip2long(mask[1])) >= 0
    ) {
        const freedom = 2 ** (32 - parseInt(mask[2]));
        return longIp >= baseIp && longIp <= baseIp + freedom - 1;
    }
    return false;
}

window.operator = operator;
