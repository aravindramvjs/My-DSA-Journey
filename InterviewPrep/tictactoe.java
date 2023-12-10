public class tictactoe {
    public static void main(String[] args) {
        char[][] board = {
                        {'x','o','x'},
                        {'o','o','o'},
                        {'x','o','o'},
                    };

        char winner = findWinner(board);
        System.out.println(winner);
    }

    private static char findWinner(char[][] board) {
        
        int xcount = 0;
        int ocount = 0;

        //horizontal check
        for(int i = 0; i < board.length; i++){
            xcount = 0;
            ocount= 0;

            for(int j = 0; j < board.length; j++){
                if(board[i][j] == 'x') xcount++;
                else ocount++;
            }

            if(xcount == 3) return 'x';
            else if(ocount == 3) return 'o';
            
        }

        //vertical check
        for(int i = 0; i < board.length; i++){
            xcount = 0;
            ocount= 0;

            for(int j = 0; j < board.length; j++){
                if(board[j][i] == 'x') xcount++;
                else ocount++;
            }

            if(xcount == 3) return 'x';
            else if(ocount == 3) return 'o';
            
        }

        //left diagonall check
        xcount = 0;
        ocount = 0;
        for(int i = 0; i < board.length; i++){
            if(board[i][i] == 'x') xcount++;
            else ocount++;
        }
        if(xcount == 3) return 'x';
        else if(ocount == 3) return 'o';

        // Right diagonal check
        xcount = 0;
        ocount = 0;
        for (int i = 0; i < board.length; i++) {
            if (board[i][board.length - 1 - i] == 'x') xcount++;
            else if (board[i][board.length - 1 - i] == 'o') ocount++; 
        }
        if (xcount == 3) return 'x';
        else if (ocount == 3) return 'o';

        return '-';
    }
}
