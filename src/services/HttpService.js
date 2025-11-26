export class HttpService {
    constructor(client) {
        this.client = client;
    }

    async get(url, config = {}) {
        try {
            const { data } = await this.client.get(url, config);
            return data;
        } catch (error) {
            console.error(`GET ${url} failed:`, error);
            throw error;
        }
    }
}

