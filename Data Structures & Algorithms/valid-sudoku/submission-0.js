class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: 9}, () => new Set())
        const cols = Array.from({length: 9}, () => new Set())
        const subBoxes = Array.from({length: 9}, () => new Set())

        for( let i = 0; i < 9; i++){
            for( let j = 0; j < 9; j++){

                const boardVal = board[i][j]

                if(boardVal == "." || boardVal == "0") continue

                if(rows[i].has(boardVal)) return false
                rows[i].add(boardVal)

                if(cols[j].has(boardVal)) return false
                cols[j].add(boardVal)

                const subBoxIndex = Math.floor(i/3) * 3 + Math.floor(j/3)

                if(subBoxes[subBoxIndex].has(boardVal)) return false
                subBoxes[subBoxIndex].add(boardVal)
            
            }
        }

        return true

    }
}