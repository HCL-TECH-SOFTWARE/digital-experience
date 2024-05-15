# Limitations
Currently, there are some limitations with the Huddo boards and DX. The Huddo and DX teams are working on improvements in upcoming releases.

- The application will not function properly if the Core context root is changed from /wps to something else or removed. 
- The application cannot function in virtual portals. It will only work in the base virtual portal.
- The application is designed to use 'cn' and 'sn' attributes for users and 'cn' attribute for groups from LDAP. If non-standard attributes are used, it may cause issues. Also, note that the application may not work with OIDC flow. 
- The application may have some side effects when using Huddo boards with a private page due to access control checking. 
