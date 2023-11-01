import { Strategy } from "../interfaces/Strategy";

export class DefensiveStrategy implements Strategy {
  exec(): void {
    console.log(`Executing defensive strategy: 5-4-1

               9    
                    
         11          7
            10    8
        6             2
           3   5   4    

               1
    `);
  }
}