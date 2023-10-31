import { Iterator } from "./Iterator";

export interface Collection<T> {
	createIterator(type: any): Iterator<T>;
}