# User privacy and PII

HCL People Service provides a set of features to manage user privacy and personal identifiable information (PII). This section outlines the procedures for handling user data, including the retrieval and erasure of personal information.

## Data privacy

People Service is designed to increase the visibility and accessibility of user information within an organization. As such, it aggregates and stores user data to provide a comprehensive view of people's profiles, skills, and more. This makes it subject to data privacy concerns and best practices.

While the relevance of data privacy may vary depending on the organization's policies and regulations, it is essential to ensure that user data is handled securely and transparently. People Service provides mechanisms to manage user data in compliance with data privacy regulations, such as the General Data Protection Regulation (GDPR).

### Types of user data

User data in People Service can be categorized into two main types:

- Aggregated data: Information that is provisioned from external sources. Refer to the [User provisioning](./user_provisioning/user_federation.md) section for more information.
- User-generated data: Information that users provide directly to People Service, such as profile details or tags.

In the context of data privacy, it is essential to distinguish between these two types of data and ensure that they are handled appropriately. 

You can configure which property is aggregated or allowed to be provided by the user in People Service. Refer to the [Managing user properties](./managing_user_properties/index.md) section for more information. 

### Data storage

The majority of user data in the People Service is stored within the persistence layer of the service, namely a Postgres database. This relates to both aggregated and user-generated data. Ensure that the database configuration follows best practices for data security, such as encryption and access control.

In addition to the database, the People Service may also store user data in mounted volumes. This can include profile photos or information in log files. The mounted volume and path to write to is configurable for individual components.

### User synchronization

People Service synchronizes user data from external sources to maintain an up-to-date view of users within the organization. This process involves mapping and transforming user data from the source system to People Service's data model. Refer to the [User synchronization](./user_provisioning/user_synchronization.md) section for more information.

User data that should be removed from People Service must also be removed from the source system. People Service does not automatically delete user data from external sources. It is the organization’s responsibility to ensure that user data is removed from all relevant systems.

## User data retrieval

Users can access their personal data stored in People Service. The API endpoint `/dx/api/people/v1/people/{id}/privacy/data` can be used to retrieve user data based on the user's identifier. Currently, this endpoint is only accessible to administrators.

The response includes all user data stored in the People Service, including aggregated and user-generated data. The data may be summarized or redacted if they may contain PII of other users.

## User data erasure

Users can request the erasure of their personal data from People Service. The API endpoint `/dx/api/people/v1/people/{id}/privacy/anonymize` can be used to initiate the data erasure process. Currently, this endpoint is only accessible to administrators.

This process anonymizes the user's data by removing all personal information from the People Service. The user's profile is retained, but all PII is replaced with generic or placeholder values, or is removed entirely. The anonymized data is still available for reporting and analytics purposes, but the user's identity is no longer identifiable.

!!!note
    In case of aggregated PII, ensure that the data is also removed from the source system. Otherwise, the data may be synchronized back to the People Service.

An anonymized user profile is also displayed differently in the People Service UI to indicate that the data has been anonymized. This ensures that administrators and other users can easily identify which profiles have been anonymized.