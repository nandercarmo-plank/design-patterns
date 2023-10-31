import { NoteFlyweight } from "./NoteFlyweight";

export class Note {

	private duration: number;
	private volume: number;
	private note: NoteFlyweight;

	constructor(note: NoteFlyweight, duration: number, volume: number) {
		this.note = note;
		this.duration = duration;
		this.volume = volume;
	}

	play() {
		this.note.play(this.duration, this.volume);
	}
}