# Limitations
Currently, there are known limitations with Huddo Boards integration in certain HCL Digital Experience (DX) deployment configurations. The ISW and DX teams are working on improvements to close these gaps in future releases:

- The Huddo Boards application will not function properly if the Core context root is changed from `/wps` to something else or is removed.
- The Huddo Boards application does not recognize virtual portals. It only works in the base portal context.
- The Huddo Boards application is designed to use 'cn' and 'sn' attributes for users and 'cn' attribute for groups from LDAP. If non-standard attributes are used, it will cause issues. Also, note that the application will not work with OIDC flow.
- The Huddo Boards application will have some side effects if the portlet is placed on a private page because of the way Huddo Boards evaluates and uses the DX access control model.
