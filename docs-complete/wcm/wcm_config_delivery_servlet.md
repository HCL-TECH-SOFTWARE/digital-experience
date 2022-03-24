# Access web content by using a servlet 

Users can access content that is displayed by using the Web Content Manager servlet by connecting to a URL. A servlet delivered website is used when you don't need to use any HCL Portal based features such as authoring tools.

## Accessing a web page by using a servlet

The following URL structure is used to connect to a web page:

```
http://[HOST]:[PORT]/wps/wcm/connect/[PATH]?srv=
```

**Non-ascii characters:**

Non-ascii characters cannot be used in the query string section of URLs. For this reason, it is best not to name Web Content Manager items using Non-ASCII characters if you plan to use URLs to call Web Content Manager items.

-   \[PATH\] can be the path to a site area or content item. This setting must be entered for all types of content, including components. In the case of components, this is the path to the site area or content item that the component is displayed with.
-   srv= is either cmpnt or page.

|Service option|Details|
|--------------|-------|
|`srv=cmpnt`|This option retrieves a component either from the component library or from a site area or content item. You must also specify the following:-   **`source=`**

This determines where the component is being sourced from. This is either:

    -   library
    -   sitearea
    -   content
-   **`cmpntname=`componentname**

This is the name of the component being retrieved.


|
|`srv=page`|This retrieves a content item. As srv=page is returned as default, this can be omitted from the URL.The presentation template to use when displaying this content is specified by adding:

```
presentationtemplate=library/presentationtemplatename
```

|

## Examples:

-   **URL to content:**

    ```
    http://[HOST]:[PORT]/wps/wcm/connect/[PATH]
    ```

    Example: `http://host:10039/wps/wcm/connect/sitearea/content`

-   **URL to content with a presentation template defined:**

    ```
    http://[HOST]:[PORT]/wps/wcm/connect/[PATH]
    ?presentationtemplate=[libraryname/presentationtemplatename]
    ```

    Example: `http://host:10039/wps/wcm/connect/sitearea/content?presentationtemplate=library/presentationtemplate`

-   **URL to a library component:**

    ```
    http://[HOST]:[PORT]/wps/wcm/connect/[PATH]
    ?srv=cmpnt&source=library&cmpntname=[componentname]
    ```

    Example: `http://host:10039/wps/wcm/connect/sitearea/content?srv=cmpnt&source=library&cmpntname=component`

-   **URL to a content component:**

    ```
    http://[HOST]:[PORT]/wps/wcm/connect/[PATH]
    ?srv=cmpnt&source=content&cmpntname=[componentname]
    ```

    Example: `http://host:10039/wps/wcm/connect/sitearea/content?srv=cmpnt&source=content&cmpntname=component`


## Applying Custom Caching and Expiring Parameters.

Like any other URL request that is made to a Web Content Manager Server, Custom Caching and Expiring parameters can be added to a request. See the topic, "Using Custom Caching" for further information.

-   **Example:**

    ```
    http://[HOST]:[PORT]/wps/wcm/connect/[PATH]?CACHE=SITE&EXPIRES=REL+9000s
    ```

    In this example, the content being retrieved by this URL is saved in the Basic Site Cache, and expired after 9000 seconds \(two and half hours\).


**Parent topic:**[Delivering web content ](../wcm/wcm_cms_delivery_system.md)

