# How to Use WebSphere DynaCache to Store and Share Data

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This article provides detailed steps and the sample code to use WebSphere DynaCache for storing and sharing data.

## Instructions

!!!Important
    **DISCLAIMER OF WARRANTIES:**
   The enclosed code is sample code created by HCL Corporation.
   This sample code is provided to you solely for the purpose of assisting you in the development of your applications.
   The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

   1. First create a new object cache by opening the IBM Integrated Solutions Console (WAS admin console).

   2. Go to Resources > Cache Instances > Object Cache instances > Select Scope > New

   3. Enter the Name=SampleCache
      JNDI  Name=custom/cache/SampleCache

   4. Accept defaults and click to OK > Save to master configuration

   5. Restart Portal serve

   !!!note
   After Portal restart, if you do not see the new object cache by monitoring the dynacaches, click the button **"Refresh Instances"**

   Add this code to the view JSP used by your portlet:

```jsp
<%@ page import="com.ibm.websphere.cache.DistributedObjectCache" %>
Context context = new InitialContext();
DistributedObjectCache myCache = (DistributedObjectCache)context.lookup("custom/cache/SampleCache");
myCache.put("SampleParm", "hello");
System.out.println("distributedMap Size: " + myCache.size(true));
System.out.println("SampleParm: " + myCache.get("SampleParm"));
```

   Render the portlet and verify you see lines like this in SystemOut.log when the portlet is rendered:

```text
000001a5 SystemOut O distributedMap Size: 1
000001a5 SystemOut O SampleParm: hello
```