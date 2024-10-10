package com.tronget.network;

public class SenderImpl implements Sender {
  @Override
  public void send(Response response) {
    System.out.println(response);
  }
}
