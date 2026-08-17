# How to use IBM WebSphere DynaCache to store and share data

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This article provides detailed steps and the sample code to use IBM WebSphere DynaCache for storing and sharing data.

## Instructions

???+ info "Disclaimer of Warranties"
      The enclosed code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting you in the development of your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.  

   1. First create a new object cache by opening the IBM Integrated Solutions Console (WAS admin console) in the web-browser.

   2. Navigate to **Resources > Cache Instances > Object Cache instances**.

   3. Select a scope.

   4. Click to the **New** button.  

   5. Enter a name and a jndi-name. For example:  

      ```property
      Name: SampleCache
      ```

      ```property
      JNDI Name: custom/cache/SampleCache
      ```

   6. Accept defaults and click to **OK** and **Save to master configuration**.  

   7. Restart the HCL DX server (WebSphere_Portal JVM).  

       !!!note
           After restart, if you do not see the new object cache by monitoring the dynacaches, click the button **Refresh Instances**

   8. Add this code to the view JSP used by your portlet:

      ```jsp
      <%@ page import="com.ibm.websphere.cache.DistributedObjectCache" %>
      Context context = new InitialContext();
      DistributedObjectCache myCache = (DistributedObjectCache)context.lookup("custom/cache/SampleCache");
      myCache.put("SampleParm", "hello");
      System.out.println("distributedMap Size: " + myCache.size(true));
      System.out.println("SampleParm: " + myCache.get("SampleParm"));
      ```

      Render the portlet and verify you see lines like this in SystemOut.log when the portlet is rendered:

      ```log
      [Timestamp] 000001a5 SystemOut O distributedMap Size: 1
      [Timestamp] 000001a5 SystemOut O SampleParm: hello
      ```  
