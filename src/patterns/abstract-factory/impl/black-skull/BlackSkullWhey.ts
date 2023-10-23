import { IWhey } from "../../interfaces/IWhey";

export class BlackSkullWhey implements IWhey {
	proteinAmount(): number {
		return 21;
	}

	weight(): number {
		return 900;
	}

	type(): "isolated" | "concentrated" | "hydrolyzed" {
		return "concentrated";
	}
}