import { IRunner, RunnerType } from "../../../types/runner";
import { OperationalSystemMediator } from "./impl/OperationalSystemMediator";
import { AudioPlayer } from "./impl/components/AudioPlayer";
import { ImageViewer } from "./impl/components/ImageViewer";
import { VideoPlayer } from "./impl/components/VideoPlayer";

type MediatorPatternParams = {
};

class MediatorPattern implements IRunner {

	private params: MediatorPatternParams;

	constructor(params: MediatorPatternParams) {
		this.params = params;
	}

	run() {

		const os = new OperationalSystemMediator();
		const audioPlayer = new AudioPlayer(os);
		const videoPlayer = new VideoPlayer(os);
		const imageViewer = new ImageViewer(os);

		os.setComponents(audioPlayer, videoPlayer, imageViewer);

		audioPlayer.start();
		audioPlayer.stop();
		audioPlayer.pause();
		audioPlayer.next();
		audioPlayer.previous();

		videoPlayer.start();
		videoPlayer.stop();
		videoPlayer.pause();
		videoPlayer.next();
		videoPlayer.previous();

		imageViewer.start();
		imageViewer.stop();
		imageViewer.pause();
		imageViewer.next();
		imageViewer.previous();

		return;
	}
}

export const MediatorPatternTest: RunnerType = {
	tests: [
		{ 
			name: "Should use the notify method to send messages between components",
			test: new MediatorPattern({ }),
		},
	],
	pattern: "Mediator",
	shouldRun: true
};
