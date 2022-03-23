# Using ATOM/APP as input and output format 

The remote REST service for PUMA uses the ATOM Publishing Protocol \(APP\) as the primary input and output format. It wraps the elements described by the schema document in the remote REST service for PUMA in appropriate ATOM feed or entry documents. Although this is the default input and output format, the client should specify the mime type `application/atom+xml` either in the `mime-type` request parameter or in the accept header. A more detailed description of how the APP maps to the RESTful interface and some examples are given here.

For details about the APP refer to the draft for the protocol on the internet.

## Representing list results as ATOM feeds

All the REST service operations that return lists of resources return an ATOM feed document that represents each portal resource as a single ATOM entry. This applies to the GET cases for the operations `/um/attributes/users`, `/um/attributes/groups`, `/um/users/profiles`, and `/um/groups/profiles`. Depending on the value of the `expandRefs` parameter, the ATOM entries contain a `content` section that embeds the XML representation of the resource according to the schema defined in the interface.

Example 1: This example shows a server response to the `/um/secure/attributes/groups` URI path:

```
<?xml version="1.0" encoding="UTF-8"?>
<atom:feed xmlns:xs="http://www.w3.org/2001/XMLSchema-datatypes" 
           xmlns:um="http://www.ibm.com/xmlns/prod/websphere/um.xsd" 
           xmlns:atom="http://www.w3.org/2005/Atom" 
           xmlns:xhtml="http://www.w3.org/1999/xhtml">
    <atom:title>Available group attributes</atom:title>
    <atom:author>
        <atom:name>IBM WebSphere Portal</atom:name>
    </atom:author>
    <atom:link href="/wps/um/secure/attributes/groups" rel="self"/>
    <atom:id>um:secure/attributes/groups</atom:id>
    <atom:updated>2006-12-16T17:06:35.609Z</atom:updated>
    <atom:entry>
        <atom:title>cn</atom:title>
        <atom:link href="/wps/um/secure/attributes/groups/cn" rel="self"/>
        <atom:id>um:secure/attributes/groups/cn</atom:id>
        <atom:updated>2006-12-16T17:06:35.609Z</atom:updated>
    </atom:entry>
    <atom:entry>
        <atom:title>description</atom:title>
        <atom:link href="/wps/um/secure/attributes/groups/description" rel="self"/>
        <atom:id>um:secure/attributes/groups/description</atom:id>
        <atom:updated>2006-12-16T17:06:35.609Z</atom:updated>
    </atom:entry>
    <atom:entry>
        <atom:title>createTimestamp</atom:title>
        <atom:link href="/wps/um/secure/attributes/groups/createTimestamp" rel="self"/>
        <atom:id>um:secure/attributes/groups/createTimestamp</atom:id>
        <atom:updated>2006-12-16T17:06:35.609Z</atom:updated>
    </atom:entry>
    <atom:entry>
        <atom:title>modifyTimestamp</atom:title>
        <atom:link href="/wps/um/secure/attributes/groups/modifyTimestamp" rel="self"/>
        <atom:id>um:secure/attributes/groups/modifyTimestamp</atom:id>
        <atom:updated>2006-12-16T17:06:35.609Z</atom:updated>
    </atom:entry>
</atom:feed>

```

**Note:** The `atom:updated` does not contain any useful information, but it has to be added to comply to the ATOM specification.

Example 2: The same URI including the option to expand the references, that is `/um/secure/attributes/groups?expandRefs=true`, gives the following server response:

```
<?xml version="1.0" encoding="UTF-8"?>
<atom:feed xmlns:xs="http://www.w3.org/2001/XMLSchema-datatypes" 
           xmlns:um="http://www.ibm.com/xmlns/prod/websphere/um.xsd" 
           xmlns:atom="http://www.w3.org/2005/Atom" 
           xmlns:xhtml="http://www.w3.org/1999/xhtml">
    <atom:title>Available group attributes</atom:title>
    <atom:author>
        <atom:name>IBM WebSphere Portal</atom:name>
    </atom:author>
    <atom:link href="/wps/um/secure/attributes/groups?expandRefs=true" rel="self"/>
    <atom:id>um:secure/attributes/groups%3FexpandRefs%3Dtrue</atom:id>
    <atom:updated>2006-12-16T17:15:23.391Z</atom:updated>
    <atom:entry>
        <atom:title>cn</atom:title>
        <atom:link href="/wps/um/secure/attributes/groups/cn" rel="self"/>
        <atom:id>um:secure/attributes/groups/cn</atom:id>
        <atom:updated>2006-12-16T17:15:23.391Z</atom:updated>
        <atom:content type="application/xml">
            <um:attribute xmlns:um="um" name="cn" 
                          type="xs:string" multiValued="false"/>
        </atom:content>
    </atom:entry>
    <atom:entry>
        <atom:title>description</atom:title>
        <atom:link href="/wps/um/secure/attributes/groups/description" rel="self"/>
        <atom:id>um:secure/attributes/groups/description</atom:id>
        <atom:updated>2006-12-16T17:15:23.391Z</atom:updated>
        <atom:content type="application/xml">
            <um:attribute xmlns:um="um" name="description" 
                          type="xs:string" multiValued="true"/>
        </atom:content>
    </atom:entry>
    <atom:entry>
        <atom:title>createTimestamp</atom:title>
        <atom:link href="/wps/um/secure/attributes/groups/createTimestamp" rel="self"/>
        <atom:id>um:secure/attributes/groups/createTimestamp</atom:id>
        <atom:updated>2006-12-16T17:15:23.391Z</atom:updated>
        <atom:content type="application/xml">
            <um:attribute xmlns:um="um" name="createTimestamp" 
                          type="xs:dateTime" multiValued="false"/>
        </atom:content>
    </atom:entry>
    <atom:entry>
        <atom:title>modifyTimestamp</atom:title>
        <atom:link href="/wps/um/secure/attributes/groups/modifyTimestamp" rel="self"/>
        <atom:id>um:secure/attributes/groups/modifyTimestamp</atom:id>
        <atom:updated>2006-12-16T17:15:23.391Z</atom:updated>
        <atom:content type="application/xml">
            <um:attribute xmlns:um="um" name="modifyTimestamp" 
                          type="xs:dateTime" multiValued="false"/>
        </atom:content>
    </atom:entry>
</atom:feed>


```

## Representing resources as ATOM entries

All particular resources are represented in an ATOM entry document. This applies to the GET cases for the operations `/um/attributes/users/attribute name`, `/um/attributes/groups/attribute name`, `/um/currentuser/profile`, `/um/users/profiles/unique\_id\_of\_user`, `/um/groups/profiles/unique\_id\_of\_group`, `/um/groupmembership/unique\_id\_of\_user`, and `/um/groupmembership/unique\_id\_of\_group`. This means that the XML structure is wrapped in the `atom:content` element of one `atom:entry` element. This way useful meta information, such as the link to the resource and an ID can be returned together with the resource itself. Note that the group membership list is also treated as a single resource that contains the group membership information of one user or group.

The following example retrieves a user profile directly by using the ATOM based output. It shows a useful convenience feature of the implementation: as ATOM allows you to add several `atom:link` elements with certain types, the `related` link element can be used for a shortcut to the group membership URL of the same user. This shortcut is provided for user and group profiles and allows the client to directly follow this link instead of constructing the URL from static and dynamic parts.

```
<?xml version="1.0" encoding="UTF-8"?>
<atom:entry xmlns:xs="http://www.w3.org/2001/XMLSchema-datatypes" 
            xmlns:um="http://www.ibm.com/xmlns/prod/websphere/um.xsd" 
            xmlns:atom="http://www.w3.org/2005/Atom">
   <atom:title>wpsadmin</atom:title>
   <atom:link href="/wps/um/secure/users/profiles/9eAe . . . K5D1" rel="self"/>
   <atom:link href="/wps/um/secure/groupmembership/9eA . . . K5D1" rel="related"/>
   <atom:id>um:secure/users/profiles/9eAeK2IIK9L59QKQ2 . . . K5D1</atom:id>
   <atom:updated>2006-12-16T17:34:04.406Z</atom:updated>
   <atom:content type="application/xml">
      <um:profile type="user" identifier="uid=wpsadmin,o=defaultWIMFileBasedRealm">
         <um:attribute name="uid" type="xs:string" multiValued="false">
            <um:attributeValue>wpsadmin</um:attributeValue>
         </um:attribute>
         <um:attribute name="cn" type="xs:string" multiValued="false">
            <um:attributeValue>wpsadmin</um:attributeValue>
         </um:attribute>
      </um:profile>
   </atom:content>
</atom:entry>

```

## Result for a paged search

The result for a paged search will contain 3 openSearch elements, a link to the first and last page and if available links to previous and next page.

```xmp
<?xml version="1.0" encoding="UTF-8"?>
<atom:feed xmlns:atom="http://www.w3.org/2005/Atom"
xmlns:xs="http://www.w3.org/2001/XMLSchema-datatypes"
xmlns:um="http://www.ibm.com/xmlns/prod/websphere/um.xsd"
xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/"
xmlns:xhtml="http://www.w3.org/1999/xhtml">
<atom:title>User profiles</atom:title>
<atom:author>
<atom:name>IBM WebSphere Portal</atom:name>
</atom:author>
<atom:link href="/wps/um/secure/users/profiles?
resultsPerPage=2&searchAttributes=uid
%3DtestUser*&includeAttributes=uid&pageHandle=4d793b59" rel="self"/>
<atom:id>um:secure/users/profiles%3FresultsPerPage%3D2%26searchAttributes
%3Duid%
3DtestUser*%26includeAttributes%3Duid%26pageHandle%3D4d793b59</atom:id>
<atom:updated>2009-02-25T13:13:12.296Z</atom:updated>
<atom:link href="/wps/um/secure/users/profiles?
resultsPerPage=2&searchAttributes=uid
%3DtestUser*&includeAttributes=uid&pageHandle=4d793b59&page=1"
rel="first"/>
<atom:link href="/wps/um/secure/users/profiles?
resultsPerPage=2&searchAttributes=uid
%3DtestUser*&includeAttributes=uid&pageHandle=4d793b59&page=3"
rel="last"/>
<atom:link href="/wps/um/secure/users/profiles?
resultsPerPage=2&searchAttributes=uid
%3DtestUser*&includeAttributes=uid&pageHandle=4d793b59&page=2"
rel="next"/>
<opensearch:totalresults>5</opensearch:totalresults>
<opensearch:startindex>1</opensearch:startindex>
<opensearch:itemsperpage>2</opensearch:itemsperpage>
<atom:entry>
<atom:title>uid=testUser5,o=defaultWIMFileBasedRealm</atom:title>
<atom:link
href="/wps/um/secure/users/profiles/9eAeK9OCJR07M1D0JMG65BOCJMG6NHP8MM4C43EGJMKC
43D83JHC5RD66R4713" rel="self"/>
<atom:link
href="/wps/um/secure/groupmembership/9eAeK9OCJR07M1D0JMG65BOCJMG6NHP8MM4C43EGJMK
C43D83JHC5RD66R4713" rel="related"/>
<atom:id>um:secure/users/profiles/9eAe
K9OCJR07M1D0JMG65BOCJMG6NHP8MM4C43EGJMKC43D83JHC5RD66R4713</atom:id>
<atom:updated>2009-02-25T13:13:12.296Z</atom:updated>
<atom:content type="application/xml">
<um:profile type="user"
identifier="uid=testUser5,o=defaultWIMFileBasedRealm">
<um:attribute name="uid" type="xs:string" multivalued="false">
<um:attributevalue>testUser5</um:attributevalue>
</um:attribute>
</um:profile>
</atom:content>
</atom:entry>
```

## POST, PUT and DELETE cases

For the operations of the PUMA SPI REST Service interface that use one of the methods POST, PUT, or DELETE, you do not need to consider anything special from a client perspective when using the APP format. You can use the plain XML format as defined in the schema; you do not need to wrap it into ATOM elements when doing POSTs or PUTs of resources to the server. The client needs to make sure that the correct namespaces and syntax are used for the input that is posted to the server, as the server validates both the payload format defined in the `um.xsd` and the basic ATOM structures. This is not very strict, but elements that are not defined in the ATOM specification are rejected. The client should therefore check the response as follows:

-   Successful POST operations to feeds return a response with status code `201 Created`, the `Location` header set to the URI of the new resource, and a representation of the `atom:entry` element that has been created. This is only the case for operations `/um/users/profiles` and `/um/groups/profiles`
-   Successful PUT or DELETE operations return a status code of `200 OK`.

**Parent topic:**[How the portal implements the remote PUMA REST service ](../dev/uprof_rest_wpspec.md)

**Related information**  


[The Atom Publishing Protocol](https://datatracker.ietf.org/doc/html/draft-ietf-atompub-protocol-11)

