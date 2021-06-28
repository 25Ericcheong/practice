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


        // Coding exercise 6
        System.out.println(EqualSumChecker.hasEqualSum(1, -1, 0));


        // Coding exercise 7
        System.out.println(TeenNumberChecker.hasTeen(22, 23, 24));


        // Coding exercise 8
        System.out.println(AreaCalculator.area(5.0));
        System.out.println(AreaCalculator.area(5.0, 4.0));


        // Coding exercise 9
        MinutesToYearsDaysCalculator.printYearsAndDays(561600);


        // Coding exercise 10
        IntEqualityPrinter.printEqual(1, 1, 2);


        // Coding exercise 11
        System.out.println(PlayingCat.isCatPlaying(false, 25));
    }
}
