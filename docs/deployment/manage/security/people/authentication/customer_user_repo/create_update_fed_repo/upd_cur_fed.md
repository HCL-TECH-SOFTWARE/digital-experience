# Updating federated repositories

You can update the environment parameters you defined when you created the federated repository. You should run the task to update your custom repository if you any environment settings have changed such as the base DN. You can also run the update task if you want to change any settings you specified when you created the repository. For example, run the update task if you want to change support for paging, sorting, and transactions.

To update a federated repository, do the following:

1.  Open wkplc.properties with any text editor from the following directory:


    -   Windows™: [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)\\ConfigEngine\\properties
    -   AIX®SolarisLinux™: [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties
    -   IBM® i: [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties

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


4.  Run the following task from the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory:


    -   Windows: ConfigEngine.bat wp-update-federated-cur -DWasPassword=password
    -   AIXSolarisLinux: ./ConfigEngine.sh wp-update-federated-cur -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-update-federated-cur -DWasPassword=password

5.  Restart the WebSphere\_Portal server.



???+ info "Related information"
    - [Starting and stopping servers, deployment managers, and node agents](../../../../../stopstart.md)


