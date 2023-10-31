export enum MediatorEvents {
	START = 'start',
	STOP = 'stop',
	PAUSE = 'pause',
	NEXT = 'next',
	PREVIOUS = 'previous',
}

export interface Mediator {
	notify(sender: object, event: MediatorEvents): void;
}