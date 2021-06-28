public class MinutesToYearsDaysCalculator {

    public static void printYearsAndDays (long minutes) {

        if (minutes < 0) {
            System.out.println("Invalid Value");
        } else {
            int hours = (int) minutes / 60;
            int days = hours / 24;
            int years = days / 365;
            days = days - (years * 365);

            System.out.println(minutes + " min = " + years + " y and " + days +
                    " d");
        }
    }
}
