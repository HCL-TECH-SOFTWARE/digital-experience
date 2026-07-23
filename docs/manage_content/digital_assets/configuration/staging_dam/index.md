# Sharing or Staging DAM Assets

The DAM assets can be shared between systems or staged from authoring to other rendering environments. 

Beginning with HCL DX 9.5 Container Update and CF200, HCL Digital Asset Management (DAM) supports the following staging options:

- **[DAM assets sharing](../staging_dam/dam_staging_to_production.md)**  
Sharing DAM between multiple systems to stage and synchronize DAM assets. Use this option if you prefer a low overhead and do not need to have multiple DAM deployments to separate between environments.
- **[DAM staging](dam_subscription_staging.md)**  
Staging and synchronizing DAM assets from an authoring environment (source environment/publisher) to multiple rendering environments (target environment/subscriber). Use this option if you want to manage the DAM deployments separately per environment, especially if you have disparate availability requirements, domain availability, or formal processes to promote assets. Before using DAM staging, review the existing limitations listed in [DAM Staging Limitations](../../limitations/index.md).
- **[DAM Staging Mismatch and Resync](dam_subscription_staging.md)**  
A new feature called DAM Staging Mismatch and Resync is introduced in DAM which helps to find the discrepancies between the environments, view them in a detailed report, and perform resync to ensure the subscriber is in sync with the publisher.
