public class tictactoeoptimized {
    public static void main(String[] args) {
        char[][] board = {
            {'x', 'o', 'x'},
            {'o', 'o', 'o'},
            {'x', 'o', 'o'},
        };

        char winner = findWinner(board);
        System.out.println("Winner: " + winner);
    }
    public static char findWinner(char[][] board) {
        
        for (int i = 0; i < 3; i++) { // i = 0
            // Check rows
            if (board[i][0] == board[i][1] && board[i][1] == board[i][2]) {// board[0][0] == board[0][1] && board[0][1] == board[1][2] 
                return board[i][0]; // A row has the same symbol
            }
            // Check columns
            if (board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
                return board[0][i]; // A column has the same symbol
            }
        }

        // Check diagonals
        if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
            return board[0][0]; // Diagonal from top-left to bottom-right
        }
        if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
            return board[0][2]; // Diagonal from top-right to bottom-left
        }

        // If no winner is found, return '-' to indicate a tie or ongoing game
        return '-';
    }
}
