# Understanding the Portal 8.5 modularized theme

Modern websites and browsers enable incredible new capabilities that can greatly enhance your user's web experiences. However, these capabilities are not without cost in terms of large page sizes and more processing in the browser when each page is rendered. These capabilities are worth it when you need them, but removing them for an entire site or including them only on pages that take advantage of these capabilities provides for more flexibility.

The new modularized theme provides a flexible framework that:

-   Minimizes download size by giving you the control to specify just the capabilities that are needed for a certain scenario or use case.
-   Minimizes the number of requests by combining necessary resources.

Previous themes required a monolithic design and that the same content was downloaded for every page. Theme optimization allows the theme to be highly adaptive to the content you are displaying on certain pages. For example, on pages where only simple content is displayed you can define a lightweight profile. A lightweight profile causes the system to download few static resources such as JavaScript™ and CSS files. However, on pages where more advanced scenarios are required you can choose to switch to a more powerful profile that causes more resources to download than on the other pages. This way you have only the capabilities you need on certain pages, but all other pages do not pay the penalty. As a result the overall system performance increases significantly.

Theme optimization uses modules and profiles to achieve the flexibility that allows you to achieve better performance. Modules are the components of the new theme that define capabilities. Examples are Tagging&Rating, Dojo, or jQuery. Profiles define sets of modules which can be assigned per page. A default profile is used if no page-specific profile is defined.

By applying these concepts it is possible to turn on and off an arbitrary number of features for certain pages, develop modules independent of each other for greater development speed and flexibility, easily add new capabilities later on into an existing theme and build an altogether new theme with the existing one. This building block concept allows the new theme to work side by side through self contained modules without impacting the existing theme.

The Portal 8.5 theme contains three types of files: JavaScript, dynamic content \(JSP files\) and static resources.


-   **[Static resources](themeopt_defaultparts_static.md)**  
Static resources include the markup that is defined by .html, .css, and .js files that are used by the theme. Some .json files are used to define menu options, module definitions, and module profiles.
-   **[Dynamic content \(jsp\) resources](themeopt_defaultparts_jsp.md)**  
Dynamic content includes resources that are defined by jsp files that are used by the theme.


???+ info "Related information"
    - [Setting up Client Certificate Authentication](../../../deployment/manage/security/information/confidentiality/configuring_ssl/certauth.md)
    - [Changing the login and logout pages](../../../deployment/manage/security/people/authentication/external_sec_mgmt/sec_chg_login.md)
    - [Importing a static page from an installed template](../../create_sites/building_website/static_content/including_static_content_pages/export_import_static_page/spa_xml_impt_tmplt.md)
    - [The module framework](../the_module_framework/index.md)
    - [Simple menu framework](../customizing_theme/menus/simple_menu_framework/index.md)
    - [Modules that are provided with the modularized theme](../the_module_framework/oob_modules/index.md)
    - [<portal-logic/\> tags](../customizing_theme/portal_jsp_tag/dgn_ptllogic.md)
    - [Dynamically changing the language during the user session](../../../deployment/manage/portal_admin_tools/language_support/adchglang_dynamic.md)

