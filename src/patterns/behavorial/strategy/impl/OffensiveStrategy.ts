import { Strategy } from "../interfaces/Strategy";

export class OffensiveStrategy implements Strategy {
  exec(): void {
    console.log(`Executing offensive strategy: 3-3-4

             10  9    
        11            7

           6   5   8

         3     4     2

               1
    `);
  }
}