# Project Identification Service 

The Project Identification Service provides access to the identifier for a currently selected project in HCL Web Content Manager. Projects enable you to make changes to a set of items and publish those changes at the same time.

All changes to items occur either within the scope of a project or outside of a project. Changes made to item in the project result in draft items that do not affect the live content. Changes made outside of a project affect the live content.

A project's scope applies to each request, so that the request either completely executes within the scope of a particular project or completely outside the project's scope. For a given request, you cannot switch between projects during request processing.

Because a request is associated with a thread, the project identifier is also associated with the thread. The project service `com.ibm.portal.services.project.ProjectIdentificationService` returns this thread-specific project identifier. Note that the service does not define how to associate a project identifier with a thread; this is handled during URL generation.

Example:

```
InitialContext ctx = new InitialContext();
ProjectIdentificationService piService = (ProjectIdentificationService) 
                                         ctx.lookup(ProjectIdentificationService.JNDI_NAME);
ObjectID projectID = piService.getProjectID();
```

**Parent topic:**[Portal service configuration ](../admin-system/srvcfgref.md)

