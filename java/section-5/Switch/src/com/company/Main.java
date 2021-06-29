package com.company;

import com.sun.jdi.Value;

public class Main {

    public static void main(String[] args) {

        int value = 1;
        switch (value) {
            case 1:
                System.out.println("Value was 1");
                break;

            case 2:
                System.out.println("Value was 2");
                break;

            case 3: case 4: case 5:
                System.out.println("Value is 3, 4 or 5");
                System.out.println("Value is " + value);
                break;

            default:
                System.out.println("Not 1,2,3,4 or 5");
                break;
        }

        char charValue = 'A';
        switch (charValue) {
            case 'A':
                System.out.println("A was found");
                break;
            case 'B':
                System.out.println("B was found");
                break;
            case 'C': case 'D': case 'E':
                System.out.println(charValue + " was found");

            default:
                System.out.println("Could not find any");
                break;
        }


    }
}
