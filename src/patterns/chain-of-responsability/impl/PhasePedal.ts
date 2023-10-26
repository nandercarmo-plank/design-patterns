import { IPedal } from "../interfaces/IPedal";
import { AudioSignal } from "./AudioSignal";

export class PhasePedal implements IPedal {
	
	private nextPedal?: IPedal;
	
	setNext(pedal: IPedal): IPedal {
		this.nextPedal = pedal;
		return this.nextPedal;
	}

	process(audioConfig: AudioSignal): void {
		if(audioConfig.pedals.includes("phase")) {
			console.log('PhasePedal: processing audio signal...');
			audioConfig.audioSignal += ' + phase';
		}

		if (this.nextPedal) {
			this.nextPedal.process(audioConfig);
		}
	}
}