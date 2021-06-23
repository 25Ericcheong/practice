package com.company;

public class Main {

    public static void main(String[] args) {

        int result = 1 + 2;
        System.out.println(result);
        int previousResult = result;
        result = result - 1;
        System.out.println(previousResult);
        System.out.println(result);

        result = result * 10;
        result = result / 10;
        result = result % 3;
        System.out.println(result);

        result++;
        System.out.println(result);
        result += 2;
        result *= 10;

        System.out.println(result);

        boolean isAlien = false;
        if (isAlien == false) {
            System.out.println("It is not an alien");
            System.out.println("Scared of alien");
        }

        int topScore = 80;
        if (topScore != 100) {
            System.out.println("High score");
        }

        int secondTopScore = 60;
        if (topScore > secondTopScore && topScore < 100) {
            System.out.println("Greater than second top score and less than " +
                    "100");
        }

        if ((topScore > 90) || (secondTopScore <= 90)) {
            System.out.println("Either or both of the conditions are true");
        }

        int newValue = 50;
        if (newValue == 50) {
            System.out.println("This is true");
        }

        boolean isCar = false;
        if (!isCar) {
            System.out.println("Not supposed to happen");
        }

        boolean wasCar = isCar ? true : false;
        if (wasCar) {
            System.out.println("wasCar is true");
        }

        double myFirstValue = 20.00d;
        double mySecondValue = 80.00d;
        double myValuesTotal = (myFirstValue + mySecondValue) * 100.00d;
        double theRemainder = myValuesTotal % 40.00d;
        System.out.println("theRemainder = " + theRemainder);

        boolean isNoRemainder = (theRemainder == 0) ? true : false;
        if (!isNoRemainder) {
            System.out.println("Got some remainder");
        }


    }
}
