import { MusicPlatform } from "../../implementation/interfaces/MusicPlatform";

export abstract class Player {

	protected platform: MusicPlatform;

	constructor(platform: MusicPlatform) {
		this.platform = platform;
	}

	abstract play(): void;
	abstract pause(): void;
	abstract next(): void;
	abstract previous(): void;
	abstract addToPlaylist(music: string): void;
	abstract removeToPlaylist(music: string): void;
}
