import { ICreatine } from "./ICreatine";
import { IHypercaloric } from "./IHypercaloric";
import { IWhey } from "./IWhey";

export interface ISupplementBrand {
	whey(): IWhey;
	creatine(): ICreatine;
	hypercaloric(): IHypercaloric;
};