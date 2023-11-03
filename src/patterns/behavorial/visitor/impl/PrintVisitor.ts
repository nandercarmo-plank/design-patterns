import { Visitor } from "../interfaces/Visitor";
import { Animal } from "./Animal";
import { Plant } from "./Plant";

export class PrintVisitor implements Visitor {
	visitAnimal(animal: Animal): void {
		console.log("Animal:");
		console.log(` Specie: ${animal.specie}`);
		console.log(` Class: ${animal.animalClass}`);
		console.log(` Alimentation: ${animal.alimentation}`);
		console.log(` Gender: ${animal.gender}`);
		console.log(` Age: ${animal.age}`);
		console.log("------------------------------------");
	}

	visitPlant(plant: Plant): void {
		console.log("Plant:");
		console.log(` Specie: ${plant.specie}`);
		console.log(` Type: ${plant.type}`);
		console.log(` Size: ${plant.size}`);
		console.log(` Is fruitful: ${plant.isFruitful ? "Yes" : "No"}`);
		console.log("------------------------------------");
	}
}