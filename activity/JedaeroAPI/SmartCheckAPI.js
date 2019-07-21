const uri = 'https://elearning.jejunu.ac.kr';

export default function (identification, code) {
    fetch(`${uri}/MUser.do`, {
        'method':'POST',
        'credentials':'include',
        headers: {
            'User-Agent': `Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36`,
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Upgrade-Insecure-Requests': '1'

            // 'Content-Length:': '53'
            // 'Cookie': emptyCookie
        },
        body: `cmd=loginUser&userDTO.userId=${identification.id}&userDTO.password=${identification.pwd}&userDTO.localeKey=ko`,
        mode: 'no-cors'
    }).then(response => {
        console.log(response);
        return response.headers
    })
    .then(headers => {
        // console.log(headers.get('cookie'))
        return headers.map['set-cookie']
    })
    .then(cookie => {
        fetch(`${uri}/MSmartatt.do?cmd=viewAttendCourseList`, {
            'method':'GET',
            'mode': 'no-cors',
            headers: {
                'User-Agent': `Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36`,
                'Connection': 'keep-alive',
                'Cookie':cookie
            }    
        }).then(response => response.text())
        .then(body => console.log(body))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}
