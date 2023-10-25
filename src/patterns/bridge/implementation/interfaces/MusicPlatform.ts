export interface MusicPlatform {
	playMusic(): void;
	pauseMusic(): void;
	nextSong(): void;
	previousSong(): void;
	addToQueue(music: string): void;
	removeFromQueue(music: string): void;
}
