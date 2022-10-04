# Publishing personalization rules over SSL

HCL Digital Experience Personalization uses the built-in SSL capabilities of WebSphere Application Server to provide secure publishing across unprotected networks.

In some environments even SSL publishing may not be secure enough. The pznload command-line program lets you fully control the transportation of the rules and campaigns during publish. You can encrypt the exported .nodes file and send it using email, or you can use another secure channel such as physical media transported between the staging and production servers.

1.  Enable SSL between the personalization servers.

    To enable Personalization publishing over SSL, see the Personalization Navigator’s inline help: click the question mark, and scroll down to the end of the page to locate the link to the help topic on publishing.

2.  Alter the publish servlet URL for secure publishing.

    If the remote server is not using the default HTTPS port of 443, modify the URL by adding a colon and the port number immediately after the host name.

    ![Altering the publish servlet URL for secure publishing](../publishing_pzn_rules/_img/pzn_screen_publish_servlet.jpeg)

3.  Configure the personalization server from which you will be publishing to use the HTTPS protocol.

    To determine whether a particular URL is valid, point your browser to that location and enter your username and password for the system. If you see the message Publish servlet available and all SSL certificates have been properly imported, you should be able to publish. You can change this URL to redirect all publish jobs through a specific cluster member. If you encounter an error message that indicates the publish service was not available, the local publish servlet may not be configured correctly. To configure the local publish servlet URL:

    1.  Click the **Administration menu** icon. Then, click **Portlet Management > Portlets**.

    2.  Locate the Personalization Navigator portlet in the list.

    3.  Click **Configure portlet** to configure the portlet.

    4.  Add a new portlet parameter whose name is pzn.publishServlet.url and specify the appropriate value.

    ![Configuring the local publish service by adding pzn.publishServlet.url in the New parameter field.](../publishing_pzn_rules/_img/pzn_screen_local_pub.jpeg)


If a Personalization server is configured to use a nonstandard HTTPS port or context root, or if you see messages such as EJPVP20002E: The local publish service was not available when publishing from the authoring environment, the local publish servlet URL might be incorrect.


