# User properties

The central entity in People Service are the users and their properties. As requirements for user profiles can vary greatly between different organizations, People Service provides a flexible way to map, configure, or enhance user profiles with existing data or additional information.

User properties lets customers build richer user profiles and allows users to present themselves with more information that may not exist in other parts of the system. These properties are pulled in through federation from user directories and require appropriate mappings to relate incoming users to existing users' properties and data. 

People Service has a baseline of generally applicable profile attributes, but also allows extensions through custom fields. The following properties are available by default:

| Property | Type | Description |
| --- | --- | --- |
| id | number | Unique identifier for the user record. This is the primary key in the database. |
| guid | string | Unique identifier for the user object. This is the identifier used in the federation process, typically a UUID or similar. |
| email | string | Email address of the user. |
| organization | string | Organization the user belongs to. |
| displayName | string | Display name of the user. |
| firstName | string | First name of the user. |
| lastName | string | Last name of the user. |
| phone | string | Phone number of the user. |
| streetAddress | string | Street address of the user. |
| city | string | City of the user. |
| state | string | State, province or region of the user. |
| zipCode | string | Zip code of the user. |
| country | string | Country of the user. |
| timeZone | string | Time zone of the user. |
| language | string | Language of the user. |
| role | string | Role of the user. |
| userState | string | Technical state of the user (e.g., active, inactive). |
| created | date | Date the user was created. |
| modified | date | Date the user was last modified. |
| professionalSummary | string | Professional summary of the user. |
| profilePhoto | string | URL to the user's profile photo. |
| customFields | object | Custom fields for the user. |
| dataSource | string | Data source of the user. |
| isAnonymized | boolean | Flag indicating if the user is anonymized. |

## Validation and configuration

In general, users can edit their properties. However, in cases where information is pulled from external sources, user properties should be marked as read-only to prevent syncing issues.

User properties are validated through string/number, email, or phone number authentication methods. These properties also sanitize user input to prevent cross-site scripting (XSS) attacks and other security vulnerabilities.

## Custom fields

You can use custom fields to enhance user profiles with additional information that is not covered by the default properties. These fields can be configured using any data type and can be added to user profiles through the API or the UI. You can also mark fields as required or optional, and attach validation rules to them.

For more information on how to manage custom fields, refer to [Adding and configuring custom fields](./custom_fields.md).
