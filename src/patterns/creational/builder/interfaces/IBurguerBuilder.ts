import { BreadType, IBurguer } from "./IBurguer";

export interface IBurguerBuilder {
		setBread(bread: BreadType): IBurguerBuilder;
		addEgg(): IBurguerBuilder;
		addBacon(): IBurguerBuilder;
		addCheese(): IBurguerBuilder;
		addTomato(): IBurguerBuilder;
		addLettuce(): IBurguerBuilder;
		addOnion(): IBurguerBuilder;
		addMeat(amount: number): IBurguerBuilder;
		addMustard(): IBurguerBuilder;
		addKetchup(): IBurguerBuilder;
		addMayonnaise(): IBurguerBuilder;
		addBarbecue(): IBurguerBuilder;
		addPickles(): IBurguerBuilder;
		build(): IBurguer;
}