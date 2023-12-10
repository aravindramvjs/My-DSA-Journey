import java.util.Scanner;

public class ReverseThreeDigitNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a three-digit number: ");
        int number = scanner.nextInt();

        if (number >= 100 && number <= 999) {
            int reversedNumber = ((number % 10) * 100) + (((number / 10) % 10) * 10) + (number / 100);
            System.out.println("Reversed number: " + reversedNumber);
        } else {
            System.out.println("Please enter a valid three-digit number.");
        }

        scanner.close();
    }
    

    
}
