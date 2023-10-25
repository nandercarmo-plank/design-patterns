import { IElement } from "../interfaces/IElement";

type OperatorType = '+' | '-' | '*' | '/';

export class Operator implements IElement {
	private left: IElement;
	private right: IElement;
	private operator: OperatorType;

	constructor(left: IElement, right: IElement, operator: OperatorType) {
		this.left = left;
		this.right = right;
		this.operator = operator;
	}

	public calc(): number {
		switch (this.operator) {
			case '+':
				return this.left.calc() + this.right.calc();
			case '-':
				return this.left.calc() - this.right.calc();
			case '*':
				return this.left.calc() * this.right.calc();
			case '/':
				return this.left.calc() / this.right.calc();
			default:
				throw new Error('Unknown operator');
		}
	}
}