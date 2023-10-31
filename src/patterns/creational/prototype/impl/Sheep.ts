import { IPrototype } from "../interfaces/IPrototype";

export class Sheep implements IPrototype<Sheep> {
	
	private name: string;
	private weight: number;
	private color: "black" | "white" | "brown";
	
	constructor(prototype?: Sheep) {
		if (prototype) {
			this.name = prototype.name;
			this.weight = prototype.weight;
			this.color = prototype.color;
			return;
		}
	}

	public setName(name: string): void {
		this.name = name;
	};

	public getName(): string {
		return this.name;
	};

	public setWeight(weight: number): void {
		this.weight = weight;
	};

	public getWeight(): number {
		return this.weight;
	};

	public setColor(color: "black" | "white" | "brown"): void {
		this.color = color;
	};

	public getColor(): "black" | "white" | "brown" {
		return this.color;
	};

	clone(): Sheep {
		return new Sheep(this);
	};
}