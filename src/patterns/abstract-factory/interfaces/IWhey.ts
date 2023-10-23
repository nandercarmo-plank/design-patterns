export interface IWhey {
	proteinAmount(): number;
	weight(): number;
	type(): "isolated" | "concentrated" | "hydrolyzed";
}