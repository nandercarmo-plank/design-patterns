import { IPedal } from "../interfaces/IPedal";
import { AudioSignal } from "./AudioSignal";

export class CleanAudio implements IPedal {
	
	private nextPedal: IPedal;
	
	setNext(pedal: IPedal): IPedal {
		this.nextPedal = pedal;
		return this.nextPedal;
	}

	process(audioConfig: AudioSignal): void {
		console.log('CleanAudio: processing audio signal...');
		if (this.nextPedal) {
			this.nextPedal.process(audioConfig);
		}
	}
}