# Multiple-profile support

With multiple profiles, you can work with multiple, independently configured portal instances that run on the same installation.

Starting with Portal Version 7, you can create extra profiles in addition to the default profile. Extra profiles are useful in the following scenarios:

-   Reuse a single installation for multiple, independent portal instances, such as for various test or development efforts.
-   Recover from a configuration problem by deleting the current profile and re-creating it without reinstalling the product.
-   Update a Deployment Manager profile to handle portal servers and thus avoid all the manual preparation steps.

You can generate the following profile types:

-   **portal.default**

    This profile holds a stand-alone portal server in the captured configuration. The server might be used as a stand-alone server or, after federation, as a base for a portal cluster.

-   **managed.portal**

    This profile is enhanced with the portal runtime environment but does not contain any servers. The main purpose of this profile is to use it as a runtime environment for extra cluster members. After the federation of this profile, you can complete standard portal tasks to create a portal server cluster member from an existing cluster template.

-   **management.portal.augment**

    You create this profile by augmenting a standard Deployment Manager profile. The resulting profile holds a deployment manager that is prepared to use with a portal. You can use the portal to federate the other portal profiles immediately without requiring additional manual steps. Because the deployment manager is often on different hardware, you can move this augmentation template to another installation and run it there.


## Search collection and multiple profiles

When you run the enable-profiles or replace-profiles tasks, all saved search collections are captured in the profile template. The search function does not support sharing search collections between multiple profiles. Before you run the enable-profiles or replace-profiles tasks, delete all search collections, including the default search collections to avoid search errors when you create the additional profiles. You can use the backup and restore procedures to preserve the search collections on the original profile or you can use the following export and import steps:

1.  Export the search collections.
2.  Remove the search collections.
3.  If you installed HCL Portal as a non-root user, run the `chmod -R g+rwx /portal\_server\_root` task to modify permissions for the Portal Server directory.
4.  Run the enable-profiles or replace-profiles configuration task to capture the portal configuration in the profile template.
5.  Import the saved search collections from the original profile.
6.  Create profiles with the profile templates. The default search collections are automatically created in the new profile.
7.  Run the `chmod -R g+rx /portal\_server\_root` task to restore permissions to the Portal Server directory.

To share search collections between multiple server instances, you must configure a remote search server that supports sharing search collections.

## Cluster configuration requirements and maintenance
<!-- Presumably, all the information we offer has some level of importance, especially info in sections with a subhead. We can highlight short bits of highly important info with an "Important" note.  -->
Manage all maintenance at the cluster level. During maintenance, take the entire cluster out of service. By working at this level, the cluster-wide changes take effect without affecting user traffic or potentially causing synchronization conflicts. In a continuous availability environment, multiple clusters might be required to allow traffic to continue to one cluster while another is being serviced.

Maintaining an HCL Portal installation with multiple profiles involves  maintaining the product binary files and maintaining each profile instance. All profile instances and the HCL Portal product binary files are updated at the same time to avoid conflicts. If a profile belongs to a cluster and the cluster is updated, the shared HCL Portal product binary files and all other profiles must be updated to maintain synchronization.

If multiple portal profiles with a set of product binary files are part of a cluster, all profiles that share the binary files must belong to the same cluster. This approach provides consistency when you apply maintenance at the cluster boundary.

