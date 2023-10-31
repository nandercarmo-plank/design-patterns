import { IPedal } from "../interfaces/IPedal";
import { AudioSignal } from "./AudioSignal";

export class ReverbPedal implements IPedal {
	
	private nextPedal: IPedal;
	
	setNext(pedal: IPedal): IPedal {
		this.nextPedal = pedal;
		return this.nextPedal;
	}

	process(audioConfig: AudioSignal): void {
		if(audioConfig.pedals.includes("reverb")) {
			console.log('ReverbPedal: processing audio signal...');
			audioConfig.audioSignal += ' + reverb';
		}

		if (this.nextPedal) {
			this.nextPedal.process(audioConfig);
		}
	}
}