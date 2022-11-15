# Re-creating a JCR search collection after it was deleted

The portal installation has the JCR search collection created by default. It is named JCRCollection1. If this collection is removed or does not exist for other reasons, you can re-create the JCR search collection.

-   If you are using a virtual portal, navigate to the Security tab of the content source to verify that the workspace ID of the virtual portal is correct.

-   If the JCR search collection was deleted, run the ConfigEngine task `create-textsearch-collections` to re-create the JCR search collection.

-   If neither of the preceding options succeed in creating the JCR search collection, manually re-create the JCR search collection. Refer to *Setting up a JCR search collection* to view these steps.

