import { ESP8266 } from "../boards/ESP8266";
import { ICreateDevice } from "./ICreateDevice";

export class CreateESP8266 implements ICreateDevice {
	create() {
		return new ESP8266();
	}
}
