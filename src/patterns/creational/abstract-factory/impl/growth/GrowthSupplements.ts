import { ICreatine } from '../../interfaces/ICreatine';
import { IHypercaloric } from '../../interfaces/IHypercaloric';
import {ISupplementBrand} from '../../interfaces/ISupplementBrand';
import { IWhey } from '../../interfaces/IWhey';
import { GrowthWhey } from "./GrowthWhey";
import { GrowthCreatine } from "./GrowthCreatine";
import { GrowthHypercaloric } from "./GrowthHypercaloric";

export class GrowthSupplements implements ISupplementBrand {
	whey(): IWhey {
		return new GrowthWhey();
	}

	creatine(): ICreatine {
		return new GrowthCreatine();
	}

	hypercaloric(): IHypercaloric {
		return new GrowthHypercaloric();
	}
}