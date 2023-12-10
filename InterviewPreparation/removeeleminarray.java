import java.util.Arrays;

public class removeeleminarray {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,3};
        int element = 1;
        System.out.println(Arrays.toString(removeElement(element, arr)));
    }

    private static int[] removeElement(int element, int[] arr) {
        int[] newarr = new int[arr.length-1];
        int j = 0;
        for(int i = 0; i < arr.length; i++){
            if(arr[i] == element){
                i++;
            }
            newarr[j] = arr[i];
            j++;
        }

        return newarr;
    }
}
