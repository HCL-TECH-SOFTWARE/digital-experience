# Adding secondary nodes to a clustered environment

The standard process of adding HCL Portal server nodes to a cluster is to set up a stand-alone HCL Portal server with the correct database settings, and run the enable-profiles task to generate profile templates that can be used to create the secondary node profiles. However, there is a limitation with the enable-profiles task and it cannot be run in a clustered environment.

To create additional secondary nodes after you migrate a cluster, you must create a stand-alone HCL Portal server that is the same version of the migrated HCL Portal cluster, and run the enable-profiles task on that server.

**AIX and Linux only:** If you installed HCL Portal as a non-root user, run the `chmod -R u+rwx PortalServer_root/` task to modify permissions for the Portal server directory before you begin. Then, run the `chmod -R u+rx PortalServer_root/` task to restore the non-root permissions to the Portal server directory when you complete the following steps.

!!!warning
    The connect-database configuration task does not preserve customizations to the data sources for the HCL Portal databases. If you previously tuned your data sources for the HCL Portal databases, make a note of the settings, run connect-database, and reapply the tuning after you run the configuration task.

Complete the following steps on the stand-alone server:

1.  Install a stand-alone HCL Portal server that is the same version of the migrated HCL Portal cluster.
2.  Update the database settings to match the settings of the cluster database configuration, and run the ConfigEngine validate-database task to verify that the settings are correct.
3.  Run the ConfigEngine connect-database task to update the WebSphere® data source configuration of the stand-alone server.
4.  Run the ConfigEngine enable-profiles -DWasPassword=password task from the profile on the stand-alone server you installed. This command creates a configuration archive (CAR) file that is used to create extra HCL Portal profiles. The Portal.car file is saved to the PortalServer_root/profileTemplates/default.portal/configArchives directory.

    !!!note
        If you configured HCL Portal for a remote database and placed your database drivers inside of the wp_profile_root/PortalServer directory, they are included in the configuration archive file that is created when you run the enable-profiles script. If the database drivers are outside of wp_profile_root/PortalServer, make sure that you copy them to any additional nodes that you are creating.

5.  Run the ConfigEngine package-profiles -DWasPassword=password task to compress the profileTemplates directory and create a profileTemplates.zip file in the PortalServer_root/profileTemplates directory.

Complete the following steps on the secondary node:

1.  Install the HCL Portal server binary-only on the secondary node machine.
2.  Access the Configuration Wizard. Go to: http://your_server:10200/hcl/wizard.

    !!!note
        If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your_server:10200/hcl/wizard.

3.  Click **Set Up a Cluster > Create an Additional Cluster Node** and following the instructions to create the secondary node profile, and add it the cluster.

    !!!note
        For the **Install profile templates** manual step, you must copy the profileTemplates.zip from the stand-alone server that you installed and ran the enable-profiles task on, not from the primary node.



???+ info "Related information"  
    -   [Multiple cluster environments](../../../../../../deployment/manage/migrate/planning_migration/migration_consideration/mig_plan_clusters.md)

