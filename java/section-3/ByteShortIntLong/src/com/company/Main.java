package com.company;

public class Main {

    public static void main(String[] args) {

        int myValue = 10000;

        int myMinIntValue = Integer.MIN_VALUE;
        int myMaxIntValue = Integer.MAX_VALUE;
        System.out.println("Integer Max : " + myMaxIntValue);
        System.out.println("Integer Min : " + myMinIntValue);
        System.out.println("Busted MAX value : " + (myMaxIntValue + 1));
        
        byte myMinByteValue = Byte.MIN_VALUE;
        byte myMaxByteValue = Byte.MAX_VALUE;
        System.out.println("Byte Min : " + myMinByteValue);
        System.out.println("Byte Max : " + myMaxByteValue);

        short myMinShortValue = Short.MIN_VALUE;
        short myMaxShortValue = Short.MAX_VALUE;
        System.out.println("Short Min : " + myMinShortValue);
        System.out.println("Short Max : " + myMaxShortValue);

        long myLongValue = 100L;
        long myMinLongValue = Long.MIN_VALUE;
        long myMaxLongValue = Long.MAX_VALUE;
        System.out.println("Long Min : " + myMinLongValue);
        System.out.println("Long Max : " + myMaxLongValue);
        long bigLongLiteralValue = 2_147_483_647_234L;

        short bigShortLiteralValue = 32276;

        int myTotal = (myMinIntValue / 2);

        byte myNewByteValue = (byte) (myMinByteValue / 2);

        short myNewShortValue = (short) (myMinShortValue / 2);
    }
}
