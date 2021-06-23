package com.company;

public class Main {

    public static void main(String[] args) {
        byte byteValue = 1;
        short shortValue = 2;
        int intValue = 3;

        long myTotalLong = 50000L + 10L * (byteValue + shortValue + intValue);
        short shortTotal =
                (short) (1000 + 10 * (byteValue + shortValue + intValue));
    }
}
