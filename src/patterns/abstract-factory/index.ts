import { IRunner, RunnerType } from "../../types/runner";
import { BlackSkullSupplements } from "./impl/black-skull/BlackSkullSupplements";
import { GrowthSupplements } from "./impl/growth/GrowthSupplements";
import { MaxTitaniumSupplements } from "./impl/max-titanium/MaxTitaniumSupplements";
import { ISupplementBrand } from "./interfaces/ISupplementBrand";

class AbstractFactory implements IRunner {

	private brand: string;

	constructor(brand: string) {
		this.brand = brand;
	}

	run(): void {
		const brand: ISupplementBrand | undefined = {
			BLACK_SKULL: new BlackSkullSupplements(),
			MAX_TITANIUM: new MaxTitaniumSupplements(),
			GROWTH: new GrowthSupplements(),
		}[this.brand.toUpperCase().replace(" ", "_")];

		if (!brand) {
			console.log(
				"Brand not supported! (supported brands: Black Skull, Growth, Max Titanium)"
			);
			return;
		}

		const whey = brand.whey();
		const creatine = brand.creatine();
		const hypercaloric = brand.hypercaloric();

		console.log(`Whey -> Protein: ${whey.proteinAmount()} | Type: ${whey.type()} | Weight: ${whey.weight()}g`);

		console.log(`Creatine -> Creapure: ${creatine.isCreapure() ? "Yes" : "No"} | Type: ${creatine.type()} | Weight: ${creatine.weight()}g`);

		console.log(`Hypercaloric -> Protein: ${hypercaloric.proteinAmount()}g | Carbo: ${hypercaloric.carbohydrateAmount()}g | Fat: ${hypercaloric.fatAmount()}g`);
	}
}

export const AbstractFactoryPatternTest: RunnerType = {
	tests: [
		{ name: "Should use Max Titanium supplements", test: new AbstractFactory("Max Titanium") },
		{ name: "Should use Growth supplements", test: new AbstractFactory("Growth") },
		{ name: "Should use Black Skull supplements", test: new AbstractFactory("Black Skull") },
		{ name: "Should not use unknown supplements", test: new AbstractFactory("Unknown") },
	],
	pattern: "Abstract Factory",
	shouldRun: true
};