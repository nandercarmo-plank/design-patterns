import { Iterator } from "../interfaces/Iterator";

export class ListReversedIterator<T> implements Iterator<T> {
	private items: T[];
	private currentIndex: number;

	constructor(items: T[]) {
		this.items = items;
		this.currentIndex = this.items.length - 1;
	}
	
	next(): T {

		if (!this.hasNext()) {
			throw new Error("No more items to iterate over.");
		}

		return this.items[this.currentIndex--];
	}

	hasNext(): boolean {
		return this.currentIndex >= 0;
	}
}