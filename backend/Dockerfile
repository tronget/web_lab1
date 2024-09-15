FROM openjdk:23-ea-17-jdk-slim
LABEL authors="tronget"

WORKDIR /app

COPY libs/fastcgi-lib.jar ./backend/libs/fastcgi-lib.jar
COPY src/main/java/ ./backend/java

RUN echo "Manifest-Version: 1.0" > Manifest.mf
RUN echo "Main-Class: com.tronget.Main" >> Manifest.mf
RUN echo "Class-Path: ./backend/libs/fastcgi-lib.jar" >> Manifest.mf

RUN find ./backend/java -name "*.java" | xargs javac -cp ./backend/libs/fastcgi-lib.jar -d out
RUN jar -cmf Manifest.mf server.jar -C out .

EXPOSE 1337

CMD ["java", "-DFCGI_PORT=1337", "-jar", "server.jar"]