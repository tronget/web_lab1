package com.tronget.network;

import com.fastcgi.FCGIInterface;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

public class RequestManager {
    public static String get() {
        try {
            FCGIInterface.request.inStream.fill();
            var contentLength = FCGIInterface.request.inStream.available();
            var buffer = ByteBuffer.allocate(contentLength);
            var readBytes = FCGIInterface.request.inStream.read(
                    buffer.array(), 0, contentLength
            );
            var requestBodyRaw = new byte[readBytes];
            buffer.get(requestBodyRaw);
            buffer.clear();
            return new String(requestBodyRaw, StandardCharsets.UTF_8);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Map<String, Double> getJSON() {
        Map<String, Double> hashmap = new HashMap<>();
        String request = get();
        if (request == null) {
            return null;
        }
        request = request.replace("{", "");
        request = request.replace("}", "");
        String[] pairs = request.split(",");
        for (String pair : pairs) {
            String[] keyValue = pair.split(":");
            String key = keyValue[0];
            double value = Double.parseDouble(keyValue[1]);
            hashmap.put(key.substring(1, key.length() - 1), value);
        }
        return hashmap;
    }

}
