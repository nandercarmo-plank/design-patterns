import { IHttpClient } from "../interfaces/IHttpClient";

export class HttpClient implements IHttpClient {
	post(url: string, data: any): any {
		console.log("Sending POST request...", {
			url: url,
			data: data
		});
	}

	get(url: string, params: any): any {
		console.log("Sending GET request...", {
			url: url,
			params: params
		});
	}
}