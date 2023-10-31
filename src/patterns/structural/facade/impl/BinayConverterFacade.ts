import { BinaryConverter } from "./BinaryConverter";

export type JsonFormatType = {
	key: string;
	valueType: "string" | "number" | "boolean";
	binaryWordSize: number;
}[];

export class BinaryConverterFacade {
	
	private binaryString: string;
	private words: string[];
	private jsonFormat: JsonFormatType;
	private binaryConverter: BinaryConverter;
	
	constructor(binaryString: string, jsonFormat: JsonFormatType) {
		this.binaryString = binaryString;
		this.jsonFormat = jsonFormat;
		this.binaryConverter = new BinaryConverter(binaryString);
		this.words = this.binaryConverter.breakIntoWords(this.jsonFormat.map(format => format.binaryWordSize));
	}

	convertToJSON(): object {

		let json = {};
		
		for (let i = 0; i < this.words.length; i++) {
			const word = this.words[i];
			const format = this.jsonFormat[i];
			const key = format.key;
			const valueType = format.valueType;

			if (valueType === "string") {
				json[key] = this.binaryConverter.convertBinaryWordToText(word);
			} else if (valueType === "number") {
				json[key] = this.binaryConverter.convertBinaryWordToDecimal(word);
			} else if (valueType === "boolean") {
				json[key] = this.binaryConverter.convertBinaryWordToBoolean(word);
			}
		}

		return json;
	}
}