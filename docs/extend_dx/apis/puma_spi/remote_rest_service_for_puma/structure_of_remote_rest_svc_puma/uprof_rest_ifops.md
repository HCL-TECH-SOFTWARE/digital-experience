# Interface operations

View all operations of the remote REST service for PUMA including the necessary attributes and a description.

The following list shows and describes all the possible URI path operations, together with the related query parameters. Note that some URI path operations apply to different HTTP methods - GET, or PUT and POST, or DELETE.

**Notational convention:** Parameter values are separated by vertical slashes ( `|` ). Default values are indicated with an asterisk (*).

-   **/um/attributes/users**

    -   **For the HTTP method GET:**

        This URI path operation returns the list of references to the attribute definitions that are available for users with references to the URI path operation `/um/attributes/users/attribute name`. This URI path operation has the following query parameter:

        -   **expandRefs=true \| \*false**

            If you set this parameter to true, the representations of the attribute definitions are embedded in the list of references. The default value is false.

-   **/um/attributes/users/attribute name**

    -   **For the HTTP method GET:**

        This URI path operation returns a representation of the attribute definition. For details refer to the topic about payload description. This URI path operation has no query parameter.

-   **/um/attributes/groups**

    -   **For the HTTP method GET:**

        This URI path operation returns the list of references to the attribute definitions that are available for groups with references to the URI path operation `/um/attributes/groups/attribute name`. This URI path operation has the following query parameter:

        -   **expandRefs=true\|\*false**

            If you set this parameter to true, the representations of the attribute definitions are embedded in the list of references. The default value is false.

-   **/um/attributes/groups/attribute name**

    -   **For the HTTP method GET:**

        This URI path operation returns a representation of the attribute definition. For details refer to the topic about payload description. This URI path operation has no query parameter.

-   **/um/currentuser/profile**

    -   **For the HTTP method GET:**

        This URI path operation returns the profile of the current user. If this operation is performed without authentication, the profile of the anonymous user is returned. This URI path operation has no query parameter.

    -   **For the HTTP methods PUT or POST:**

        This URI path operation updates the user profile with the profile representation contained in the request body. Only the attributes provided in this representation are considered, therefore post only the attributes that you want to change. This URI path operation has the following query parameters:

        -   **update=\*replace\|merge\|delete**

            This defines how the update is performed. Valid values are as follows:

            -   **replace**

                All attribute values provided in the update replace the existing ones. This is the default.

            -   **merge**

                The new attribute values are merged with existing ones. This is only relevant for multi-value attributes.

            -   **delete**

                The values of all attributes provided in the update are removed from the profile. Consequently, the actual attribute values given in the update are ignored.

-   **/um/users/profiles /um/groups/profiles**

    -   **For the HTTP method GET:**

        This URI path operation returns the list of references to all user or group profiles that correspond to the search criteria and other parameters. If there are no limiting parameters, all available users or groups are returned. The list that is returned is access control filtered for the current user. This URI path operation has the following query parameters:

        -   **expandRefs=true\|\*false**

            If you set this to true, the complete profiles are embedded in the references. The default is false.

        -   **includeAttributes**

            The attributes contained in the profiles are limited to those specified in the comma-separated list provided by this attribute. By default, if you omit this parameter, the basic set of attributes is returned for users, or the minimum set of attributes is returned for groups.

        -   **memberOf=unique ID of group**

            The response contains only profiles of users or groups that a are member of the specified group.

        -   **showNested=true\|\*false**

            If you set the memberOf parameter, this parameter specifies whether nested groups are considered or not. If you set the parameter to false, only direct membership is evaluated. The default value is false.

        -   **searchAttributes**

            Use this query parameter to define a search string that specifies various combinations of attribute values as search criteria. All implementations have to support at least values such as `attribute name%3Dattribute value`, where the attribute value can contain an asterisk ( * ) as a wildcard character.

        -   **identifier**

            The returned list will contain only the one user or group with the specified unique identifier. The implementation decides what is to be used as the unique identifier. For example, this can be the distinguished name.

        -   **resultsPerPage**

            The returned list will contain only the given number of results. Additionally, links to additional result pages (first, last, next, previous) will be included in the response, if available.

        -   **sortByAttributes**

            Comma-separated list that specifies the sort order for the results. This is only supported for a paged search.

        -   **descending=true|*false**

            Determines if the sorting according to sortByAttributes will be descending.

        !!! note
            The parameters `memberOf`, `searchAttributes`, and `identifier` are mutually exclusive. Paged search (resultsPerPage) only works for searchAttributes.

    -   **For the HTTP method POST:**

        This URI path operation creates a new user or group by posting a representation of the related profile. For details refer to the topic about the payload description. This URI path operation has no query parameter.

-   **/um/users/profiles/unique ID of user /um/groups/profiles/unique ID of group**

    -   **For the HTTP method GET:**

        This URI path operation returns a representation of the user or group profile. For details refer to the topic about the payload description. This URI path operation has the following query parameter:

        -   **includeAttributes**

            The attributes contained in the profiles are limited to those specified in the comma-separated list provided by this attribute. By default, if you omit this parameter, all attributes that hold values are returned.

    -   **For the HTTP methods PUT or POST:**

        This URI path operation updates the user or group profile with the profile representation contained in the request body. Only the attributes provided in this representation are considered, therefore post only the attributes that you want to change. This URI path operation has the following query parameters:

        -   **update=\*replace\|merge\|delete**

            This defines how the update is performed. Valid values are as follows:

            -   **replace**

                All attribute values provided in the update replace the existing ones. This is the default.

            -   **merge**

                The new attribute values are merged with existing ones. This is only relevant for multi-value attributes.

            -   **delete**

                The values of all attributes provided in the update are removed from the profile. Consequently, the actual attribute values given in the update are ignored.

    -   **For the HTTP method DELETE:**

        This URI path operation deletes the user or group. This URI path operation has no query parameter.

-   **/um/groupmembership/unique ID of user /um/groupmembership/unique ID of group**

    -   **For the HTTP method GET:**

        This URI path operation returns the list of references to all group profiles of the groups of which the user or the group is a member. Refer to the URI path operations `/um/users/profiles/unique ID of user` and `/um/group/profiles/unique ID of group` listed previously. This is also called the membership list; for details refer to the topic about the payload description. This URI path operation has the following query parameters:

        -   **expandRefs=true\|\*false**

            If you set this to true, the complete profiles are embedded in the references. The default is false.

        -   **includeAttributes**

            The attributes contained in the profiles are limited to those specified in the comma-separated list provided by this attribute. By default, if you omit this parameter, the basic set of attributes is returned for users, or the minimum set of attributes is returned for groups.

        -   **showNested=true\|\*false**

            This parameter specifies whether nested groups are considered or not. If you set the parameter to false, only direct membership is evaluated. The default value is false.

    -   **For the HTTP methods PUT or POST:**

        This URI path operation updates the existing membership list for the user or group by the one that is posted. This URI path operation has the following query parameters:

        -   **update=\*replace\|merge\|delete**

            This defines how the update is performed. Possible values are as follows:

            -   **replace**

                The complete membership list will be replaced by the one posted. This is the default.

            -   **merge**

                The user or group are added to the groups contained in the posted membership list in addition to the existing group membership relations of the user or group.

            -   **delete**

                The user or group will be removed from all the groups contained in the posted list only.

    -   **For the HTTP method DELETE:**

        This URI path operation deletes the membership list for the user or group; this means that it removes the user or group from all groups. This URI path operation has no query parameter.



