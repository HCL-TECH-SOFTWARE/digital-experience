# Providing text providers 

All of the authoring templates, presentation templates, workflows, components, and categories are set up to use a text provider for their titles and descriptions. The Authoring Templates also use the text provider for field labels and prompts.

A text provider is used to give authors translated versions of all the assets. Text providers are also used to modify the labels and prompts on the Content Template Catalog authoring templates without having to directly modify them.

-   **[Modifying text providers ](../ctc/ctc_design_custom_prov_modify.md)**  
The CTC Text Provider is located within the CTC Enterprise Application Repository \(EAR\) that is installed with Content Template Catalog. The Text Provider is typically at WebSphere Install Root/wp\_profile/installedApps/node/ctc.ear/ctc.war/WEBINF/ lib/ctc-textprovider.jar.
-   **[Adding languages ](../ctc/ctc_design_custom_prov_lang.md)**  
Languages can be added by copying the CTCBundle.properties file and renaming the copy in the format CTCBundle\_Language Code.properties. For example, a Chinese translation is stored in a file that is called CTCBundle\_zh.properties in the same location as the original file.

**Parent topic:**[Customizing sites built with Content Template ](../ctc/ctc_design_custom.md)

