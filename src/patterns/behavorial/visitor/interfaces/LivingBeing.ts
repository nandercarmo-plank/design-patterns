import { Visitor } from "./Visitor";

export interface LivingBeing {
	accept(visitor: Visitor): void;
}