import config from '../config/config.json'

class UserService {
    constructor() {
        this.endpoint = config.SERVER_URL
    }

    upload_text(data) {
        let url = this.endpoint + `/upload_text`;
        return fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => {
            if (!resp.ok) {
                throw Error('Sorry can\'t upload text');
            }
            return resp.json();
        });
    }

    
}

export default new UserService();