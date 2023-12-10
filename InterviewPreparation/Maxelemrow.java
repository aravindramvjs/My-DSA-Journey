public class Maxelemrow {
    public static void main(String[] args) {
        int[][] arr = new int[][] { {3, 4, 1, 8},{1, 4, 9, 11},{76, 34, 21, 1},{2, 1, 4, 5}};

        findmax(arr);

    }

    private static void findmax(int[][] arr){
        for(int i = 0; i < arr.length; i++){
            int max = 0;
            for(int j = 0; j < arr[i].length; j++){
                if(arr[i][j] > max){
                    max = arr[i][j];
                }
            }
            System.out.println(max);
        }
    }
}
