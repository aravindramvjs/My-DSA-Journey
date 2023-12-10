public class MatrixMultiplication {
    public static void main(String[] args) {
        int[][] arr1= new int[][] { {1,2,3},{1, 2, 3}};
        int[][] arr2 = new int[][] {{1,2,3},{1, 2, 3}};

        int[][] result = matrixmul(arr1, arr2);

        for(int i = 0; i < result.length; i++){
            for(int j = 0; j < result.length; j++){
                System.out.print(result[i][j] + " ");
            }
            System.out.println();
        }
    }

    private static int[][] matrixmul(int[][] arr1, int[][] arr2) {
        int[][] output = new int[arr1.length][arr1.length];

        for(int i = 0; i < arr1.length; i++){
            
            for(int j = 0,k=0; j < arr1.length; j++,k++){
                int sum = 0;

               // for(int k = 0; k < arr2.length; k++){
                    sum += arr1[i][k] * arr2[k][j];
                //}

                output[i][j] = sum; 
            }


        }

        return output;
    }
}
