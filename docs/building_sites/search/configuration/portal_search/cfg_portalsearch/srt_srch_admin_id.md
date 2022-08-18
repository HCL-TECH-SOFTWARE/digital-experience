# Replacing the search administrator user ID

If you changed the portal administrator user ID or password, you need to update the search administrator user ID to match the same values.

Proceed as follows:

1.  Complete the following steps to change the information stored in the **SearchAdminUser** alias:

    1.  Log in to the WebSphere® Integrated Solutions Console.

    2.  Click **Security** \> **Global security**.

    3.  Under Authentication, click **Java Authentication and Authorization Service** \> **J2C authentication data**.

    4.  Edit the **SearchAdminUser** alias.

    5.  Update the user ID and/or password to match your HCL Portal administrator information.

2.  To make sure that the changed administrator user ID takes effect, use one of the following two options:

    -   Change the administrator user ID and the password by using the Manage Search administration portlet.
    -   Delete the default portal search services and collections. After a portal restart as by the next step, the portal recreates these search services and collections.
3.  Restart the HCL Portal servers.


**Parent topic:**[Administering Portal Search](../admin-system/srtadmsrch.md)

