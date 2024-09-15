package com.tronget;

public class DotChecker {
    public static boolean check(double r, double x, double y) {
        return isFirstQuarter(r, x, y) || checkTriangle(r, x, y) || isThirdQuarter(r, x, y);
    }
    private static boolean checkTriangle(double r, double x, double y) {
        if (x >= -r / 2 && x <= 0 && y >= 0 && y <= r) {
            double xLength = r / 2 + x;
            double tan = y / xLength;
            return tan <= 2;
        }
        return false;
    }
    private static boolean isFirstQuarter(double r, double x, double y) {
        return x >= 0 && x <= r / 2 && y >= 0 && y <= r / 2 &&
                (x * x + y * y) <= r / 2;
    }

    private static boolean isThirdQuarter(double r, double x, double y) {
        return x >= -r / 2 && x <= 0 && y <= 0 && y >= -r;
    }
}
