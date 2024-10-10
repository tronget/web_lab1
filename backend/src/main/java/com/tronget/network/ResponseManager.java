package com.tronget.network;

import com.fastcgi.FCGIInterface;
import com.tronget.util.Benchmark;
import com.tronget.util.DotChecker;
import java.util.Map;

public class ResponseManager {
  public static void work() {
    var fcgiInterface = new FCGIInterface();
    while (fcgiInterface.FCGIaccept() >= 0) {
      Message message = new Message();
      double scriptTime = Benchmark.test(() -> script(message));
      if (!message.isValid()) {
        continue;
      }
      message.setScriptTime(scriptTime);

      Response response = new Response(200, "OK", "application/json", message.toString());
      Sender sender = new SenderImpl();
      sender.send(response);
    }
  }

  public static void script(Message message) {
    boolean isHit = false;
    Map<String, Double> json = RequestManager.getJSON();
    if (json == null) {
      return;
    }

    Double r = json.get("r");
    Double x = json.get("x");
    Double y = json.get("y");

    if (x != null && y != null && r != null) {
      isHit = DotChecker.check(r, x, y);
      message.setR(r);
      message.setX(x);
      message.setY(y);
      message.setHit(isHit);
    }
  }
}
