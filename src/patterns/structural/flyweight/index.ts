import { IRunner, RunnerType } from "../../../types/runner";
import { Music } from "./impl/Music";
import { NoteEnum } from "./impl/NoteEnum";

type MusicNotes = {
	duration: number,
	volume: number,
	name: NoteEnum,
	soundRecord: string
}

class FlyweightPattern implements IRunner {

	private notes: MusicNotes[];

	constructor(notes: MusicNotes[]) {
		this.notes = notes;
	}

	run() {
		
		const music = new Music();

		this.notes.forEach(note => {
			music.add(note.duration, note.volume, note.name, note.soundRecord);
		});

		music.play();

		return;
	}
}

export const FlyweightPatternTest: RunnerType = {
	tests: [
		{ name: "Should play Twinkle Twinkle Little Star music", test: new FlyweightPattern([
			{ name: NoteEnum.C5, soundRecord: "C5 sound record", duration: 1, volume: 50 },
			{ name: NoteEnum.C5, soundRecord: "C5 sound record", duration: 1, volume: 50 },
			{ name: NoteEnum.G5, soundRecord: "G5 sound record", duration: 1, volume: 50 },
			{ name: NoteEnum.G5, soundRecord: "G5 sound record", duration: 1, volume: 50 },
			{ name: NoteEnum.A5, soundRecord: "A5 sound record", duration: 1, volume: 50 },
			{ name: NoteEnum.A5, soundRecord: "A5 sound record", duration: 1, volume: 50 },
			{ name: NoteEnum.G5, soundRecord: "G5 sound record", duration: 2, volume: 50 },
			{ name: NoteEnum.F5, soundRecord: "F5 sound record", duration: 1, volume: 50 },
			{ name: NoteEnum.F5, soundRecord: "F5 sound record", duration: 1, volume: 50 },
			{ name: NoteEnum.E5, soundRecord: "E5 sound record", duration: 1, volume: 50 },
			{ name: NoteEnum.E5, soundRecord: "E5 sound record", duration: 1, volume: 50 },
			{ name: NoteEnum.D5, soundRecord: "D5 sound record", duration: 1, volume: 50 },
			{ name: NoteEnum.D5, soundRecord: "D5 sound record", duration: 1, volume: 50 },
			{ name: NoteEnum.C5, soundRecord: "C5 sound record", duration: 2, volume: 50 },
		]) },
	],
	pattern: "Flyweight",
	shouldRun: true
};
