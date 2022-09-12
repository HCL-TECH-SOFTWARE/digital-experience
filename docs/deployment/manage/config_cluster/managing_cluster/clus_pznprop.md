# Updating Personalization properties in a cluster

HCL Digital Experience provides two property files that you can modify to customize the Portal Personalization feature. These files are not managed by the deployment manager, so if you make any changes to these files on a node in the cluster, those changes are not transferred to other nodes when you perform a synchronization of the cluster members.

To propagate your changes, manually copy the following properties files to each node in the cluster:

-   wp_profile_root/PortalServer/config/config/services/PersonalizationService.properties
-   wp_profile_root/PortalServer/config/config/services/FeedbackService.properties


