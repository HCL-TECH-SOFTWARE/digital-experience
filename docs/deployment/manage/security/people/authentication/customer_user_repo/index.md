# Setting up custom user repositories

A custom user repository is any repository that HCL Portal does not support out-of-box. However, you can configure HCL Portal to support any type of repository in a federated or stand-alone user registry, whether an LDAP directory, database, file system, and so on. Setting up custom user repositories involves tasks such as defining additional repositories to the default federated user registry, creating a custom stand-alone user repository, and updating your user repository to reflect changes in your environment. Learn what steps are required to create and update custom user repositories and what specific interfaces you must implement to enable communication between HCL Portal and a repository.

A user registry is an implementation of the UserRegistry interface in WebSphere® Application Server. The following user registries are available out-of-box:

-   **Federated Repositories**

    An implementation of the UserRegistry interface that supports multiple repositories. To communicate with the federated repositories, both WebSphere® Application Server and HCL Portal dispatch all operations to VMM.


HCL Portal accesses all user repositories through VMM. HCL Portal uses the Portal User Management Architecture \(PUMA\) System Programming Interface \(SPI\) to retrieve and set attributes on user objects. PUMA passes these requests to VMM, which then passes the requests on to a corresponding registry adapter that connects VMM to the repository. For this reason, registry adapters are required to enable communication between HCL Portal and any repository.

**Important:** You must create a user registry adapter if you plan to use a custom user repository. To create a user registry adapter, implement the com.ibm.wsspi.wim.Repository interface. Refer to the following topics in the WebSphere Application Server documentation for information and instructions:

-   *Repository SPI \(System programming interfaces for virtual member manager adapters\)*
-   *Sample custom adapters for federated repositories examples*

-   **[Creating and updating federated repositories](../security/setup_mgmt_cur_fed.md)**  
You can define additional repositories as required for the out-of-box federated repositories user registry. For example, you can define one or more databases and/or LDAP directories for the user registry. Federated repositories also let you implement multiple realms. Realms define subsets of users and are spread across multiple repositories. For example, you can define one realm in a file-based repository and another realm in an LDAP directory. Because WebSphere Application Server provides an implementation of the UserRegistry interface for federated repositories out-of-box, you do not need to create a custom implementation of this interface.


**Related information**  


[Websphere Application Server Information center: Sample custom adapters for federated repositories examples](https://www.ibm.com/docs/en/was/8.5.5?topic=repositories-sample-custom-adapters-federated-examples)

