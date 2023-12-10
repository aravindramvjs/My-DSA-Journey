import java.util.*;

public class AnagramCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s1 = scanner.next();
        String s2 = scanner.next();

        char[] charArray1 = s1.toCharArray();
        char[] charArray2 = s2.toCharArray();

        Arrays.sort(charArray1);
        Arrays.sort(charArray2);

        String sortedS1 = new String(charArray1);
        String sortedS2 = new String(charArray2);

        if (sortedS1.equals(sortedS2)) {
            System.out.println("Anagram");
        } else {
            System.out.println("Not Anagram");
        }

        scanner.close();

    }
}