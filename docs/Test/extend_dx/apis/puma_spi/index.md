# User and group management

The Portal User Management Architecture \(PUMA\) System programming interface \(SPI\) provides interfaces for accessing the profiles of a portal User or Group.

PUMA SPI is used to find, create, modify, and delete users and groups. Also, profile information about the currently logged in user can be retrieved. The User and Group interfaces that are returned by the SPI inherit the getObjectID\(\) method from the com.ibm.portal.Identifiable interface of the Model SPI. This method is used to obtain the ObjectID that uniquely identifies a resource, in this case a user or group in the portal user registry. The following provider objects are used to access the User and Group objects.

-   **PumaProfile**

    Contains methods that provide read-only access to the User and Group attributes and identifiers. You can use this interface to get the User object for the current user.

-   **PumaLocator**

    Contains methods for looking up User and Group objects. You can use this interface to obtain a List of Group objects for all of the groups in which the current user is a member. Beginning with Version 7.0 of HCL Portal, paging is supported. Which means that the result set is split up into subsets \(pages\) and a special iterator can be used to access the pages.

-   **PumaController**

    Contains methods for creating and deleting Users and Groups and for modifying the User and Group profiles and membership.

-   **PumaEnvironment**

    Contains methods to retrieve virtual principals, access general properties for user management, and a method to bypass access control for the user and group management layer.


Before the portlet can use these provider objects, it must first retrieve the appropriate home interface, depending on the type of application.

-   **Standard portlet**

    com.ibm.portal.um.portletservice.PumaHome

-   **IBM portlet**

    com.ibm.portal.um.portletservice.legacy.PumaHome

-   **Portal application \(for example, theme or skin\)**

    com.ibm.portal.um.PumaHome


Examples of how these interfaces are retrieved are provided in the accompanying Javadoc documentation. The following example shows how a standard portlet would obtain the identifier of a User as a String.

```xmp

PortletServiceHome psh;
try{
   javax.naming.Context ctx = new javax.naming.InitialContext();
   psh = (PortletServiceHome) 
         ctx.lookup("portletservice/com.ibm.portal.um.portletservice.PumaHome");
   if (psh != null){
      PumaHome service = (PumaHome) psh.getPortletService(PumaHome.class);
      PumaProfile pp = service.getProfile(request);
      User user = pp.getCurrentUser();
      String user_objid = pp.getIdentifier(user);
   }
}
catch (PumaException pe){
   // ... error handling ...
} catch(javax.naming.NameNotFoundException ex) {
   // ... error handling ...
} catch(javax.naming.NamingException ex) {
   // ... error handling ...
}


```

!!! note
    Because PumaProfile, PumaLocator and PumaController store the current user, you must not store these objects in a session or anywhere else. But you can retrieve them from PumaHome each time you use them. PumaHome, however, can be stored.

The following sample shows how a standard portlet would do a standard search for reading and writing attributes:

```xmp
List<User> usersStartingWithA = pumaLocator.findUsersByAttribute("uid", "a*");
// if no value for ibm-primaryEmail attribute is set, then set it
List<String> requestedAttributes = new ArrayList<String>(2);
requestedAttributes.add("uid");
requestedAttributes.add("primaryEmail");
for(User user: usersStartingWithA) {
Map<String, Object> attributes =
pumaProfile.getAttributes(user, requestedAttributes);
if (attributes.get("primaryEmail")==null
|| "".equals(attributes.get("ibm-primaryEmail"))){
pumaController.setAttributes(user, Collections.singletonMap(
"ibm-primaryEmail", attributes.get("uid")+"@ibm.com"));
}
}
```

The following sample shows how to do a paged search:

```xmp
// create a properties map that requests 10 results per Page
Map<String, Object> pageProperties = new HashMap<String, Object>(2);
pageProperties.put(PumaLocator.RESULTS_PER_PAGE, 10);
PagingIterator<User> pageIter = pumaLocator.findUsersByAttribute(
"uid", "a*", pageProperties);
List<User> buffer = new ArrayList<User>(10);
do {
pageIter.getNextPage(buffer); //=> always has a first page
if (pageIter.getCurrentPageNumber()==0)
{
System.out.println("Total results: "+pageIter.getNumberOfTotalResults());
System.out.println("Total pages: "+pageIter.getNumberOfPages());
}
for (User aUser: buffer)
{ display(aUser);
}
} while (pageIter.hasNextPage());
// now jump to page 5
// => will throw NoSuchPageException if NumberOfPages < 6
List<User> result = pageIter.getPage(null, 5);
```

-   **[Remote REST service for PUMA](../puma_spi/remote_rest_service_for_puma/index.md)**  
The remote PUMA SPI gives you access to user profiles through REST services. It provides a remote interface for user and group management for the configured Portal user repository. It is based on the REST \(REpresentational State Transfer\) architecture model.


???+ info "Related information"
    - [Administering user impersonation](../../../deployment/manage/security/people/authorization/users_and_groups/impersonation/index.md)

