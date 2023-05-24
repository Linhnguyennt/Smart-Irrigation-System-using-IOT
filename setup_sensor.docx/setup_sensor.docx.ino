
#include <ESPAsyncWebServer.h>
#include <ESPAsyncTCP.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <ArduinoJson.h>
#define DHTTYPE DHT11
#include <DHT.h>
#define DHTPIN 2
DHT dht(DHTPIN, DHTTYPE);
double humid;
// const char *PARAM_INPUT_1 = "output";
// const char *PARAM_INPUT_2 = "status";
// #define AOUT_PIN 36
#define AOUT_PIN A0  // ESP32 pin GIOP36 (ADC0) that connects to AOUT pin of moisture sensor
#define THRESHOLD 1000
#define GPIO2 4
double v1;
#define THRESHOLD 100
const char *SSID = "HSU_Students";
const char *PASSWORD = "dhhs12cnvch";

// const char *SSID = "Sunshine Software";
// const char *PASSWORD = "sunshinexinchao";
const char *URL = "http://192.168.2.21:2002/getAllsolieu";

ESP8266WiFiMulti WiFiMulti;
WiFiClient client;
HTTPClient http;

AsyncWebServer server(80);


void setup() {

  Serial.begin(115200);
  pinMode(DHTPIN, INPUT);
  dht.begin();
  pinMode(36, OUTPUT);
  digitalWrite(36, LOW);
  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(10000);
    Serial.println("Connecting to WiFi._......");
  }
  // Print ESP Local IP Address
  Serial.println(WiFi.localIP());

  // Đoạn này tạo url theo kiểu http://ip/tuoi-cay?status=1 hoặc http://ip/tuoi-cay?status=0
  // Status = 1: RELAYPIN sẽ ON
  // Status = 0: RELAYPIN sẽ OFF
  // request->getParam("status")->value().toInt() đoạn này có nghĩa là get status trên param của url
  // cứ xử lý get cho dễ, ko cần send post chi cho phải lấy trong body

  // server.enableCORS(true);
  server.on("/ngung", HTTP_GET, [](AsyncWebServerRequest *request) {
    digitalWrite(4, 0);
    request->send(200, "text/plain", "OK");
  });

  server.on("/tuoicay", HTTP_GET, [](AsyncWebServerRequest *request) {
    digitalWrite(4, 1);
    request->send(200, "text/plain", "OK");
  });

  server.on("/showdata", HTTP_GET, [](AsyncWebServerRequest *request) {
    Serial.print(v1);
  });
  server.on("/tuoicaytudong", HTTP_GET, [](AsyncWebServerRequest *request) {
    digitalWrite(4, 1);
    request->send(200, "text/plain", "OK");
  });
  server.begin();
}

// Trường hợp mở thêm 1 url nữa thì cứ copy phần server.on("/url") vào

//server.on("/tuoicay", readdatahumid, )


// void connect() {
//   String s ;
//   server.send(200, "text/html", s);
// }
// void handle_on() {
//   char status = 1;
//   Serial.println("Tuoi cay");
//   digitalWrite(36,HIGH );

// }


// void handle_off() {
//   char status = 0;
//   Serial.println("Dung tuoi cay");
//   digitalWrite(36, LOW);
// }

// // void readdatahumid() {
// //   humid = dht.readHumidity();
// //   String shumid = String(humid);
// //   if (isnan(humid)) {
//         server.send(200, "text/plain", "Cam bien khong hoat dong");
//       } else {
//         server.send(200, "text/plain", shumid); }





//const char* serverName = "http://192.168.2.21:2002/getAllsolieu";

// the following variables are unsigned longs because the time, measured in
// milliseconds, will quickly become a bigger number than can be stored in an int.
//unsigned long lastTime = 0;
// Timer set to 10 minutes (600000)
//unsigned long timerDelay = 600000;
// Set timer to 5 seconds (5000)
//unsigned long timerDelay = 5000;

// String sensorReadings;
// float sensorReadingsArr[3];

void read() {
  //       double humid = dht.readHumidity();
  // v1=humid;
  // Serial.print(v1);
}
void loop() {
  //     double humid = dht.readHumidity();
  // v1=humid;
  // Serial.print(v1);
  // delay(10000);
  int value = analogRead(AOUT_PIN);  // read the analog value from sensor

  Serial.print("Moisture: ");
  v1 = value;
  Serial.println(v1);
  delay(560000);
}





//   String shumid = String(humid);
//  if (isnan(humid)) {
//    server.send(200, "text/plain", "Cam bien khong hoat dong");
//  } else {
//       server.send(200, "text/plain", shumid);
// Send an HTTP POST request depending on timerDelay
//   if ((millis() - lastTime) > timerDelay) {
//     //Check WiFi connection status
//     if(WiFi.status()== WL_CONNECTED){

//       sensorReadings = httpGETRequest(serverName);
//       Serial.println(sensorReadings);
//       JSONVar myObject = JSON.parse(sensorReadings);

//       // JSON.typeof(jsonVar) can be used to get the type of the var
//       if (JSON.typeof(myObject) == "undefined") {
//         Serial.println("Parsing input failed!");
//         return;
//       }

//       Serial.print("JSON object = ");
//       Serial.println(myObject);

//       // myObject.keys() can be used to get an array of all the keys in the object
//       JSONVar keys = myObject.keys();

//       for (int i = 0; i < keys.length(); i++) {
//         JSONVar value = myObject[keys[i]];
//         Serial.print(keys[i]);
//         Serial.print(" = ");
//         Serial.println(value);
//         sensorReadingsArr[i] = double(value);
//       }
//       Serial.print("1 = ");
//       Serial.println(sensorReadingsArr[0]);
//       Serial.print("2 = ");
//       Serial.println(sensorReadingsArr[1]);
//       Serial.print("3 = ");
//       Serial.println(sensorReadingsArr[2]);
//     }
//     else {
//       Serial.println("WiFi Disconnected");
//     }
//     lastTime = millis();
//   }
// }

// String httpGETRequest(const char* serverName) {
//   WiFiClient client;
//   HTTPClient http;

//   // Your IP address with path or Domain name with URL path
//   http.begin(client, serverName);

//   // If you need Node-RED/server authentication, insert user and password below
//   //http.setAuthorization("REPLACE_WITH_SERVER_USERNAME", "REPLACE_WITH_SERVER_PASSWORD");

//   // Send HTTP POST request
//   int httpResponseCode = http.GET();

//   String payload = "{}";

//   if (httpResponseCode>0) {
//     Serial.print("HTTP Response code: ");
//     Serial.println(httpResponseCode);
//     payload = http.getString();
//   }
//   else {
//     Serial.print("Error code: ");
//     Serial.println(httpResponseCode);
//   }
//   // Free resources
//   http.end();

//   return payload;

//     delay(10000);
