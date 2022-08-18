# RSS Namespace Extension for web content

Web Content Manager items contain a set of controls that are used to store information for various purposes. The elements in this namespace roughly map to the fields that are available on those controls. Depending on the type of the item, it can or can not contain certain controls so some of the elements in the namespace are only relevant to specific item types. All of the elements in this namespace are sub-elements of item, none are used at the channel level.

-   **[Adding the custom namespace definition to the feed](../wci/wci_ff_nse_adding.md)**  
The first requirement is to add the namespace reference to the RSS element at the beginning of the feed.
-   **[Process Control Elements](../wci/wci_ff_nse_process.md)**  
These elements are used to provide the Web Content Integrator with some information about how to handle the data that is contained within the item.
-   **[Location Control Elements](../wci/wci_ff_nse_location.md)**  
These elements are used to provide the Web Content Integrator with some information about an item's relative location.
-   **[Identity control elements](../wci/wci_ff_nse_identify.md)**  
Most identification fields in Web Content Manager items map directly to core RSS elements; title maps to the name field, description maps to the description field, and author maps to the authors field. Other identification fields can be populated by using the following identity control elements.
-   **[Profile Control Elements](../wci/wci_ff_nse_profile.md)**  
Taxonomies and category fields are populated by using the RSS category element. To populate the Keywords field, a keywords element is required.
-   **[The authoringTemplate element](../wci/wci_ff_nse_content.md)**  
The authoringTemplate element is used to specify the authoring template that is applied to a content item or site area. The value of this element must be the name of an existing authoring template.
-   **[Element control element](../wci/wci_ff_nse_element.md)**  
The element control element is used to populate elements that are stored in components, site areas, and content items.
-   **[Workflow control elements](../wci/wci_ff_nse_workflow.md)**  
Workflow elements is used to specify workflow-related parameters when content items are created that use a workflow.
-   **[Security control elements](../wci/wci_ff_nse_security.md)**  
The security control element is used to set access controls on the item that is being created.
-   **[Association control element](../wci/wci_ff_nse_association.md)**  
The association element is used to create an association between two or more separate content items. It is used to support some content item relationships that are not native to Web Content Manager but that are found in some other web content management systems. One example would be a technical journal article that needs to include some data from one or more author biography content items.

**Parent topic:**[IBM Web Content Integrator](../wci/wci_intro.md)

