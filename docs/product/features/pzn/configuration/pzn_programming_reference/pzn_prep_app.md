# Preparing your personalized application

Before deploying applications that take advantage of the features of Portal Personalization, certain features must be configured in order to work properly. The Feedback and LikeMinds components of Personalization both communicate with their databases using Java data sources. Before using either of these components, you must create resource references to the data sources in your project.

If you are using IBM® Rational® Application Developer to add resource references to the Feedback and LikeMinds data sources, complete the following steps:

1.  From the WAR application WEB-INF/ directory, open the web.xml file. Click the **References** tab. Under the list of defined references, click **Add**.

2.  In the Add Reference panel, select **Resource Reference** and click **Next**.

3.  Complete the following fields in the Add Resource Reference panel and click **Finish**.

    -   **Name:** jdbc/feedback
    -   **Type:** javax.sql.Datasource
    -   **Authentication:** Container
    -   **Sharing scope:** Sharable
    -   **Description:** This field is optional.
4.  In the section marked **WebSphere Bindings**, enter the JNDI name of your Feedback Datasource.

5.  Save the file.


Repeat this process for the LikeMinds data source. Change the name of the reference to jdbc/lmdbDS. All other settings remain the same.

**Parent topic:**[Personalization programming reference](../pzn/pzn_programming_reference.md)

**Parent topic:**[Personalization programming reference](../pzn/pzn_programming_reference.md)

