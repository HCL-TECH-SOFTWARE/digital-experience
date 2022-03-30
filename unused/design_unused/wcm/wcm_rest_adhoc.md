# Query parameters

The following parameters can be used with queries.

|Parameter|Details and examples of parameters that can be added to queries|
|---------|---------------------------------------------------------------|
|`namelikeignorecase`|This parameter is used as a wildcard query for items with names like the specified *namelike* parameter. It ignores the case of the string.For example:

```
?namelikeignorecase=nameApproxValue%
```

**Note:** Libraries cannot be queried by using this parameter.

|
|`titlelikeignorecase`|This parameter is used as a wildcard query for items with titles like the specified titlelike parameter. It ignores the case of the string.For example:

```
?titlelikeignorecase=nameApproxValue%
```

|
|`titleornamelike`|If this parameter is set instead of merging titlelike and namelike via an AND condition it will be merged via an OR condition.|

|Parameter|Details and examples of parameters that can be added to queries|
|---------|---------------------------------------------------------------|
|`textcontains: Any of the words`|This API lets Content Authors search for free form text in the Web Content Manager JCR.

 **Sample URL**:

 ```
http://host:port/wps/mycontenthandler/wcmrest/query?textcontains=...
```

|
|`textcontainsexact: Exact phrase`|This API lets Content Authors search for an exact match of text in the Web Content Manager JCR.

 **Sample URL**:

 ```
http://host:port/wps/mycontenthandler/wcmrest/query?textcontainsexact=...
```

|

|Parameter|Details and examples of parameters that can be added to queries|
|---------|---------------------------------------------------------------|
|`approver`|This parameter is used to query items with a specific approver. A user ID must be specified when this parameter is used.For example:

```
?approver=userid
```

|
|`authoringtemplateid`|This parameter is used to query items with a specific authoring template ID.For example:

```
?authoringtemplateid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53
```

|
|`author`|This parameter is used to query items with a specific author. A user UID must be specified when this parameter is used.For example:

```
?author=uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm
```

|
|`categoryid`|This parameter is used to query items with a specific category ID.For example:

```
?categoryid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53
```

|
|`createdafter`|This parameter is used to query items that are created after a specific date and time.For example:

```
?createdafter=2011-01-11T11:43:29.0150Z
```

|
|`createdbefore`|This parameter is used to query items that are created before a specific date and time.For example:

```
?createdbefore=2011-01-11T11:43:29.0150Z
```

|
|`creator`|This parameter is used to query items with a specific creator. A user UID must be specified when this parameter is used.For example:

```
?creator=uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm
```

|
|`dateformat`|This parameter is used to define the date format of query parameters.For example:

```
?dateformat=mm-dd-yyyy&createdbefore=12-31-2011
```

If a date format not specified, then the default format yyyy-MM-dd'T'HH:mm:ssz is used.

|
|`depth`|This parameter is used with the `parentid` and is used to define whether to search for all descendants of a parent, or just the immediate children of a parent item.For example, to query only the immediate children of an item, you add `&depth=CHILDREN` to the query:

```
?parentid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53&depth=CHILDREN
```

To query all descendants of an item, you add `&depth=DESCENDANTS` to the query:

```
?parentid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53&depth=DESCENDANTS
```

|
|`expireafter`|This parameter is used to query items that are expired after a specific date and time.For example:

```
?expireafter=2011-01-11T11:43:29.0150Z
```

|
|`expirebefore`|This parameter is used to query items that were expired before a specific date and time.For example:

```
?expirebefore=2011-01-11T11:43:29.0150Z
```

|
|`filteraccess`|This parameter is used to filter access control roles using the WCM Query API. All other parameters like `parentid` or `type` still apply, so one can, for example, find all libraries the user has the Editor role on. Valid roles: `User`, `Editor`, `Admin, Manager`, `Contributor`.For example:

```
?filteraccess=Contributor<![CDATA[&parentid=wcmrest%3A04b24105-2ea0-422f-be83-e009a7766c1b]]
```

|
|`id`|This parameter is used to query an item with a specific ID.For example:

```
?id=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53
```

|
|`keyword`|This parameter is used to query items that are profiled with a specific keyword.For example:

```
?keyword=keywordValue
```

|
|`lastmodifiedafter`|This parameter is used to query items that were last modified after a specific date and time.For example:

```
?lastmodifiedafter=2011-01-11T11:43:29.0150Z
```

|
|`lastmodifiedbefore`|This parameter is used to query items that were last modified before a specific date and time.For example:

```
?lastmodifiedbefore=2011-01-11T11:43:29.0150Z
```

|
|`lastmodifier`|This parameter is used to query items that were last modified by a specific user. A user UID must be specified when this parameter is used.For example:

```
?lastmodifier=uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm
```

|
|`libraryid`|This parameter is used to query items that are stored in a specific library. For example:

```
?libraryid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53
```

|
|`namelike`|This parameter is used as a wildcard query for items with names like the specified *namelike* parameter.For example:

```
?namelike=nameApproxValue%
```

**Note:** Libraries cannot be queried by using this parameter.

|
|`name`|This parameter is used to query an item with a specific name.For example:

```
?name=nameValue
```

**Note:** Libraries cannot be queried by using this parameter.

|
|`owner`|This parameter is used to query items with a specific owner. A user UID must be specified when this parameter is used.For example:

```
?owner=uid=WCMUT_Editor_A,o=defaultWIMFileBasedRealm
```

|
|`pagesize`|This parameter is used to restrict the number of items that are returned by a query to a set number. It can be used with the `page` parameter to return specific pages of results.For example, to restrict the number of queries to be returned to 5:

```
?type=PresentationTemplate&pagesize=5
```

|
|`page`|This parameter is used with the `pagesize` parameter to define what set of results to display. For example, if `pagesize` is set to 5, and the `page` parameter is set to 2, then only results 6 - 10 are displayed.For example:

```
?type=PresentationTemplate&pagesize=5&page=2
```

|
|`parentid`|This parameter is used to query items that are the children of a specific parent item. For example:

```
?parentid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53
```

You can use the `depth` parameter to define whether to search for all descendants of a parent, or just the immediate children of a parent item.

|
|`projectid`|This parameter is used to query items that are linked to a specific project.For example:

```
?projectid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53
```

|
|`projectstate`|This parameter is used to query items that are linked to a project with a specific state. Refer to the following documentation for the different values you can use for the `projectstate` parameter: [Project States](wcm_dev_projects_approving.md)The following values can be used with this parameter:

-   `ACTIVE`
-   `SYNDICATING`
-   `REVIEW`
-   `PENDING`
-   `PUBLISHING`
-   `PUBLISHED_FAILED`
-   `PUBLISHED`

For example, to query items that are linked to projects with a state of "ACTIVE" you would use the following query:

```
?projectstate=ACTIVE
```

|
|`publishafter`|This parameter is used to query items that are published after a specific date and time.For example:

```
?publishafter=2011-01-11T11:43:29.0150Z
```

|
|`publishbefore`|This parameter is used to query items that were published before a specific date and time.For example:

```
?publishbefore=2011-01-11T11:43:29.0150Z
```

|
|`sort`|The `sort` parameter is appended to queries to determine how query results are sorted. The following values can be used with the `sort` parameter.-   `author`
-   `created`
-   `modified`
-   `name`
-   `title`
-   `parents`
-   `position`

The values `_ascending` or `_descending` are appended to the query to determine sort order.

For example, to sort a presentation template query in ascending order of creation, you would use:

```
?type=PresentationTemplate&sort=created_ascending
```

To sort a presentation template query in descending order of creation, you would use:

```
?type=PresentationTemplate&sort=created_descending
```

If `_ascending` or `_descending` are not specified, the results as displayed in ascending order.

|
|`state`|This parameter is used to query items that are in a specific state. The following values can be used with this parameter:-   `DRAFT`
-   `PUBLISHED`
-   `EXPIRED`

For example:

```
?state=PUBLISHED
```

|
|`titlelike`|This parameter is used as a wildcard query for items with titles like the specified `titlelike` parameter.For example:

```
?titlelike=nameApproxValue%
```

|
|`title`|This parameter is used to query an item with a specific title.For example:

```
?title=titleValue
```

|
|`type`|This parameter is used to query items of a specific item type.For example, to query a list of components:

```
?type=LibraryHTMLComponent
```

|
|`workflowid`|This parameter is used to query items that use a specific workflow.For example:

```
?workflowid=wcmrest:8d25860b-7a5c-4015-9cd5-bdcc60ce14bb
```

|
|`workflowstageid`|This parameter is used to query items that are currently active within a specific workflow stage.For example:

```
?workflowstageid=wcmrest:18cfc80c-a490-4d75-9057-fed3db89de53
```

|

## How to use multiple parameters

-   Multiple instances of the same parameter type in a query can be specified only as "OR" queries, with the following exceptions:
    -   **Only one value allowed**

        Only one instance of the following parameters can be used in a single query. If multiple instances are used, only the first instance is used by the query:

        -   `categoryid`
        -   `dateformat`
        -   `depth`
        -   `page`
        -   `pagesize`
    -   **"AND" queries allowed**

        The following queries can be used as "AND" queries:

        -   `createdafter`
        -   `createdbefore`
        -   `expireafter`
        -   `expirebefore`
        -   `lastmodifiedafter`
        -   `lastmodifiedbefore`
        -   `publishafter`
        -   `publishbefore`
    -   **Sort values**

        Sort values are comma-separated. For example:

        ```
        ?sort=created_ascending,title_descending
        ```


## Text Search REST API

This API lets Content Authors search for free form text in the Web Content Manager JCR. It is equivalent to the functionality in the Web Content Manager user interface:

![](../images/web_content_mgr_jcr_ref_ui.png "Advanced Search in WCM")

Using the Text Search REST API

The existing search query API is extended and two new parameters are added. See [REST Query service for web content](wcm_rest_query.md) and [Table 2](#table_onm_klg_zlb) for more information.

-   **Endpoint**

    **GET request to:**

    ```
    http://host:port/wps/mycontenthandler/wcmrest/query?textcontainsexact=...
    ```

    or

    ```
    http://host:port/wps/mycontenthandler/wcmrest/query?textcontains=...
    ```

    **Sample URL:**

    ```
    http://samplehost.team-q-dev.com:10039/wps/mycontenthandler/!ut/p/digest!2fHfKIZpm7_8BPtgSigLeg/wcmrest/query?textcontainsexact=Sample%20Article
    ```


-   **Expected Body**

    Body can just have the basic WCM structure:

    ```
    http://samplehost.team-q-dev.com:10039/wps/mycontenthandler/!ut/p/digest!2fHfKIZpm7_8BPtgSigLeg/wcmrest/query?textcontainsexact=Sample%20Article
    ```


-   **Expected Headers**

    LTPA token of the user. Also works anonymously.


-   **Query Parameters**

    ```
    textcontains: Any of the words
    ```

    ```
    textcontainsexact: Exact phrase
    ```


-   **Return body**

    The found results. Same as when calling existing query API.

    ```
    <?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <id>wcmrest:query?textcontainsexact=Sample%20Article</id>
        <title>wcmrest:query?textcontainsexact=Sample%20Article</title>
        <updated>2020-04-14T12:36:14.477Z</updated>
        <total>2</total>
        <entry>
            <id>wcmrest:5bfbd4e2-f203-4912-87c2-4edd3e6fc4de</id>
            <title xml:lang="en">Sample Article 2</title>
            <wcm:displayTitle xml:lang="en">Sample Article 2</wcm:displayTitle>
            <summary xml:lang="en"></summary>
            <wcm:name>Sample Article 2</wcm:name>
            <wcm:type>Content</wcm:type>
            <updated>2020-04-14T12:30:05.676Z</updated>
            <wcm:lastModifier>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!2fHfKIZpm7_8BPtgSigLeg/um/users/profiles/Z9eAeIHO0JPO64BPIJM4CPHDAMMG65JO6MM07GHO0JMOCHHC43IH6OPC63RS6M1</uri>
                <name>wpsadmin</name>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!2fHfKIZpm7_8BPtgSigLeg/wcmrest/Content/5bfbd4e2-f203-4912-87c2-4edd3e6fc4de" xml:lang="en" label="Edit"/>
            <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!2fHfKIZpm7_8BPtgSigLeg/wcmrest/Content/5bfbd4e2-f203-4912-87c2-4edd3e6fc4de" xml:lang="en" label="Read"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!2fHfKIZpm7_8BPtgSigLeg/wcmrest/Library/f2a3c1ee-591d-4fe1-85d5-7d27662154a5" xml:lang="en" label="Library"/>
            <link rel="preview" href="/wps/poc/!ut/p/digest!2fHfKIZpm7_8BPtgSigLeg/wcm/oid:5bfbd4e2-f203-4912-87c2-4edd3e6fc4de" xml:lang="en" label="Preview"/>
            <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        </entry>
        <entry>
            <id>wcmrest:2209b125-a9b3-4f2a-811f-4a297017dc9e</id>
            <title xml:lang="en">Sample Article</title>
            <wcm:displayTitle xml:lang="en">Sample Article</wcm:displayTitle>
            <summary xml:lang="en"></summary>
            <wcm:name>Sample Article</wcm:name>
            <wcm:type>Content</wcm:type>
            <updated>2020-04-14T11:44:10.229Z</updated>
            <wcm:lastModifier>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!2fHfKIZpm7_8BPtgSigLeg/um/users/profiles/Z9eAeIHO0JPO64BPIJM4CPHDAMMG65JO6MM07GHO0JMOCHHC43IH6OPC63RS6M1</uri>
                <name>wpsadmin</name>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!2fHfKIZpm7_8BPtgSigLeg/wcmrest/Content/2209b125-a9b3-4f2a-811f-4a297017dc9e" xml:lang="en" label="Edit"/>
            <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!2fHfKIZpm7_8BPtgSigLeg/wcmrest/Content/2209b125-a9b3-4f2a-811f-4a297017dc9e" xml:lang="en" label="Read"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!2fHfKIZpm7_8BPtgSigLeg/wcmrest/Library/f2a3c1ee-591d-4fe1-85d5-7d27662154a5" xml:lang="en" label="Library"/>
            <link rel="preview" href="/wps/poc/!ut/p/digest!2fHfKIZpm7_8BPtgSigLeg/wcm/oid:2209b125-a9b3-4f2a-811f-4a297017dc9e" xml:lang="en" label="Preview"/>
            <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        </entry>
    </feed>
    
    ```


