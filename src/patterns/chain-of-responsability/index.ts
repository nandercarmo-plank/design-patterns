import { IRunner, RunnerType } from "../../types/runner";
import { AudioSignal } from "./impl/AudioSignal";
import { CleanAudio } from "./impl/CleanAudio";
import { FuzzyPedal } from "./impl/FuzzyPedal";
import { ReverbPedal } from "./impl/ReverbPedal";
import { ChorusPedal } from "./impl/ChorusPedal";
import { PhasePedal } from "./impl/PhasePedal";
import { IPedal } from "./interfaces/IPedal";

type ChainOfResponsabilityPatternParams = {
	pedals: string[];
	audioSignal: string;
}

class ChainOfResponsabilityPattern implements IRunner {

	private params: ChainOfResponsabilityPatternParams;

	constructor(params: ChainOfResponsabilityPatternParams) {
		this.params = params;
	}

	run() {
		
		const audioSignal = new AudioSignal(this.params.pedals, this.params.audioSignal);
		const audioSystem: IPedal = new CleanAudio();

		audioSystem.setNext(new FuzzyPedal())
			.setNext(new ReverbPedal())
			.setNext(new ChorusPedal())
			.setNext(new PhasePedal());

		audioSystem.process(audioSignal);
		audioSignal.play();

		return;
	}
}

export const ChainOfResponsabilityPatternTest: RunnerType = {
	tests: [
		{ 
			name: "Should play a clean guitar sound",
			test: new ChainOfResponsabilityPattern({ pedals: [], audioSignal: "Guitar sound" }),
		},
		{ 
			name: "Should play a guitar sound with fuzzy effect",
			test: new ChainOfResponsabilityPattern({ pedals: ["fuzzy"], audioSignal: "Guitar sound" }),
		},
		{ 
			name: "Should play a guitar sound with reverb effect",
			test: new ChainOfResponsabilityPattern({ pedals: ["reverb"], audioSignal: "Guitar sound" }),
		},
		{ 
			name: "Should play a guitar sound with chorus effect",
			test: new ChainOfResponsabilityPattern({ pedals: ["chorus"], audioSignal: "Guitar sound" }),
		},
		{ 
			name: "Should play a guitar sound with phase effect",
			test: new ChainOfResponsabilityPattern({ pedals: ["phase"], audioSignal: "Guitar sound" }),
		},
		{ 
			name: "Should play a guitar sound with fuzzy, reverb, chorus and phase effects",
			test: new ChainOfResponsabilityPattern({ pedals: ["fuzzy", "reverb", "chorus", "phase"], audioSignal: "Guitar sound" }),
		},
	],
	pattern: "ChainOfResponsability",
	shouldRun: true
};
