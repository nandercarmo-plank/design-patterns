import { BreadType, IBurguer } from '../interfaces/IBurguer';
import { IBurguerBuilder } from '../interfaces/IBurguerBuilder'
import { Burguer } from './Burguer';

export class BurguerBuilder implements IBurguerBuilder {

	private burguer: IBurguer;

	constructor() {
		this.burguer = new Burguer();
	}

	setBread(bread: BreadType): IBurguerBuilder {
		this.burguer.bread = bread;
		return this;
	}
	
	addEgg(): IBurguerBuilder {
		this.burguer.egg = true;
		return this;
	}

	addBacon(): IBurguerBuilder {
		this.burguer.bacon = true;
		return this;
	}
	
	addCheese(): IBurguerBuilder {
		this.burguer.cheese = true;
		return this;
	}

	addTomato(): IBurguerBuilder {
		this.burguer.tomato = true;
		return this;
	}

	addLettuce(): IBurguerBuilder {
		this.burguer.lettuce = true;
		return this;
	}

	addOnion(): IBurguerBuilder {
		this.burguer.onion = true;
		return this;
	}

	addMeat(amount: number): IBurguerBuilder {
		this.burguer.meat = amount;
		return this;
	}

	addMustard(): IBurguerBuilder {
		this.burguer.mustard = true;
		return this;
	}

	addKetchup(): IBurguerBuilder {
		this.burguer.ketchup = true;
		return this;
	}

	addMayonnaise(): IBurguerBuilder {
		this.burguer.mayonnaise = true;
		return this;
	}

	addBarbecue(): IBurguerBuilder {
		this.burguer.barbecue = true;
		return this;
	}

	addPickles(): IBurguerBuilder {
		this.burguer.pickles = true;
		return this;
	}

	build(): IBurguer {
		return this.burguer;
	}
}