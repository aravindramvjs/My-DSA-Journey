/**
 * CalcLexicographicallySmallString
 */
public class CalcLexicographicallySmallString {

    public static void main(String[] args) {


        int weight = 3456789;
         int[]  Alphaweight = {1, 3, 12, 60,360,2520,20160,181440,19958400,239500800, };
        String res = "";
        // {1, 3, 12, 60, 360, 2520, 20160, 181440, 1814400, 19958400, 239500800, -1181456896, 639472640, 1002155008, -1145389056, 2003222528, 1698267136, -2092662784, 1096417280, 1549926400, -261357568, -1716256768, 1759510528, 1038090240, 1220542464, -1405091840}
            
        for(int i = Alphaweight.length-1; i >= 0 ; i--){
            if(weight >= Alphaweight[i]){

                res += i + "";
                weight -= Alphaweight[i]; 
                i = Alphaweight.length-1;
                
            }
        }
        
       StringBuilder sb = new StringBuilder();
        for (int i = 0; i < res.length(); i++) {
            char digit = res.charAt(i);
            int numericValue = Character.getNumericValue(digit);

            char a =  (char) (numericValue +65);
            sb.append(a);

        }
        System.out.println(sb.reverse());

        


        

        
        

        // for(int i = res.length()-1; i > 0; i--){
        //     if(res.charAt(i) == 0){
        //         System.out.println("A");
        //     }
        //     else if(res.charAt(i) == 1){
        //         System.out.println("B");
        //     }
        //     else if(res.charAt(i) == 2){
        //         System.out.println("C");
        //     }
        //     else if(res.charAt(i) == 3){
        //         System.out.println("D");
        //     }
            
        // }
    }
}