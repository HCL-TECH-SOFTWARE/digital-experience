# User synchronization

HCL People Service is designed to store user data and enrich it with additional attributes and information. The service stores entire user profiles in its database, including the federated data, custom fields, profile images and more. 

As companies vary in the way they store and manage user data, People Service provides a flexible way to synchronize user data from different sources and map them into the service's data model. It allows users to enhance their profiles and provide details that may not exist in the external sources.

User synchronization leverages the process of [user federation](./user_federation.md) to gather user data from external sources and synchronize it with the People Service.

## User synchronization job

The user synchronization job is a scheduled task that runs at regular intervals to synchronize user data from external sources with People Service. This job fetches user data from configured user directories, compares the data with locally stored user profiles, and modifies the profiles as necessary to reflect the most recent information.

The synchronization process handles user data in batches to ensure efficient processing, even for large datasets. By processing user data in smaller sets, the system can manage large amounts of data without overloading system resources, maintaining smooth performance for organizations with extensive userbases.

The schedule is based on a cron notation that defines the frequency of synchronization. For more details on the cron schedule, refer to the [Configuration - user synchronization](../../deployment/configuration/index.md#user-synchronization-configuration) page.

Since People Service leverages Kubernetes as its deployment environment and allows horizontal scaling, the synchronization job uses a database lock to ensure that only one instance of the job runs at a given time. This prevents multiple instances of the job from running concurrently, which may cause data inconsistencies.

The synchronization job logs detailed information about the synchronization process, including the number of users that were processed, created, updated, and skipped, as well as any errors encountered. This information is valuable for monitoring the synchronization process and identifying potential issues. For more information refer to the [User syncronization monitoring and reporting](./user_synchronization_monitoring_reporting.md) page.
