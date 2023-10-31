import { MusicPlatform } from "./interfaces/MusicPlatform";

export class SpotifyImpl implements MusicPlatform {

	private playlist: string[] = [];
	private currentSong?: string;
	private currentSongIndex?: number;
	private player: string;

	constructor(player: string) {
		this.player = player;
	}

	playMusic() {
		this.currentSongIndex = this.currentSongIndex !== undefined ? this.currentSongIndex : 0;
		this.currentSong = this.currentSongIndex !== undefined ? this.playlist[this.currentSongIndex] : undefined;
		if (this.currentSong) {
			console.log(`[${this.player}] Playing music from Spotify...`);
			console.log(`[${this.player}] Playing song ${this.currentSong}`);
		} else console.log(`[${this.player}] No song to play from Spotify...`);
	}

	pauseMusic() {
		if (this.currentSong) {
			console.log(`[${this.player}] Pausing music from Spotify...`);
		}
	}

	nextSong() {
		console.log(`[${this.player}] Playing next song from Spotify...`);
		this.currentSongIndex = this.currentSongIndex !== undefined ? this.currentSongIndex + 1 : 0;
		this.playMusic();
	}

	previousSong() {
		console.log(`[${this.player}] Playing previous song from Spotify...`);
		this.currentSongIndex = (this.currentSongIndex !== undefined && this.currentSongIndex > 0) 
			? this.currentSongIndex - 1 
			: 0;
		this.playMusic();
	}

	addToQueue(music: string): void {
		this.playlist.push(music);
		console.log(`[${this.player}] Adding song ${music} to playlist from Spotify...`);
	}

	removeFromQueue(music: string): void {
		console.log(`[${this.player}] Removing song ${music} from playlist from Spotify...`);
		this.playlist = this.playlist.filter(song => song !== music);
	}
}