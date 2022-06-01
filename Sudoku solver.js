var solveSudoku = function(board) {
    const isValid = (row, col, board, val) => {               
        let rowDiff = Math.floor(row / 3) * 3;
        let colDiff = Math.floor(col / 3) * 3;
        
        for(let i = 0; i < board.length; i++) {
            if(board[row][i] === val) return false;
            if(board[i][col] === val) return false;
             
            if(board[rowDiff + Math.floor(i / 3)][colDiff + i % 3] === val) {
                return false;
            }
        }
        return true;
    }
    
    const solve = (board) => {
        for(let row = 0; row < board.length; row++){
            for(let col = 0; col < board[row].length; col++){

                if(board[row][col] === '.') {
                    for(let i = 1; i <= 9; i++) {

                        if(isValid(row, col, board, String(i))) {
                            board[row][col] = String(i);

                            if(solve(board)) {
								// all elements are filled out, let's return this baby
                                return true;
                            }

                            board[row][col] = '.';
                        }
                    }
					
                    return false;
                }
            }
        }
		
        return true;
    }
    
    solve(board);
    return board;
    
};