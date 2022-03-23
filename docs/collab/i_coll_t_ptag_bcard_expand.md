# Making business card fields expand and collapse 

You can configure the Person card to display the business card fields for a selected name. Users can click a small control to expand the rest of the profile or hide it from view. You enable or disable this control by modifying the showExpandableSection custom property in the WebSphere Integrated Solutions Console.

1.  Select the appropriate console, depending on your environment:

    -   In a stand-alone environment, use the local WebSphere® Integrated Solutions Console.
    -   If running in a cluster, use the console of the Deployment Manager.
2.  Start the WebSphere Integrated Solutions Console by entering the URL in the location field of a web browser:

    http://example.com:admin\_port/ibm/console

    Where example.com is the name of your server and admin\_port is the port assigned to the WebSphere Integrated Solutions Console.

3.  In the navigation, click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

4.  Locate and click the resource **WP PeopleService**.

5.  Under Additional Properties, click **Custom Properties**.

6.  Locate the custom property **showExpandableSection** and set the value as needed:

    `true` enables the control, allowing users to click either **Show More** to expand the business card, or **Show Less** to collapse the business card.

    `false` hides the control.

7.  Click **Apply** and then save the settings.

8.  Restart the portal server.


**Parent topic:**[Collaborative Services API and the person tag ](../collab/i_coll_r_cs_api.md)

