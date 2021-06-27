public class LeapYear {

    public static boolean isLeapYear (int year) {
        if (year < 1 || year > 9999) {
            return false;
        } else {
            int firstCheck = year % 4;
            int secondCheck = year % 100;
            int thirdCheck = year % 400;

            if (firstCheck == 0 && secondCheck != 0) {
                return true;
            } else return firstCheck == 0 && thirdCheck == 0;
        }
    }
}
