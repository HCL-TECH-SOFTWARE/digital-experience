# Portal Access Control REST API

You can remotely access and modify access control information for resources through the HTTP protocol with the Portal Access Control REST API.

The REST API for Portal Access Control provides the following URIs:

-   **Member Feed**

    `ac:member:oid:<principalID>@role:<roleTypeName>@oid:<resourceID>`

-   **Member Collection Feed**

    `ac:member:<roleTypeName>@oid:<resourceID>`

-   **Role Feed**

    `ac:role:<roleTypeName>@oid:<resourceID>`

-   **Role Collection Feed**

    `ac:role:oid:<resourceID>`

-   **Resource Config Feed**

    `ac:resourceconfig:oid:<resourceID>`

-   **Allowed Access Feed**

    `ac:access:oid:<resourceID>`


!!! note
    -   Member Collection Feed is defined as a collection.
    -   Role Collection Feed is defined as a collection.
    -   Member Collection Feed allows the HTTP method `POST`.
    -   The available `<roleTypeName>` are listed in the table in the topic [Roles](https://help.hcltechsw.com/digital-experience/8.5/security/sec_roles.html).

## Supported HTTP methods

|Feed Name|GET method|POST method|PUT method|DELETE method|
|---------|----------|-----------|----------|-------------|
|Member|405|405|405|Removes a member from a role.|
|Member Collection|Returns all members of a role.|Adds a principal to the specified role.|405|405|
|Role|Returns a role.|405|405|405|
|Role Collection|Returns all roles of a resource.|405|405|405|
|Resource Config|Returns a resource configuration.|405|Modifies the resource configuration.|405|
|Allowed Access|Returns all access levels that the current user was granted or inherited.|405|405|405|

## Common response elements

The following XML framework is returned for GET requests on each of the feeds. It contains the link to itself, the title of the feed, the ID of the feed, the feed URI, and the time stamp when the feed was created. For collection feeds, the top-level element is an `atom:feed` and `opensearch` elements are included. For the other feeds, the top-level element is an `atom:entry`.

```
<?xml version="1.0" encoding="UTF-8"?>
<atom:feed xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements"
  xmlns:ac="http://www.ibm.com/xmlns/prod/lotus/access-control/v1.0" 
  xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model"
  xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/" 
  xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base"
  xml:base="http://localhost:10039/wps/mycontenthandler/!ut/p/digest!F4eOOrdKv7QXA2o0iUT9A/T9A
                 /ac/member:User@oid:ibm.portal.Home">
  <atom:author>
    <atom:name>HCL Digital Experience/6.1.0.3</atom:name>
  </atom:author>
  <atom:title>MemberCollection</atom:title>
  <atom:id>ac:member:User@oid:ibm.portal.Home</atom:id>
  <atom:link href="/wps/mycontenthandler/!ut/p/digest!F4eOOrdKv7QXA2o0iUT9A/ac/member:User@oid:ibm.portal.Home" 
             rel="self"
             type="application/atom+xml"/>
  <opensearch:startIndex>0</opensearch:startIndex>
  <opensearch:itemsPerPage>2147483647</opensearch:itemsPerPage>
  <opensearch:totalResults>0</opensearch:totalResults>
  <atom:updated>2009-10-01T06:03:51.850Z</atom:updated>
</atom:feed>
```

## Common response elements for collection feeds

For collection feeds, the feed contains a list of `atom:entry` elements. Each entry includes the following additional information: the ID of the entry, the entry's URI, additional links, and a content element that contains the actual information.

```
<atom:entry>
  <atom:id>ac:member:oid:8eAe13RO6G4CL3TGMIPDKBQ6MGHE53P02OTDI3T26M14LRSA6PDE@role:User@oid:
           6_CGAH47L00GN960I4GOF1G510I3</atom:id>
  <atom:title>MemberCollection</atom:title>
  <atom:updated>2009-10-01T05:56:58.341Z</atom:updated>
  <atom:link href="/wps/mycontenthandler/!ut/p/digest!F4eOOrdKv7QXA2o0iU-T9A
                   /ac/member:oid:8eAe13RO6G4CL3TGMIPDKBQ6MGHE53P02OTDI3T26M14LRSA6PDE@role
   :User@oid:6_CGAH47L00GN960I4GOF1G510I3" rel="edit" type="application/atom+xml"/>
  <atom:content type="application/xml">
    <ac:member ac:id="8eAe13RO6G4CL3TGMIPDKBQ6MGHE53P02OTDI3T26M14LRSA6PDE" 
               ac:DN="all authenticated portal users" ac:type="virtual"/>
  </atom:content>
</atom:entry>
```

## URI variables and their ranges

-   **<roleTypeName\>**

    Case-insensitive name of a defined role type, for example, Manager, EDitor, usEr.

-   **<resourceID\>**

    `ObjectID` or `uniqueName` of a resource, for example, `ibm.portal.Home` or `8eAe13RO6G4CL3TGMIPDKBQ6MGHE53P02OTDI3T26M14LRSA6PDE`.

-   **<principalID\>**

    `ObjectID` of a Principal \(user or group\), for example, `8eAe13RO6G4CL3TGMIPDKBQ6MGHE53P02OTDI3T26M14LRSA6PDE`.


## Member feed and the DELETE method

URI - `ac:member:oid:<principalID>@role:<roleTypeName>@oid:<resourceID>`

Parameters - None.

The HTTP `DELETE` method

-   Deletes the principal from the `RoleType` on given resource.
-   Equivalent Portal Access Control Java™ API

    ```
    accessControlHome.getRoleDataController(resourceID)
    ```

    .

-   Returns 200 if successful.
-   Returns 404 if `resourceID` cannot be resolved.
-   Returns 400 if

    -   `roleTypeName` is not applicable.
    -   The role does not exist.
    -   `principalID` cannot be resolved.
    -   The current user does not have sufficient access rights.

## Member Collection feed and the GET method

URI: `ac:member:<roleTypeName>@oid:<resourceID>`

Parameters:

-   **start-index=n**

    Specifies the n-th member of the role is the first one in the result list.

-   **max-results=m**

    Specifies that at most m members are included.


The HTTP `GET` method

-   Provides all members mapped to a single role for a resource.
-   Equivalent Portal Access Control Java API - accessControlHome.getRoleData(resourceID).getMappedPrincipals(roleType)
-   Returns 200 if successful.
-   Returns 404 if `resourceID` cannot be resolved.
-   Returns 400 if `roleTypeName` is not applicable.

The following code is the result of the `GET` method. Each entry element in the member collection contains a single member element that specifies the member identity. The edit link can be used to remove the member from the role (DELETE on member feed).

```
<atom:entry ...>
...
<atom:title>MemberCollection</atom:title>
<atom:entry>
 <atom:id>ac:member:oid:8eAe13RO6G4CL3TGMIPDKBQ6MGHE53P02OTDI3T26M14LRSA6PDE@role:User@oid:
          6_CGAH47L00GN960I4GOF1G510I3</atom:id>
 <atom:title>MemberCollection</atom:title>
 <atom:updated>2009-10-01T05:56:58.341Z</atom:updated>
 <atom:link href="/wps/mycontenthandler/!ut/p/digest!F4eOOrdKv7QXA2o0iUT9A
                  /ac/member:oid:8eAe13RO6G4CL3TGMIPDKBQ6MGHE53P02OTDI3T26M14LRSA6PDE@role:
    Privileged%25252520User@oid:6_CGAH47L00GN960I4GOF1G510I3" 
    rel="edit" type="application/atom+xml"/>
 <atom:content type="application/xml">
  <ac:member ac:id="8eAe13RO6G4CL3TGMIPDKBQ6MGHE53P02OTDI3T26M14LRSA6PDE"
             ac:DN="all authenticated portal users" ac:type="virtual"/>
 </atom:content>
</atom:entry>
```

## Member Collection feed and the POST method

URI: `ac:member: <roleTypeName>@oid:<resourceID>`

Parameters: None.

The HTTP `POST` method

-   Adds the principal specified in the payload to the `RoleType` on given resource.
-   Equivalent Portal Access Control Java API

    ```
    accessControlHome.getRoleDataController(resourceID).addPrincipalsToRole(RoleType, Collection<Principal>)
    ```

-   Returns 201 if successful.
-   Returns 404 if

    -   `resourceID` cannot be resolved.
    -   The specified principal cannot be resolved from the distinguished name \(DN\) or email.

-   Returns 400 if

    -   `roleTypeName` is not applicable.
    -   Specified principal cannot be resolved from `oid`.
    -   The current user does not have sufficient access rights.

The `POST` payload for the Member Collection feed is as follows

UID - `ac:member: <roleTypeName>@oid:<resourceID>`

The payload needs to include at least the following

```
<atom:entry xmlns:atom="http://www.w3.org/2005/Atom">
  <atom:content type="application/xml">
    <ac:member xmlns:ac="http://www.ibm.com/xmlns/prod/lotus/access-control/v1.0" 
                    ac:id="9eAe6BD86PGCHPD6JMCCG1D8MMG63JD0JM4C3BDAJMK66BC46O"/>
  </atom:content>
</atom:entry>
```

As an alternative to `ac:id`, which is used to identify a Principal by using the `ObjectID`, you can use the following alternative identifiers:

-   **`ac:DN="uid=wpsadmin,o=defaultWIMFileBasedRealm"`**

    Specifies the principal by using the distinguished name. The type can be user, group, or virtual (for virtual principals), where user is the default. Valid Virtual Principals are the ones defined in the following Javadoc: com.ibm.portal.um.PumaEnvironment.VirtualPrincipalNames and are currently all authenticated portal users, all portal user groups, and anonymous portal user.

-   **`ac:email="wpsadmin@de.ibm.com"`**

    Specifies users by their email addresses.


## Role feed and the GET method

URI: `ac:role:<roleTypeName>@oid:<resourceID>`

Parameters:

-   **resolve-membership**

    Specify true or false. If true, then members are included. The default is false.


The HTTP `GET` method

-   Returns information about a single role available for given resource.
-   Role is only available if at least one principal is mapped to it, otherwise returns 404.
-   Equivalent Portal Access Control Java API - accessControlHome.getRoleData(resourceID).getRole(RoleType).
-   Returns 200 if successful.
-   Returns 404 if

    -   `resourceID` cannot be resolved.
    -   The role for specified `roleTypeName` is not available.

-   Returns 400 if `roleTypeName` is not applicable.

The following is the result of the `GET` method:

```
<atom:entry ...>
  ...
  <atom:title>Role</atom:title>
  <atom:id>ac:role:User@oid:myPage</atom:id>
  <atom:link href="/wps/mypoc/!ut/p/digest!TSVlGy5DI0S5vyp5i;yTw
                   /ac/role:User@oid:myPage?mode=download&amp;resolve-membership=true"
    rel="self" type="application/atom+xml"/>
  <atom:updated>2009-10-01T12:35:05.442Z</atom:updated>
  <atom:link ac:rel="members" href="/wps/mycontenthandler/!ut/p/digest!TSVlGy5DI0S5vyp5i;yTw
            /ac/member:User@oid:6_M8768B1A00FT20I480O8A53000?
   resolve-membership=true" rel="related" type="application/atom+xml"/>
 <atom:content type="application/xml">
  <ac:role ac:type="User">
   <ac:member
     ac:id="8eAeI9EE3J5C63C8JM064RD2JMG613C2MM4C6BP4MM072JD6MI17P9E03R86H1"ac:display-name="wpsadmins"
     ac:DN="cn=wpsadmins,o=defaultWIMFileBasedRealm" ac:type="group"/>
  </ac:role>
 </atom:content>
</atom:entry>
```

## Role Collection feed and the GET method

URI - `ac:role:oid:<resourceID>`

Parameters -

-   **filter**

    Specify one of the following values:

    -   type=<roleTypeName\> to return the specified role, if available.
    -   inUse to return available roles. This value is the default value.
    -   all to return all applicable role types.

-   **start-index=n**

    Specifies that the n-th member of the role is the first one in the result list.

-   **max-results=m**

    Specifies that at most m members are included.


URI - `ac:role:oid:<resourceID>`

The HTTP `GET` method

-   Provides information about all roles available for a resource.
-   A role is only available if at least one principal is mapped to it.
-   Equivalent Portal Access Control Java API

    ```
    accessControlHome.getRoleData(resourceID).getRoles()
    ```

-   Returns 200 if successful.
-   Returns 404 if `resourceID` cannot be resolved.
-   Returns 400 if the specified `roleTypeName` is not applicable.

The following is the result of the `GET` method:

```
<atom:feed ...>
  ...
  <atom:title>RoleCollection</atom:title>
  <atom:id>ac:role:oid:myPage</atom:id>
  <atom:link href="/wps/mypoc/!ut/p/digest!TSVlGy5DI0S5vyp5i;yTw/ac/role:oid:myPage?mode=download" 
        rel="self" type="application/atom+xml"/>
  <opensearch:startIndex>0</opensearch:startIndex>
  <opensearch:itemsPerPage>2147483647</opensearch:itemsPerPage>
  <opensearch:totalResults>1</opensearch:totalResults>
  <atom:updated>2009-10-01T12:46:16.509Z</atom:updated>
  <atom:entry>
  <atom:id>ac:role:User@oid:6_M8768B1A00FT20I480O8A53000</atom:id>
  <atom:title>RoleCollection</atom:title>
  <atom:updated>2009-10-01T12:46:16.509Z</atom:updated>
  <atom:link ac:rel="members" href="/wps/mycontenthandler/!ut/p/digest!TSVlGy5DI0S5vyp5i;yTw
            /ac/member:User@oid:6_M8768B1A00FT20I480O8A53000"
    rel="related" type="application/atom+xml"/>
  <atom:link href="/wps/mypoc/!ut/p/digest!TSVlGy5DI0S5vyp5i;yTw
                  /ac/role:User@oid:6_M8768B1A00FT20I480O8A53000?mode=download"
    rel="self" type="application/atom+xml"/>
  <atom:content type="application/xml">
   <ac:role ac:type="User"/>
  </atom:content>
 </atom:entry>
</atom:feed>
```

## Resource Config feed and the GET method

UID - `ac:resourceconfig:oid:<resourceID>`

Parameters - None.

The HTTP `GET` method

-   Provides configuration information on the following resources:
    -   Owner
    -   Role blocks
    -   IsPrivate
-   Equivalent Portal Access Control Java API

    ```
    accessControlHome.getManagedProtectedResource(resourceID)
    ```

-   Returns 200 if successful.
-   Returns 404 if `resourceID` cannot be resolved.

The following is the result of the `GET` method:

```
<atom:entry ...>
 ...
 <atom:title>ResourceConfig</atom:title>
 <atom:id>ac:resourceconfig:oid:myPage</atom:id>
 <atom:link href="/wps/mycontenthandler/!ut/p/digest!TSVlGy5DI0S5vyp5i;yTw
                  /ac/resourceconfig:oid:myPage" rel="self" type="application/atom+xml"/>
 <atom:updated>2009-10-01T12:15:59.683Z</atom:updated>
 <atom:content type="application/xml">
  <ac:resource-config>
   <ac:ownerac:id="9eAePPC2JP8C2ROIJMG6M1D8JMG6PPD0JM0723P8JM06KPOC6IH66BOCMQC6N1" 
      ac:display-name="wpsadmin"
      ac:DN="uid=wpsadmin,o=defaultWIMFileBasedRealm" ac:type="user"/>
   <ac:role-block ac:block-type="inheritance" ac:type="Privileged User"/>
   <ac:role-block ac:block-type="propagation" ac:type="Delegator"/>
  </ac:resource-config>
 </atom:content>
</atom:entry>
```

## Resource Config feed and the PUT method

UID: `ac:resourceconfig:oid:<resourceID>`

Parameters:

-   **mode**

    Specify one of the following values:

    -   merge to add role blocks to existing ones. The owner is changed if you specify this value.
    -   update to replace existing role blocks and owners. The role blocks and owners are removed if you do not specify them. This value is the default value.

The HTTP `PUT` method

-   Updates the following resource configurations:

    -   Owner
    -   Role blocks

-   Equivalent Portal Access Control Java API

    ```
    accessControlHome.getManagedProtectedResource(resourceID)
    ```

-   Returns 200 if successful.
-   Returns 404 if `resourceID` cannot be resolved.
-   Returns 400 if the current user does not have sufficient access rights.

The `PUT` payload for the Resource Config feed is as follows

URI: `ac:resourceconfig:oid:<resourceID>`

The payload must be as follows

```
<atom:entry xmlns:atom="http://www.w3.org/2005/Atom" 
      xmlns:ac="http://www.ibm.com/xmlns/prod/lotus/access-control/v1.0" >
  <atom:content type="application/xml">
    <ac:resource-config>
      <ac:owner ac:id="9eAe6BD86PGCHPD6JMCCG1D8MMG63JD0JM4C3BDAJMK6"/>
      <ac:role-block ac:block-type="inheritance" ac:type="MANAger"/>
      <ac:role-block ac:block-type="propagation" ac:type="Editor"/>
      <ac:role-block ac:block-type="propagation" ac:type="user"/>
    </ac:resource-config>
  </atom:content>
</atom:entry>
```

The owner and role-block elements are optional.

As an alternative to `ac:id`, which is used to identify the owner by using the `ObjectID`, use the following alternative identifiers:

-   **`ac:DN="uid=wpsadmin,o=defaultWIMFileBasedRealm" ac:type=user`**

    Specifies the principal by using the distinguished name. The type can be user, group, or virtual (for virtual principals), where user is the default.

-   **`ac:email="wpsadmin@de.ibm.com"`**

    Specifies users by their email addresses.


## Allowed Access feed and the GET method

UID: `ac:access:oid:<resourceID>`

Parameters: None.

The HTTP `GET` method

-   Provides runtime information on the resource for the current user as follows - All access levels that the current user has on the resource.
-   Equivalent Portal Access Control Java API - There is no 1:1 mapping to the Java API. However, the following API is called for all applicable `roleTypes`:

    ```
    accessControlHome.getAccessControlRuntimeModel(resourceID).hasPermission(roleType)
    ```

-   Returns 200 if successful.
-   Returns 404 if `resourceID` cannot be resolved.

The following is the result of the `GET` method:

```
<atom:entry...>
 ...
 <atom:title>allowed-access</atom:title>
 <atom:id>ac:access:oid:ibm.portal.Home</atom:id>
 <atom:link href="/wps/mycontenthandler/!ut/p/digest!TSVlGy5DI0S5vyp5i;yTw
                  /ac/access:oid:ibm.portal.Home" rel="self" type="application/atom+xml"/>
 <atom:updated>2009-10-01T12:55:16.620Z</atom:updated>
 <atom:content type="application/xml">
  <ac:allowed-access xmlns:ac="http://www.ibm.com/xmlns/prod/lotus/access-control/v1.0" 
                     ac:user-owned="false">
   <ac:access-level ac:type="Administrator"/>
   <ac:access-level ac:type="Security Administrator"/>
   <ac:access-level ac:type="Delegator"/>
   <ac:access-level ac:type="Manager"/>
   <ac:access-level ac:type="Editor"/>
   <ac:access-level ac:type="Contributor"/>
   <ac:access-level ac:type="Privileged User"/>
   <ac:access-level ac:type="User"/>
  </ac:allowed-access>
 </atom:content>
</atom:entry>
```


