/**
 * FindCollatz
 */
public class FindCollatz {

    public static void main(String[] args) {
        
        int num = 10;
        System.out.print(num + "->");
        findCollatz(num);
    }

    private static int findCollatz(int n){

        if(n == 1){
            return 1;
        }
        if(n % 2 == 0){
            n /= 2;
            System.out.print(n + "->");
            return findCollatz(n);
        }
        else{
            n = (3 * n) + 1;
            System.out.print(n + "->");
            return findCollatz(n);
        }
    }
}
