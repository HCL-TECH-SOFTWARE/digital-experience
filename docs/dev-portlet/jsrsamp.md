# Sample portlets

Learn about the sample portlets included with HCL Digital Experience and view the steps to import these samples into IBM Rational Application Developer.

You can get some sample portlets from the portlet catalog. The samples described throughout these topics are available from the portlet catalog by searching for navcode 1WP10017Z. The samples are sorted according to topic:

-   **Basic samples**

    These samples demonstrate the simplest portlet programming structures. These samples are described under the topic about Understanding the basics.

-   **Struts Portlet Framework samples**

    These samples demonstrate how Struts applications can be converted to portlets. These samples are described under the topic about the Struts Portlet Framework.

-   **Cooperative portlet samples**

    These samples demonstrate how portlets can use the property broker to exchange information or properties with each other. These samples are described under the topic about Portlet communication.

-   **Importing the sample portlets into Rational Application Developer**

    Follow these steps to import portlets from the sample package into Rational Application Developer.

    1.  From the menu bar of Application Developer, click **File** \> **New** \> **Project**, and then select the appropriate portlet project. For example, to import jsrViewWorld.war, select **Portlet Project \(JSR 168\)**. The **New Portlet Project** dialog opens.
    2.  Enter a valid project name. For example, jsrViewWorld.
    3.  Clear **Create a portlet**.
    4.  Verify that version of HCL DX is correct. This should match the version you are using.
    5.  Click **Finish**. The new project is created under the Dynamic Web Projects folder in the Project Explorer.
    6.  Right-click the new portlet project and select **Import** \> **WAR file** from the menu. The **Import** dialog opens.
    7.  Enter the location of the source WAR file that you want to import. For example, `C:\rad\portlets\version\jsrViewWorld.war`.
    8.  For **Web project**, select the name of the new portlet project that you just created, for example, `jsrViewWorld`.
    9.  Check **Overwrite existing sources without warning**.
    10. Click **Finish**.
    11. Check the contents of the new portlet project for errors.

