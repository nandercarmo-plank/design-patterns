import { IRunner, RunnerType } from "../../../types/runner";
import { MobilePlayer } from "./abstraction/MobilePlayer";
import { WebPlayer } from "./abstraction/WebPlayer";
import { RadioImpl } from "./implementation/RadioImpl";
import { SpotifyImpl } from "./implementation/SpotifyImpl";

class BridgePattern implements IRunner {

	private param: {
		player: "Mobile" | "Web";
		platform: "Spotify" | "Radio";
	};

	constructor(param: {
		player: "Mobile" | "Web";
		platform: "Spotify" | "Radio";
	}) {
		this.param = param;
	}

	run() {

		const platform = this.param.platform === "Spotify" 
			? new SpotifyImpl(this.param.player) 
			: new RadioImpl(this.param.player);
		const player = this.param.player === "Mobile" 
			? new MobilePlayer(platform) 
			: new WebPlayer(platform);

		player.addToPlaylist("Hotel California");
		player.addToPlaylist("Stairway to Heaven");
		player.addToPlaylist("Bohemian Rhapsody");
		player.addToPlaylist("Imagine");
		player.removeToPlaylist("Imagine");
		player.play();
		player.next();
		player.previous();
		player.pause();
	}
}

export const BridgePatternTest: RunnerType = {
	tests: [
		{ name: "Should use a web player and the Spotify platform", test: new BridgePattern({ player: "Web", platform: "Spotify" }) },
		{ name: "Should use a mobile player and the Spotify platform", test: new BridgePattern({ player: "Mobile", platform: "Spotify" }) },
		{ name: "Should use a web player and the Radio platform", test: new BridgePattern({ player: "Web", platform: "Radio" }) },
		{ name: "Should use a mobile player and the Radio platform", test: new BridgePattern({ player: "Mobile", platform: "Radio" }) }
	],
	pattern: "Bridge",
	shouldRun: true
};
