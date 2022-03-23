# Configuring a search collection 

Search Collections use a seedlist framework to crawl and index all of the HCL Connections data locally on an HCL Portal server.

To configure a search collection, you specify one content source for each HCL Connections seedlist. Each HCL Connections service \(for example, Profiles, Communities, or Blogs\) displays its own seedlist so there is one content source per HCL Connections service.

**Important:** Ensure that these HCL Connections seedlist are available with basic authentication. Depending on your security configuration, basic authentication might be the default or can be accomplished with an additional virtual host in your HTTP Server, by addressing a WebSphere node directly, or by altering Security Access Manager or eTrust SiteMinder configuration to open a basic authentication protected endpoint.

1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

2.  In the Manage Search section, click **Search Collection**.

3.  Click **New Collection**.

4.  Define the location of the collection on the portal file system and name it with an easily identifiable value.

5.  Click **OK** to create the collection and create the associated folders and files on the file system.

    **Note:** The path must not point to an existing directory.

6.  Click **Collection** to view the metadata of the collection created.

7.  For each Connections service that you want to integrate with Portal search, do the following steps:

    1.  Click **New Content Source**.

    2.  Select **Seedlist Provider** as the Content source type.

    3.  Provide the name and the seedlist URL of the HCL Connections service.

        A seedlist URL has the form: https://<connection\_server\_name\>:port/<service\_name\>/seedlist/myserver For example: https://connections.ibm.com:9444/activities/seedlist/myserver.

        **Note:** If HCL Connections is configured to use Security Access Manager and SPNEGO security, or just SPNEGO, configure the seedlist URL and host without Security Access Manager, by using IHS host only.

    4.  Click the **Security tab** and enter your HCL Connections administrator credentials so that you can access the service seedlist URL, then click the **Create** button.

    5.  Click **Create** to create the corresponding Content Source to enable crawling over the specified service.

    6.  Create other HCL Connections services,

        For example, Activities, or Blogs, by repeating these steps.

        **Note:** You can either select to run the crawler on the complete set or on individual service


**Parent topic:**[Configuring search integration ](../connect/connections_portlets_search_overview.md)

