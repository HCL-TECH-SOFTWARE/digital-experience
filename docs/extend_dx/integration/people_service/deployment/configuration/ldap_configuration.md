# LDAP configuration

Lightweight Directory Access Protocol (LDAP) allows People Service to integrate with an external directory service, typically used in large organizations, to manage and retrieve user information. This integration provides centralized access to user profiles and related data, such as email, phone number, and organizational structure, directly from the LDAP directory. While People Service can function without LDAP, enabling it adds significant advantages, such as centralized user management and consistent user profiles across systems. It also allows access to additional user-related data without needing duplication.

!!! note
    Ensure that the base DN is configured to match the HCL Digital Experience configuration.

To set up People Service with LDAP for user federation, refer to [Configuration - LDAP configuration](../configuration/index.md#ldap-configuration).
