export abstract class SocialMedia {
	protected abstract login(username: string, password: string): void;
	protected abstract logout(): void;
	protected abstract post(message: string): void;

	postMessage(message: string, username: string, password: string) {
		this.login(username, password);
		this.post(message);
		this.logout();
	}
}