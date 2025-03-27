# Installing the Pers_Offers portlet  

In this topic, you will learn how to install the Pers_Offers portlet using Microsoft Visual Studio Code (VSCode). You will also learn how to clone, compile, and package the Pers_offers project required to install the portlet.

## Prerequisites

- Ensure you have installed git or git-bash, VSCode, and Maven. Refer to [Prerequisites for the Personalization portlet exercise](./pzn_demoprereq.md){target="_blank"} for more information.
- Ensure to run the following ConfigEngine tasks:
    - UNIX™Linux™:  
        - `./ConfigEngine.sh create-pzndemo-users -DPortalAdminPwd=<password> -DWasPassword=<password>`  
        - `./ConfigEngine.sh install-pzndemo -DPortalAdminPwd=<password> -DWasPassword=<password>`  
    - Windows™:  
        - `ConfigEngine.bat create-pzndemo-users -DPortalAdminPwd=<password> -DWasPassword=<password>`
        - `ConfigEngine.bat install-pzndemo -DPortalAdminPwd=<password> -DWasPassword=<password>`  

## Compiling and packaging the Pers_offers project

Refer to the following steps to compile and package the Pers_offers project in VSCode.

1. Clone the **[Personalization development sample (Pers_Offers)](https://github.com/HCL-TECH-SOFTWARE/DX-Personalization-Development-Sample){target="_blank"}** git repository using the following command:

    ```text
    git clone https://github.com/HCL-TECH-SOFTWARE/DX-Personalization-Development-Sample
    ```  

2. In VSCode, go to this file path:  

    ```text
    \dx-portlet-development-utilities\personalization\Pers_Offers\pers_offers  
    ```

3. Add the `ejb-thin-client` JAR dependencies to the `pom.xml` file of the **pers_offers** project. The `com.ibm.ws.ejb.thinclient_9.0.jar` file is one additional dependency that is needed to compile the project correctly. More information about it can be found on the IBM page [Running the IBM Thin Client for Enterprise JavaBeans (EJB)](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=applications-running-thin-client-enterprise-javabeans-ejb){target="_blank"}.  

    Example to add the `com.ibm.ws.ejb.thinclient_9.0.jar` dependency to the `pom.xml` file:  

    ![Change in pom.xml](./images/ejb_thin_client_pre_req.png)  

4. Compile and package the **pers_offers** project using the Maven plugin in VSCode . This can be done in Visual Studio Code in the `File > Explorer` view. Just expand the `MAVEN` menu and then in the `Lifecycle` section click to `package`. After packaging the project, a`\target\pers_offers-1.0-SNAPSHOT\WEB-INF\lib\pers_offers-1.0-SNAPSHOT.jar` file is created.  

    ![Maven Packaging](./images/maven_packaging_pers_offers.png)  

5. Modify the `pers_offers-1.0-SNAPSHOT.jar` file using tools such as 7-zip to ensure the file only contains the **pers_offers** folder and its Java classes. Remove all other files and directories in the JAR file to ensure that the rule classes are loaded correctly by the Portal runtime.  

    You can also use the Java JAR-Tool to package all classes of the pers_offers folder into a JAR file. Refer to [Java JAR-Tool](https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html){target="_blank"} for more information.  

6. Copy the modified `pers_offers-1.0-SNAPSHOT.jar` file to `\PortalServer\pzn\prereq.pzn\collections`.  

7. Restart the HCL Digital Experience (DX) server.

## Installing the Pers_Offers portlet manually or through the DX client  

As soon as the server restarts, you can install the **Pers_Offers** portlet. You can install the portlet manually, or through the HCL DX client.  

1. Install the **Pers_Offers** portlet:  

    - DX client installation  

        1. In VSCode, open the `tasks.json` file and verify the DXclient command settings to ensure it matches your DX environment settings.  

        2. Click **Terminal** > **Run task...**.  

        3. Click **deploy_OR_Update_Portlet**. A window will appear confirming if the deployment is successful.  

            You can also click **undeploy_Portlet** to undeploy the portlet again.  

    - Manual installation  

        1. Log in to HCL DX as the Portal administrator (wpsadmin).  

        2. Navigate to **Administration** > **Applications** > **Web Modules**.  

        3. Click **Install**.  

        4. Select the `\dx-portlet-development-utilities\personalization\Pers_Offers\pers_offers\target\pers_offers-1.0-SNAPSHOT.war` file and install it.  

2. Create a new page and name it **Pers Offers**.

3. Add the **Pers Offers** portlet.  

!!!note
    - After installing the Pers_Offers portlet, you will not see any personalized information in the portlet because the Personalization rules are not yet installed.  
    - Personalized information only appear for the Personalization sample users and not the Portal administrator (wpsadmin).  
