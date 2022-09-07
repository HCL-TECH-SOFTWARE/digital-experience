# Staging a virtual portal overview

A virtual portal shares several resources with the main portal installation, especially all the code artifacts and the JVM. When you deploy a portal solution release to a virtual portal, these types of artifacts must not be deployed again.

Redeploying can break the references in other virtual portals. Shared resources must be deployed only to the base portal. It is important that the shared resources are deployed to the base portal before they are referenced from the Virtual Portal. Because of these requirements, staging virtual portals needs to be done in the following sequence:

!!!note
    Follow this sequence if the base portal assembly and the Virtual Portal are the same on the source and target server. For example, the staging server has the base portal, VP1, and VP2. Then, you would stage this information to a production server that also contains the base portal, VP1, and VP2.

1.  Stage the base portal. This step includes the shared and unique resources for the base portal. You can split the Portal Application Archive (PAA) file for the base portal into two components. One is for the unique components and the other for the shared components. When you build the PAA, use the exportUniquePortalPAA=false to export shared artifacts. Or, use exportSharedPortalPAA=false to export the unique artifacts. For more information, see *Parameters to customize the release*.
2.  Stage the unique artifacts for the Virtual Portal. This step is repeated for all Virtual Portals.

If the source and the target server are not structured the same, then modify the sequence. For example, if the original production server is not capable of carrying the entire base portal load, VP1, and VP2, then you create a new production server that contains only VP2.

1.  Stage the shared components of the base portal only.
2.  Stage the unique content (for example VP2) of the required Virtual Portal into the base portal of the new server.

This sequence results in a server with only VP2 content.

!!!note
    Before you run the build-initial-release-paa, and you have created realms to define the user populations, you must create a super realm. In addition to the realms that you create to define the user populations of the individual virtual portals, you must create a super realm. This super realm spans all other realms and contains all the users of those other realms. It is also known as the default realm. To log in to a virtual portal, the virtual portal administrator and all users must be a member of the realm for that virtual portal. To allow a user access to more than one virtual portal, that user, and the Virtual Member Manager node to which the user belongs in the hierarchy of the user directory, must be a member of all the realms associated with these virtual portals. This applies to a super administrator who is responsible for all virtual portals within an entire Portal installation. To administer the virtual portals, the master administrator must be a member of the realms of these virtual portals.

**Related information**  
[Parameters to customize the release](../../staging_to_production/dep_cust_paa.md)

