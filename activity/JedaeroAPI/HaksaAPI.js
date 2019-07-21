import RNFetchBlob from 'rn-fetch-blob';
import cheerio from 'cheerio-without-node-native';

const uri = "http://www.jejunu.ac.kr/camp/sai/academyschedule/" + new Date().getFullYear();
const haksa = {
	title: '학사일정',
	month: []
};

export default function () {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await RNFetchBlob.fetch('GET', uri);
			const $ = cheerio.load(res.data);
			$('.table.border_left.border_top_blue.font09').each(function () {
				const eachMonth = {
					month_title: $(this).find('caption').text(),
					schedule: $(this).find('tr > td').map(function (index) {
						return {
							key: toString(index),
							haksa: $(this).text().replace(/(\s*~\s*)/gi, ' ~ ').replace(/(^\s*)|(\s*$)/g, '')
						}
					})
				};
				haksa.month.push(eachMonth);
			});
		} catch (err) {
			reject(err);
		} finally {
			resolve(haksa);
		}
	});
}
