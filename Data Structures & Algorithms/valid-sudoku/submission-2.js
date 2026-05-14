class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: 9}, () => new Array(10).fill(0))
        const cols = Array.from({length: 9}, () => new Array(10).fill(0))
        const subBoxes = Array.from({length: 9}, () => new Array(10).fill(0))

        for( let i = 0; i < 9; i++){
            for( let j = 0; j < 9; j++){

                const boardVal = board[i][j]

                if(boardVal == "." || boardVal == "0") continue

                if(rows[i][boardVal] == 1) return false
                rows[i][boardVal]++

                if(cols[j][boardVal] == 1) return false
                cols[j][boardVal]++

                const subBoxIndex = Math.floor(i/3) * 3 + Math.floor(j/3)

                if(subBoxes[subBoxIndex][boardVal] == 1) return false
                subBoxes[subBoxIndex][boardVal]++
            }
        }

        return true

    }
}