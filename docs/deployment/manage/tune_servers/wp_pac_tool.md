# Optimizing Portal Access Control

With HCL Web Content Manager, inheritance of access control is from a parent to a child. Inheritance can performs better than explicit access control.
If you notice HCL Web Content Manager performance issues with a large amount of resources and suspect an issue with access control, check your libraries for explicit role assignments. With explicit role assignments, you might see something like resource 1 is a parent of resource 2 and both have the same role assignments. If you find explicit duplicated role assignments, run the Portal Access Control Optimizer task to eliminate the redundant mappings and take advantage of inheritance.

Note that this can manifest both as occasionally slow DX Portal performance or occasionally high load on the database server for DX Portal. This is due to the access control being recorded in particular rows of the database which can become quite large.

Check all of your libraries for explicit role assignments. You can run the optimizer per library by specifying the root resource ID or you can run it for all libraries.

!!!note

    In some cases, the Portal Access Control optimizer task will not update Web Content Manager access control settings. This is true if if access control for a content item is set via a workflow. The optimizer will report "success" for updating the Web Content Manager item when access control is set in a workflow, even if the access control settings have not changed.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Go to **Resources > Resource Environment > Resource Environment Providers**.

3.  Click **Custom properties** and then select **WP AccessControlService**.

4.  Configure the following parameters:

    -   `accessControlConfig.enablePropagationBlockDeletion`: The default setting is false. Change to true to remove propagation blocks for a resource where all the children have the same principals \(Users and Groups\) as the parent but the parent has **blocked** permissions.
    -   `accessControlConfig.enablePrivatePageOptimization`: The default setting is true, which optimizes access control for private pages that users created.

5.  Go to **Resources > Resource Environment > WP_ConfigService**.

6.  Configure the following parameter:

    -   `pac.optimizer.use.wcm.apis`: The default setting is false. Change to true to update Web Content Manager content items to allow inheritance and use of access control when the Portal Access Control Optimizer task is run.

7.  If you made any changes, save your changes. In a clustered environment, sync the nodes. Then, restart the Portal server(s).

8.  Create an XML file with the following code as an example:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <request
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="PacOptimization.xsd"
        report-only="false\|true"
        rootResource="root\_resource\_ID\_or\_blank">
    </request>
    ```

    Consider the following setting options before you save your XML file:

    -   `report-only`: Set the value to true to have the optimizer return the number of changes that are required to the PAC tables. Set the value to false to have the optimizer update the PAC table.
    -   `rootResource`: Set this value to a custom unique name, a Web Content Manager UUID, or leave blank. If you leave this field blank, the Optimizer starts at the root of the resource tree and might take a longer time to run.
    
    !!!note
    
        If you want a report of every place that might have explicit role assignments, set report-only to true and leave rootResource blank.

9.  Open a command prompt and change to the *wp_profile_root/PortalServer/bin* directory.

10. Run the following task to optimize the portal access control:

    -   AIX®, HP-UX, Linux™, Solaris: `./xmlaccess.sh -user userID -password password -in filename.xml -out /tmp/name\_of\_report.xml`
    -   IBM® i: `xmlaccess.sh -user userID -password password -in filename.xml -out /tmp/name_of_report.xml`
    -   Windows™: `xmlaccess.bat -user userID -password password -in filename.xml -out /tmp/name_of_report.xml`
    -   z/OS®: `./xmlaccess.sh -user userID -password password -in filename.xml -out /tmp/name_of_report.xml`

11. Remove the `accessControlConfig.enablePropagationBlockDeletion` and `accessControlConfig.enablePrivatePageOptimization` parameters previously configured. The parameters do not impact runtime operations because they are only used by the WCM PAC Optimizer tool. You can choose to keep the parameters if you plan to run the tool in the future on the same Portal environment.
