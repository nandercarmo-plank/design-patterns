import { IRunner, RunnerType } from "../../../types/runner";
import { Instagram } from "./impl/Instagram";
import { Tiktok } from "./impl/Tiktok";
import { Twitter } from "./impl/Twitter";
import { SocialMedia } from "./interfaces/SocialMedia";

type TemplateMethodPatternParams = {
};

class TemplateMethodPattern implements IRunner {

	private params: TemplateMethodPatternParams;

	constructor(params: TemplateMethodPatternParams) {
		this.params = params;
	}

	run() {
		
		const socialMedias: SocialMedia[] = [];
		socialMedias.push(new Twitter());
		socialMedias.push(new Instagram());
		socialMedias.push(new Tiktok());

		socialMedias.forEach((socialMedia) => {
			socialMedia.postMessage("Hello World!", "jsmith", "mypsd123");
			console.log();
		});
	}
}

export const TemplateMethodPatternTest: RunnerType = {
	tests: [
		{
			name: "Should post message in Twitter, Instagram and Tiktok",
			test: new TemplateMethodPattern({}),
		},
	],
	pattern: "TemplateMethod",
	shouldRun: true
};
