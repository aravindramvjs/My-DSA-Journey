public class SumOfPermutation {
    public static void main(String[] args) {
        String num = "123";
        char[] numCharArr = num.toCharArray();
        for(int i = 0 ; i < numCharArr.length; i++){
            for(int j = 0; j < numCharArr.length; j++){
                char temp = numCharArr[i];
                numCharArr[i] = numCharArr[j];
                numCharArr[j] = temp;

                // String currentPermutation = numCharArr.toString();
                // sum += Integer.parseInt(currentPermutation);
                System.out.print(numCharArr);
                System.out.println("  i= " + i + " j= " + j);
            }

            
        }

        // System.out.println(sum);
    }
}
