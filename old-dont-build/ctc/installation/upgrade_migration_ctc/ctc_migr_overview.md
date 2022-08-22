# Upgrade and Migration of Content Template

Content Template Catalog 4.4 is an update to Content Template 4.3, 4.2, 4.1.x, 4.0, and 3.x. When installed on an existing system, the newer version updates existing assets and installs new assets.

Do not install Content Template into a production environment without first installing and testing it in a development environment.

Install Content Template 4.4 in a development environment that has a copy of your existing Content Template based solution. Verify that your solution works with the updated assets and make any necessary modifications in advance in the test environment. When testing is complete, transfer the modifications to your staging environment for delivery to the production environment. Plan the delivery of the modifications to coincide with the installation of Content Template 4.4 in the production environment.

## Migration paths

Content Template 4.4 can only be installed on HCL Portal 8.5. Before upgrading an earlier version of Content Template to Content Template 4.4, you must migrate your system to HCL Portal 8.5.

|Current versions|Step 1|Step 2|Step 3|Step 4|
|----------------|------|------|------|------|
|HCL Portal 7.0 with Content Template 3.0|Install the latest cumulative fix for HCL Portal 7.0.0.2|Not required.|Migrate to HCL Portal 8.5 and install CF08 or higher.|Upgrade to Content Template 4.4|
|HCL Portal 8.0 with Content Template 3.1, 4.0, 4.1, or 4.1.1.|Upgrade to HCL Portal 8.0.0.1 and install the latest cumulative fix.|Upgrade to Content Template 4.1.3|Migrate to HCL Portal 8.5 and install CF08 or higher.|Upgrade to Content Template 4.4|
|HCL Portal 8.0.0.1 with CF09 or higher with Content Template 4.1.2 or higher.|Install the latest cumulative fix for HCL Portal 8.0.0.1, if you haven't done so already.|Not required.|Migrate to HCL Portal 8.5 and install CF08 or higher.|Upgrade to Content Template 4.4|
|HCL Portal 8.5 with Content Template 4.2 or 4.3.| | |Install CF08 or higher for HCL Portal 8.5.|Upgrade to Content Template 4.4|

-   **[Upgrade preparation](../ctc/ctc-upgrade-prepare.md)**  
Before you upgrade, you need to prepare your system to be ready to install the new version of Content Template.
-   **[Upgrade installation steps](../ctc/ctc-upgrade-steps.md)**  
Follow these steps to install a new version of Content Template. By upgrading, you can preserve the content that is already created in any existing Content Template sites.
-   **[Post upgrade steps](../ctc/ctc-upgrade-post.md)**  
After you install the most recent version of Content Template Catalog, you will need to complete some additional steps to complete the upgrade.


