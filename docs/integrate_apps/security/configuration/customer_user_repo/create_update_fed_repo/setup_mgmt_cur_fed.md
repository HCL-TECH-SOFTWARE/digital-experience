# Creating and updating federated repositories

You can define additional repositories as required for the out-of-box federated repositories user registry. For example, you can define one or more databases and/or LDAP directories for the user registry. Federated repositories also let you implement multiple realms. Realms define subsets of users and are spread across multiple repositories. For example, you can define one realm in a file-based repository and another realm in an LDAP directory. Because WebSphere Application Server provides an implementation of the UserRegistry interface for federated repositories out-of-box, you do not need to create a custom implementation of this interface.

-   **[Creating and configuring federated repositories](../security/add_cur_fed.md)**  
Add your custom repository to the default federated repositories. You must implement a custom registry adapter so that HCL Portal can access the repository. After you implement your custom registry adapter, you must define several parameters for your environment and run a task to add your repository to the federated repositories.
-   **[Updating federated repositories](../security/upd_cur_fed.md)**  
You can update the environment parameters you defined when you created the federated repository. You should run the task to update your custom repository if you any environment settings have changed such as the base DN. You can also run the update task if you want to change any settings you specified when you created the repository. For example, run the update task if you want to change support for paging, sorting, and transactions.


