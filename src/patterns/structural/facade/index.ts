import { IRunner, RunnerType } from "../../../types/runner";
import { BinaryConverterFacade, JsonFormatType } from "./impl/BinayConverterFacade";

class FacadePattern implements IRunner {

	private binaryString: string;
	private jsonFormat: JsonFormatType;

	constructor(binaryString: string, jsonFormat: JsonFormatType) {
		this.binaryString = binaryString;
		this.jsonFormat = jsonFormat;
	}

	run() {

		const binaryConverterFacade = new BinaryConverterFacade(
			this.binaryString, 
			this.jsonFormat
		);

		console.log(binaryConverterFacade.convertToJSON());

		return;
	}
}

export const FacadePatternTest: RunnerType = {
	tests: [
		{ 
			name: "Should convert a small binary number data into a JSON", 
			test: new FacadePattern("00000010", [{ key: "value", valueType: "boolean", binaryWordSize: 8 }]) 
		},
		{ 
			name: "Should convert a small binary boolean true data into a JSON", 
			test: new FacadePattern("00000001", [{ key: "value", valueType: "boolean", binaryWordSize: 8 }]) 
		},
		{ 
			name: "Should convert a small binary boolean false data into a JSON", 
			test: new FacadePattern("00000000", [{ key: "value", valueType: "boolean", binaryWordSize: 8 }]) 
		},
		{ 
			name: "Should convert a small binary string data into a JSON", 
			test: new FacadePattern("010000010100001001000011", [{ key: "value", valueType: "string", binaryWordSize: 24 }]) 
		},
		{ 
			name: "Should convert a small binary complex data into a JSON", 
			test: new FacadePattern("0100000101000010010000110000000100000100", [
				{ key: "str", valueType: "string", binaryWordSize: 24 },
				{ key: "bool", valueType: "boolean", binaryWordSize: 8 },
				{ key: "numb", valueType: "number", binaryWordSize: 8 }
			]) 
		},
	],
	pattern: "Facade",
	shouldRun: true
};
