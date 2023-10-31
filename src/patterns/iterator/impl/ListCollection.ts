import { Collection } from "../interfaces/Collection";
import { Iterator } from "../interfaces/Iterator";
import { ListIterator } from "./ListIterator";
import { ListReversedIterator } from "./ListReversedIterator";

export type ListIteratorType = "normal" | "reversed";

export class ListCollection<T> implements Collection<T> {
	
	private items: T[];

	constructor(items: T[]) {
		this.items = items;
	}

	createIterator(type: ListIteratorType): Iterator<T> {
		return type === "normal" 
			? new ListIterator<T>(this.items) 
			: new ListReversedIterator<T>(this.items);
	}
}