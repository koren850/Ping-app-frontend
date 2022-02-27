import { httpService } from './http.service'

export const pingService = {
    ping,
    getStats,
    getObjMap,
    getSpecificStat
};

async function getStats() {
    return await httpService.get('statistics')
}

async function getSpecificStat(site) {
    return await httpService.post('statistics/getStat', { site })
}

async function ping(site = 'www.google.co.il', count = 4) {
    try {
        const res = await httpService.get('ping', { site, count })
        console.log(res)
        httpService.post('statistics', res)
        return pingToText(res)
    }
    catch (err) {
        return `Couldnt reach ${site} try "www.example.com" or ip address like "8.8.8.8"`
    }

}

function pingToText(ping) {
    let received = 0
    let lost = 0
    let text = `Pinging ${ping.address} with 32 bytes of data:`
    ping.results.forEach(currPing => {
        if (currPing.time) received++
        if (currPing.err) lost++
        text += `\nReply from  ${ping.address}: time=${currPing.time.toFixed(0)}ms`
    })
    text += `\nPing statistics for ${ping.address}:
    Packets: Sent = ${ping.results.length}, Received = ${received}, Lost = ${lost} (${(ping.results.length / received) * 100 - 100}% loss),
Approximate round trip times in milli-seconds:
    Minimum = ${ping.min.toFixed(0)}ms, Maximum = ${ping.max.toFixed(0)}ms, Average = ${ping.avg.toFixed(0)}ms`
    return text
}

function getObjMap(obj) {
    return obj.reduce((acc, ping) => {
        acc[ping.site] ? acc[ping.site]++ : (acc[ping.site] = 1);
        return acc;
    }, {});
}

    ////////////////////////////////////////////////////////////////////////////////////////////////
    //this is what i used in development. 
    //when i deployed i saw heroku cannot acsses the child process shell and connot ping
    //so used tcp-ping library instead
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // function _tarnsferPingToObj(res, site) {
    //     const keys = [{ key: 'Maximum', ammount: 4 }, { key: 'Minimum', ammount: 4 }, { key: 'Average', ammount: 4 }, { key: 'Sent', ammount: 2 }, { key: 'Lost', ammount: 2 }, { key: 'Received', ammount: 2 }]
    //     const pings = { site, date: _convertTime(), stats: { pings: _getPingsStats(res) } };
    //     keys.forEach(item => {
    //         pings.stats[item.key.toLowerCase()] = _getStatsFromStr(res.ping, `${item.key} = `, item.ammount);
    //     })
    //     return pings
    // }

    // function _getStatsFromStr(str, search, ammountToCut) {
    //     let idx = str.indexOf(search)
    //     return +_cleanStr(str.slice(idx + search.length, idx + search.length + ammountToCut))
    // }

    // function _getPingsStats(res) {
    //     let str = res.ping
    //     const pings = {}
    //     for (let i = 0; i < res.count; i++) {
    //         let currIdx = str.indexOf('time=');
    //         str = str.slice(currIdx + 5)
    //         pings[i] = +_cleanStr(str.slice(0, 4))
    //     }
    //     return pings
    // }

    // function _cleanStr(str) {
    //     return str.replace('m', '').replace('s', '').replace(',', '').replace(' ', '')
    // }









