import { IWhey } from "../../interfaces/IWhey";

export class MaxTitaniumWhey implements IWhey {
	proteinAmount(): number {
		return 26;
	}

	weight(): number {
		return 900;
	}

	type(): "isolated" | "concentrated" | "hydrolyzed" {
		return "isolated";
	}
}