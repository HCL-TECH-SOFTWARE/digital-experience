# Syntax for `BasicJSONSelection` based list-rendering profiles

A list-rendering profile that is based on `BasicJSONSelection` contains a set of name-value pairs called entries. This set of entries defines the set of available list properties and item attributes that are available for transforming external data into bean lists.

The following list of list-rendering profile entries shows a sample `BasicJSONSelection` based list-rendering profile that you can use for transforming JSON documents:

```
sample_json.Name=sample.profile.json
sample_json.BeanListProviderID=ibm.portal.ddc.json
sample_json.Type=BasicJSONSelection
sample_json.ListItemSelection=children

# Item Attribute Declarations:
sample_json.ItemAttribute.id=id
sample_json.ItemAttribute.title=title
sample_json.ItemAttribute.authorName=author.name
sample_json.ItemAttribute.authorEmail=author.email


# List Property Declarations:
sample_json.ListProperty.id=id
```

The names that you use in the list-rendering profile entries must adhere to a specific syntax to be parsed correctly by the Digital Data Connector \(DDC\) for HCL Portal framework.

The format for the entry names is `profile-id.key[.name[.meta-data-key]]`. The meanings of the portions are described in the following list:

-   **profile.id**

    This key specifies an internal ID. It is used only to correlate the entries that belong to the same profile.

-   **key**

    This key identifies the list-rendering profile aspect that is affected by this entry. Valid values are `Name`, `BeanListProviderID`, `ResourceBundleBaseName`, `NamespaceMapping`, `ListItemSelection`, `ItemAttribute`, `AssociatedItemAttribute`, `ComputedItemAttribute`, `ConstructedItemAttribute`, `ListProperty`, `ComputedListProperty`, `Extends`, `ShowInAuthoringUI`, `Shared`, `Escape`.

-   **name**

    This key specifies the name of the artifact that is to be defined, for example the attribute name. Names must not contain a period \( `.` \).

-   **meta-data-key**

    Some list-rendering profiles entries support metadata that can be associated by using corresponding metadata keys. Valid values are `Type`, `Default`, `Format`, `Depends`, `ShowInAuthoringUI`.


The set of valid values for a list-rendering profile entry depend on the key that is used in the entry name. For more information, read the following topics.

-   **[BasicJSONSelection list-rendering profile keys](../social/plrf_lr_profl_keys_json.md)**  
The following list shows the set of list-rendering profile entry keys that are available in the Digital Data Connector \(DDC\) for HCL Portal framework.
-   **[BasicJSONSelection list-rendering profile metadata keys](../social/plrf_lr_profl_metadata_keys_json.md)**  
Some item attribute and list property declarations support metadata that can be associated by using corresponding metadata keys.

**Parent topic:**[Integrating remote JSON data](../social/plrf_intgrt_rmt_json.md)

