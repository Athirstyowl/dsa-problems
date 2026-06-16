class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const regexNum = /^-?\d+$/
        for(const t of tokens){
            if(regexNum.test(t)){
                stack.push(Number(t))
            }
            else{
                const number2 = stack.pop()
                const number1 = stack.pop()
                switch(t){
                    case "+": stack.push(number1 + number2); break;
                    case "-": stack.push(number1 - number2); break;
                    case "*": stack.push(number1 * number2); break;
                    case "/": stack.push(Math.trunc(number1 / number2)); break;
                }
            }
        }

        return stack.pop()
    }
}
