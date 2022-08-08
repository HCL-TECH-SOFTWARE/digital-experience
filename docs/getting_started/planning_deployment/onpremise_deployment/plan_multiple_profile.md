# Multiple profile support

Multiple profiles give you the ability to have multiple, independently configured portal instances that run from the same installation.

Starting with Portal Version 7, it is possible to create extra profiles in addition to the default profile, which is useful in the following scenarios:

-   Reuse a single installation for multiple independent portal instances, such as for various test or development efforts.
-   Recover from a configuration problem by deleting the current profile and re-creating it without having to reinstall the product.
-   Update a Deployment Manager profile to handle portal servers and thus avoid all the manual preparation steps.

The following profile types can be generated:

-   **portal.default**

    This profile holds a stand-alone portal server in the captured configuration. It might be used as a stand-alone server or after the federation as a base for a portal cluster.

-   **managed.portal**

    This profile is enhanced with the portal run time environment but does not contain any servers. The main purpose of this profile is to use it as a run time environment for extra cluster members. After the federation of this profile, the standard portal tasks can be used to create a portal server cluster member from an existing cluster template.

-   **management.portal.augment**

    This profile is created by augmenting a standard Deployment Manager profile. The resulting profile holds a deployment manager that is prepared for use with portal. It can be used to federate the other portal profiles immediately without the need for the additional manual steps. Because the deployment manager is often on different hardware, there is the possibility to move this augmentation template to another installation and run it there.


## Search Collection and Multiple Profiles

When you run the enable-profiles or replace-profiles tasks, all existing Search collections are captured in the profile template. The Search function does not support sharing Search collections between multiple profiles. Before you run the enable-profiles or replace-profiles tasks, either delete all search collections, including the default Search collections to avoid search errors when you create the additional profiles. You can use the backup and restore procedures to preserve the search collections on the original profile or you can use the following export and import steps:

1.  Export the existing search collections.
2.  Remove the existing search collections.
3.  If you installed HCL Portal as a non-root user, run the chmod -R g+rwx /portal\_server\_root task to modify permissions for the Portal Server directory.
4.  Run the enable-profiles or replace-profiles configuration task to capture the Portal configuration in the profile template.
5.  Import the saved search collections on the original profile.
6.  Create new profiles with the profile templates; default search collections are automatically created in the new profile.
7.  Run the chmod -R g+rx /portal\_server\_root task to restore permissions to the Portal Server directory.

If you want to share search collections between multiple server instances, then you must configure a remote search server that supports search collections sharing.

## Important information for cluster configurations

Manage all maintenance at the cluster level. During maintenance, take the entire cluster out of service. Then, the cluster-wide changes can take effect without affecting user traffic or potentially causing synchronization conflicts. In a continuous availability environment, multiple clusters might be necessary to allow traffic to continue to one cluster while another is being serviced.

Maintaining a HCL Portal installation with multiple profiles involves applying maintenance to the product binary files and applying maintenance to each profile instance. All profile instances and the HCL Portal product binary files are updated at the same time to avoid conflicts. If a profile belongs to a cluster and the cluster is updated, the shared HCL Portal product binary files and all other profiles must be updated to maintain synchronization.

If multiple portal profiles with a set of product binary files are part of a cluster, all profiles that share the binary files must belong to the cluster. This approach provides consistency when you apply maintenance at the cluster boundary.

**Parent topic:**[Planning to install HCL Digital Experience](../plan/plan_installation.md)

