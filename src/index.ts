import { AbstractFactoryPatternTest } from "./patterns/abstract-factory";
import { AdapterPatternTest } from "./patterns/adapter";
import { BuilderPatternTest } from "./patterns/builder";
import { FactoryPatternTest } from "./patterns/factory";
import { PrototypePatternTest } from "./patterns/prototype";
import { SingletonPatternTest } from "./patterns/singleton";
import { RunnerType } from "./types/runner";

console.clear();
console.log("\nStarting Design Patterns runners...");

const runners: RunnerType[] = [
	FactoryPatternTest,
	AbstractFactoryPatternTest,
	BuilderPatternTest,
	PrototypePatternTest,
	SingletonPatternTest,
	AdapterPatternTest
];

runners.forEach(runner => {
	if (runner.shouldRun) {
		const text = `-> ${runner.pattern} Design Pattern`;
		console.log(`\n\x1b[1;42;97m${text}${' '.repeat((process.stdout.columns) - text.length)}\x1b[0m\n`);
		runner.tests.forEach((test, index) =>{
			console.log(`[\x1b[36m${index + 1}/${runner.tests.length}\x1b[0m] ${test.name}`);
			test.test.run();
			console.log();
		});
	}
});