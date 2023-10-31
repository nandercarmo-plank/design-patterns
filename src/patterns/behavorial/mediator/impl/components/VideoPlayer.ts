import { MediatorEvents } from "../../interfaces/Mediator";
import { OperationalSystemMediator } from "../OperationalSystemMediator";

export class VideoPlayer {

	private osMediator: OperationalSystemMediator;

	constructor(osMediator: OperationalSystemMediator) {
		this.osMediator = osMediator;
	}

	public start() {
		this.osMediator.notify(this, MediatorEvents.START);
	}

	public stop() {
		this.osMediator.notify(this, MediatorEvents.STOP);
	}

	public pause() {
		this.osMediator.notify(this, MediatorEvents.PAUSE);
	}

	public next() {
		this.osMediator.notify(this, MediatorEvents.NEXT);
	}

	public previous() {
		this.osMediator.notify(this, MediatorEvents.PREVIOUS);
	}
}