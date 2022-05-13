# Managing staging for DAM

This section outlines options to use and manage staging with HCL Digital Asset Management.

Beginning with HCL DX 9.5 Container Update and CF200, HCL Digital Asset Management \(DAM\) supports the following staging options:

-   Sharing DAM between multiple systems to stage and synchronize DAM assets. Use this option if you prefer a low overhead and do not need to have multiple DAM deployments to separate between environments. See [Managing staging to production operations](managing_staging_to_production_operations.md).
-   Staging and synchronizing DAM assets from an authoring environment \(source environment/publisher\) to multiple rendering environments \(target environment/subscriber\). Use this option if you want to manage the DAM deployments separately per environment, especially if you have disparate availability requirements, domain availability, or formal processes to promote assets. See [Using DAM staging](dam_subscription_staging.md).

-   **[Managing staging to production operations](../containerization/managing_staging_to_production_operations.md)**  
If you create an HCL Digital Experience 9.5 container staging server in Kubernetes, do the following steps to publish your Digital Asset Management repository items to a production HCL Digital Experience 9.5 container deployment in Kubernetes.
-   **[Using DAM staging](../containerization/dam_subscription_staging.md)**  
This topic contains the commands that administrators can use to configure the staging of [Digital Asset Management](../digital_asset_mgmt/digital_asset_mgmt_overview.md) \(DAM\) content. This allows you to manage subscriber registration or configure periodic sync.

**Parent topic:**[HCL Digital Asset Management](../digital_asset_mgmt/digital_asset_mgmt_overview.md)

