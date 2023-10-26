import { IRunner, RunnerType } from "../../types/runner";
import { HttpClientProxy } from "./impl/HttpClientProxy";

type ProxyPattermParams = {
	url: string;
	data: any;
	method: "POST" | "GET";
}

class ProxyPattern implements IRunner {

	private params: ProxyPattermParams;

	constructor(params: ProxyPattermParams) {
		this.params = params;
	}

	run() {
		const httpClient = new HttpClientProxy();

		if (this.params.method === "GET") {
			httpClient.get(this.params.url, this.params.data);
		} else {
			httpClient.post(this.params.url, this.params.data);
		}
	}
}

export const ProxyPatternTest: RunnerType = {
	tests: [
		{ name: "Should send a GET request",
			test: new ProxyPattern({ url: "https://www.google.com", data: { page: 1, total: 10 }, method: "GET" }) 
		},
		{ name: "Should send a POST request",
			test: new ProxyPattern({ url: "https://www.google.com", data: { name: "Nander", success: true }, method: "POST" }) 
		},
	],
	pattern: "Proxy",
	shouldRun: true
};
