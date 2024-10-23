# Managing user properties

The central entity in the People Service are users and their properties. As requirements for user profiles can vary greatly between different organizations, the People Service provides a flexible way to map, configure or extend the user profile with existing data or additional information. 

## User properties

User properties are generally pulled in via federation from user directories and require appropriate mappings to relate the incoming users to existing users and their properties and user data. In addition, the People Service is intended to allow customers to build richer user profiles and allow users to present themselves with more information that may not exist in other parts of the system.

The People Service thus has a baseline of profile attributes that are deemed generally applicable, but also allows extension via custom fields. The following properties are available by default:

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

In general, properties can be editable by the user. In cases where the information is pulled from external sources though, this should be prevented to not run out of sync. So properties can be marked as read-only to prevent users from updating them. 

Properties also have validation that can be simple string/number validation but also more catered email or phone number validations. Also more generally, all properties sanitize user input to prevent XSS attacks and other security vulnerabilities.

## Custom fields

Custom fields are a way to extend the user profile with additional information that is not covered by the default properties. Custom fields can be of any type and can be added to the user profile via the API or the UI. Custom fields can be marked as required or optional and can have validation rules attached to them.

For more information on how to manage custom fields, see the [custom fields](./custom-fields.md) section.
