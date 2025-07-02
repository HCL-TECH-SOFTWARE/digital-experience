# Create a servlet to serve static files using Rational Application Developer

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

In some situations a separate servlet url context is required to serve static files. This servlet and associated files should not be affected during portal maintenance/fixpack applications.

## Instructions

1) Open Rational Application Developer (RAD). In this case version 9.7 was used.

2) Go to File > New > Web Project

3) Set Project name = "myServlet"

4) Select "Simple" Project Template > Select "Java EE" Programming Model > Next

5) Accept defaults under "Deployment" project settings and click Finish

6) In the left column of RAD, right mouse on "myServlet" and select > New > Servlet > (Java package name is arbitrary, for example "co7.hcl.myservlet") Set Class name = "myClass". Click Finish

7) Expand myServlet > Java Resources > src > com.hcl.myservlet.  Click on myClass.java. Add this line of code to the doGet method in myClass.java :

    ```java
    "
    response.getWriter().print("Hello from myServlet");
    "
    ```

8) In the left column of RAD, expand myServlet > right mouse on "WebContent" > New > File. Set the File name = "index.html". Select the "source" tab and paste these contents into the lower pane: "Hello from the myServlet index.html"

9) In the left column of RAD, expand myServlet > WebContent > Right mouse on WEB-INF > new file.  Set the Name = "web.xml".  Click on the "source" tab in the right pane (for the contents of web.xml) > paste in these contents :

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

10) In RAD upper left > File > Save

11) In the left column of RAD, right mouse on "myServletEar" > Export > Ear file.  Select a destination on your local hard drive eg: c:\temp\myServletEar.ear.  Click Finish. Answer Yes to any prompts to save changes

12) Login to your WebSphere Admin Console and go to Applications > Application Types > WebSphere Enterprise Applications > Install.  Choose file.  Select c:\temp\myServletEar.ear Click Next > Fast path > Next > accept defaults > Next > accept defaults > Next > accept defaults > Next > Finish. Click save to Master Configuration.

13) Locate "myServlet" under Applications in WebSphere Admin Console.  Click the box next to "myServlet" .  Click the "Start" button.

14) Open a new private browser window and paste in these urls (modified for your portal server host:port) :

`http://host:port/myServlet/myClass`

`http://host:port/myServlet/index.html`

Note you can copy additional files to this location on the portal server to be served by the same servlet:

`....\<profile root)\installedApps\(Cell_Name)\myServletEar.ear\myServlet.war\`

eg if you copy myfile.txt to that location, you can render the file using url:

`http://host:port/myServlet/myfile.txt`

Note the context used in the url is the same as the project name.
