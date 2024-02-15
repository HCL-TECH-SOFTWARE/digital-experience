# Database sharing between multiple clusters

You might want to support multiple identically configured HCL Portal installations in the same cell for ease of maintenance or failover.

If two independently configured clusters exist within the same cell, each cluster must have its own set of database domains. If two clusters that are identically configured exist within the same cell, all database instances must be shared except the release and JCR database domain. All user-specific and community data is shared between clusters, while each cluster’s static configuration can be independently updated.

## Database settings

When you configure multiple clusters in the same IBM® WebSphere® Application Server cell, special attention must be given to the database settings.

-   Based on your configuration case, determine which database domains you want to share with other clusters in the same cell \(multiple cluster environment\).

    !!! important
        JCR domains and release domains cannot be shared between different clusters or servers. Each distinct cluster or server in your environment must use a separate JCR domain and a separate release domain. For example:

    |Development Server|Authoring Cluster|Staging Server|Delivery Cluster|
    |------------------|-----------------|--------------|----------------|
    |JCR Domain 1|JCR Domain 2|JCR Domain 3|JCR Domain 4|
    |Release Domain 1|Release Domain 2|Release Domain 3|Release Domain 4|

-   Assign the data source names according to what databases are shared between the clusters and what are unique per cluster. A single data source cannot be used for multiple domains if the domains are a mixture of shared and non-shared.
-   Maintain the same number of data sources with identical names when enterprise applications are shared across all clusters in the same cell. The data source bindings in the applications can be resolved on every cluster.
-   When you install the primary node of the next cluster \(Cluster B\), the node can be configured to use the shared database domains. Set the appropriate property values in the wkplc\_dbdomain.properties and wkplc\_dbtype.properties files.

