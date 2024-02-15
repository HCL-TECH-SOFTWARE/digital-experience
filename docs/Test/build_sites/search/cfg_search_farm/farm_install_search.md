# Configuring JCR search in a portal farm

JCR-based content includes content that is created with Web Content Manager or Personalization.

!!! note
    If you create content in a portal farm with the **Authoring** portlet, extra configuration steps are required. The steps enable content that is created by these content features to be searchable in a farm.

1.  Log in to WebSphere® Integrated Solutions Console.

    **Cluster note:** In a clustered environment, log in to the Deployment Manager WebSphere Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **JCR ConfigService PortalContent** \> **Custom properties**.

3.  Change the value of the jcr.textsearch.enabled property to false.

4.  Change the value of the jcr.textsearch.indexdirectory property to the index directory on the remote search server.

    For example, jcr.textsearch.indexdirectory=\\\\\\\\your\_server\\\\your\_remotesearch\\\\jcr\\\\search. You can specify the directory value in the following format:

    -   **Universal Naming Convention \(UNC\) format**

        \\\\\\\\your\_server\\\\your\_remotesearch\\\\jcr\\\\search

        Example: \\\\\\\\hostname.example.com\\\\share\\\\jcr\\\\search

5.  Based on the configuration of your remote search service, change the jcr.textsearch.PSE.type property to either EJB or SOAP; then choose the appropriate extra steps:

    |Value|Extra steps|
    |-----|-----------|
    |EJB|Complete the following steps if you have an EJB service:    1.  Change the jcr.textsearch.EJB.IIOP.URL property to the URL of the naming service that is used to access the WebScanner EJB; for example iiop://localhost:2811. <br/> 2.  Change the jcr.textsearch.EJB.EJBName property to the name of the WebScanner EJB; for example ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome.|
    |SOAP|If you have a SOAP service, change the jcr.textsearch.SOAP.url property to the SOAP URL of the WebScanner for the search service.|

6.  Save your changes.

7.  Restart your server.

8.  Complete the following steps to delete the default search collections from the Manage Search portlet:

    1.  Log on to HCL Portal as an administrator.

    2.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

    3.  Click **Search Collections**.

    4.  Click the **Delete Collection** icon for the **Portal Content** search collection.

    5.  Click **OK**.

    6.  Restart the HCL Portal server.

    7.  Go to the Manage Search portlet and confirm that the **Portal Content** search collection was deleted.

    8.  Manually create a JCR collection called JCRCollection1; refer to Setting up JCR Search Collection for information.



