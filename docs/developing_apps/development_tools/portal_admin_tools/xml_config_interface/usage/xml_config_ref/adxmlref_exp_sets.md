# Exporting sets of resources

You can specify more than one resource with an export action in the same request and thus generate an export response file that contains a selected group of resources, for example several portlets and pages.

The XML configuration interface provides two additional features that allow you to export selected subsets of the portal resources:

-   When you export a content node, you can specify the export-descendants attribute for that resource. If you set this attribute to true, the export response file also includes the entire subtree in the content hierarchy that is located under that node. In addition, all derived pages that override the layout of pages in that subtree, are also exported. In other words, this exports all content nodes that can be reached via a chain of content-parentref or derivation-parentref attributes.

    Example: the following fragment exports a subtree of the content hierarchy that starts with the label as specified:

    ```
    
         <content-node uniquename="MyPages" action="export" 
                 export-descendants="true" />   
    
    ```

-   All first level resources that can take an objectid attribute, such as markup, virtual-resource, user, group, client, event-handler, web-app, theme, skin, content-node, credential-segment and url-mapping-context support the asterisk \( **\*** \) as a wild card symbol that you can use as a value for the object ID. The asterisk can be used as a wild card symbol only with the export and delete actions. Depending on the action with which it is specified, it exports or deletes all resources of the respective type. For example: the following fragment exports the complete client configuration of the portal:

    ```
    
         <client objectid="*" action="export"/>    
    
    ```


**Note:** A combination of a partial search string and the asterisk is not valid. The asterisk also has no special meaning if it is used as a value for any other attribute.

The XML configuration interface offers no other "query" features, that allow you to export resources based on specific criteria. The only other possibility to export a selected subset of resources is to specify all the resources individually with their object IDs or other identifying attributes in your XML input.

**Parent topic:**[XML configuration reference](../admin-system/adxmlref.md)

