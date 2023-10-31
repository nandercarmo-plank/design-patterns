export interface IHttpClient {
	post(url: string, data: any): any;
	get(url: string, params: any): any;
}