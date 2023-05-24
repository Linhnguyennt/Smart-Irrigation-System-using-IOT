#include <Arduino.h>
// #include <ESPAsyncWebServer.h>
#include <ESP8266WebServer.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <ArduinoJson.h>

#define GPIO2 4

const char *SSID = "HSU_Students";
const char *PASSWORD= "dhhs12cnvch";
// const char *SSID = "Sunshine Software";
// const char *PASSWORD = "sunshinexinchao";
const char *URL1 = "http://10.106.24.105:2002/adddata";

ESP8266WebServer server(80);
ESP8266WiFiMulti WiFiMulti;
WiFiClient client;
HTTPClient http;
#define THRESHOLD 560
float pin = A0;

void setup() {
  Serial.begin(115200);
  Serial.println();
  Serial.print("Connect to existing Wifi network...");
  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  pinMode(pin, INPUT);
  pinMode(2, OUTPUT);

  server.enableCORS(true);
  server.on("/tuoicay", handle_on);
  server.on("/ngung", handle_off);
  server.on("/docdata", handle_readdata);
  server.on("/tuoitudong", handle_automation);
  server.begin();
  Serial.println("HTTP server started");
}
void loop() {
  server.handleClient();

  postJsonData();
  delay(5000);
}

void handle_on() {
  server.enableCORS(true);
  digitalWrite(2, 1);
  server.send(200, "text/plain", "---Hãy chăm sóc cây cối thật tốt nhé");
}
void handle_off() {
  server.enableCORS(true);
  digitalWrite(2, 0);
  server.send(200, "text/plain", "----Tưới nước đủ rùi nhé, bạn thân ơi!!!");
}
void handle_readdata() {
  server.enableCORS(true);
  analogRead(pin);
  server.send(200, "text/plain", "----Data của cảm biến");
}
void handle_automation() {
  server.enableCORS(true);
  //int value = analogRead(pin); // read the analog value from sensor

  if (analogRead(pin) > THRESHOLD){
    Serial.print("The soil is DRY (");
    digitalWrite(2, 1);}
  else{
    Serial.print("The soil is WET (");
    digitalWrite(2, 0);}
  
  Serial.print(analogRead(pin));
  Serial.println(")");

  delay(1000);
  server.send(200, "text/plain", "-----Cách tưới tự động này có vẻ thông minh hơn nhé!!!");
}

void postJsonData() {

  Serial.print("connecting to ");
  if ((WiFiMulti.run() == WL_CONNECTED)) {
    Serial.print("[HTTP] begin...\n");
    if (http.begin(client, URL1)) {  // HTTP
      Serial.print("[HTTP] POST...\n");
      //gui du lieu len server dang JSON
      const int capacity = JSON_OBJECT_SIZE(4);
      StaticJsonDocument<capacity> doc;
      int value = analogRead(pin);
      Serial.print(pin);

      // Read temperature as Celsius (the default)

      doc["namedevice"] = "Lolin5";
      doc["humid"] = analogRead(pin);
      doc["description"] = "None";

      char output[2048];
      serializeJson(doc, Serial);
      serializeJson(doc, output);


      http.addHeader("Content-Type", "application/json");
      int httpCode = http.POST(output);
      Serial.println(httpCode);  //Print HTTP return code
      // file found at server
      if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
        // String payload = http.getString();
        // Serial.println(payload);
        // char input[50];
        // payload.toCharArray(input, 50);
        // //parseJson
        // Serial.println("Begin parse json data ...");
        // DynamicJsonDocument docResponse(2048);
        // DeserializationError err = deserializeJson(docResponse, payload);
        // if (err) {
        //   Serial.print(F("deserializeJson() failed with code "));
        //   Serial.println(err.c_str());
        //}
        //auto name = docResponse["name"].as<char*>();
        Serial.println("done");

      } else {
        Serial.printf("[HTTP] POST... failed, error: %s\n", http.errorToString(httpCode).c_str());
      }

      http.end();  //Close connection Serial.println();
      Serial.println("closing connection");
    }
  }
}
