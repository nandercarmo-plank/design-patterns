import { IHttpClient } from "../interfaces/IHttpClient";
import { HttpClient } from "./HttpClient";

export class HttpClientProxy implements IHttpClient {

	private httpClient = new HttpClient();

	post(url: string, data: any) {
		this.httpClient.post(url, {
			method: "POST",
			accepts: "application/json",
			timestamp: new Date().toISOString(),
			from: "HttpClientProxy",
			body: data,
		});
	}

	get(url: string, params: any) {
		this.httpClient.post(url, {
			method: "GET",
			accepts: "application/json",
			timestamp: new Date().toISOString(),
			from: "HttpClientProxy",
			params
		});
	}
}