# User synchronization

User synchronization allows the People Service to understand and discover people within an organization. The synchronization leverages the process of user federation, which is described in the [user federation](./user-federation.md) section, to gather user data from external sources and synchronize it with the People Service.

The People Service itself is designed to persist and store user information beyond existing system and enrich the user data with additional attributes and information. For this, it stores the entire user profile in its database, including the federated data, custom fields, profile images and more.

As companies vary in the way they store and manage user data, the People Service provides a flexible way to synchronize user data from different sources and map them into the People Service's data model. Likewise, it enables users to manage their profile and provide details that may not exist in the external sources.

## User Synchronization Job

The user synchronization job is a scheduled task that runs at regular intervals to synchronize user data from external sources with the People Service. The synchronization job is responsible for fetching user data from configured user directories, comparing it with locally stored user profiles, and creating, updating or deleting the profiles as necessary to reflect the most recent information.

The schedule is based on a CRON notation that defines the frequency of synchronization. For more details on the CRON schedule, refer to the [Configuration - user syncronization](../../deployment/configuration_parameters.md#user-synchronization-configuration) section.

As the People Service leverages Kubernetes as its deployment environment and allows horizontal scaling, the synchronization job leverages a database lock to ensure that only one instance of the job runs at a time. This prevents multiple instances of the job from running concurrently and causing data inconsistencies.

The synchronization job logs detailed information about the synchronization process, including the number of users processed, created, updated, skipped, and any errors encountered. This information is valuable for monitoring the synchronization process and identifying potential issues. Refer to [Monitoring and logging](../../administration/monitoring_logging/index.md).
