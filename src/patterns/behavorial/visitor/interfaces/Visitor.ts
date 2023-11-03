import { Animal } from "../impl/Animal";
import { Plant } from "../impl/Plant";

export interface Visitor {
	visitAnimal(animal: Animal): void;
	visitPlant(plant: Plant): void;
}