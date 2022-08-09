# Auto-detecting user mail information from a secondary LDAP server

You can set the Lotus Collaborative Services in the portal to detect users' mail file information from an additional \(secondary\) non-Domino LDAP user directory. For example, you may need to configure two directories if your organization has one for customers and one for employees.

The secondary LDAP directory server is specified for the property `CS_SERVER_DOMINO_DIRECTORY_1.custom_ldap_host`.

Modify the `CSEnvironment.properties` file.

The following example shows the syntax with comments.

```
# Optional advanced settings 
# The following fields are disabled, by default.
# If it is enabled (determined by custom_ldap_host) and a different server is specified,
# The following user information will be retrieved from this secondary server.
# Mail Server,  Mail file and Email address 
#   
#CS_SERVER_DOMINO_DIRECTORY_1.custom_ldap_host=my.server.com
#CS_SERVER_DOMINO_DIRECTORY_1.custom_ldap_port=389
#CS_SERVER_DOMINO_DIRECTORY_1.custom_ldap_ssl=true
#CS_SERVER_DOMINO_DIRECTORY_1.custom_ldap_searchBase=base

```

**Parent topic:**[Collaborative Services environment properties](../collab/i_domi_c_csenvironment_props_intro.md)

