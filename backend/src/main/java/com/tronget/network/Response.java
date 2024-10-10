package com.tronget.network;

import java.nio.charset.StandardCharsets;

public class Response {
  private int statusCode;
  private String codeDescription;
  private String contentType;
  private String content;

  public Response(int statusCode, String codeDescription, String contentType, String content) {
    this.statusCode = statusCode;
    this.codeDescription = codeDescription;
    this.contentType = contentType;
    this.content = content;
  }

  public int getStatusCode() {
    return statusCode;
  }

  public void setStatusCode(int statusCode) {
    this.statusCode = statusCode;
  }

  public String getCodeDescription() {
    return codeDescription;
  }

  public void setCodeDescription(String codeDescription) {
    this.codeDescription = codeDescription;
  }

  public String getContentType() {
    return contentType;
  }

  public void setContentType(String contentType) {
    this.contentType = contentType;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  @Override
  public String toString() {
    return """
          HTTP/1.1 %d %s
          Content-Type: %s
          Content-Length: %d

          %s
          """
        .formatted(
            statusCode,
            codeDescription,
            contentType,
            content.getBytes(StandardCharsets.UTF_8).length,
            content);
  }
}
