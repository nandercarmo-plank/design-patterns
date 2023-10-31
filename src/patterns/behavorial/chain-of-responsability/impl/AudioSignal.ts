export class AudioSignal {
	public pedals: string[];
	public audioSignal: string;

	constructor(pedals: string[], audioSignal: string) {
		this.pedals = pedals;
		this.audioSignal = audioSignal;
	}

	play(): void {
		console.log(`Playing audio signal: ${this.audioSignal}`);
	}
}
