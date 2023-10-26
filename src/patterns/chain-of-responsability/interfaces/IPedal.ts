import { AudioConfigType } from "../impl/AudioSignal";

export interface IPedal {
	setNext(pedal: IPedal): IPedal;
	process(audioConfig: AudioConfigType): void;
}