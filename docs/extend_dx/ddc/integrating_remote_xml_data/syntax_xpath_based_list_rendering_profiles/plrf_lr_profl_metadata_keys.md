# XPath list-rendering profile metadata keys

Some item attribute and list property declarations support metadata that can be associated by using corresponding metadata keys.

You can use them in combination with `ItemAttribute`, `AssociatedItemAttribute`, `ConstructedItemAttribute`, `ComputedItemAttribute`, and `Listproperty` declarations that are listed under *List-rendering profile keys*. The following list describes the supported metadata key values:

-   **Type**

    Use this metadata key to specify whether the attribute value is of type `String`, `Date`, `XML`, or `NodeList`. You can format values of type `Date` in flexible ways. You do so by using the format parameter of the `[AttributeResource attributeName="" format=""]` tag. Values of type `XML` are written as serialized XML. Values of type `NodeList` are typically meant to be processed further during the computation of computed item attributes. The Digital Data Connector \(DDC\) for HCL Portal plug-in can access the attribute value as an object of type `org.w3c.dom.NodeList`.

    Example: `xyz.ItemAttribute.updated=./atom:updated xyz.ItemAttribute.updated.Type=Date`

    Use this metadata key to specify of which type the attribute value is. Four types are available:

    -   **String**

        Values of type `String` are written as plain text.

    -   **Boolean**

        If values of type Boolean are available, they are returned as `true` or `false`.

    -   **Date**

        You can format values of type `Date` in flexible ways. You do so by using the format parameter of the `[AttributeResource attributeName="" format=""]` tag.

    -   **XML**

        Values of type `XML` are written as serialized XML.

    -   **NodeList**

        Values of type `NodeList` are typically meant to be processed further during the computation of computed item attributes. The DDC plug-in can access the attribute value as an object of type `org.w3c.dom.NodeList`.

    Example:

    ```
    xyz.ItemAttribute.updated=./atom:updated 
    xyz.ItemAttribute.updated.Type=Date
    ```

-   **Default**

    Use this metadata key to specify a static default value that you want to be returned if the appropriate value cannot be retrieved. Example:

    ```
    xyz.ItemAttribute.rating=./avgRating 
    xyz.ItemAttribute.rating.default=0.5
    ```

-   **Format**

    Use this metadata key to specify the format that you want to use to parse an XML fragment into a date object. Example:

    ```
    xyz.ItemAttribute.updated=./atom:updated
    xyz.ItemAttribute.updated.Type=Date
    xyz.ItemAttribute.updated.Format=yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
    ```

-   **FormatLocale**

    This metadata key is available starting with HCL Digital Experience V 8.5 Cumulative Fix 02. Use this metadata key to specify the locale that you want to use for parsing an XML fragment into a date object. Example:

    ```
    xyz.ItemAttribute.updated=./atom:updated
    xyz.ItemAttribute.updated.Type=Date
    xyz.ItemAttribute.updated.Format=yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
    xyz.ItemAttribute.updated.FormatLocale=de
    ```

    If you do not specify this metadata, the locale `en` is used by default. You can change the system-wide default locale value by specifying a custom property named `ddc.date.format.default.locale` in the portal Configuration Service. To do so, access the WebSphere® Integrated Solutions Console, select the WP Config Service resource environment provider, and set the property to the required locale.

-   **Depends**

    To enforce a specific computation order for the non-lazy computed item attributes and list properties in the current profile, set this metadata on the `ComputedItemAttribute` and `ComputedListProperty`. Such a computation order can be required if specific computed attributes must access the value of other computed attributed values. In this case, the attribute that requires the value of another computed attributed must list the other attribute in the `Depends` metadata key. If the attribute depends on multiple other computed attributes, you can list multiple attribute names as a comma-separated list. Example: You defined computed attributes named `link` and `proxiedLink`. You want to make sure that the value for the `link` attribute is computed before the value for the `proxiedLink` attribute. In this case, specify as follows:

    ```
    xyz.ItemAttribute.link={computed} 
    xyz.ItemAttribute.proxiedLink={computed} 
    xyz.ItemAttribute.proxiedLink.depends=link
    ```

    **Note:** You do not have to flag dependencies on non-computed attributes. Non-computed attributes are always extracted from the XML before the computed attributes are resolved.

-   **Escape**

    Use this metadata to define the escaping that you want applied when you write the values of this attribute. Specify one of the values `xml`, `json`, `javascript`, or `none`. The default value is `none`.

-   **Shared**

    Use this metadata in context of `AssociatedItemAttribute` declarations to define the cache scope for the associated XML document. If this document can be shared among multiple users, you can set this metadata to the value `true`. If the associated document can contain different data for different users, cache it per user. In this case, you can leave this metadata undefined or explicitly set it to `false`.

    **Note:** Associated documents are cached in the `com.ibm.workplace.wcm.pzn.plr.xml.DocumentCache`. Associated documents that are cached in scope `Shared` are not automatically invalidated during user login.

-   **Processors**

    Use this metadata on an `ItemAttribute`, `AssociatedItemAttribute`, `ConstructedItemAttribute`, or `ComputedItemAttribute` to specify one or multiple IDs of attribute value processor plug-ins that you want to run when the attribute value is retrieved. The ID specified must reference the unique ID of attribute value processor plug-ins that are deployed to your system. If you specify multiple IDs, separate them using a comma. Example:

    ```
    xyz.ItemAttribute.updated=./atom:title
    xyz.ItemAttribute.updated.Processors=com.acme.TransformText
    ```

    For more information, read *Creating and deploying custom attribute value processor plug-ins*.



**Related information**  


[Creating and deploying custom attribute value processor plug-ins](../../crt_dply_cstm_attval_pro_plgin.md)

