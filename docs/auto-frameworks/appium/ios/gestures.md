---
title: Appium
titleTemplate: IOS Gestures
description: Appium IOS Gestures
head:
  - - meta
    - name: description
      content: Appium IOS Gestures
tags:
  - Appium
categories:
  - Automation Framework
---

# IOS Gestures <Badge type="tip" text="Appium" /><Badge type="warning" text="Automation Framework" />

::: tip
Refer from [_here_](https://github.com/clarabez/appium-1/blob/master/docs/en/writing-running-appium/ios/ios-xctest-mobile-gestures.md)
:::

Unfortunately Apple's XCTest framework does not natively support W3C standards for
TouchAction interface implementation. Although, it provides rich set of gestures,
including these, that are unique for iOS platform. It is possible to directly
invoke these gestures in Appium starting from version 1.6.4-beta.

It is important to remember that XCTest and WDA are being constantly changed.
This means all "mobile: \*" commands can be also subject of change in Appium
without any preliminary notice.

## mobile: swipe

This gesture performs a simple "swipe" gesture on the particular screen element
or on the application element, which is usually the whole screen. This method
does not accept coordinates and simply emulates single swipe with one finger. It
might be useful for such cases like album pagination, switching views, etc. More
advanced cases may require to call `mobile: dragFromToForDuration`, where one can
supply coordinates and duration.

Supported arguments:

- _direction_: `up`, `down`, `left`, or `right`. The argument is mandatory
- _velocity_: This argument is optional and is only supported since Appium server
  version 1.19 and Xcode SDK version 11.4+. The value is measured in pixels per
  second and same values could behave differently on different devices depending
  on their display density. Higher values make swipe gesture faster (which usually
  scrolls larger areas if we apply it to a list) and lower values slow it down.
  Only values greater than zero have effect.
- _element_: The internal element identifier (as hexadecimal hash string) to
  swipe on. Application element will be used instead if this argument is not provided

Usage examples:

```java
JavascriptExecutor js = (JavascriptExecutor) driver;
Map<String, Object> params = new HashMap<>();
params.put("direction", "down");
params.put("velocity", 2500);
params.put("element", ((RemoteWebElement) element).getId());
js.executeScript("mobile: swipe", params);
```

## mobile: scroll

Scrolls the element or the whole screen. Different scrolling strategies are
supported. Arguments define the chosen strategy: either `name`, `direction, 
`predicateString`or`toVisible`in that order. All strategies are exclusive and 
only one strategy can be applied at a single moment of time. Use`mobile: scroll`
to emulate precise scrolling in tables or collection views, where it is already
known to which element the scrolling should be performed. Although, there is one
known limitation there: in case it is necessary to perform too many scroll gestures
on parent container to reach the necessary child element (tens of them) then the
method call may fail.

Supported arguments:

- _element_: The internal element identifier (as hexadecimal hash string) to
  scroll on. Application element will be used if this argument is not set
- _name_: the accessibility id of the child element, to which scrolling is
  performed. The same result can be achieved by setting predicateString argument
  to `name == accessibilityId`. Has no effect if element is not a container
- _direction_: Either `up`, `down`, `left` or `right`. The main difference from
  swipe call with the same argument is that scroll will try to move the current
  viewport exactly to the next/previous page (the term "page" means the content,
  which fits into a single device screen)
- _predicateString_: the NSPredicate locator of the child element, to which the
  scrolling should be performed. Has no effect if element is not a container
- _toVisible_: Boolean parameter. If set to true then asks to scroll to the
  first visible element in the parent container. Has no effect if element is
  not set

Usage examples:

```python
driver.execute_script('mobile: scroll', {'direction': 'down'});
```
