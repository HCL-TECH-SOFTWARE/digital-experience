# Preparing to uninstall

You must prepare your system before you uninstall your HCL Digital Experience environment. For example, add passwords to the properties files. You must also decide to keep or discard the database information.

!!!important "Important cluster note"
    You must issue the *removeNode* command to unfederate a node before uninstalling because HCL Digital Experience cannot uninstall a federated node.

1.  Make a backup of the HCL Digital Experience configuration. Use the XML Configuration Interface.

    !!!important
        If you delete the database, the following information is not backed up and is deleted:

		-   User attributes that are stored in the database and not in the user registry
		-   Credential data that is stored in the default vault implementation

2.  Complete the following steps to remove a node from the cell in a clustered environment:

    !!!note
        Removing a HCL Digital Experience node from the cell does not affect the cluster definition that you originally created for your cluster. The cluster definition remains intact even after you remove all HCL Digital Experience nodes from the cell. In addition, removing a HCL Digital Experience node from the cell does not remove the product's enterprise applications from the deployment manager. The enterprise applications remain and continue to be associated with the cluster definition.

    1.  Log on to the Deployment Manager WebSphere® Integrated Solutions Console.

    2.  Go to **Servers > WebSphere application server clusters > cluster_name > Cluster members**, where cluster\_name is the name of your cluster, click the server that you want to stop, and then click **Stop**.

    3.  Complete the following steps on your dynamic cluster:

        1.  Go to **System Administration > Node groups > node group name > Nodes > Node group members**.
        2.  Select the box for the node to be uninstalled and then click **Remove**.
        3.  Save the changes to the master configuration repository.
        4.  Synchronize the node to be uninstalled.

    4.  Go to **System Administration > Nodes**. Select the node that contains the server that you want to remove from the cell, and then click **Remove Node** to remove the node from the cell.

        !!!important
            Make sure that you choose the **Remove Node** option to remove the node from cell and not the **Delete** option on the **Cluster members** view. The **Delete** option completely deletes the node, which removes the existence of the server from the deployment manager. It does not leave a means for restoring the HCL Digital Experience node to a stand-alone system. Using the **Delete** option can prevent the HCL Portal server from working after it is deleted from the cluster. If **Remove Node** does not successfully remove the node, click **Force Delete** to remove the node.

    5.  Click **Save** to save the changes to the cell's configuration.

    6.  Repeat the previous steps for each node in the cluster and cell that you want to uninstall.

    7.  Complete the following steps if you plan to convert the stand-alone server to a working portal:

        1.  Use a text editor to open the wkplc.properties file.
        2.  Change the value of the CellName property so that it matches the cell name of the node itself.
            -   The cell name for the node reverts to the cell name that was used before you federated the node.
            -   The cell name can be identified by the wp_profile_root/config/cells/cell_name directory on the node, where cell_name indicates the cell to which the node belongs.
        3.  Change the value of the ServerName property to the original HCL Portal server name.
        4.  Ensure that the value of the PrimaryNode property is set to true.
        5.  Save your changes.

3.  Add passwords to the wkplc.properties, wkplc_dbdomain.properties, and wkplc_dbtype.properties files in the wp_profile_root/ConfigEngine/properties directory. You can also specify passwords on the command line.

4.  Decide whether to keep your database to preserve HCL Digital Experience information.

    -   If you keep the database, no further steps are required.

        !!!note
            If you choose to keep the database information, you cannot use it with subsequent installations although you can still access the information through your database software. Also, if you keep the information, you can always delete the HCL Digital Experience databases and database tables later with the database software.

    -   Complete the following steps to remove the information from the database:

        1.  Stop all the servers. For specific instructions, go to [Starting and stopping servers, deployment managers, and node agents](../../../../manage/stopstart.md).
        2.  Open a command prompt and change to the wp_profile_root/ConfigEngine directory.
        3.  Run the ./ConfigEngine.sh remove-schema -DWasPassword=password -Drelease.DbPassword=password -Dcustomization.DbPassword=password -Dcommunity.DbPassword=password -Djcr.DbPassword=password -Dfeedback.DbPassword=password -Dlikeminds.DbPassword=password task.
        
        !!!note
            Some tables remain in the IBM Java™ Content Repository database. Removing the database removes these tables.


-   **[Performing the Uninstall of HCL Digital Experience](uninst_portal.md)**  
If you have a complete and functional uninstallation program, you can uninstall HCL Digital Experience only or both HCL Digital Experience and IBM WebSphere Application Server.


