# How to create a servlet to serve static files from HCL DX using Rational Application Developer

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

In some cases, you might need a separate servlet URL context to serve static files. This servlet and its associated files are not affected by portal maintenance or fix pack updates. This article describes how you can create a servlet that serves static files.

## Instructions

### Create a servlet in Rational Application Developer (RAD)

 These steps use **Rational Application Developer 9.7**, but other supported versions should work as well.

1. Open **Rational Application Developer (RAD)**.  

2. Create a new web project:  

    1. Go to **File > New > Web Project**.  
    2. Enter the project name: `myServlet`.  
    3. Select the **Simple** project template.  
    4. Select the **Java EE** programming model.  
    5. Select **Next**.  
    6. Accept the defaults under **Deployment project settings**.  
    7. Select **Finish**.  

3. Create a servlet class:  

    1. In the **Project Explorer**, right-click **myServlet**.  
    2. Select **New > Servlet**.  
    3. For **Java package**, enter a package name, for example: `com.hcl.myservlet`.  
    4. For **Class name**, enter: `myClass`.  
    5. Select **Finish**.  

4. Add servlet code:  

    1. Expand **myServlet > Java Resources > src > com.hcl.myservlet**.  
    2. Open **myClass.java**.  
    3. In the `doGet` method, add the following line:  

        ```java
        response.getWriter().print("Hello from myServlet");
        ```

5. Create a static HTML file:  

    1. In the **Project Explorer**, expand **myServlet**.  
    2. Right-click **WebContent**.  
    3. Select **New > File**.  
    4. Enter the file name: `index.html`.  
    5. Open the **Source** tab.  
    6. Paste the following content:  

        ```html
        Hello from the myServlet index.html
        ```

6. Create the `web.xml` file:  

    1. In the **Project Explorer**, expand **myServlet > WebContent**.  
    2. Right-click **WEB-INF**.  
    3. Select **New > File**.  
    4. Enter the file name: `web.xml`.  
    5. Open the **Source** tab.  
    6. Paste the following content:  

        ```xml
            <?xml version="1.0" encoding="UTF-8"?>
            <web-app id="WebApp_ID" version="3.0" xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd">
            <display-name>myServlet</display-name>
            <welcome-file-list>
            <welcome-file>index.html</welcome-file>
            </welcome-file-list>

            <security-role>
            <role-name>myrole</role-name>
            </security-role>

            <security-constraint>
            <display-name>myrole for myServletClass</display-name>
            <web-resource-collection>
            <web-resource-name>mySec</web-resource-name>
            <url-pattern>/myServletClass</url-pattern>
            <http-method>GET</http-method>
            </web-resource-collection>
            <auth-constraint>
            <role-name>myrole</role-name>
            </auth-constraint>
            <user-data-constraint>
            <description>SSL or MSSL not required</description>
            <transport-guarantee>NONE</transport-guarantee>
            </user-data-constraint>
            </security-constraint>

            <login-config>
            <auth-method>BASIC</auth-method>
            <realm-name>WPS</realm-name>
            </login-config>

            </web-app>
        ```

## Deploy and test the servlet

1. Save your project:  

    1. In the upper-left corner of **Rational Application Developer (RAD)**, select **File > Save**.  

2. Export the EAR file:  

    1. In **Project Explorer**, right-click `myServletEar`.  
    2. Select **Export > EAR file**.  
    3. Choose a destination on your local drive (for example, `C:\temp\myServletEar.ear`).  
    4. Select **Finish**.  
    5. If prompted, select **Yes** to save changes.  

3. Install the EAR file in WebSphere Admin Console:  

    1. Log in to the **WebSphere Admin Console**.  
    2. Go to **Applications > Application Types > WebSphere Enterprise Applications > Install**.  
    3. Select **Choose file**, then browse to `C:\temp\myServletEar.ear`.  
    4. Select **Next > Fast path > Next**.  
    5. Accept the defaults and continue selecting **Next** until the **Finish** option appears.  
    6. Select **Finish**.  
    7. Save the configuration to the **Master Configuration**.  

4. Start the application:  

    1. In **WebSphere Admin Console**, locate `myServlet` under **Applications**.  
    2. Select the check box next to `myServlet`.  
    3. Select **Start**.  

5. Test the servlet:  

    1. Open a new **private browser window**.  
    2. Enter the following URLs (replace `host:port` with your portal server values):  

      ```URL
      http://host:port/myServlet/myClass
      http://host:port/myServlet/index.html
      ```

6. Serve additional files:  

    1. Copy additional files to the following directory on the portal server:  

        ```shell
        <wp_profile_root>\installedApps\(Cell_Name)\myServletEar.ear\myServlet.war\
        ```

        For example, if you copy `myfile.txt` to that location, you can access it at:  

        ```URL
        http://host:port/myServlet/myfile.txt
        ```

    !!! note
        The context used in the URL is the same as the project name.
