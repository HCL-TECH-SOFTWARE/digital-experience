# Limitations

## General limitations

- Currently only supports and provides English localization.
- There is no search user interface to search for or discover other users.

## User profiles

- The user profile does not support customization of the layout or makeup and can only be customized via style overrides or script based manipulation of the user profile page.
- There is no rich text editing for long text properties, e.g. the user's professional summary.

## DX business card integration

- The business card web component does not support customization of the layout or content, but can be fully replaced with a custom implementation.

## Virtual Portals

- The people service does not support usage within Virtual Portals.
- The business card web component does not replace the semantic person card within Virtual Portals.

## Integration with existing user directories

- Only a single LDAP server and base DN can be configured for user synchronization. Grouping, scoping or access control based on organizational units or other criteria is not supported.
- User information created in the People Service is not synchronized back to the LDAP server.
- User directories or databases other than LDAP are not supported automatically. Custom development is required to integrate or consolidate results with other user directories.

## Integration with OpenID Connect providers

- The People Service will require an OIDC authentication flow or redirection to be completed to display content. The frequency of this flow can be controlled by the session duration configuration.
- When connecting the People Service directly with OpenID Connect providers, the business card web component requires a login flow to happen before it can display user information.