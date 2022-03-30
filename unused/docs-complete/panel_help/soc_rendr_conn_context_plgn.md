# The HCL Connections context rendering plug-in 

You can use the ConnectionsContext rendering plug-in to access information that is related to the current HCL Connections integration context.

This plug-in has the following syntax:

```
[Plugin:ConnectionsContext type="service|portal|context|config" 
                           key="" defaultValue="" context=""]
```

The plug-in uses the following attributes:

-   **key**

    This attribute identifies a specific piece of HCL Connections integration context to be retrieved.

-   **type**

    This attribute identifies what type of information the key refers to. This attribute can take the following values:

    -   **config**

        This value specifies that the key refers to a configuration setting as specified in the WP Connections Integration Service resource environment provider in the WebSphere® Integrated Solutions Console. Type `config` supports the following key values: You can retrieve arbitrary custom property values from this resource environment provider by specifying the custom property name. The default type value is `context`.

    -   **context**

        This value specifies that the key refers to a dynamic HCL Connections context property that is provided through the HCL Connections public render parameter. This parameter is set when a user clicks a view link of an item in a social list. Type `context` supports the following key values:

        -   **id**

            This value returns the HCL Connections public render parameter value that represents the currently selected social object.

        -   **service**

            This value returns the name of the service that hosts this social object.

        -   **url**

            This value returns the HCL Connections URL that points to the Atom resource for the current social object. You can use this URL to generate a details view of this item that is based on social rendering.

        -   **userID**

            This value returns the user ID of the user whom the selected HCL Connections user profile represents. The user ID value is defined by the HCL Connections server. If the selected social object is not a user profile, the plug-in returns an empty value.

        -   **userObjectID**

            This value returns the object ID of the user whom the selected HCL Connections user profile represents. If the selected social object is not a user profile or if you have CF 03 installed and integrate with HCL Connections running in the Smart Cloud for Social Business, the plug-in returns an empty value.

        -   **userUID**

            This value returns the unique ID of the user whom the selected HCL Connections user profile represents. If the selected social object is not a user profile or if you have CF 03 installed and integrate with HCL Connections running in the Smart Cloud for Social Business, the plug-in returns an empty value.

    -   **portal**

        This value specifies that the key refers to a portal context. Type `portal` supports the following key values:

        -   **communityID**

            If the current page is a community page, the GUID of the associated community is returned. Example: `5f6ce586-a0c6-42fd-8201-c12d338b4c20`

        -   **userID**

            This value applies to V 8.5 CF 02 and earlier versions. This value returns the external user ID \(`extID`\) of the current user. Example: `8e0c7940-04c8-102a-9a9a-f713c20becf7`

        -   **userID**

            Starting with V 8.5 CF 03 and later versions, this value was changed. The original value `userID` was replaced by the value `portalUserID`, which is listed next. The `userID` value returns the user ID of the current user. The `userID` value is defined by the HCL Connections server.

            **Note:** If you integrate HCL Connections running in the Smart Cloud for Social Business, this ID can be different from the external user ID \(`extID`\) of the current user as defined by HCL Digital Experience. You can access the external user ID \(`extID`\) of the current user by using the value `portalUserID`, which is listed next.

        -   **portalUserID**

            This value applies to V 8.5 CF 03 and later versions.This value returns the external user ID \(`extID`\) of the current user. Example: `8e0c7940-04c8-102a-9a9a-f713c20becf7`

    -   **service**

        This value specifies that the key refers to a service base URL. Type `service` can take the title values as served by the HCL Connections service document. For example, these title values can be `search`, `communities`, `wikis`, `blogs`, `forums`, `profiles`. The HCL Connections context plug-in returns the base URL of the corresponding service. You can use this URL to build custom query URLs by appending URL query parameters and applying the `[Plugin:URLParam]` tag.

-   **defaultValue**

    Use this attribute to identify the value that you want to be returned if the identified data is not available.


Examples:

-   To get the service URL of the forums service, specify as follows:

    ```
    [Plugin:ConnectionsContext type="service" key="forums"]
    ```

-   To get the community ID of the community with which the current selection is associated, specify as follows:

    ```
    [Plugin:ConnectionsContext type="portal" key="communityID"]
    ```

-   To get the user ID of the current user, specify as follows:

    ```
    [Plugin:ConnectionsContext type="portal" key="userID"]
    ```

-   To get the Atom resource URL of the social list item link that a user clicked, specify as follows:

    ```
    [Plugin:ConnectionsContext type="context" key="url" defaultValue="no context available"]
    ```

-   You might want to obtain the HCL Connections server type. For example, you might want to check whether that portal integrates an on-premise HCL Connections server or an HCL Connections server that runs on the Smart Cloud for Social Business. In this case, specify as follows: 

    ```
    [Plugin:ConnectionsContext type="config" key="server.type]
    ```


**Related information**  


[Extending social lists by using the digital data connector ](../social/soc_rendr_xtnd_sl_by_plrf.md)

