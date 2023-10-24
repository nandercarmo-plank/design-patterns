import { BreadType, IBurguer } from "../interfaces/IBurguer";

export class Burguer implements IBurguer {
	bread?: BreadType = undefined;
	egg: boolean = false;
	bacon: boolean = false;
	cheese: boolean = false;
	tomato: boolean = false;
	lettuce: boolean = false;
	onion: boolean = false;
	meat: number = 0;
	mustard: boolean = false;
	ketchup: boolean = false;
	mayonnaise: boolean = false;
	barbecue: boolean = false;
	pickles: boolean = false;

	printIngredients(): void {
		console.log("Burguer Ingredients: ");
		if(this.bread) console.log(`- ${this.bread}`);
		if(this.meat) console.log(`- ${this.meat}x meat`);
		if(this.egg) console.log("- Egg");
		if(this.bacon) console.log("- Bacon");
		if(this.cheese) console.log("- Cheese");
		if(this.tomato) console.log("- Tomato");
		if(this.lettuce) console.log("- Lettuce");
		if(this.onion) console.log("- Onion");
		if(this.mustard) console.log("- Mustard");
		if(this.ketchup) console.log("- Ketchup");
		if(this.mayonnaise) console.log("- Mayonnaise");
		if(this.barbecue) console.log("- Barbecue");
		if(this.pickles) console.log("- Pickles");
	}

}