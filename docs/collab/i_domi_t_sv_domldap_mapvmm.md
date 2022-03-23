# Mapping VMM attributes to LDAP user attributes 

The collaboration integration relies on a predefined set of Virtual Member Manager \(VMM\) user and group attributes to function properly, while your LDAP server may use a different set of predefined user and group attributes. If a portal attribute is available under a different name on the LDAP server, you can map the portal attribute to the corresponding LDAP attribute. If you want to use an attribute as search attribute or you want to see its value in the search result, you must to map the attribute. Portal attributes that do not correspond to an LDAP attribute should be flagged as unsupported.

The collaboration products use these attributes:

-   displayName
-   ibm-primaryEmail
-   givenName
-   dn
-   cn
-   sn
-   uid

Mapping the following attributes ensures that users see the appropriate values when People Finder displays an individual's User Profile, or when they search by attribute \(for example, to find all users who have the same preferred language or whose telephone number starts with the same area code\).

```
# name of the portal attribute
federated.ldap.attributes.mapping.portalName=ibm-primaryEmail,ibm-jobTitle,
stateOrProvinceName,countryName,localityName,street,employeeNumber,roomNumber,
preferredLanguage,labeledURI,ibm-personalTitle

# name of the LDAP attribute
federated.ldap.attributes.mapping.ldapName=mail,title,st,c,l,OfficeStreetAddress,
EmployeeID,physicalDeliveryOfficeName,preferredLanguage,url,
personalTitle


```

For more information, see *Adding more attributes to VMM*.

**Parent topic:**[People Finder ](../collab/i_coll_r_porcc_pfnd.md)

**Related information**  


[Adding more attributes to VMM](../install/manage_atts.md)

[Editing the CSEnvironment.properties file ](../collab/i_domi_t_csenvir_basic_edit.md)

