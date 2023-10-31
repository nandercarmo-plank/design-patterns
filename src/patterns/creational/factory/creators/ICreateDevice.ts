import { IBoard } from "../boards/IBoard";

export interface ICreateDevice {
	create: () => IBoard;
}
