import {Calculator} from './Calculator';

class ProgrammerCalculator extends Calculator {
    static digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    constructor(public base: number) {
        super()
        const maxBase = ProgrammerCalculator.digits.length;
        console.log('maxBase', maxBase);
        console.log('base', base);

        if (base <= 0 || base > maxBase) {
            throw new Error(`base has to be whithin 0 to ${maxBase} insclusive.`);
        }
    }

    protected processDigit(digit: string, currentVAlue: number) {
        console.log('processDigit on ProgrammerCalculator ------------------------');
        if(ProgrammerCalculator.digits.indexOf(digit) >=0) {
            console.log('currentVAlue -------------',digit )
            return currentVAlue * this.base + ProgrammerCalculator.digits.indexOf(digit)
        } 
    }
}

export {ProgrammerCalculator as Calculator};