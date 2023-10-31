import { NoteFlyweight } from "./NoteFlyweight";
import { NoteEnum } from "./NoteEnum";

export class NoteFactory {
	private static notes: NoteFlyweight[] = [];
	
	static getNote(name: NoteEnum, soundRecord: string) {
		let note = this.notes.find(note => note.getName() === name);
		if (!note) {
			note = new NoteFlyweight(name, soundRecord);
			this.notes.push(note);
		}
		return note;
	} 
}