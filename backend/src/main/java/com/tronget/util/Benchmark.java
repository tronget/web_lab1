package com.tronget.util;

public class Benchmark {
  public static double test(Runnable procedure) {
    long start = System.currentTimeMillis();
    procedure.run();
    long finish = System.currentTimeMillis();
    return (double) (finish - start) / 1000;
  }
}
