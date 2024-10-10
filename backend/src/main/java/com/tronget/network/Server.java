package com.tronget.network;

public class Server {
  public static void run() {
    while (true) {
      ResponseManager.work();
    }
  }
}
