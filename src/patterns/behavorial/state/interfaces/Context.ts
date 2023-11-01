import { State } from "./State";

export interface Context {
	updateState(state?: State): void;
}