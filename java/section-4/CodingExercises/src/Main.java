public class Main {

    public static void main(String[] args) {

        // Coding exercise 1
        long miles = SpeedConverter.toMilesPerHour(10.5);
        System.out.println("Miles = " + miles);

        SpeedConverter.printConversion(10.5);


        // Coding exercise 2
        MegaBytesConverter.printMegaBytesAndKiloBytes(5000);


        // Coding exercise 3
        System.out.println(BarkingDog.shouldWakeUp(true, -1));


        // Coding exercise 4
        System.out.println(LeapYear.isLeapYear(1800));


        // Coding exercise 5
        System.out.println(DecimalComparator.areEqualByThreeDecimalPlaces(3.174
                , 3.175));
    }
}
