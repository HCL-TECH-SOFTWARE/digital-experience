# How to change the display language in HCL Digital Experience log files without changing the locale in OS?

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

When the HCL Digital Experience log files will be reviewed, messages are shown in the locale language. How can the display language been changed, without changing the locale in the Operating System?

## Instructions

The language of the HCL Digital Experience log files can be overwritten by using Java properties. These properties need to be set into the Generic JVM arguments before restarting target JVM.

Steps for changing the display language of HCL Digital Experience log files:

1. Log on to IBM WebSphere Integrated Solutions Console.  

2. Navigate to `Servers > Server Types > WebSphere application servers > <PORTAL_SERVER_NAME> > Java and Process Management > Process definition > Java Virtual Machine`.

3. Add the parameters below in the Generic JVM arguments:

      `-Duser.language=<language> -Duser.region=<region>`

   For example, to change the language in English:

      -Duser.language=en -Duser.region=US  

4. Click OK and Save to save the changing.

5. Restart the HCL Digital Experience environment.

6. Test  

Reference:
[Setting generic JVM arguments in WebSphere Application Server](https://www.ibm.com/support/pages/setting-generic-jvm-arguments-websphere-application-server)
