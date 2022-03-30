# Tools for staging to production 

You can use several tools to stage your server to a production environment.

## Portal application archive \(PAA\)

Each type of artifact can be exported, moved to the target, and imported independently. However, a common archive format does the same tasks. Place all artifacts into the correct location inside the archive file. Copy the PAA file to the target and then use the Solution Installer to deploy it.

For an initial release, the archive file contains all the artifacts that are defined previously. Additional custom components require special handling. The PAA file can be augmented by custom actions that modify the behavior of the Solution Installer as required.

## Syndication

Syndication allows your business users to define the content of your Portal Site through an Authoring system. They can then synchronize the content structure, navigation, and web content documents between the authoring system and the production system. Thus syndication is another way to stage changes from the authoring system to the production system. It defines the source and target of the syndication. The artifacts are moved in the direction from source to target only. Because the business users do the management, the artifacts that can be syndicated are limited to the less critical ones not having the potential to crash the server. Contrary to the PAA process where the release data can be placed on a media that can be moved between the systems, syndication uses an online approach to move changes from one system to another. Thus syndication requires a connection between the systems.

Syndication can be set up between main or virtual portals on different systems or on the same portal system. Because the syndicated pages refer to portlets with the ID of the portlets, an initial staging needs to take place before syndication can be used.

**Parent topic:**[Overview of staging to production ](../deploy/dep_ovr_concepts.md)

**Related information**  


[Publishing and deleting personalization rules using a script](../pzn/pzn_publish_script.md)

[Importing pages or page hierarchies by using the XML Import portlet](../admin-system/adxmltsk_portlets_imp.md)

[The XML configuration interface ](../admin-system/admxmlai.md)

