import { format } from "date-fns";

export class LoggerSingleton {
	
	private static instance: LoggerSingleton;
	private static creationDate: Date;
	
	private constructor() {}

	static getInstance(): LoggerSingleton {
		if (!LoggerSingleton.instance) {
			LoggerSingleton.instance = new LoggerSingleton();
			LoggerSingleton.creationDate = new Date();
		}
		return LoggerSingleton.instance;
	}

	static getCreationDate(): Date {
		return LoggerSingleton.creationDate;
	}

	log (message: any): Date {
		console.log(`[INFO]  ${format(LoggerSingleton.creationDate, 'dd/MM/yyyy HH:mm:ss')} ${message}`);
		return LoggerSingleton.creationDate;
	};
	
	error (message: any): Date {
		console.log(`[ERROR] ${format(LoggerSingleton.creationDate, 'dd/MM/yyyy HH:mm:ss')} ${message}`);
		return LoggerSingleton.creationDate;
	};
}