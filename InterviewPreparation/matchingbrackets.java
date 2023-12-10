public class matchingbrackets {
    public static void main(String[] args) {
        String input = "{{{{}}}";

        System.out.println(findmatchingbrackets(input));
    }

    private static boolean findmatchingbrackets(String input) {
        int count = 0;

        for(int i = 0; i < input.length(); i++){
            if(input.charAt(i) == '{' ){
                count++;
            }
            else{
                count--;
            }
        }

        if(count == 0){
            return true;
        }
        else{
            return false;
        }
    }
}
