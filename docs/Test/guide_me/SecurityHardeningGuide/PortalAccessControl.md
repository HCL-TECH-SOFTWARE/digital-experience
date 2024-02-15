# Portal Access Control

HCL Digital Experience provides granular [access control](https://help.hcltechsw.com/digital-experience/8.5/admin-system/control_access.html) on its resources. The access control model allows role mappings to propagate down the resource hierarchy, allows you to override this propagation, and allows group members to inherit role mappings from their groups.

[Managed Pages](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_mngpages_advadmin.html) provides methods of adjusting access controls during page authoring and publishing life cycle through projects and workflows.

Access to [Web Content Manager](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_security.html) libraries and content is managed independently of HCL Digital Experience resources.

Collectively, these provide a powerful and dynamic framework for managing access within your application. However, due to the complexity of the access control model, you should carefully analyze how you use it.

Adhere to the principle of least privilege when assigning access rights. Assign each user or group only the minimal roles needed to do their job. For example, if a user needed a customized copy of a page, then the Privileged User role on the page would be appropriate. The User role would not be appropriate, since that would not permit customization. The Administrator role would not be appropriate, since that would allow the user to delete the page for all users.

## Recommended actions and considerations 

- What functional roles do users have within your application? Define groups in your user repository that represent these functional roles. Map these groups to roles on HCL Portal and Web Content Manager resources, as needed. Such direct, simple associations make it easier to understand the role mappings, thus minimizing the potential for human error which could expose resources to unauthorized users. 

- Add users to these groups, as needed. 

- Establish a process of periodically reevaluating group membership (e.g. as employees change departments or leave companies). 

- Do not share login IDs among different users. This is particularly important for auditing. For example, multiple administrators should have their own administrative accounts rather than sharing the wpsadmin ID. They will have equivalent access as the portal administrator, providing they are all members of the administrative group (the various *.admingroup property values in the [Access Control Data Management Service](https://help.hcltechsw.com/digital-experience/8.5/admin-system/srvcfgref_secy_pac_datamgmt.html)). 

- If you have a federated repository, and if users in a single functional role span multiple LDAPs, then consider using [application groups](https://help.hcltechsw.com/digital-experience/8.5/security/app_group.html) to simplify group structures. Likewise, if you have a read-only LDAP. 

- Study the [resource hierarchy](https://help.hcltechsw.com/digital-experience/8.5/security/sec_resources.html) and [role hierarchy](https://help.hcltechsw.com/digital-experience/8.5/security/sec_roles.html) and consider the implications of inheritance. 

    - For example, if you grant All Authenticated Portal Users the Privileged User role on the Home label, they would inherit that role on all the child pages of this label by default. Are there any pages under the Home label to which you must restrict access? If so, you may need to implement role blocks. 

    - For example, if you grant Anonymous Portal User the User role on the virtual resource USERS to enable People Finder on anonymous pages, do the access control checks in the [PUMA REST service](https://help.hcltechsw.com/digital-experience/8.5/dev/uprof_rest.html) meet your security requirements? 

    - For example, if you grant All Authenticated Portal Users the Privileged User role on the virtual resource USERS, do your security requirements permit disclosing one user's information to another user? Either through the application directly (portlets that use the PUMA API) or through the PUMA REST service? See the Initial Access Control Settings section for more details.

- Per the [Product Documentation](https://help.hcltechsw.com/digital-experience/8.5/admin-system/advppln_mgupop.html), the base portal is associated with the default realm, by default, and the default realm must be a superset of the participating base entries of other realms. This means that users from any realm may be able to log in to the base portal. Especially consider which resources All Authenticated Portal Users can access in the base portal if you use virtual portals and realms or consider changing the default. 

- Control access as tightly as possible on the live site (published site). If authors and reviewers need elevated access, grant such access through workflows and projects, and administer the site through [Managed_Pages](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_config_mngpages.html). 

- Ensure that [store.puma_default.disableACforRead=false](https://www.ibm.com/support/pages/apar/PK98052) in [PUMA Store Service](https://help.hcltechsw.com/digital-experience/8.5/admin-system/srvcfgref_puma_store.html) unless you have a specific business requirement for setting this to true. Validate any such business requirement against your security requirements. 

    - Note that this setting affects access controls for users and groups only. It does not affect access controls for pages, portlets, or content.