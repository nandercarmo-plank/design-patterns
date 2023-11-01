import { SocialMedia } from '../interfaces/SocialMedia';

export class Instagram extends SocialMedia {
	protected login(username: string, password: string): void {
		console.log(`Login in Instagram with username ${username} and password ${password}`);
	}

	protected logout(): void {
		console.log('Logout from Instagram');
	}

	protected post(message: string): void {
		console.log(`Post message '${message}' in Instagram`);
	}
}