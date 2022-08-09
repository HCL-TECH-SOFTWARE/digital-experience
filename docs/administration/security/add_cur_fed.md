# Creating and configuring federated repositories

Add your custom repository to the default federated repositories. You must implement a custom registry adapter so that HCL Portal can access the repository. After you implement your custom registry adapter, you must define several parameters for your environment and run a task to add your repository to the federated repositories.

You must create a custom user registry adapter before you create your repository. To create the user registry adapter, implement the wim.Repository interface. Refer to the WebSphere® Application Server documentation for information and instructions.

1.  Perform the following steps to create a federated repository:

    1.  Open wkplc.properties with any text editor from the following directory:

        -   Windows™: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine\\properties
        -   AIX®SolarisLinux™: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties
        -   IBM® i: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties
    2.  Specify values for the following parameters under the **VMM Federated CUR Properties** heading:

        -   federated.cur.id
        -   federated.cur.adapterClassName
        -   federated.cur.baseDN
        -   federated.cur.isExtIdUnique
        -   federated.cur.supportExternalName
        -   federated.cur.supportPaging
        -   federated.cur.supportSorting
        -   federated.cur.supportTransactions
    3.  Save and close wkplc.properties.

    4.  Run the following task from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory:

        -   Windows: ConfigEngine.bat wp-create-cur -DWasPassword=password
        -   AIXSolarisLinux: ./ConfigEngine.sh wp-create-cur -DWasPassword=password
        -   IBM i: ConfigEngine.sh wp-create-cur -DWasPassword=password
    5.  Restart the WebSphere\_Portal server.

2.  Perform the following steps to create custom properties for your federated repository:

    1.  Open wkplc.properties with any text editor from the following directory:

        -   Windows: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine\\properties
        -   AIXSolarisLinux: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties
        -   IBM i: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties
    2.  Specify values for the following parameters under the **VMM Federated CUR Properties** heading in wkplc.properties:

        -   cur.id
        -   cur.name
        -   cur.value
    3.  Save and close wkplc.properties.

    4.  Run the following task from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory:

        -   Windows: ConfigEngine.bat wp-create-cur-custom-property -DWasPassword=password
        -   AIXSolarisLinux: ./ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=password
        -   IBM i: ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=password
    5.  Restart the WebSphere\_Portal server.


**Parent topic:**[Creating and updating federated repositories](../security/setup_mgmt_cur_fed.md)

**Related information**  


[Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md)

[Websphere Application Server Information center: Sample custom adapters for federated repositories examples](https://www.ibm.com/docs/en/was/8.5.5?topic=repositories-sample-custom-adapters-federated-examples)

