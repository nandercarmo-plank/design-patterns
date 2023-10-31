import { IHypercaloric } from "../../interfaces/IHypercaloric";

export class GrowthHypercaloric implements IHypercaloric {
	proteinAmount(): number {
		return 25;
	}

	fatAmount(): number {
		return 0;
	}

	carbohydrateAmount(): number {
		return 120;
	}
}