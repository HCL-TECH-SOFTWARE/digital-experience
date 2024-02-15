# Removing JCR search collections

In your source environment, there are JCR search collections that are prefixed with JCRCollection. Although search collections are covered in a separate section, JCRCollection prefixed collections must be handled differently.

When you migrate search collections, you usually export and delete them from the source environment. Then, proceed with the migration. Finally, import them into the target environment. These steps are covered in detail in the [Migrating Portal search collections](srtmigratcoll.md) section.

For JCRCollection prefixed collections, the process is simpler. You do not need to export, migrate, and import later. Instead, you must delete the JCRCollection prefixed search collections from your source environment before you start with the migration. Migration automatically re-creates the JCR search collection as part of the post-migration activities.


