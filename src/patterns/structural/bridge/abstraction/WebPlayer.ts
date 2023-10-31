import { MusicPlatform } from "../implementation/interfaces/MusicPlatform";
import { Player } from "./interfaces/Player";

export class WebPlayer extends Player {

	constructor(platform: MusicPlatform) {
		super(platform);
	}

	play() {
		this.platform.playMusic();
	}

	pause() {
		this.platform.pauseMusic();
	}

	next() {
		this.platform.nextSong();
	}

	previous() {
		this.platform.previousSong();
	}

	addToPlaylist(music: string) {
		this.platform.addToQueue(music);
	}

	removeToPlaylist(music: string): void {
		this.platform.removeFromQueue(music);
	}
}