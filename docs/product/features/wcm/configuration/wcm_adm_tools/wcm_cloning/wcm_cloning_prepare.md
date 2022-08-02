# Cloning preparation

You must prepare your source and target systems before a web content repository is cloned.

-   Disable both search and syndication in your source and target systems before you begin the cloning procedure.
-   The source and target environments must be on the same version and fix level
-   Ideally the source and target environments use the same LDAP
-   If the target server already contains data:
    -   If you need to use this data later, ensure that you take a backup of the target environment before cloning.
    -   Note down the syndicator and subscriber setups. The syndication setup on the target environment is lost during the cloning process, and needs to be re-created.
    -   Note down the library access control setup. Library access levels for target environment are lost during the cloning process, and need to be reapplied.

## Oracle databases

When you set up an Oracle database for JCR, you must have a separate physical Oracle database for each JCR repository. This setup makes it easy to copy a JCR repository from one system to another. If you do choose to store all of your JCR repositories in a single database, then you must use different schema names for each system. HCL Portal does not support more than one instance of HCL Portal running against a single JCR database or schema.

**Parent topic:**[How to clone a web content repository](../wcm/wcm_cloning.md)

