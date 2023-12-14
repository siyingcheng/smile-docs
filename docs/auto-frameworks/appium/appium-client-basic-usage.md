---
title: Appium Client Basic Usage
titleTemplate: Java Client
description: Appium Java Client Basic Usage
head:
  - - meta
    - name: description
      content: Appium Java Client Basic Usage
tags:
  - Appium
categories:
  - Automation Framework
---

# Appium Client Basic Usage <Badge type="tip" text="Appium" /><Badge type="warning" text="Automation Framework" />

## Java client

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=blue)](https://github.com/appium/java-client)
[Java client](https://mvnrepository.com/artifact/io.appium/java-client) for Appium Mobile WebDriver.
And there are much more code examples by checking client's [unit and integration tests](https://github.com/appium/java-client/blob/master/src/test/java/io/appium/java_client).

::: code-group

```xml [Maven]
<dependency>
    <groupId>io.appium</groupId>
    <artifactId>java-client</artifactId>
    <version>...</version>
</dependency>
```

```groovy [Gradle]
implementation group: 'io.appium', name: 'java-client', version: '...'
```

:::

### AndroidDriver and IOSDriver

Usage Example
::: code-group

```java [UiAutomator2]
UiAutomator2Options options = new UiAutomator2Options()
    .setUdid('123456')
    .setApp("/home/myapp.apk");
AndroidDriver driver = new AndroidDriver(
    // The default URL in Appium 1 is http://127.0.0.1:4723/wd/hub
    new URL("http://127.0.0.1:4723"), options
);
try {
    WebElement el = driver.findElement(AppiumBy.xpath, "//Button");
    el.click();
    driver.getPageSource();
} finally {
    driver.quit();
}
```

```java [XCUITest]
XCUITestOptions options = new XCUITestOptions()
    .setUdid('123456')
    .setApp("/home/myapp.ipa");
IOSDriver driver = new IOSDriver(
    // The default URL in Appium 1 is http://127.0.0.1:4723/wd/hub
    new URL("http://127.0.0.1:4723"), options
);
try {
    WebElement el = driver.findElement(AppiumBy.accessibilityId, "myId");
    el.click();
    driver.getPageSource();
} finally {
    driver.quit();
}
```

:::

### Appium Driver Local Service

There are two ways to start the Appium service:using the `appium` command in shell
or using the `AppiumDriverLocalService` class.

```java
public static AppiumDriverLocalService startAppiumServer() {
    service = new AppiumServiceBuilder()
            .withIPAddress("127.0.0.1")
            .usingPort(PORT)
            .withTimeout(SERVER_START_TIMEOUT)
            .build();
    service.start();
    return service;
}
```

So you can start the appium service in before class:

```java {3}
@BeforeAll
public static void beforeClass() throws Exception {
    startAppiumServer();
    ...
}
```

And do not forget to shutdown:

```java {7}
@AfterAll
public static void afterClass() {
    if (driver != null) {
        driver.quit();
    }
    if (service != null) {
        service.stop();
    }
}
```

### System Clipboard

System clipboard support set and get `PLAINTEXT`, `IMAGE` and `URL`.

::: code-group

```java [PLAINTEXT]
iosDriver.setClipboardText(text); // set
String result = iosDriver.getClipboardText(); // get
```

```java [IMAGE]
BufferedImage bufferedImage = ImageIO.read(fileNameOrUrl);
iosDriver.setClipboardImage(bufferedImage); // set
BufferedImage clipboardImage = iosDriver.getClipboardImage(); // get
```

```java [URL]
iosDriver.setClipboardUrl(url); // set
URL clipboardUrl = iosDriver.getClipboardUrl(); // get
```

:::
