import { SocialMedia } from '../interfaces/SocialMedia';

export class Tiktok extends SocialMedia {
	protected login(username: string, password: string): void {
		console.log(`Login in Tiktok with username ${username} and password ${password}`);
	}

	protected logout(): void {
		console.log('Logout from Tiktok');
	}

	protected post(message: string): void {
		console.log(`Post message '${message}' in Tiktok`);
	}
}