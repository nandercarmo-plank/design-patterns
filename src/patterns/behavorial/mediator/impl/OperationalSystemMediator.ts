import { Mediator, MediatorEvents } from "../interfaces/Mediator";
import { AudioPlayer } from "./components/AudioPlayer";
import { ImageViewer } from "./components/ImageViewer";
import { VideoPlayer } from "./components/VideoPlayer";

export class OperationalSystemMediator implements Mediator {

	private audioPlayer: AudioPlayer;
	private videoPlayer: VideoPlayer;
	private imageViewer: ImageViewer;

	constructor() {}

	setComponents(audioPlayer: AudioPlayer, videoPlayer: VideoPlayer, imageViewer: ImageViewer): void {
		this.audioPlayer = audioPlayer;
		this.videoPlayer = videoPlayer;
		this.imageViewer = imageViewer;
	}

	notify(sender: object, event: MediatorEvents): void {
		if(sender === this.audioPlayer) {
			switch(event) {
				case MediatorEvents.START:
					console.log('AudioPlayer notify -> started');
					break;
				case MediatorEvents.STOP:
					console.log('AudioPlayer notify -> stopped');
					break;
				case MediatorEvents.PAUSE:
					console.log('AudioPlayer notify -> paused');
					break;
				case MediatorEvents.NEXT:
					console.log('AudioPlayer notify -> next');
					break;
				case MediatorEvents.PREVIOUS:
					console.log('AudioPlayer notify -> previous');
					break;
			}
		} else if(sender === this.videoPlayer) {
			switch(event) {
				case MediatorEvents.START:
					console.log('VideoPlayer notify -> started');
					break;
				case MediatorEvents.STOP:
					console.log('VideoPlayer notify -> stopped');
					break;
				case MediatorEvents.PAUSE:
					console.log('VideoPlayer notify -> paused');
					break;
				case MediatorEvents.NEXT:
					console.log('VideoPlayer notify -> next');
					break;
				case MediatorEvents.PREVIOUS:
					console.log('VideoPlayer notify -> previous');
					break;
			}
		} else if(sender === this.imageViewer) {
			switch(event) {
				case MediatorEvents.START:
					console.log('ImageViewer notify -> started');
					break;
				case MediatorEvents.STOP:
					console.log('ImageViewer notify -> stopped');
					break;
				case MediatorEvents.PAUSE:
					console.log('ImageViewer notify -> paused');
					break;
				case MediatorEvents.NEXT:
					console.log('ImageViewer notify -> next');
					break;
				case MediatorEvents.PREVIOUS:
					console.log('ImageViewer notify -> previous');
					break;
			}
		} else throw new Error('Invalid sender');
	}
}