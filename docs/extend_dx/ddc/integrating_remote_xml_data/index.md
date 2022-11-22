# Integrating remote XML data

The Digital Data Connector \(DDC\) for HCL Portal framework provides a generic XML DDC plug-in that is ready to use for integrating external XML data of your choice. You can use this plug-in to render external XML data on your portal pages without having to write custom Java code.

The generic XML DDC plug-in supports the concept of list-rendering profiles. It therefore makes it possible to integrate XML data. The XML data can be served in arbitrary XML document formats. A list-rendering profile describes the transformation between a specific XML document format and the generic bean list data structure that the DDC framework supports. In addition, the list-rendering profile enumerates all attribute names of the items in the resulting bean list that you can add to the result markup. This way, the HCL Web Content Manager **Insert Tag** user interface can present a dedicated selection box. That selection box contains all supported attributes for a specific list-rendering profile when you author DDC list appearance components.

-   **[The generic XML Digital Data Connector plug-in](plrf_genrc_beanlst_provider.md)**  
You can use the Digital Data Connector \(DDC\) for HCL Portal plug-in directly to integrate remote XML data without coding. It makes it possible to integrate XML data that is served in arbitrary XML document formats by supporting the concept of list-rendering profiles.
-   **[Syntax for XPath based list-rendering profiles](../integrating_remote_xml_data/syntax_xpath_based_list_rendering_profiles/index.md)**  
An XPath based list-rendering profile contains a set of name-value pairs called entries. This set of entries defines the set of available list properties and item attributes that are available for transforming external data into bean lists.
-   **[Syntax for custom list-rendering profiles](plrf_lr_syntax4custom_profl.md)**  
Custom Digital Data Connector \(DDC\) for HCL Portal plug-ins that do not delegate the initial bean list computation to the generic XML DDC plug-in can use a custom list-rendering profile. This case typically occurs when you integrate non-XML data.
-   **[The Atom list-rendering profile](plrf_atom_lr_profl.md)**  
Digital Data Connector \(DDC\) for HCL Portal provides a list-rendering profile that is ready to use for access to feeds that comply with the Atom syndication format standard.


