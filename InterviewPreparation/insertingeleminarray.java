import java.util.Arrays;

public class insertingeleminarray{

    public static void main(String[] args){
        int[] arr = {1,1,1,1,1};
        int position = 2;
        int element = 4;
        System.out.println(Arrays.toString(insertElement(element, position, arr)));
    }

    //     private static int[] insertElement(int element, int position, int[] arr){
    //     int[] newarr = new int[arr.length+1];
    //     int j = 0;
    //     for(int i = 0; i < newarr.length; i++){
    //         if(position == i){
    //             newarr[i] = element;
    //         }
    //         else{
    //             newarr[i] = arr[j];
    //             j++;
    //         }
    //     }

    //     return newarr;
    // }


    // 
    private static int[] insertElement(int element, int position, int[] arr) {
        int[] newarr = new int[arr.length + 1];
    
        if (position < 0 || position > arr.length) {
            throw new IndexOutOfBoundsException("Invalid position for insertion");
        }
    
        System.arraycopy(arr, 0, newarr, 0, position); // Copy the elements before the insertion point
        newarr[position] = element; // Insert the new element
        System.arraycopy(arr, position, newarr, position + 1, arr.length - position); // Copy the elements after the insertion point
    
        return newarr;
    }
    
}