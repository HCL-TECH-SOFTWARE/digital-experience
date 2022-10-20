# Syntax for XPath based list-rendering profiles

An XPath based list-rendering profile contains a set of name-value pairs called entries. This set of entries defines the set of available list properties and item attributes that are available for transforming external data into bean lists.

The following list of list-rendering profile entries show a sample XPath based list-rendering profile that you can use for transforming Atom feed documents. For more information, read *The Atom Syndication Format*.

```
sample_atom.BeanListProviderID=ibm.portal.ddc.xml
sample_atom.NamespaceMapping.atom=http://www.w3.org/2005/Atom

sample_atom.ListItemSelection=//atom:entry

# Item Attribute Declarations:
sample_atom.ItemAttribute.id=./atom:id
sample_atom.ItemAttribute.title=./atom:title
sample_atom.ItemAttribute.summary=./atom:summary
sample_atom.ItemAttribute.subtitle=./atom:subtitle
sample_atom.ItemAttribute.authorName=./atom:author/atom:name
sample_atom.ItemAttribute.authorEmail=./atom:author/atom:email
sample_atom.ItemAttribute.authorUri=./atom:author/atom:uri
sample_atom.ItemAttribute.contributorName=./atom:contributor/atom:name
sample_atom.ItemAttribute.contributorEmail=./atom:contributor/atom:email
sample_atom.ItemAttribute.contributorUri=./atom:contributor/atom:uri
sample_atom.ItemAttribute.updated=./atom:updated
sample_atom.ItemAttribute.updated.Type=Date
sample_atom.ItemAttribute.published=./atom:published
sample_atom.ItemAttribute.published.Type=Date
sample_atom.ItemAttribute.content=./atom:content
sample_atom.ItemAttribute.categoryTerms=./atom:category/@term
sample_atom.ItemAttribute.categorySchemes=./atom:category/@scheme
sample_atom.ItemAttribute.categoryLabels=./atom:category/@label
sample_atom.ItemAttribute.selfLink=./atom:link[@rel='self']/@href
sample_atom.ItemAttribute.enclosureLink=./atom:link[@rel='enclosure']/@href
sample_atom.ItemAttribute.alternateLink=./atom:link[@rel='alternate']/@href
sample_atom.ItemAttribute.editLink=./atom:link[@rel='edit']/@href

# List Property Declarations:
sample_atom.ListProperty.author=/atom:feed/atom:author
sample_atom.ListProperty.id=/atom:feed/atom:id
sample_atom.ListProperty.selfLink=/atom:feed/atom:link[@rel='self']/@href
sample_atom.ListProperty.title=/atom:feed/atom:title
sample_atom.ListProperty.updated=/atom:feed/atom:updated
sample_atom.ListProperty.updated.Type=Date
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

-   **[XPath list-rendering profile keys](plrf_lr_profl_keys.md)**  
The following list shows the set of list-rendering profile entry keys that are available in the Digital Data Connector \(DDC\) for HCL Portal framework.
-   **[XPath list-rendering profile metadata keys](plrf_lr_profl_metadata_keys.md)**  
Some item attribute and list property declarations support metadata that can be associated by using corresponding metadata keys.


???+ info "Related information:" 
    - [The Atom Syndication Format](http://www.ietf.org/rfc/rfc4287)

