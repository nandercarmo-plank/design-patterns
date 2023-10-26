import { Note } from "./Note";
import { NoteEnum } from "./NoteEnum";
import { NoteFactory } from "./NoteFactory";

export class Music {

	private notes: Note[] = [];

	constructor() {
		this.notes = [];
	}

	add(duration: number, volume: number, name: NoteEnum, soundRecord: string): Music {
		const noteFlyweight = NoteFactory.getNote(name, soundRecord);
		const note = new Note(noteFlyweight, duration, volume);
		this.notes.push(note);
		return this;
	}
	
	play() {
		this.notes.forEach(note => note.play());
	}
}