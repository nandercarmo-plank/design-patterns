import { Strategy } from "./Strategy";

export interface Context {
	executeStrategy(): void;
	changeStrategy(strategy: Strategy): void;
}