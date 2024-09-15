package com.tronget.network;

import com.fastcgi.FCGIInterface;
import com.tronget.DotChecker;

import java.nio.charset.StandardCharsets;
import java.time.LocalTime;
import java.util.Map;

public class ResponseManager {
    public static void send() {
        var fcgiInterface = new FCGIInterface();
        while (fcgiInterface.FCGIaccept() >= 0) {

            long start = System.currentTimeMillis();

            boolean isHit = false;
            Map<String, Double> json = RequestManager.getJSON();
            if (json == null) {
                continue;
            }

            Double r = json.get("r");
            Double x = json.get("x");
            Double y = json.get("y");

            if (x != null && y != null && r != null) {
                isHit = DotChecker.check(r, x, y);
            }

            long finish = System.currentTimeMillis();

            double scriptTime = (double) (finish - start) / 1000;

            var content = """
                    {
                       "hit": %b,
                       "scriptTime": %f,
                       "time": "%tT",
                       "x": %f,
                       "y": %f,
                       "r": %f
                    }
                    """.formatted(isHit, scriptTime, LocalTime.now(), x, y, r);
            var httpResponse = """
                     HTTP/1.1 200 OK
                     Content-Type: application/json
                     Content-Length: %d

                     %s
                     """.formatted(content.getBytes(StandardCharsets.UTF_8).length, content);
            System.out.println(httpResponse);
        }
    }
}
