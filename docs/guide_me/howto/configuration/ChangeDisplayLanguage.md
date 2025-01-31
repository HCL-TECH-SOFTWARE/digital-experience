# How to change the display language in WebSphere Portal log files without changing the locale in OS?

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

When we check WebSphere Portal log files we will see messages are shown in the locale language. Now we want to change the display language without changing the locale in the Operating System. How to do it?

## Instructions

The language of WebSphere Portal Server log files can be overwritten by using Java properties. These properties need to be set into the Generic JVM arguments before restarting target JVM.

Here are steps for changing the display language of Portal log files:

1. Log on to WebSphere Integrated Solutions Console.

2. Navigate to Servers -> Server Types -> WebSphere application servers -> PORTAL_SERVER_NAME -> Java and Process Management -> Process definition -> Java Virtual Machine.

3. Add the parameters below in the Generic JVM arguments:

      `-Duser.language=<language> -Duser.region=<region>`

   For example, to change the language in English:

      -Duser.language=en -Duser.region=US  

4. Click OK and Save to save the changing.

5. Restart the Portal server.

6. Test  

References:

[Setting generic JVM arguments in WebSphere Application Server](https://www.ibm.com/support/pages/setting-generic-jvm-arguments-websphere-application-server)
