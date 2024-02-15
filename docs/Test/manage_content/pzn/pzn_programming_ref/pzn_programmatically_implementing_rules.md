# Programmatically starting rules

All types of rules can be accessed programmatically within a Java application. For example, a profiler can be used to determine the behavior that an application must exhibit depending on the current user, or an action can return content to your application for further processing before the content is displayed. Rules are mapped to content spots, and because a content spot is an implementation of JavaBeans, it can be programmatically declared and implemented.

To programmatically start a rule, follow these steps:

1.  Instantiate the bean. If the class name of your content spot was ProfilerSpot, you would instantiate the bean by using one of the following options:

    ```
    com.ibm.websphere.personalization.ContentSpot contentSpot = 
      new com.ibm.websphere.personalization.ContentSpot\("ProfilerSpot"\);
    ```

    or

    ```
    ProfilerSpot contentSpot = new ProfilerSpot();
    ```

2.  Call the method `setRequest()` and pass the HttpServletRequest object or an object that implements PznRequestObjectInterface. This action makes the current information that is stored in the request object to be known to the Personalization runtime Engine and the Resource Engine.

    ```
    contentSpot.setRequest(request); 
    ```

3.  Trigger the rule and, if applicable, get the content from the rule. Use one of the following methods, depending on the type of rule:
    -   Select content actions, bindings, and recommendation actions are mapped to content spots and return content from a resource.

        -   `getRuleContent()` - returns an array of results
        -   `getRuleContent(int which)` - returns the resource at the index

    -   Profilers are mapped to empty content spots, which do not declare a return type.

        -   `boolean isProfiledAs(string value)` - returns true or false depending on whether the string passed to the method matches a profile that is given to the user
        -   `String getProfile(integer value)` - returns the profile in the location that is specified by the integer passed

            A user can have more than one profile. For example, a user might fit profiles that are named "young," "hip," and "sporty"; when the user is looking for the profile at location 0, "young" is returned.

        -   `String[] getProfiles()` - returns an array of profiles.

            For example, if a user is in profiles "young," "hip," and "sporty," this method returns an array of the profiles.

        -   `boolean isProfiledAsAll(String[] profiles)` - returns True or False depending on whether all the profiles match all the profiles in the list of profiles that are passed to the method
        -   `boolean isProfiledAsAny(String[] profiles)` - returns True or False depending on whether the profile is in the list of profiles that are passed to the method

    -   Update actions and email actions are mapped to empty content spots.

        1.  `trigger()` - runs the rule


