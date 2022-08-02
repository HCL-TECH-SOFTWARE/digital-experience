# Localizing the task list filters

When creating new filters, it is recommended that you know before hand which filters you need to create and then create filters all at once. Creating all filters at once minimizes the times you must restart the server. The restart is required to update the filter resource bundles on the file system with the new filters and include them on the class loader. A WebSphere Application Server variable must also be created to define the name of the resource bundle to use for the localized filters.

1.  Access the WebSphere® Integrated Solutions Console.

2.  Navigate through **Resources** \> **Resource Environment** \> **Resource environment providers** \> **WP ConfigService** \> **Custom properties**.

3.  Click **New**.

4.  Enter processintegration.filtersetresourcebundle in the **Name** field.

5.  Enter the name of your resource bundle in the **Value** field including the complete package name. For example: If your file is stored under shared/app/your\_company/filterlocales\_en.properties you would enter your\_company.filterlocales.

6.  Click **Apply**.

7.  Click **OK** and then **Save to the master configuration**.

8.  Place your resource bundles in the shared/app/your\_company directory.

9.  Restart the portal server.

10. Open the filter configuration page of the Unified Task List portlet and add the new filters as they were entered in the English version of the resource bundle. The **Name** field must match the value of the resource key and the **Resource key** field must match the key used for the property in the resource bundle.


**Parent topic:**[Configuring Unified Task List portlet at run time](../integrate/utl_configuring_unified_task_list_at_runtime.md)

