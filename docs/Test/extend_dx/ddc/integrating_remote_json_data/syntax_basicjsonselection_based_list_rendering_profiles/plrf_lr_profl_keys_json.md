# `BasicJSONSelection` list-rendering profile keys

The following list shows the set of list-rendering profile entry keys that are available in the Digital Data Connector \(DDC\) for HCL Portal framework.

-   **Name**

    This value specifies the name of this list-rendering profile. Specifying the name is mandatory for each rendering profile. You can reference this value through the profile attribute of the `[Plugin:ListRenderingContext]` tag and through the `Extends` list-rendering profile entry of other list-rendering profiles. The `Extends` list-rendering profile entry is described later in this list. If this profile does not reference a resource bundle through the `ResourceBundleBaseName` key, this name also shows up in the **Insert a tag** dialog of the HCL Web Content Manager authoring user interface. The name must be unique among all list-rendering profiles in the system.

    Example: To set the name of the profile that is identified by profile ID `xyz` to `yourCo.ProductList`, specify `xyz.name=yourCo.ProductList`.

-   **BeanListProviderID**

    Specifying the ID for the DDC plug-in is mandatory for each list-rendering profile. It specifies the extension ID of the DDC plug-in that is used with this profile. The DDC plug-in also gets the calls for computing all computed item attributes. Computed item attributes are described later in this list.

    Example: To use the generic JSON DDC plug-in, specify `xyz.BeanListProviderID=ibm.portal.ddc.json`.

-   **ResourceBundleBaseName**

    The resource bundle base name is optional. It specifies the base name of the Java resource bundle that serves the translated strings for the name of this profile and all item attributes that are defined in this profile. The translated strings include associated, computed, and constructed item attributes. The resource bundle base name must identify a Java resource bundle that is available in the portal class path.

    Example: To use the resource bundle `yourCo.Bundle` for the profile that is identified by profile ID `xyz`, you specify `xyz.ResourceBundleBaseName=yourCo.Bundle`

-   **ShowInAuthoringUI**

    Valid values are `true` and `false`. If you set this attribute to `false`, the list-rendering profile does not show up in the **Select the target component for this tag** selection list of the **Insert a Tag** dialog of the Web Content Manager authoring user interface.

-   **ListItemSelection**

    The list item selection defines the `BasicJSONSelection` statement that is used to break down the source JSON document into a list of individual JSON objects. Each object serves the data for a corresponding item in the resulting bean list. The DDC plug-in evaluates the `BasicJSONSelection` statement against the root element of the source JSON object. For the value, specify a valid `BasicJSONSelection` statement. Specifying the list item selection is mandatory for profiles of type `BasicJSONSelection`.

    Example: To turn all entries of a JSON Array with the name `children` that are contained in a JSON member with the name `data` in a JSON feed into list items in the profile that is identified by the profile ID `xyz`, specify `xyz.ListItemSelection=data.children`.

-   **ItemAttribute**

    This key declares an attribute available in all items in the list. The attribute values can then be accessed in your Web Content Manager design components by using the `[AttributeResource attributeName=""]` tag by setting `attributeName` to the name value of the corresponding `ItemAttribute` declaration. For example, to access the value of an item attribute declared with the key `xyz.ItemAttribute.myTitle`, you can use the following Web Content Manager tag `[AttributeResource attributeName="myTitle"]`. Furthermore, declared attributes are listed in the **Select attribute resource tag type** selection box of the **Insert a Tag** dialog of the Web Content Manager authoring user interface when you select the containing profile in the **Select the target component for this tag** selection box.

    **Important:** Each profile must define at least one `ItemAttribute` named `id`. This ID is used to uniquely identify an individual item in the list.

    In profiles of type `BasicJSONSelection`, the value for an item attribute declaration is a `BasicJSONSelection` statement that is used for extracting the declared attribute value from the JSON source object. The DDC plug-in evaluates the `BasicJSONSelection` statement for each item in the lists relative to the corresponding JSON fragments that are identified by using the `ListItemSelection` specification.

    Example: To extract the author email of the entries in a JSON feed, specify `xyz.ItemAttribute.authorEmail=author.email`.

-   **AssociatedItemAttribute**

    This key declares an attribute that is available in all items in the list. You can access the attribute values accessed in your Web Content Manager design components in the same way as item attributes. They also appear in the same places in the Web Content Manager authoring user interface. The difference is that in `BasicJSONSelection` based profiles, you can use associated item attribute declarations to extract data not directly from the source JSON document. Instead, you can extract data from a linked JSON source document that is referenced by the source JSON document. To define an associated item attribute, you must build the value for such an entry by combining a source URL with a `BasicJSONSelection` statement to select the attribute value from the linked document. You specify the source URL by using the name of the attribute that selects the source URL from the current bean list. You specify the `ItemAttribute` reference that provides the document URL by using the pattern `{$item-attribute-name}`

    Example: To obtain the full product description from a list of products, specify as follows:

    ```
    xyz.ItemAttribute.detailsLink=entry.link[rel=details] 
    xyz.AssociatedItemAttribute.productFullDescription={$detailsLink}details.description
    ```

    The DDC plug-in computes the values for this attribute in the following sequence:

    1.  The DDC plug-in evaluates the value of the `detailsLink` item attribute.
    2.  The DDC plug-in loads the JSON document from that URL.
    3.  The DDC plug-in evaluates the `BasicJSONSelection` statement `detailsLink` on that document.
-   **ConstructedItemAttribute**

    This key declares an attribute that is available in all items in the list. If you define such an attribute, you can access the attribute values in your Web Content Manager design components in the same way as item attributes. The attribute values also appear in the same places as item attributes in the Web Content Manager authoring user interface. The difference between the two attribute types is as follows: You can build the values for constructed item attributes by combining the values from one or more other item attributes that have a static string. To define a constructed item attribute, you must provide a template string that is used to build the actual attribute values. The template string can contain arbitrary text that is mixed with item attribute references. To specify the `ItemAttribute` references, you provide the document URL by using the pattern `{$item-attribute-name}`. Example: To construct an image URL from an image location and image file name item attribute, specify as follows:

    ```
    xyz.ItemAttribute.imageLocation=entry.image.location 
    xyz.ItemAttribute.imageFileName=entry.image.name 
    xyz.ConstructedItemAttribute.imageURL={$imageLocation}/{$imageName}
    ```

-   **ComputedItemAttribute**

    This key declares an attribute that is available in all items in the list. You can then access the attribute values in your Web Content Manager design components in the same way as item attributes. They attribute values also appear in the same places as item attributes in the Web Content Manager authoring user interface. The difference between the two types of attribute types is as follows: The values for computed item attributes are not extracted from JSON objects but computed based on the item attribute values and other context information. The DDC plug-in that is associated to the list-rendering profile through the `BeanListProviderID` key computes the attribute values. To serve such data, the DDC plug-in must implement the optional `com.ibm.portal.wcm.plr.ComputedAttributeValueProvider` Java interface. This interface is defined by the public Digital Data Connector \(DDC\) for HCL Portal APIs. The computation is typically done based on the non-computed attribute values in combination with configuration data or other extra context information.

    !!! note 
        The generic JSON DDC plug-in supports no computed item attributes.

    To define a computed item attribute, you must declare on which data the attribute value computation depends:

    -   The computed item attribute value depends only on the other item attribute values. In this case, you must set it to value `{$lazy}`.
    -   The computed item attribute value depends on other item attribute values and on the current rendering context that is the current portlet request and response objects. These objects are not cached in the bean list cache, but they are recomputed for each rendering request. If the computed item attribute value depends on the current request context, you must set the value of such a computed item attribute value to the string `{$default}`.
    Example: To define an attribute that represents a stateful portal resource URL that points to the current item, you can declare a computed item attribute such as this one: `xyz.ComputedItemAttribute.portalLink={default}`.

    During run time, the DDC framework then requests the actual values for this attribute. It does so by starting the following method on the specific DDC plug-in plug-in that associated with this list-rendering profile:

    ```
    com.ibm.portal.wcm.plr.ComputedAttributeValueProvider.getComputedItemAttributeValue()
    ```

-   **ListProperty**

    This key declares a property of the list. You can then access the attribute values in your Web Content Manager design components. You do so by using the `[Plugin:ListRenderingContext action="getListProperty" key=""]` tag and by setting the `key` to the name value of the corresponding `ListProperty` declaration. For example, to access the value of a list property that is declared with the key `xyz.ListProperty.myProperty`, you use the following Web Content Manager tag: `[Plugin:ListRenderingContext action="getListProperty" key="myProperty"]` The value for a list property declaration is a `BasicJSONSelection` statement that is used for extracting the declared attribute value from the JSON source document. The plug-in evaluates the `BasicJSONSelection` statement relative to the root of the source JSON document.

    Example: To get the link to the next feed page of a JSON feed, specify

    ```
    xyz.ListProperty.nextLink=links.[rel=next]
    ```

-   **ComputedListProperty**

    This key declares a list property of the list. You can then access the attribute values in your Web Content Manager design components in the same way as list properties. The difference between list properties and computed list properties as follows: The values for computed list properties are not extracted from JSON documents, but computed based on the item attribute values and other context information. The DDC plug-in that is associated to the list-rendering profile through `theBeanListProviderID` key computes the property values. To serve such data, the DDC plug-in must implement the optional `com.ibm.portal.wcm.plr.ComputedAttributeValueProvider` Java interface. This interface is defined by the public APIs of Digital Data Connector  APIs. The computation is usually done based on the non-computed list property values in combination with configuration data or other extra context information.

    !!! note 
        The generic JSON DDC plug-in does not support computed list properties. To define a computed list property, you must declare on which of the following two types of data the property value computation depends:
        -   The computed item attribute value depends only on the other list property values. In this case, you must set it to value `{$lazy}`.
        -   The computed list property value depends on other list property values and on the current rendering context, that is the current portlet request and response objects. These objects are not cached in the bean list cache, but they are recomputed for each rendering request. If the computed list property value depends on the current request context, you must set the value of such a computed list property value to the value `{$default}`.
        
-   **Extends**

    Use this key to define a derived profile. A derived profile includes the item attribute and the list property declarations of other list-rendering profiles by referencing these profiles. For more information, read *Creating list-rendering profiles*.



???+ info "Related information"
    - [Creating list-rendering profiles](../../working_with_list_rendering_profiles/plrf_crt_lr_profiles.md)

