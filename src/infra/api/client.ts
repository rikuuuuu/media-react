import "whatwg-fetch";

interface IApiClient {
    post(path: string, body: any): Promise<any>;

    postWithToken(path: string, token: string, body: any): Promise<any>;
}

class ApiClient implements IApiClient {
    private baseURL: string = "https://mediago-290515.an.r.appspot.com/twirp"

    public post(path: string, body: any): Promise<any> {
        const headers = {
            'Accept': 'application/protobuf',
            'Content-Type': 'application/protobuf',
        };

        return this.request(path, headers, body);
    }

    public postWithToken(path: string, token: string, body: any): Promise<any> {
        const headers = {
            'Accept': 'application/protobuf',
            'Content-Type': 'application/protobuf',
            'Authorization': 'Bearer ' + token,
        };

        return this.request(path, headers, body);
    }

    private request(path: string, headers: any, body: any): Promise<any> {
        const method = "POST";

        const option: RequestInit = {
            body,
            method,
            headers,
        };

        return fetch(this.baseURL + path, option)
            .then((res: Response): Promise<any> => {
                return res.arrayBuffer();
            })
            .then((buffer: any): any => {
                return new Uint8Array(buffer);
            });
    }
}


const createApiClient = (): IApiClient => {

    return new ApiClient();

};

export { createApiClient };    
export type { IApiClient };

