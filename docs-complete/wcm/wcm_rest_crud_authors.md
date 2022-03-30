# How to use REST to work with author and owner parameters 

Information for the author and owner of an item can be specified by using the REST service.

The following attributes are used:

-   `name`
-   `distinguishedName`
-   A URI to fetch detailed information of the author or owner by using the PUMA REST SPI

You can also specify such information in the entry in the same format for a POST or PUT operation to Create or Update an item with the information you specified.

## Example

This example is in application/atom+xml format:

```
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
   ...
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <name>wpsadmin</name>
    </wcm:owner>
   ...
</entry>
```

**Parent topic:**[How to manage web content items by using REST ](../wcm/wcm_rest_crud.md)

