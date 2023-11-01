import { Strategy } from "../interfaces/Strategy";

export class BlancedStrategy implements Strategy {
  exec(): void {
    console.log(`Executing balanced strategy: 4-3-3

       11   9     7
                  
            10
         5       8

      6    3   4    2

             1
    `);
  }
}