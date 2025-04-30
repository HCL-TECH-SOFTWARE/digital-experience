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
|`srv=cmpnt`|This option retrieves a component either from the component library or from a site area or content item. You must also specify the following:-  <br> **`source=`** <br> This determines where the component is being sourced from. This is either: <br>-   library <br>-   sitearea <br>-   content <br> **`cmpntname=`componentname** <br>This is the name of the component being retrieved.|
|`srv=page`|This retrieves a content item. As srv=page is returned as default, this can be omitted from the URL.The presentation template to use when displaying this content is specified by adding: <br> \``` <br> presentationtemplate=library/presentationtemplatename <br>\ ```|

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

## HCLSoftware U learning materials

To learn how to get started with the development aspects of HCL Digital Experience (DX) Web Content, go to the [Web Content Development lesson in the HCL Digital Experience for Developers (Beginners)](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D414 ){target="_blank"} course. You can try it out using the [Web Content Development Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Web_Content_Development.pdf){target="_blank"} and corresponding [Web Content Development Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Web_Content_Development_Lab_Resources.zip){target="_blank"}.
