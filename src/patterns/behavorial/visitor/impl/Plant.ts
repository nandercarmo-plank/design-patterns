import { LivingBeing } from "../interfaces/LivingBeing";
import { Visitor } from "../interfaces/Visitor";

type PlantType = "Bryophytes" | "Pteridophytes" | "Gymnosperms" | "Angiosperms";
type PlantSize = "small" | "medium" | "large";

export class Plant implements LivingBeing {
	
	type: PlantType;
	size: PlantSize;
	specie: string;
	isFruitful: boolean;

	constructor(type: PlantType, size: PlantSize, specie: string, isFruitful: boolean) {
		this.type = type;
		this.size = size;
		this.specie = specie;
		this.isFruitful = isFruitful;
	}
	
	accept(visitor: Visitor): void {
		visitor.visitPlant(this);
	}
}