import { IElement } from "../interfaces/IElement";
import { Operator } from "./Operator";
import { Number } from "./Number";

export class CompoundExpression implements IElement {
	
	private expression: IElement;
	private elements: IElement[] = [];
	private exprString: string;

	constructor(exprString: string) {
		this.exprString = exprString;
	}

	build(): void {
		this.exprString.split(" ").forEach((token: string) => {
			if (token === '+' || token === '-' || token === '*' || token === '/') {
				this.elements.push(new Operator(this.elements.pop()!, this.elements.pop()!, token));
			} else {
				this.elements.push(new Number(parseFloat(token)));
			}
		});
	}
	
	calc(): number {
		const firstElement = this.elements.pop()!;
		return firstElement.calc();
	}

}