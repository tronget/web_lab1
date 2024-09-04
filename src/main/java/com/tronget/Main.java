package com.tronget;

public class Main {
    public static void main(String[] args) {
        float r = Float.parseFloat(System.getenv("WEBLAB_R"));
        float x = Float.parseFloat(System.getenv("WEBLAB_X"));
        float y = Float.parseFloat(System.getenv("WEBLAB_Y"));
        System.out.println(checkCoordinates(r, x, y) ? "hit" : "miss");
    }
    public static boolean checkCoordinates(float r, float x, float y) {
        return isFirstQuarter(r, x, y) || checkTriangle(r, x, y) || isThirdQuarter(r, x, y);
    }
    public static boolean checkTriangle(float r, float x, float y) {
        if (x >= -r / 2 && x <= 0 && y >= 0 && y <= r) {
            float xLength = r / 2 + x;
            float tan = y / xLength;
            return tan <= 2;
        }
        return false;
    }
    public static boolean isFirstQuarter(float r, float x, float y) {
        return x >= 0 && x <= r / 2 && y >= 0 && y <= r / 2 &&
                (x * x + y * y) <= r / 2;
    }

    public static boolean isThirdQuarter(float r, float x, float y) {
        return x >= -r / 2 && x <= 0 && y <= 0 && y >= -r;
    }
}