# How to use a federated documents rule in a personalization component \| HCL Web Content Manager

To access the information from a federated documents rule in your web content system, create a personalization component, associate it with the rule, and specify the design for displaying document information that is retrieved by the rule.

1.  Open the authoring portlet, and click **New** \> **Component** \> **Personalization**.

2.  Enter a name and description for the new component.

3.  Click **Search** in the **Personalization Element** section, and select the federated documents selection rule.

4.  Define the design for the headers, footers, and individual documents that are selected by the configured selection rule. Use the **AttributeResource** element to reference individual metadata fields from the selected documents.

5.  Save the component.


You can now preview your component and reference it from within presentation templates, other element designs, or a web content viewer.

-   **[Sample designs for a federated documents selection rule](../wcm/wcm_dev_feddocs_samples.md)**  
When you render document metadata information retrieved with a federated documents selection rule, you can tailor the header, footer, and menu search result designs for simple or more elaborate presentations.
-   **[AttributeResource values for federated documents](../wcm/wcm_dev_feddocs_attsdoc.md)**  
The AttributeResource tag is used as a placeholder to display attributes from a federated documents selection rule within a personalization element design. It cannot be used in a presentation template or other element types.


