public class LongestCollatzSequence {

    public static void main(String[] args) {
        long maxLength = 0;
        long numberWithMaxLength = 0;

        for (long i = 1; i <= 20000; i++) {
            long currentNumber = i;
            long currentLength = 1; // Initialize the length to 1 for the current number

            while (currentNumber != 1) {
                if (currentNumber % 2 == 0) {
                    currentNumber /= 2;
                } else {
                    currentNumber = 3 * currentNumber + 1;
                }
                currentLength++;
            }

            // Check if the current Collatz sequence is longer than the previous longest
            if (currentLength > maxLength) {
                maxLength = currentLength;
                numberWithMaxLength = i;
            }
        }

        System.out.println("Number with the longest Collatz sequence: " + numberWithMaxLength);
        System.out.println("Length of the longest Collatz sequence: " + maxLength);
    }
}
