import { SocialMedia } from '../interfaces/SocialMedia';

export class Twitter extends SocialMedia {
	protected login(username: string, password: string): void {
		console.log(`Login in Twitter with username ${username} and password ${password}`);
	}

	protected logout(): void {
		console.log('Logout from Twitter');
	}

	protected post(message: string): void {
		console.log(`Post message '${message}' in Twitter`);
	}
}