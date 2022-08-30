# Modifying properties

The Controller SPI enables the modification of properties resources.

1.  Obtain the appropriate controller for the model of which you want to modify a resource.

2.  Obtain a modifiable instance of the resource from that controller.

3.  Start the appropriate methods of the modifiable instance to run the modifications.

4.  Persist the modifications by using the `commit()` method of the controller.


-   **[Setting titles and descriptions](../dev/ctrlrapit_set_title.md)**  
You can set the titles and descriptions of a resource.
-   **[Setting unique names](../dev/ctrlrapit_set_unqnm.md)**  
You can set unique names for resources.
-   **[Setting metadata](../dev/ctrlrapit_set_metadat.md)**  
You can set metadata on all modifiable instances that implement the `ModifiableMetaDataProvider` interface.
-   **[Setting supported markups](../dev/ctrlrapit_set_mrkp.md)**  
You can set supported markups on modifiable instances that implement the ModifiableMarkupCapable interface.
-   **[Setting the orientation for layout containers](../dev/ctrlrapit_set_orient.md)**  
You can set the orientation for modifiable instances of `LayoutContainer` nodes.
-   **[Setting portlet preferences](../dev/ctrlrapit_set_ptlt_prf.md)**  
You can set the portlet preferences for portlet definitions and portlet entities.
-   **[Setting flags](../dev/ctrlrapit_set_flag.md)**  
The Controller SPI allows you to set flags for resources. For example, you can set a flag for a page so that portal users can bookmark the page.
-   **[Setting themes](../dev/ctrlrapit_set_theme.md)**  
The Controller SPI enables the setting of themes on modifiable instances that implement the `ThemeSetter` interface, for example `ContentPage` and `ContentLabel`.
-   **[Setting URLs](../dev/ctrlrapit_set_url.md)**  
You can set URLs to point to external content \(`ExternalContentURL`\) or to internal content, that is to nodes in the portal \(`InternalContentURL`\).


