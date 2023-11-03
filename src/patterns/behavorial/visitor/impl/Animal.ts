import { LivingBeing } from "../interfaces/LivingBeing";
import { Visitor } from "../interfaces/Visitor";

type AnimalClass = "Mammal" | "Bird" | "Reptile" | "Amphibian" | "Fish" | "Invertebrate";
type AnimalAlimentation = "Carnivore" | "Herbivore" | "Omnivore";
type AnimalGender = "Male" | "Female";

export class Animal implements LivingBeing {

	specie: string;
	animalClass: AnimalClass;
	alimentation: AnimalAlimentation;
	gender: AnimalGender;
	age: number;

	constructor(
		specie: string,
		animalClass: AnimalClass, 
		alimentation: AnimalAlimentation, 
		gender: AnimalGender, 
		age: number, 
	) {
		this.specie = specie;
		this.animalClass = animalClass;
		this.alimentation = alimentation;
		this.gender = gender;
		this.age = age;
	}

	accept(visitor: Visitor): void {
		visitor.visitAnimal(this);
	}
}