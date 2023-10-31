import { IHypercaloric } from "../../interfaces/IHypercaloric";

export class MaxTitaniumHypercaloric implements IHypercaloric {
	proteinAmount(): number {
		return 16;
	}

	fatAmount(): number {
		return 1.6;
	}

	carbohydrateAmount(): number {
		return 133;
	}
}