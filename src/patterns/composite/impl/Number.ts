import { IElement } from "../interfaces/IElement";

export class Number implements IElement {
	private value: number;

	constructor(value: number) {
		this.value = value;
	}

	public calc(): number {
		return this.value;
	}
}