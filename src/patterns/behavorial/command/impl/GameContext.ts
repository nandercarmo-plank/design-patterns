export class GameContext {

	private playerPosition = { x: 0, y: 0 };
	private playerHealth = 100;
	private playerExperience = 0;

	constructor() {}

	getPlayerPosition() {
		return this.playerPosition;
	}

	setPlayerPosition(x: number, y: number) {
		this.playerPosition.x += x;
		this.playerPosition.y += y;
	}

	getPlayerHealth() {
		return this.playerHealth;
	}

	getPlayerExperience() {
		return this.playerExperience;
	}

	takeDamage(damage: number) {
		this.playerHealth -= damage;
	}

	healthUp(health: number) {
		this.playerHealth += health;
	}

	addExperience(experience: number) {
		this.playerExperience += experience;
	}
}