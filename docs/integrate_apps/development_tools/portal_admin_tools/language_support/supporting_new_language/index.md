# Supporting a new language

To support a new language to HCL Digital Experience you add resource bundles and, where applicable, JSPs for the new language.

Some JSPs use resource bundles; others, such as help JSPs, are translated directly. Then you update the list of available languages by adding the new language to the portal. You do this by using the XML configuration interface. Use the example XML script CreateLanguage.xml to add the new language for the portal. You can also use it to remove an existing language from the portal. The new language is then listed in the language selection menu boxes that are available in administration portlets, or for example, in **Edit My Profile**, **Preferred language**.

**Note:** The new language will be available only to portlets that you add to your portal, if these portlets support the newly added language and if you make the required language files available. None of the HCL Digital Experience user interface or messages will be translated to the new language.

-   **[Adding resource bundles for a new language](../admin-system/adsuplang_add_rsrc_bndl.md)**  
To allow your portal users to work in an extra language, you add resource bundles for that language. Resource bundles are used to store text that is displayed in JSPs or text that is used in Java code.
-   **[Adding a new language to render localized content](../admin-system/add_newlanguage.md)**  
 You can add new languages to the portlet to render localized content in different languages and reach a larger audience.
-   **[Adding JSPs for a new language](../admin-system/adsuplang_add_jsp.md)**  
For the new language in your portal, you also need to add JSPs. Some JSPs that contain mostly text, such as help JSPs, are translated directly which means that the text is contained in the JSP and not in a resource bundle. For JSPs that do not use resource bundles, you need to copy and translate an existing JSP and store it in the appropriate location.
-   **[Globalization for People Finder fields](../admin-system/adsuplang_peoplefindr.md)**  
All fields of the People Finder portlet must have associated language strings that are defined in each language property file, PeopleFinderUI\_language\_code.properties. The field names are the names of the corresponding attributes in Member Manager.
-   **[XML samples for creating or removing language definitions](../admin-system/adxmlsmp_lang.md)**  
You can modify these XML samples and use them to create or remove language definitions from your portal.


**Related information**  


[Creating and modifying resources](../admin-system/adxmltsk_creat_mod_resrcs.md)

