import { IRunner, RunnerType } from "../../../types/runner";
import { BlancedStrategy } from "./impl/BalancedStrategy";
import { DefensiveStrategy } from "./impl/DefensiveStrategy";
import { MatchContext } from "./impl/MatchContext";
import { OffensiveStrategy } from "./impl/OffensiveStrategy";

type StrategyPatternParams = {
};

class StrategyPattern implements IRunner {

	private params: StrategyPatternParams;

	constructor(params: StrategyPatternParams) {
		this.params = params;
	}

	run() {
		const offensiveStrategy = new OffensiveStrategy();
		const balancedStrategy = new BlancedStrategy();
		const defensiveStrategy = new DefensiveStrategy();
		const matchContext = new MatchContext(balancedStrategy);

		matchContext.executeStrategy();
		matchContext.changeStrategy(offensiveStrategy);
		matchContext.executeStrategy();
		matchContext.changeStrategy(defensiveStrategy);
		matchContext.executeStrategy();
	}
}

export const StrategyPatternTest: RunnerType = {
	tests: [
		{
			name: "Should change strategy",
			test: new StrategyPattern({}),
		},
	],
	pattern: "Strategy",
	shouldRun: true
};
