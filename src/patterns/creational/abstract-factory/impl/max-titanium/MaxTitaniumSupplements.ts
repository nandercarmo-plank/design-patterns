import { ICreatine } from '../../interfaces/ICreatine';
import { IHypercaloric } from '../../interfaces/IHypercaloric';
import {ISupplementBrand} from '../../interfaces/ISupplementBrand';
import { IWhey } from '../../interfaces/IWhey';
import { MaxTitaniumWhey } from "./MaxTitaniumWhey";
import { MaxTitaniumCreatine } from "./MaxTitaniumCreatine";
import { MaxTitaniumHypercaloric } from "./MaxTitaniumHypercaloric";

export class MaxTitaniumSupplements implements ISupplementBrand {
	whey(): IWhey {
		return new MaxTitaniumWhey();
	}

	creatine(): ICreatine {
		return new MaxTitaniumCreatine();
	}

	hypercaloric(): IHypercaloric {
		return new MaxTitaniumHypercaloric();
	}
}