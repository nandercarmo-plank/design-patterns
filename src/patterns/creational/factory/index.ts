import { IRunner, RunnerType } from "../../../types/runner";
import { CreateArduino } from "./creators/CreateArduino";
import { CreateESP32 } from "./creators/CreateESP32";
import { CreateESP8266 } from "./creators/CreateESP8266";
import { ICreateDevice } from "./creators/ICreateDevice";

class Factory implements IRunner {
	private board: string;

	constructor(board: string) {
		this.board = board;
	}

	run() {
		const device: ICreateDevice | undefined = {
			ARDUINO: new CreateArduino(),
			ESP32: new CreateESP32(),
			ESP8266: new CreateESP8266()
		}[this.board.toUpperCase()];

		if (!device) {
			console.log(
				"Device not supported! (supported devices: Arduino, ESP32, ESP8266)"
			);
			return;
		}

		const board = device.create();
		board.setup();

		// TODO: proceed with the embedded software launch routine
		return;
	}
}

export const FactoryPatternTest: RunnerType = {
	tests: [
		{ name: "Should setup an Arduino board", test: new Factory("Arduino") },
		{ name: "Should setup an ESP32 board", test: new Factory("ESP32") },
		{ name: "Should setup an ESP8266 board", test: new Factory("ESP8266") },
		{ name: "Should not setup an unknown board", test: new Factory("Unknown") },
	],
	pattern: "Factory",
	shouldRun: true
};
