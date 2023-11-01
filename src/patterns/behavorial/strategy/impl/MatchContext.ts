import { Context } from "../interfaces/Context";
import { Strategy } from "../interfaces/Strategy";

export class MatchContext implements Context {
	
	private strategy: Strategy;

	constructor(strategy: Strategy) {
		this.strategy = strategy;
	}

	executeStrategy(): void {
		this.strategy.exec();
	}

	changeStrategy(strategy: Strategy): void {
		this.strategy = strategy;
	}
}