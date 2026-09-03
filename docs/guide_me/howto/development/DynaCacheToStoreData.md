# How to use the IBM WebSphere DynaCache to store and share data

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

IBM WebSphere DynaCache provides an in-memory caching service that stores objects, dynamic content, and data across application server cluster members. Caching frequently accessed data reduces backend database workload and improves application response times. This article describes how to use IBM WebSphere DynaCache to store and share data.

## Instructions

To use IBM WebSphere DynaCache to store and share data, perform the following steps:

???+ info "Disclaimer of Warranties"
    The enclosed code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting you in the development of your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.  

1. Log in to the IBM Integrated Solutions Console (WAS admin console)
2. Navigate to **Resources > Cache instances > Object cache instances**.
3. In the **Scope** dropdown list, select a scope.  

    !!!note
        - If you run on a HCL DX standalone server, the scope can be limited to server scope.  
        - If you are running HCL DX on a cluster with multiple HCL DX servers, you may want to choice the cluster scope to share the Dynacache object between all cluster members.  
        - If you want to use the Dynacache object in the entire HCL DX cell (multiple clusters) may select cell scope.

4. Select **New...**.
5. Enter a **Name** and a **JNDI name**. For example:  

    - **Name:** `SampleCache`
    - **JNDI Name:** `custom/cache/SampleCache`

6. Select **Apply**.
7. Click **Save** at the top of the console messages.
8. Restart the HCL DX server.

    !!!note
        If the new object cache does not display when monitoring DynaCaches after restarting, select **Refresh Instances** <!--where is this button located?-->.

9. Add the following code to the `view.jsp` file used by your portlet:

    ```jsp
    <%@ page import="com.ibm.websphere.cache.DistributedObjectCache" %>
    Context context = new InitialContext();
    DistributedObjectCache myCache = (DistributedObjectCache)context.lookup("custom/cache/SampleCache");
    myCache.put("SampleParm", "hello");
    System.out.println("distributedMap Size: " + myCache.size(true));
    System.out.println("SampleParm: " + myCache.get("SampleParm"));
    ```

10. Render the portlet and verify that lines similar to the following appear in `SystemOut.log`:

    ```log
    [Timestamp] 000001a5 SystemOut O distributedMap Size: 1
    [Timestamp] 000001a5 SystemOut O SampleParm: hello
    ```  
