package com.company;

public class Main {

    public static void main(String[] args) {
        System.out.println("10, 000 at 2% interest rate = " + calculateInterest(10000, 2));

        for (int i = 0; i < 5; i++) {
            System.out.println("Loop " + i + " hello!");
        }

        for (int i = 2; i < 9; i++) {
            System.out.println("10, 000 at " + i + "% interest rate = " + String.format("%.2f",calculateInterest(10000, i)));
        }

        for (int i = 8; i >= 2; i--) {
            System.out.println("10, 000 at " + i + "% interest rate = " + String.format("%.2f",calculateInterest(10000, i)));
        }

        int count = 0;
        for (int i = 10; i < 50; i++) {
            if (isPrime(i)) {
                count++;
                System.out.println("Number " + i + " is a prime number");

                if (count == 3) {
                    System.out.println("Exit - 3 prime numbers collected");
                    break;
                }
            }
        }
    }



    public static boolean isPrime(int n) {

        if (n == 1) {
            return false;
        }

        for (int i = 2; i <= (long) Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }

    public static double calculateInterest(double amount, double interestRate) {
        return (amount * (interestRate / 100));
    }
}
