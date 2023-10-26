import { NoteEnum } from "./NoteEnum";

export class NoteFlyweight {

	private name: NoteEnum;
	private createdAt: Date;
	private soundRecord: string; // Simulate a heavy object

	constructor(name: NoteEnum, soundRecord: string) {
		this.name = name;
		this.createdAt = new Date();
		this.soundRecord = soundRecord;
	}

	play(duration: number, volume: number): void {
		console.log(`Playing note ${this.name} with duration ${duration} and volume ${volume} createdAt ${this.createdAt.toISOString()}`);
	}

	getName(): NoteEnum {
		return this.name;
	}
}