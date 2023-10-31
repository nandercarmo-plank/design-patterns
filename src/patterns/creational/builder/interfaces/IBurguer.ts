export enum BreadType {
	WHEAT = "Wheat bread",
	WHITE = "White bread",
	ITALIAN = "Italian bread",
}

export interface IBurguer {
	bread?: BreadType;
	egg: boolean;
	bacon: boolean;
	cheese: boolean;
	tomato: boolean;
	lettuce: boolean;
	onion: boolean;
	meat: number;
	mustard: boolean;
	ketchup: boolean;
	mayonnaise: boolean;
	barbecue: boolean;
	pickles: boolean;
	printIngredients(): void;
}