import RNFetchBlob from 'rn-fetch-blob';
import cheerio from 'cheerio-without-node-native';

var uri = "http://www.jejunu.ac.kr/camp/sai/academyschedule/" + new Date().getFullYear();

export default function () {
    let haksa = {};
        haksa.title = "학사일정",
        haksa.month = [];
    return new Promise(async function(resolve, reject) {
        try {
            let res = await RNFetchBlob.fetch('GET', uri);
            let $ = cheerio.load(res.data);
            console.log(res.data);
            $('.table.border_left.border_top_blue.font09').each(function() {
                let eachMonth = {
                    schedule: []
                };
                eachMonth["month_title"] = $(this).find('caption').text();
                $(this).find('tr > td').each(function() {
                    console.log("작동");
                    let day = {};
                    let temp = $(this).text().replace(/(\s*~\s*)/gi, ' ~ ').replace(/(^\s*)|(\s*$)/g, '');
                    day["haksa"] = temp;
                    eachMonth.schedule.push(day);
                });
                haksa.month.push(eachMonth);
            });
        } catch(err) {
            reject(err);
        } finally {
            resolve(haksa);
        }
    });
}