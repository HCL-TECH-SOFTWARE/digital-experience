# Supporting a new language

To support a new language to HCL Digital Experience you add resource bundles and, where applicable, JSPs for the new language.

Some JSPs use resource bundles; others, such as help JSPs, are translated directly. Then you update the list of available languages by adding the new language to the portal. You do this by using the XML configuration interface. Use the example XML script CreateLanguage.xml to add the new language for the portal. You can also use it to remove an existing language from the portal. The new language is then listed in the language selection menu boxes that are available in administration portlets, or for example, in **Edit My Profile**, **Preferred language**.

!!!note
    The new language will be available only to portlets that you add to your portal, if these portlets support the newly added language and if you make the required language files available. None of the HCL Digital Experience user interface or messages will be translated to the new language.


???+ info "Related information"  
    -   [Creating and modifying resources](../../../portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/adxmltsk_creat_mod_resrcs.md)

