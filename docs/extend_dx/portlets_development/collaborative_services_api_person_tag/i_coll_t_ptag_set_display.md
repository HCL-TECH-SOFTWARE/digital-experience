# Setting display duration for the Person card

You can configure the Person card to display longer than the default number of milliseconds by modifying the personTagTimeout custom property in the WebSphere Integrated Solutions Console.

1.  Select the appropriate console, depending on your environment:

    -   If running stand-alone, use the local WebSphere® Integrated Solutions Console.
    -   If running in a cluster, use the console of the Deployment Manager.
2.  Start the WebSphere Integrated Solutions Console by entering the URL in the location field of a Web browser:

    http://example.com:admin\_port/ibm/console

    where example.com is the name of your server and admin\_port is the port assigned to the WebSphere Integrated Solutions Console.

3.  In the navigation, click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

4.  Locate and click the resource **WP PeopleService**.

5.  Under Additional Properties, click **Custom Properties**.

6.  Locate **personTagTimeout** and then set its value in milliseconds.

7.  Click **Apply** and then save the settings.

8.  Restart the portal server.



???+ info "Related information"
    - [People awareness](https://help.hcltechsw.com/digital-experience/9.5/collab/i_coll_c_people_aw.html)
    - [WebSphere® Integrated Solutions Console](../../../deployment/manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)

