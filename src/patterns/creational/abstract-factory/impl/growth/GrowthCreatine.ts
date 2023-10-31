import { ICreatine } from "../../interfaces/ICreatine";

export class GrowthCreatine implements ICreatine {
	weight(): number {
		return 250;
	}
	type(): "monohydrate" | "hydrochloride" {
		return "monohydrate";
	}
	isCreapure(): boolean {
		return true
	}
};