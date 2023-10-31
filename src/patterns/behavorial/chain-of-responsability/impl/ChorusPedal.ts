import { IPedal } from "../interfaces/IPedal";
import { AudioSignal } from "./AudioSignal";

export class ChorusPedal implements IPedal {
	
	private nextPedal: IPedal;
	
	setNext(pedal: IPedal): IPedal {
		this.nextPedal = pedal;
		return this.nextPedal;
	}

	process(audioConfig: AudioSignal): void {
		if(audioConfig.pedals.includes("chorus")) {
			console.log('ChorusPedal: processing audio signal...');
			audioConfig.audioSignal += ' + chorus';
		}

		if (this.nextPedal) {
			this.nextPedal.process(audioConfig);
		}
	}
}