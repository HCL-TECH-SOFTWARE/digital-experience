# Language support

To reach as many users as possible, HCL Digital Experience supports different languages for different locations. For instance, a large, international corporation might address users in different countries or regions through multilingual Web sites. In this context the portal can concurrently serve portal views to large numbers of users, each in the user's preferred language.

If necessary, the portal can support portlets that are shown in different languages. If portlets do not support a requested language, the portal tries to match the user's language preference as well as possible. For example, if a page for a Japanese user shows several portlets in Japanese and a portlet is added that only supports English, then the page shows the new portlet in English but still shows the other portlets in Japanese.

**Note:** Some back-level versions of browsers and browsers that are not commonly used might have difficulty representing specific languages, depending on the defined character set. In these cases, in order for the language to be rendered correctly, it might be necessary to define the same preferred language for the browser and the portal it accesses.

HCL Digital Experience has already been translated into a number of languages. They are shown in the following list, together with the ISO 639 language codes. These codes are used for the languages in HCL Digital Experience:

HCL Digital Experience uses the *ISO 639 Codes for the Representation of Names of Languages* to represent localized resources. The names for directories containing language-dependent resources follow the ISO 639 naming convention \(see [Directory structure](../reference/wpsdirstr.md)\).

This section has the following topics:

-   **[Supporting a new language](../admin-system/adsuplang_new.md)**  
To support a new language to HCL Digital Experience you add resource bundles and, where applicable, JSPs for the new language.
-   **[Changing the character set for a language](../admin-system/adchgchar.md)**  
The character set is stored in the database. This is the character set used for the response to the user. You can change the character set for a language.
-   **[Dynamically changing the language during the user session](../admin-system/adchglang_dynamic.md)**  
Allow users to change the language while they are logged in to the portal.
-   **[Selecting and changing the language](../admin-system/adsuplang.md)**  
You can control the multiple language-specific settings within the portal.
-   **[How to control the behavior of the language fallback filter](../admin-system/adlangflt.md)**  
You can manage the language fallback behavior of HCL Digital Experience by a built-in servlet filter. This way, you control the way by which the portal determines the language for rendering portlets.
-   **[Using the language switcher](../admin-system/lang_switch.md)**  
You can use the language switcher to switch from any of the supported languages. This feature is available only for authenticated portal users.


**Related information**  


[Setting the language of the portal](../admin-system/adlang.md)

[Task: create-virtual-portal](../admin-system/advp_cfgtsk_create.md)

[Directory structure](../reference/wpsdirstr.md)

[Task: modify-virtual-portal](../admin-system/advp_cfgtsk_modify.md)

