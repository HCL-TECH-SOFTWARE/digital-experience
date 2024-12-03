# Limitations

## General limitations

- Currently only supports and provides English localization.
- There is no search user interface to search for or discover other users.
- Hybrid deployment is not supported with the CF224 release.

## User profiles

- Customizing the layout or makeup of user profiles is not supported. User profiles can only be customized through style overrides or script-based manipulation of the user profile page.
- Rich-text editing for long text properties such as a user's professional summary is not supported.

## DX Business Card integration

- Customizing the layout or content of a Business Card web component is not supported, but can be fully replaced with a custom implementation.

## Virtual Portals

- People Service cannot be used within Virtual Portals.
- The Business Card web component does not replace the semantic person card within Virtual Portals.

## Integration with existing user directories

- Only a single LDAP server and base DN can be configured for user synchronization. Grouping, scoping, or access control based on organizational units or other criteria is not supported.
- User information created in People Service is not synchronized back to the LDAP server.
- User directories or databases other than LDAP are not supported automatically. Custom development is required to integrate or consolidate results with other user directories.

## Integration with OpenID Connect providers

- People Service requires an OIDC authentication flow or redirection to be completed to display content. The frequency of this flow can be controlled by the session duration configuration.
- When connecting People Service directly with OpenID Connect providers, the Business Card web component requires a login flow to occur before it can display user information.