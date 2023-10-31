import { ICreatine } from '../../interfaces/ICreatine';
import { IHypercaloric } from '../../interfaces/IHypercaloric';
import {ISupplementBrand} from '../../interfaces/ISupplementBrand';
import { IWhey } from '../../interfaces/IWhey';
import { BlackSkullWhey } from "./BlackSkullWhey";
import { BlackSkullCreatine } from "./BlackSkullCreatine";
import { BlackSkullHypercaloric } from "./BlackSkullHypercaloric";

export class BlackSkullSupplements implements ISupplementBrand {
	whey(): IWhey {
		return new BlackSkullWhey();
	}

	creatine(): ICreatine {
		return new BlackSkullCreatine();
	}

	hypercaloric(): IHypercaloric {
		return new BlackSkullHypercaloric();
	}
}