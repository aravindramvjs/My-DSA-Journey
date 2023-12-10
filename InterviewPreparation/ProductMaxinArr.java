public class ProductMaxinArr {
    public static void main(String[] args) {
        int[] input = {9,-8,3,4,3,1,5,10};

        int max = findproductmax(input);

        System.out.println(max);
    }

    private static int findproductmax(int[] input) {

        quicksort(input, 0, input.length-1);

        if(input[0] < 0 && input[1] < 0){
            return input[0] * input[1];
        }
        else{
            return input[input.length-1]*input[input.length-2];
        }
        
    }

    private static void quicksort(int[] input, int start, int end) {
        
        if(start >= end) return;

        int pivot = partition(input, start, end);
        quicksort(input, start, pivot-1);
        quicksort(input, pivot+1, end);

    }

    private static int partition(int[] input, int start, int end) {

        int pivot = input[end];
        int i = start - 1;

        for(int j = start; j <= end; j++){
            if(input[j] < pivot){
                i++;
                int temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }

        i++;
        int temp = input[i];
        input[i] = input[end];
        input[end] = temp;


        return i;
    }
}
