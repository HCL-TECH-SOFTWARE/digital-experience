# How to resolve caching issues with WCM menus

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

This document provide hints to solve the warning-message:  

```log
MenuQueryCach W The cache has been exhausted. Stopped retrieving results for menu  
```

A typical log entry is for example:  

```log
[Date/Time] [ThreadID] MenuQueryCach W The cache has been exhausted. Stopped retrieving results for menu [expiring content:d70c43c7-3b3a-4602-9fc7-aeda9a77ada3] as we have 900 in the cache and max = 300
```

## Instructions

Increase the value of the menu cache as following:

1. Open the WebSphere Application Server Integrated Solutions Console (admin-console)

2. Navigate to `Resources > Resource environment providers > WCM WCMConfigService > Custom properties`.

3. Add a property named `menu.cache.max.items` with the desired value. The default is `300`.  
