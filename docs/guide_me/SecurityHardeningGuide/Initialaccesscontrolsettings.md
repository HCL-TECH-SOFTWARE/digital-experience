# Initial access control settings

HCL Digital Experience assigns certain roles to certain users and groups, by default. This makes HCL Digital Experience usable out-of-the-box, but may not meet the security requirements of your application.

## Recommended actions and considerations 

- Review the Initial Access Control Settings section in the [Product Documentation](https://help.hcltechsw.com/digital-experience/8.5/admin-system/init_acc_cntl_set.html). 

    - Specifically, pay attention to the special user and group: 

        - Anonymous Portal User 

        - All Authenticated Portal Users 

    - Note: This is a long list. Especially consider the default role assignment where All Authenticated Portal User is assigned Privileged User@Home(label). 

    - Also, especially consider the default role mappings for All Authenticated Portal Users to have User@ on the virtual resource USERS and the virtual resource USER GROUPS. Do your security requirements permit disclosing one user's information to another user? Either through the application directly (portlets that use the PUMA API, like [People Finder](https://help.hcltechsw.com/digital-experience/8.5/collab/i_coll_r_porcc_pfnd.html)) or through the PUMA REST service? 

- Review the default permissions associated with [Managed Pages](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_mngpages_access.html). 

- Compare these to the security requirements of your application. 

- Update role mappings, role blocks, and/or group membership as needed, referencing the Product Documentation section, [Controlling access](https://help.hcltechsw.com/digital-experience/8.5/admin-system/control_access.html).