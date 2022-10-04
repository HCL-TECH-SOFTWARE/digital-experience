# Querying the defined attributes

After you install HCL Digital Experience and configure your LDAP user registries, query the defined attributes. The task defines a list of attributes that are flagged as unsupported or mapped to a different LDAP attribute.

1.  Open a command prompt.

2.  Change to the wp_profile_root/ConfigEngine directory.

3.  Run the following task:

    -   AIX® and Linux™: `./ConfigEngine.sh wp-query-attribute-config -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat wp-query-attribute-config -DWasPassword=password`

    !!!note
        This task does not validate the existence of attributes in the LDAP schema.



???+ info "Related information"  
    -   [Adding attributes](../../../../manage/security/user_registry/vmm_atts/add_attributes.md)

