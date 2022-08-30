# Selecting web content libraries

You can select which libraries are displayed by default in the authoring portlet.

1.  Select **Show selected libraries** to select the libraries you want to make visible in the authoring portlet.

    1.  To add a library, select a library from the list of available libraries, then click **Add**.

    2.  To remove a library, select a library from the list of selected libraries, and then click **Remove**.

    3.  Use the arrows to change the order of the selected libraries. This selection determines the order that the libraries appear in the authoring portlet.

2.  Select **Show new libraries in the library explorer** if you want any newly created libraries to automatically be shown in the library explorer.

3.  Alternately, to make all libraries visible in the authoring portlet, select **Show all libraries**. You can then select individual libraries to hide in the authoring portlet.

    1.  To hide a library, select a library from the list of available libraries, and then click **Add**.

    2.  To remove a library from the list, select a library from the list of selected libraries, and then click **Remove**.


**Configuring or editing shared settings of an authoring portlet:**

Libraries that are selected by using the "configure" view are available on all instances of the authoring portlet, regardless of the page on which the portlet appears. Libraries that are selected with the "edit shared settings" view are only available for the current instance of an authoring portlet.

The libraries available in the "insert links" and "insert images" dialogs are based on the libraries that are selected in the "configure" view. If you select a library that is not selected in the "configure" view, you cannot select items from this library in the "insert links" and "insert images" dialogs.

You can select libraries specifically for the "insert links" and "insert images" dialogs by following these steps:

1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.
2.  Search for the page with the unique name of com.ibm.wps.hiddenpage.wcm.Authoring\_Portlet.
3.  Edit the page layout.
4.  Edit the shared settings of the web Content Authoring portlet.
5.  Select the required libraries and click **OK**.
6.  Click **Done**.

**Note:**

If you syndicate or import a library, it is not automatically added to the list of configured libraries for an authoring portlet on the target server. You must add the syndicated or imported library to each authoring portlet on each server.


