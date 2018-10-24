let uri = 'https://elearning.jejunu.ac.kr';

export default function (identification, code) {
    
        let formdata = new FormData();
        formdata.append('cmd', 'loginUser');
        formdata.append('userDTO.userId', identification.id);
        formdata.append('userDTO.password', identification.pwd);
        formdata.append('userDTO.localeKey', 'ko');
        fetch(`${uri}/MMain.do?cmd=viewIndexPage`, {
            method: 'GET',
            headers: {
                'Connection': 'keep-alive',
            },
            mode:'no-cors',
        }).then(response => {
            console.log(response);
            return response.headers;
        })
        .then(headers => headers.map['set-cookie'])
        .then(emptyCookie => {
            fetch(`${uri}/MUser.do`, {
                'method':'POST',
                headers: {
                    'User-Agent': `Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36`,
                    'Connection': 'keep-alive',
                    'Cookie': emptyCookie // 어째서 빈 쿠키를 넣어야만 효과가 있는가?
                },
                body: formdata,
                mode: 'no-cors'
            }).then(response => response.headers)
            .then(headers => {
                console.log(headers.get('cookie'))
                return headers.map['set-cookie']
            })
            .then(cookie => {
                fetch(`${uri}/MSmartatt.do?cmd=viewAttendCourseList`, {
                    'method':'GET',
                    'mode': 'no-cors',
                    headers: {
                        'Cookie': cookie,
                        'User-Agent': `Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36`,
                        'Connection': 'keep-alive',
                    }    
                }).then(response => response.text())
                .then(body => console.log(body))
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        }).catch(err => console.log(err));   
}