export class BinaryConverter {
	private binaryString: string;

	constructor(binaryString: string) {
		this.binaryString = binaryString;
	}

	breakIntoWords(wordSizes: number[]): string[] {
		const words: string[] = [];
		const wordsSizeSum = wordSizes.reduce((acc, curr) => acc + curr, 0);

		if (wordsSizeSum !== this.binaryString.length) {
			throw new Error("The sum of the word sizes must be equal to the binary string length.");
		}

		let wordIndex = 0;

		for (const wordSize of wordSizes) {
			words.push(this.binaryString.substring(wordIndex, wordIndex + wordSize));
			wordIndex += wordSize;
		}
		
		return words;
	}

	convertBinaryWordToDecimal(word: string): number {
		return parseInt(word, 2);
	}

	convertBinaryWordToText(word: string): string {

		let text = "";

		for (let i = 0; i < word.length; i += 8) {
			text += String.fromCharCode(this.convertBinaryWordToDecimal(word.substring(i, i + 8)));
		}

		return text;
	}

	convertBinaryWordToBoolean(word: string): boolean {
		return this.convertBinaryWordToDecimal(word) !== 0;
	}
}