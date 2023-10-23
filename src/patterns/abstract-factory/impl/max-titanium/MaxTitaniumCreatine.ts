import { ICreatine } from "../../interfaces/ICreatine";

export class MaxTitaniumCreatine implements ICreatine {
	weight(): number {
		return 300;
	}
	type(): "monohydrate" | "hydrochloride" {
		return "monohydrate";
	}
	isCreapure(): boolean {
		return false
	}
};