public class TeenNumberChecker {
    
    public static boolean hasTeen (int firstNum, int secondNum, int thirdNum) {
        return isTeen(firstNum) || isTeen(secondNum) || isTeen(thirdNum);
    }
    
    public static boolean isTeen (int num) {
        return num >= 13 && num <= 19;
    }
}
