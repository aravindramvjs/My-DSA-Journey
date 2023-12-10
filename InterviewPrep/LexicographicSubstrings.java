import java.util.*;


public class LexicographicSubstrings {

    // My Solution
    // public static void main(String[] args) {
    //     String inputStr = "java";
    //     char[] charArr = inputStr.toCharArray();
    //     Arrays.sort(charArr);

    //     for (int i = 0; i < charArr.length; i++) {
    //         int pos = inputStr.indexOf(charArr[i]);

    //         for (int j = pos + 1; j <= inputStr.length(); j++) {
    //             System.out.println(inputStr.substring(pos, j));
    //         }
    //     }
    // }


    // Given Solution
    public static void main(String[] args) {

        // Scanner obj = new Scanner(System.in);
        // String str = obj.nextLine();

        String inputStr = "java";

        int len = inputStr.length();  
        String arr[] = new String[len*(len+1)/2];  
  
        int count = 0;  
        for(int i = 0; i < len; i++) {  
            for(int j = i; j < len; j++) {  
                arr[count] = inputStr.substring(i, j+1);  
                count++;  
                // System.out.println(inputStr.substring(i, j+1));
            }  
        }  
        Arrays.sort(arr);

        for(int i = 0; i < arr.length; i++) {  
            System.out.println(arr[i]);  
        }  

        // obj.close();
    }  
}