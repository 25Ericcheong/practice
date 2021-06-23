package com.company;

public class Main {

    public static void main(String[] args) {
	
        float myMinFloatValue = Float.MIN_VALUE;
        float myMaxFloatValue = Float.MAX_VALUE;
        System.out.println("Float min : " + myMinFloatValue);
        System.out.println("Float max : " + myMaxFloatValue);

        double myMinDoubleValue = Double.MIN_VALUE;
        double myMaxDoubleValue = Double.MAX_VALUE;
        System.out.println("Double min : " + myMinDoubleValue);
        System.out.println("Double max : " + myMaxDoubleValue);

        int myIntValue = 5 / 2;
        float myFloatValue = 5f / 2f;
        double myDoubleValue = 5d / 2d;
        System.out.println("Int val : " + myIntValue);
        System.out.println("Float val : " + myFloatValue);
        System.out.println("Double val : " + myDoubleValue);

        double numberOfPounds = 200d;
        double convertKilograms = numberOfPounds * 0.45359237d;
        System.out.println("Converted kilograms = " + convertKilograms);

        double pi = 3.1415927d;
        // to make it more human readable perhaps
        double anotherNumber = 3_000_000.4_567;
        System.out.println(anotherNumber);
    }
}
