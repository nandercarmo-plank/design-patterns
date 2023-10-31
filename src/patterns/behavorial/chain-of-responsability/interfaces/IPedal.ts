import { AudioSignal } from "../impl/AudioSignal";

export interface IPedal {
	setNext(pedal: IPedal): IPedal;
	process(audioConfig: AudioSignal): void;
}