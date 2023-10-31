import { BreadType, IBurguer } from "../interfaces/IBurguer";
import { IBurguerBuilder } from "../interfaces/IBurguerBuilder";
import { BurguerOptions, IBurguerDirector } from "../interfaces/IBurguerDirector";

export class BurguerDirector implements IBurguerDirector {
	
	private builder: IBurguerBuilder;

	constructor(builder: IBurguerBuilder) {
		this.builder = builder;
	}
	
	makeBurguer(option: BurguerOptions): IBurguer | undefined {
		let burguer: IBurguer;
		switch(option) {
			case "Burguer":
				burguer = this.builder
					.setBread(BreadType.WHITE)
					.addMeat(1)
					.build();
				break;
			case "Cheeseburguer":
				burguer = this.builder
					.setBread(BreadType.WHITE)
					.addMeat(1)
					.addCheese()
					.build();
				break;
			case "Double Cheeseburguer":
				burguer = this.builder
					.setBread(BreadType.WHITE)
					.addMeat(2)
					.addCheese()
					.build();
				break;
			case "Bacon Cheeseburguer":
				burguer = this.builder
					.setBread(BreadType.WHITE)
					.addMeat(1)
					.addCheese()
					.addBacon()
					.build();
				break;
			case "Double Bacon Cheeseburguer":
				burguer = this.builder
					.setBread(BreadType.WHITE)
					.addMeat(2)
					.addCheese()
					.addBacon()
					.build();
				break;	
			case "Triple Bacon Cheeseburguer":
				burguer = this.builder
					.setBread(BreadType.WHITE)
					.addMeat(3)
					.addCheese()
					.addBacon()
					.build();
				break;
			default:
				return undefined;
			}
		return burguer;	
	}
}