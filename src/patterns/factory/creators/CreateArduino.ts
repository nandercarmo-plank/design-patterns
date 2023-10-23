import { Arduino } from "../boards/Arduino";
import { ICreateDevice } from "./ICreateDevice";

export class CreateArduino implements ICreateDevice {
	create() {
		return new Arduino();
	}
}
