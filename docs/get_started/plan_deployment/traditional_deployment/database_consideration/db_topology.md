# Database topologies

Consider the database configuration options in relation to your HCL Portal deployment scenario.

HCL Portal data is separated into six portal database domains:
- Release
- Customization
- Community
- JCR
- Feedback
- LikeMinds.
 
The portal database domains facilitate the flexibility that is required to meet different availability requirements. The database topology varies depending on the deployment scenario. A proof-of-concept or development environment has different database topology requirements than a production environment. Review the topologies to determine your portal deployment requirement.

## Local database

For proof-of-concept deployments, demonstrations, and development environments, you can use a local database. You can install the database management software on the same server as HCL Portal. When the database is on the same server as the portal, it is referred to as a local database. Using a local database can make administering your environment easier. A local database competes for server resources with your portal.

In the topology diagram, all the portal database domains are stored in one database, wpsdb.

![Topology diagram depicts a portal server with a local wpsdb database and a detail view of the wpsdb instance.](../../../../images/db_topology_local.jpg)

## Remote database

For typical load balancing, you can use one or more remote databases. You can install the database management software on a different server from HCL Portal. When the database is on a different physical server from the portal, it is referred to as a remote database. Using a remote database can provide performance benefits, depending on the speed of the network.

When multiple lines of production are involved and each line of production is implemented as a cluster of servers, the clusters share portal database domains. Each database domain can be placed on a separate database for efficient maintenance. The release and JCR portal database domains, however, cannot be shared. Sharing database domains refers to concurrent access to the same physical database by multiple lines of production. The following scenario is not supported: a setup in which each line of production owns a copy of the shareable database domains and data replication is used to synchronize these copies.

The topology diagram is similar to the local database topology. The main difference is that the database is on a different server than the portal.

![Topology diagram depicts a portal server with a remote database server and a wpsdb database. It also includes a detail view of the wpsdb instance.](../../../../images/db_topology_remote.jpg)

## High capacity and availability

For high capacity load balancing, use one or multiple remote databases. When you deploy the portal in a large-scale, high-demand environment, you can dedicate a server specifically for database transactions. As more users access the portal, the portal application becomes database intensive. Database activity can demand processor resources and disk I/O time. By separating the database from the server that the portal is running on, you can increase its capacity.

The topology diagram shows a remote database server with four databases. The JCR and release portal database domains have unique databases. They cannot be shared. Also, the release portal database domain cannot be taken offline. Another database contains the customization and community portal database domains. Finally, another database to contain the feedback and LikeMinds portal database domains.

![Database topology for a remote database server with multiple database instances.](../../../../images/db_topology_remote_high1.jpg)

