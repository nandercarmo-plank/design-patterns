import { IHypercaloric } from "../../interfaces/IHypercaloric";

export class BlackSkullHypercaloric implements IHypercaloric {
	proteinAmount(): number {
		return 16;
	}

	fatAmount(): number {
		return 3;
	}

	carbohydrateAmount(): number {
		return 128;
	}
}