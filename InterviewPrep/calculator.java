import java.util.Scanner;


public class calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Input: Read two integers and an operator
        System.out.print("Enter the first integer: ");
        int num1 = scanner.nextInt();
        
        System.out.print("Enter the operator (+, -, *, /): ");
        char operator = scanner.next().charAt(0); // Read the first character
        
        System.out.print("Enter the second integer: ");
        int num2 = scanner.nextInt();
        
        try{
            // Perform the arithmetic operation and display the result or error message
            int result = arithmeticOperation(num1, operator, num2);
            if (result != Integer.MIN_VALUE) {
                System.out.println("Result: " + result);
            }
        }catch(ArithmeticException e){
            System.out.println(e);
        }
        
        scanner.close();
    }
    
    // Method to perform the arithmetic operation
    private static int arithmeticOperation(int num1, char operator, int num2) throws ArithmeticException {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                if (num2 != 0) {
                    return num1 / num2;
                } else {
                    throw new ArithmeticException("Bad Operation");
                }

            default:
                System.out.println("It is not a Valid Operator");
        }
        return Integer.MIN_VALUE; // Return a sentinel value for errors
    }
}
