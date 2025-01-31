# Prerequisites for the Personalization portlet exercise

This exercise is intended for users with significant HCL Digital Experience administration experience and strong Java Portlet development skills.

## Software requirements

The following software must be installed:

- HCL Digital Experience, including HCL Web Content Manager. You can use the default database or another supported database.
- [Microsoft Visual Studio Code](https://code.visualstudio.com/download){target="_blank"} with [DX Portlet Development Utilities](https://github.com/HCL-TECH-SOFTWARE/dx-portlet-development-utilities){target="_blank"}. No agent controller is required. No WebSphere Test Environment or integrated Portal environment is used in this example. For more information, check the available HCL Digital Experience advanced development course at [HCL Software U](https://hclsoftwareu.hcltechsw.com/){target="_blank"}.  
- [Git or git-bash](https://git-scm.com/downloads){target="_blank"}
- [Maven](https://maven.apache.org/download.cgi){target="_blank"}
- [EJB-ThinClient jar-file from a traditional IBM WebSphere Application Server](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=applications-running-thin-client-enterprise-javabeans-ejb){target="_blank"}. This JAR file is required to compile the project correctly. You need to add a reference of this file into the `pom.xml` file.  
