# Integrating remote JSON data 

The Digital Data Connector \(DDC\) for HCL Portal framework provides a generic JSON DDC plug-in that is ready to use for integrating external JSON data of your choice. You can use this plug-in to render external JSON data on your portal pages without having to write custom Java code.

The generic JSON DDC plug-in supports the concept of list-rendering profiles. It therefore makes it possible to integrate JSON data. The JSON data can be served in arbitrary JSON document formats. A list-rendering profile describes the transformation between a specific JSON document format and the generic bean list data structure that the DDC framework supports. In addition, the list-rendering profile enumerates all attribute names of the items in the resulting bean list that you can add to the result markup. This way, the HCL Web Content Manager **Insert Tag** user interface can present a dedicated selection box. That selection box contains all supported attributes for a specific list-rendering profile when you author DDC list appearance components.

-   **[The generic JSON Digital Data Connector plug-in ](../social/plrf_genrc_beanlst_provider_json.md)**  
You can use the Digital Data Connector \(DDC\) for HCL Portal plug-in directly to integrate remote JSON data without coding. It makes it possible to integrate JSON data that is served in arbitrary JSON document formats by supporting the concept of list-rendering profiles.
-   **[Syntax of the BasicJSONSelection ](../social/plrf_lr_syntax4basicjson_select.md)**  
A `BasicJSONSelection` defines the syntax that you can use to access data in a JSON object.
-   **[Syntax for BasicJSONSelection based list-rendering profiles ](../social/plrf_lr_syntax4xpath_profl_json.md)**  
A list-rendering profile that is based on `BasicJSONSelection` contains a set of name-value pairs called entries. This set of entries defines the set of available list properties and item attributes that are available for transforming external data into bean lists.

**Parent topic:**[Digital Data Connector \(DDC\) for HCL Portal ](../social/plrf_ovu.md)

