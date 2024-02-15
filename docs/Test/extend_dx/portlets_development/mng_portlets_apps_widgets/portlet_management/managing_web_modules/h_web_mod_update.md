---
id: h_web_mod_update
title: Updating a Web module
---




You can install the most recent version of a Web module.

Perform the following steps to update a Web module:

1.  Select **Update Web Module** on the row of the Web module that you want to update.

2.  In the **Directory** text box, enter the file location or click **Browse** to search for it.

    A Web module can only be updated using a WAR file with same name as the originally installed WAR file.

3.  Click **Next** to continue.

4.  Click **Finish** to update, or, at any time, click **Cancel** to quit without saving the changes.


If the `portlet.xml` file of the updated portlet contains new values for administrable portlet properties, such as configuration settings or language-specific titles, these become effective only if the respective property has not been changed after the portlet was initially deployed. For example, the value that was modified by using the **Manage portlets** portlet or in the **Configure** mode of the portlet will override the value from `portlet.xml`.

