# Virtual Member Manager integration

HCL Portal uses Virtual Member Manager \(VMM\), an interface that enables communication between HCL Digital Experience and any repository.

The Virtual Member Manager \(VMM\) is an abstract component within the WebSphere® Application Server infrastructure. As the following diagram illustrates, HCL Portal uses the Portal User Management Architecture \(PUMA\) System Programming Interface \(SPI\) to retrieve and set attributes on user objects. PUMA passes these requests to VMM, which then passes the requests on to a corresponding registry adapter that connects VMM to the repository.

![Illustration of HCL Portal interaction with Virtual Member Manager. For more information on this graphic, refer to the text in this topic.](../images/vmm_integration.jpg)

The preceding diagram includes the following components:

-   **Federated repositories**

    An out-of-box implementation of the UserRegistry interface that supports multiple repositories. To communicate with the federated repositories, both WebSphere® Application Server and HCL Portal dispatch all operations to VMM.

-   **VMM SPI**

    VMM offers a Service Provider Interface \(SPI\), wim.Repository, that enables communication with repositories. WebSphere® Application Server uses this SPI to connect to federated repositories. HCL Portal uses this SPI to connect to all repositories.

-   **User registry adapter**

    An implementation of the VMM SPI that enables VMM to connect to a specific repository, whether an LDAP directory, database, files, or other repository. Registry adapters enable communication between HCL Portal and any repository.

    **Important:** You must create a user registry adapter if you plan to use a custom user registry or repository that HCL Portal does not support out-of-box. To create a user registry adapter, implement the wim.Repository interface. Refer to the following topics in the WebSphere® Application Server Information Center for information and instructions:

    -   *Repository SPI \(System programming interfaces for virtual member manager adapters\)*
    -   *Sample custom adapters for federated repositories examples*


**Related information**  


[Managing the user population for virtual portals](../admin-system/advppln_mgupop.md)

