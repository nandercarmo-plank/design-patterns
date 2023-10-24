import { IBurguer } from "./IBurguer";

export type BurguerOptions = "Burguer" | "Cheeseburguer" | "Double Cheeseburguer" | "Bacon Cheeseburguer" | "Double Bacon Cheeseburguer" | "Triple Bacon Cheeseburguer";

export interface IBurguerDirector {
	makeBurguer(option: BurguerOptions): IBurguer | undefined;
}