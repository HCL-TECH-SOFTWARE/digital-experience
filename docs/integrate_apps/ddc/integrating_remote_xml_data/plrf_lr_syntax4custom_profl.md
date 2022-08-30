# Syntax for custom list-rendering profiles

Custom Digital Data Connector \(DDC\) for HCL Portal plug-ins that do not delegate the initial bean list computation to the generic XML DDC plug-in can use a custom list-rendering profile. This case typically occurs when you integrate non-XML data.

Custom list-rendering profiles declare the set of available item attributes only. This way, the HCL Web Content Manager authoring user interface can still fill the corresponding **Select attribute resource tag type** selection box of the **Insert a Tag** dialog.

Custom list-rendering profiles are built in the same way as XPath based profiles, but with the following exceptions:

-   To identify the profile as a custom list-rendering profile, a custom profile must contain the profile entry `<profile-id>.Type=Custom`.
-   Custom list-rendering profile support only the following reduced set of list-rendering profile entry keys: `Name`, `BeanListProviderID`, `ResourceBundleBaseName`, `ItemAttribute`, `IsShownInAuthoringUI`, and `Extends`. The following keys are not supported: `NamespaceMapping`, `ListItemSelection`, `AssociatedItemAttribute`, `ComputedItemAttribute`, `ConstructedItemAttribute`, `ListProperty`, `ComputedListProperty`.
-   The values that are used for item attribute declarations by using the `ItemAttribute` key have no significance.

The following list of list-rendering profile entries shows a sample custom list-rendering profile that you can use for transforming local file system information.

```
samples_files.Name=samples.files
samples_files.BeanListProviderID=samples.Files
samples_files.Type=Custom

samples_files.ItemAttribute.id=.
samples_files.ItemAttribute.title=.
samples_files.ItemAttribute.path=.
samples_files.ItemAttribute.encodedPath=.
samples_files.ItemAttribute.absolutePath=.
samples_files.ItemAttribute.uri=.
samples_files.ItemAttribute.parent=.
samples_files.ItemAttribute.encodedParent=.
samples_files.ItemAttribute.length=.
samples_files.ItemAttribute.suffix=.
samples_files.ItemAttribute.lastModified=.
samples_files.ItemAttribute.type=.
```


