# Configuring an IBM Business Process Manager task provider instance

This task provider retrieves tasks from IBM Business Process Manager and surfaces them in the Unified Task List portlet.

1.  Log in to HCL Portal as the administrator.
2.  Go to **Applications** \> **Collaboration** \> **Unified Task List**.
3.  Configure single sign-on with LTPA tokens between the HCL Portal and IBM® Business Process Manager servers before you begin this task.

1.  Open the page with the Unified Task List portlet on it.

2.  Select **Configure** from the portlet menu.

3.  On the Configure page, select the **Task Provider Instances** link from the menu.

4.  Select **Add**.

5.  Select **IBM Business Process Manager Standard**.

6.  Enter a name for the new provider and select enable.

7.  Select **Next**.

8.  Modify the **Hostname** and **Port** fields to include the host and port number for your IBM Business Process Manager installation.

9.  Enter one of the following values in the **Filter Criteria** field:

    -   \(STATE=8\) where 8 corresponds to tasks with a claimed state.
    -   \(STATE=2\) where 2 corresponds to tasks in a release state.
    -   \(STATUS=Received\) where Received corresponds to tasks that are available to the current user.
10. Update the value in the **Max results** field if you would like to change the number of tasks that can be returned from the IBM Business Process Manager installation.

11. Select **Save**.

12. Select **Save** and **Back**.


The next step is to configure the Coach portlets included with the Unified Task List portlet.

**Related information**  


[Configuring an IBM Business Process Manager](../integrate/utl_configuring_business_process_manager.md)

