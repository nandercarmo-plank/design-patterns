import { FactoryPatternTest } from "./patterns/factory";
import { RunnerType } from "./types/runner";

console.clear();
console.log("\nStarting Design Patterns runners...");

const runners: RunnerType[] = [
	FactoryPatternTest,
	FactoryPatternTest,
];

runners.forEach(runner => {
	if (runner.shouldRun) {
		const text = `-> ${runner.pattern} Design Pattern`;
		console.log(`\n\x1b[1;42;97m${text}${' '.repeat((process.stdout.columns / 2) - text.length)}\n\x1b[0m`);
		runner.tests.forEach((test, index) =>{
			console.log(`[\x1b[36m${index + 1}/${runner.tests.length}\x1b[0m] ${test.name}`);
			test.test.run();
			console.log();
		});
	}
});