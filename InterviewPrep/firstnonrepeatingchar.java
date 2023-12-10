import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class firstnonrepeatingchar {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter a input: ");
        String input = scan.nextLine();
        if(input != null){
            findfirstnonrepeatingchar(input);
            // System.out.println(output);
        }

        scan.close();
    }

    private static void findfirstnonrepeatingchar(String input) {
        Set<Character> inputset = new HashSet<Character>();

        for(int i = 0; i < input.length(); i++){
            inputset.add(input.charAt(i));
        }

        int[] countarr = new int[inputset.size()];

        for (Character characterInSet : inputset) {
            System.out.println(characterInSet);
            int count = 0;
            int iterator = 0;
            for (int j = 0; j < input.length(); j++) {
                if (characterInSet == input.charAt(j)) {
                    count++;
                }
            }

            countarr[iterator] = count;
            iterator++;
        }
        // int min =  Math.min(countarr);
    }
}
