package com.company;

public class NumberOfDaysInMonth {

    public static boolean isLeapYear(int year) {
        if (year >= 1 && year <= 9999) {
            int firstCheck = year % 4;
            int secondCheck = year % 100;
            int thirdCheck = year % 400;

            if (firstCheck == 0 && secondCheck != 0) {
                return true;
            } else return firstCheck == 0 && thirdCheck == 0;

        } else {
            return false;
        }
    }

    public static int getDaysInMonth(int month, int year) {
        if (month < 1 || month > 12) {
            return -1;
        } else if (year < 1 || year > 9999) {
            return -1;
        } else {
            if (isLeapYear(year) && month == 2) {
                return 29;
            } else if (!isLeapYear(year) && month == 2) {
                return 28;
            } else {

                switch (month) {
                    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                        return 31;
                    default:
                        return 30;
                }
            }
        }
    }
}
