class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(string) {
        const stack = []

        for(const s of string){
            if(s == '}' && stack[stack.length - 1] == "{"){
                stack.pop()
            }
            else if(s == ']' && stack[stack.length - 1] == "["){
                stack.pop()
            }
            else if(s == ')' && stack[stack.length - 1] == "("){
                stack.pop()
            }
            else{
                stack.push(s)
            }
        }

        if(stack.length == 0) return true
        return false
    }
}
