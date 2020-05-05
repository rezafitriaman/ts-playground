export class Calculator {
    private current: number = 0;
    private memory: number = 0;
    private operator: string;

    protected processDigit(digit: string, currentValue: number) {
        console.log('processDigit on Calculator ------------------------');
        //console.log('digit: ', digit);
        //console.log('currentValue: ', currentValue);
        if(digit >= '0' && digit <= '9') {
            //console.log('currentValue: ', currentValue * 10);
            //console.log('digit: ', digit);
            //console.log('charCodeAt: ', digit.charCodeAt(0) - '0'.charCodeAt(0));
            //console.log('charCodeAt: ', digit.charCodeAt(0));
            //console.log('charCodeAt: ', '0'.charCodeAt(0));
            console.log('processDigit: ', currentValue * 10 + (digit.charCodeAt(0) - '0'.charCodeAt(0)));
            
            // why currentValue * 10 ?
            //return currentValue * 10 + (digit.charCodeAt(0) - '0'.charCodeAt(0));

            //or u can do
            return digit.charCodeAt(0) - '0'.charCodeAt(0);
        }else {
            //console.log('digit: ', digit);
            //for the rest of de digit we use undefined
            return undefined;
        }
    }

    protected processOperator (operator: string) {
        if(["+", "-", "*", "/"].indexOf(operator) >= 0) {
            return operator;
        }
    }

    protected evaluateOperator(operator:string, left: number, right: number): number {
        console.log('operator', operator);
        console.log('left', left);
        console.log('right', right);

        switch (this.operator) {
            case "+": return left + right;
            case "-": return left - right;
            case "*": return left * right;
            case "/": return left / right;
            default:  return 0;
        }
    }

    private  evaluate() {

        if(this.operator) {
            //console.log('operator: ', this.operator)
            this.memory = this.evaluateOperator(this.operator, this.memory, this.current);
        }else {
            // if operator undefined/in the begining
            console.log('current a: ', this.current)

            this.memory = this.current
            console.log('memory a: ', this.memory)
        }
        this.current = 0;
        console.log('current b: ',this.current)

    }

    public handleChar(char: string) {
        if(char === '=') {
            //console.log(char);
            this.evaluate();
            return;
        }else {
            let value = this.processDigit(char, this.current);
            if(value !== undefined) {
                //console.log('value', value);
                
                this.current = value;
                console.log('current', this.current);
                return;
            }else {
                let value = this.processOperator(char);
                //console.log('operator', value);
                if(value !== undefined) {
                    //console.log('operator', value);
                    this.evaluate();
                    this.operator = value;
                    return;
                }
            }
            throw new Error(`Unsupported input: '${char}'`);
        }
    }

    public getResult() {
        return this.memory;
    }
}

export function test(c: Calculator, input: string) {
    // u can use this
    let inputArray = input.split('');
    inputArray.forEach(item => {
        c.handleChar(item);
    })

    //or u can use this
    /* for(let i = 0; i < input.length; i ++) {
        console.log(input[i]);
        c.handleChar(input[i]);
    } */

    console.log(`result of '${input} is '${c.getResult()}'`);
}

/* let begin = 0;

for(let i=0; i<5; i++) {
    begin = begin * 10 + 8
    console.log(begin);
    
} */