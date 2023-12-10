import java.util.Arrays;

public class QuickSort {
    public static void main(String[] args) {
        int[] arr = {8,2,4,7,1,3,9,6,5};

        quicksort(arr, 0, arr.length - 1);

        System.out.println(Arrays.toString(arr));
    }
 
    private static void quicksort(int[] arr, int start, int end) {

        if(start >= end) return;

        int pivot = partition(arr, start, end); 
        quicksort(arr, start, pivot-1);  //2413 arr,0,3  
        quicksort(arr, pivot + 1, end);
    }

    private static int partition(int[] arr, int start, int end) {

        int pivot = arr[end];
        int i = start - 1;

        for(int j = start; j <= end; j++){

            if(arr[j] < pivot){   //8<5
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }


        }

        i++;
        int temp = arr[i];
        arr[i] = arr[end];
        arr[end] = temp;
       

        return i;
    }
}
