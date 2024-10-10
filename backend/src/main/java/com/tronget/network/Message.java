package com.tronget.network;

import java.time.LocalTime;

public class Message {
  private Double r;
  private Double x;
  private Double y;
  private Boolean isHit;
  private LocalTime time = LocalTime.now();
  private double scriptTime;

  public Message() {}

  public Message(double r, double x, double y) {
    this.r = r;
    this.x = x;
    this.y = y;
  }

  public boolean isValid() {
    return r != null && x != null && y != null && isHit != null;
  }

  public double getR() {
    return r;
  }

  public void setR(double r) {
    this.r = r;
  }

  public double getX() {
    return x;
  }

  public void setX(double x) {
    this.x = x;
  }

  public double getY() {
    return y;
  }

  public void setY(double y) {
    this.y = y;
  }

  public boolean isHit() {
    return isHit;
  }

  public void setHit(boolean hit) {
    isHit = hit;
  }

  public LocalTime getTime() {
    return time;
  }

  public void setTime(LocalTime time) {
    this.time = time;
  }

  public double getScriptTime() {
    return scriptTime;
  }

  public void setScriptTime(double scriptTime) {
    this.scriptTime = scriptTime;
  }

  @Override
  public String toString() {
    return """
          {
            "hit": %b,
            "scriptTime": %f,
            "time": "%tT",
            "x": %f,
            "y": %f,
            "r": %f
          }
          """
        .formatted(isHit, scriptTime, time, x, y, r);
  }
}
