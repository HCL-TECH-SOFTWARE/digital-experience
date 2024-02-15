# Setting flags

The Controller SPI allows you to set flags for resources. For example, you can set a flag for a page so that portal users can bookmark the page.

You set flags for resources either on modifiable instances of those resources or on controllers managing the resources. The following flags are available:

|Flag|Flag is associated to resource|Flag is set on|
|----|------------------------------|--------------|
|`ActiveFlag`|`ContentNode` (resources that implement the `ActiveFlag` interfac\)|`ModifiableContentNode`|
|`BookmarkableFlag`|`ContentNode` (resources that implement the `BookmarkableFlag` interface)|`ModifiableContentNode`|
|`ShareableFlag`|`ContentNode` (resources that implement the `ShareableFlag` interface)|`ModifiableContentNode`|
|`AllPortletsAllowedFlag`|`ContentPage`|`LayoutModelController`|
|`DeletableFlag`|`LayoutNode`|`LayoutModelController`|
|`ModifiableFlag`|`LayoutNode`|`LayoutModelController`|

!!!note
    1.  `ContentNode` is the super class of `ContentPage, ContentLabel, ContentURL`, and `InternalContentURL`.
    2.  `LayoutNode` is the super class of `LayoutContainer` and `LayoutControl`.

In case of layered resources, for example derived content pages, you set flags only on the layer on which you work. To set flags, use the appropriate method. For example, to set the `ActiveFlag`, use the `setActiveFlag` method on the `ModifiableContentNode` instance. For more details about how the flags are aggregated in derivation scenarios refer to the Model SPI documentation.

Example 1 - Setting the `DeletableFlag` for a layout container:

```
// set modifiable flag on the layout model controller
lmController.setDeletableFlag(container, true);

```

Example 2 - Setting the `BookmarkableFlag` for a content page:

```
 // obtain modifiable instance of an existing content page 
    final Modifiable modifiable = cmController.getModifiableNode(page);  
// set modifiable flag on the modifiable instance 
    ((ModifiableBookmarkableFlag) modifiable).setBookmarkableFlag(true);
```


???+ info "Related information"  
    - [Model SPI overview](../../../../../extend_dx/apis/model_spi/index.md)

