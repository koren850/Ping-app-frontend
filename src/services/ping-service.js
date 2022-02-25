import { httpService } from './http.service'

export const pingService = {
    ping,
    getStats
};

async function getStats() {
    return await httpService.get('statistics')
}

async function ping(site = 'www.google.co.il', count = 4) {
    try {
        const res = await httpService.get('ping', { site, count })
        httpService.post('statistics', _tarnsferPingToObj(res, site))
        return res.ping
    }
    catch (err) {
        return `Couldnt reach ${site} this site try again try "www.example.com" or ip adress`
    }

}

function _tarnsferPingToObj(res, site) {
    const keys = [{ key: 'Maximum', ammount: 4 }, { key: 'Minimum', ammount: 4 }, { key: 'Average', ammount: 4 }, { key: 'Sent', ammount: 1 }, { key: 'Lost', ammount: 1 }, { key: 'Received', ammount: 1 }]
    const pings = { site, date: convertTime(), stats: { pings: getPingsStats(res) } };
    keys.forEach(item => {
        pings.stats[item.key.toLowerCase()] = getStatsFromStr(res.ping, `${item.key} = `, item.ammount);
    })
    return pings
}

function getStatsFromStr(str, search, ammountToCut) {
    let idx = str.indexOf(search)
    return +cleanStr(str.slice(idx + search.length, idx + search.length + ammountToCut))
}


function getPingsStats(res) {
    let str = res.ping
    const pings = {}
    for (let i = 0; i < res.count; i++) {
        let currIdx = str.indexOf('time=');
        str = str.slice(currIdx + 5)
        pings[i] = +cleanStr(str.slice(0, 4))
    }
    return pings
}

function cleanStr(str) {
    return str.replace('m', '').replace('s', '').replace(',', '').replace(' ', '')
}

function convertTime() {
    return new Date().toLocaleTimeString('heb-IS', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}







