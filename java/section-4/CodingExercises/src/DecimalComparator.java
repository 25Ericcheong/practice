public class DecimalComparator {
    public static boolean areEqualByThreeDecimalPlaces (double firstNumber,
                                                        double secondNumber) {
        double diff = (double)
                (Math.abs( firstNumber - secondNumber ));
        return ( (double) Math.round(diff * 10000) / 10000 ) < 0.001;
    }
}
