public class FirstUpper {
    public static void main(String[] args) {
        String input = "mega is a hero";
        String[] inputarr = input.split(" ");
        for(int i = 0; i < inputarr.length; i++){
            char ch = inputarr[i].charAt(0);
            if(Character.isLowerCase(ch)){
                inputarr[0].charAt(0)= Character.toUpperCase(ch);
            }
            
        }

        System.out.println(String.join("", inputarr));
    }
}
