import { ESP32 } from "../boards/ESP32";
import { ICreateDevice } from "./ICreateDevice";

export class CreateESP32 implements ICreateDevice {
	create() {
		return new ESP32();
	}
}
