import { IWhey } from "../../interfaces/IWhey";

export class GrowthWhey implements IWhey {
	proteinAmount(): number {
		return 24;
	}

	weight(): number {
		return 1000;
	}

	type(): "isolated" | "concentrated" | "hydrolyzed" {
		return "concentrated";
	}
}