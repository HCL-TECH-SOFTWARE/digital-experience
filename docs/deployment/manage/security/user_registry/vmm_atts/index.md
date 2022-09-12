# Adding more attributes to VMM

After you install HCL Digital Experience and configuring your LDAP user registries, you must adapt the attribute configuration to match the configured LDAP servers and your business needs. However, do not complete these steps if you configured only a database user registry or the default federated file-based repository for out-of-box installations.

After installation, HCL Digital Experience has a predefined set of attributes for users and groups. Your LDAP server might have a different set of predefined user and group attributes. To ensure communication between HCL Portal and your LDAP server, you can configure extra attributes. Flag the attributes as required or unsupported on a per repository basis or for all configure repositories.

LDAP servers can handle only attributes that are explicitly defined in their schema. The LDAP schema is different from the HCL Portal schema. The two schemas are required to match for communication between HCL Portal and the LDAP server. The task to add the LDAP user registry does some basic attribute configurations that depend on the LDAP server. You might still have to adapt the HCL Portal configuration to match the LDAP schema. If an attribute is in HCL Portal but not in the LDAP server, complete one of the following tasks to resolve this mismatch:

-   Flag the attribute as unsupported for the LDAP server
-   Introduce an attribute mapping that maps the HCL Portal attribute to an attribute defined in the LDAP schema

Use the following tasks to adapt the attribute configuration to match the configured LDAP servers and your business needs:

1.  [Querying the defined attributes](../install/man_attributes.md)  
After you install HCL Digital Experience and configure your LDAP user registries, query the defined attributes. The task defines a list of attributes that are flagged as unsupported or mapped to a different LDAP attribute.
2.  [Adding attributes](../install/add_attributes.md)  
The VMM is configured with a default attribute schema that might not be compatible with your LDAP server. Add attributes to extend the VMM attribute schema and then map them between HCL Digital Experience and your user registry.
3.  [Mapping attributes](../install/map_attributes.md)  
Map the attributes between HCL Digital Experience and your LDAP user registries.
4.  [Removing attributes](../install/remove_attr_def.md)  
The Virtual Member Manager \(VMM\) has a limitation. There is no task to update an attribute.


**Related information**  


[Mapping VMM attributes to LDAP user attributes](../collab/i_domi_t_sv_domldap_mapvmm.md)

[People Finder](../collab/i_coll_r_porcc_pfnd.md)

