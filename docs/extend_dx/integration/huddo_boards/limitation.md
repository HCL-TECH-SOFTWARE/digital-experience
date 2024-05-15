# Limitations
Currently, there are some limitations with the Huddo boards and DX.

- The application will not function properly if the context root is changed. 
- The application cannot function with virtual portals. 
- The application is designed to use 'cn' and 'sn' attributes for users and 'cn' attribute for groups from LDAP. If non-standard attributes are used, it may cause issues. Also, note that the application may not work with OIDC flow. 
- The application may have some side effects when used with the Huddo boards on a private page. 
- The application reuses the access control of the page where it is embedded to assign access to the board itself.