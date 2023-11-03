import { Visitor } from "./Visitor";

export interface LifingBeing {
	accept(visitor: Visitor): void;
}