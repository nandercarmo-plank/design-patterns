import { MusicPlatform } from "./interfaces/MusicPlatform";

export class RadioImpl implements MusicPlatform {
	
	private originalPlaylist: string[] = [
		"The night we met",
		"Never gonna give you up",
		"Still loving you",
		"Beat it",
		"Thriller",
		"Yesterday"
	];
	private playlist: string[] = [...this.originalPlaylist]
	private currentSongIndex = 0;
	private player: string;

	constructor(player: string) {
		this.player = player;
	}

	playMusic() {
		console.log(`[${this.player}] Playing music from Radio...`);
		if (this.currentSongIndex === this.playlist.length) this.currentSongIndex = 0;
		const currentSong = this.playlist[this.currentSongIndex];
		console.log(`[${this.player}]`, `Playing song ${currentSong}`);
	}

	pauseMusic() {
		console.log(`[${this.player}] Is not possible to pause music from Radio...`);
	}

	nextSong() {
		console.log(`[${this.player}] Is not possible to skip a song from Radio...`);
	}

	previousSong() {
		console.log(`[${this.player}] Is not possible to play previous song from Radio...`);
	}

	addToQueue(music: string): void {
		console.log(`[${this.player}] Is not possible to add songs to playlist from Radio...`);
	}

	removeFromQueue(music: string): void {
		console.log(`[${this.player}] Is not possible to remove songs from a Radio playlist...`);
	}
}