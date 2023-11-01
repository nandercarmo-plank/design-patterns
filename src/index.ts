import { RunnerType } from "./types/runner";

import { AbstractFactoryPatternTest } from "./patterns/creational/abstract-factory";
import { FactoryPatternTest } from "./patterns/creational/factory";
import { BuilderPatternTest } from "./patterns/creational/builder";
import { PrototypePatternTest } from "./patterns/creational/prototype";
import { SingletonPatternTest } from "./patterns/creational/singleton";

import { AdapterPatternTest } from "./patterns/structural/adapter";
import { BridgePatternTest } from "./patterns/structural/bridge";
import { CompositePatternTest } from "./patterns/structural/composite";
import { DecoratorPatternTest } from "./patterns/structural/decorator";
import { FacadePatternTest } from "./patterns/structural/facade";
import { FlyweightPatternTest } from "./patterns/structural/flyweight";
import { ProxyPatternTest } from "./patterns/structural/proxy";

import { MediatorPatternTest } from "./patterns/behavorial/mediator";
import { ChainOfResponsabilityPatternTest } from "./patterns/behavorial/chain-of-responsability";
import { CommandPatternTest } from "./patterns/behavorial/command";
import { IteratorPatternTest } from "./patterns/behavorial/iterator";
import { MementoPatternTest } from "./patterns/behavorial/memento";
import { ObserverPatternTest } from "./patterns/behavorial/observer";
import { StatePatternTest } from "./patterns/behavorial/state";
import { StrategyPatternTest } from "./patterns/behavorial/strategy";
import { TemplateMethodPatternTest } from "./patterns/behavorial/template-method";

console.clear();
console.log("\nStarting Design Patterns runners...");

const runners: RunnerType[] = [
	FactoryPatternTest,
	AbstractFactoryPatternTest,
	BuilderPatternTest,
	PrototypePatternTest,
	SingletonPatternTest,
	AdapterPatternTest,
	BridgePatternTest,
	CompositePatternTest,
	DecoratorPatternTest,
	FacadePatternTest,
	FlyweightPatternTest,
	ProxyPatternTest,
	ChainOfResponsabilityPatternTest,
	CommandPatternTest,
	IteratorPatternTest,
	MediatorPatternTest,
	MementoPatternTest,
	ObserverPatternTest,
	StatePatternTest,
	StrategyPatternTest,
	TemplateMethodPatternTest
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