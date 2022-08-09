# Manual staging to production process

HCL Digital Experience provides two solutions through staging to production; manual and automated. For more information about the automated solution, see Staging to production. The following sections guide you through the manual solution for a stand-alone server. Two stand-alone servers are used to represent a development and production environment, which corresponds to the host name used in the examples.

You can migrate either a stand-alone, single server or a clustered deployment with nodes distributed across multiple servers. The following sections provide a step-by-step experience of staging an environment from development to production with HCL Portal 8.5. It is required and expected that the development and production environments are installed and configured with the same portal release. If you are using multiple DB2® database servers, the DB2 versions must be at the same level to successfully back up and restore the JCR database. Otherwise, a DBA might be required to complete the move across systems.

-   **[Copying the JCR database](../deploy/cpy_jcr_dtb.md)**  
Copy the JCR database that is used on the source environment with the following steps.
-   **[Exporting from source](../deploy/expt_src.md)**  
Export the portal artifacts on the source environment, with XMLAccess and sample scripts.
-   **[Using copy of source JCR database domain](../deploy/using_src_jcr_copy.md)**  
Use the copied JCR database for the target production environment. This process involves modifying the database properties, validating the connection, and connecting to the copied database.
-   **[Importing in target](../deploy/impt_in_trgt.md)**  
Import the base release and remaining portal artifacts on the target. This process includes emptying the portal before you import the source pages, portlets, and other artifacts.
-   **[Validating the environment](../deploy/vldt_envrnmt.md)**  
Validate the portal artifacts on the target \(production\) environment and set up the syndication relationship. This process is a manual validation of the environment. An automated multiple user test on both environments helps find any incomplete configuration steps.

**Parent topic:**[Staging to production](../deploy/dep_intr.md)

