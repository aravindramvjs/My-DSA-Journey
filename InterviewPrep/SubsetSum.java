import java.util.*;

public class SubsetSum {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        
        System.out.print("Enter the length of array: ");
        int len = scan.nextInt();

        System.out.print("Enter the array elements: ");
        int arr[] = new int[len];
            
        for(int i = 0; i < len; i++){
            arr[i] = Integer.parseInt(scan.next());
        }

        System.out.print("Enter the target: ");
        int targetSum = scan.nextInt();
            
        boolean isMatch = false;
    
        for(int i = 0; i < len; i++){
            int sum = 0;
            for(int j = i; j < len; j++){
                sum += arr[j];
                if(sum == targetSum){
                    isMatch = true;
                    break;
                }
            }
        }
        
        if(isMatch == true){
            System.out.print("yes");
        }
        else{
            System.out.print("no");
        }
                 
        scan.close(); 
    }
}
