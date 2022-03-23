# Localized rendering

Localized rendering is provided by either automatically matching the user locale with the content locale, or by providing a navigation option in the site to allow the user to choose the locale for themselves. These two strategies might also be used together in some cases.

## Automatic localization

Automatic localization is when there are different versions of a page for each page and a user is automatically redirected to one of them, based on their locale. The locale can be determined by the following methods:

-   **URL**

    The url can contain the locale. For example, ibm.com.au or ibm.co.uk.

-   **Browser preference**

    Browsers allow you to specify your language preferences. Language preference information is then sent by the browser in the Accept-Language http header. For example: Accept-Language: en-ca,en-us;q=0.7,en;q=0.3

-   **Portal**

    The portal determines the language for rendering portal content by a search process along the following sequence at login time:

    1.  If the user has logged in, the portal displays the preferred language that is selected by the user.
    2.  If no preferred user language can be found, the portal looks for the language in the browser. If the portal supports that language, it displays the content in that language. If the browser has more than one language, the portal uses the first language in the list to display the content.
    3.  If no browser language can be found, for example if the browser used does not send a language, the portal uses its own default language.
    4.  If the user has a portlet that does not support the language that was determined by the previous steps, that portlet is shown in its own default language.

## User-selected localization

User selected localization is when the user selects a language manually from a link or selection list. The selection can then be stored in a cookie for subsequent visits to the website.

-   **Locale selection page**

    In this scenario, a launch page is shown when a user first comes to the site that shows what locales are available and user then selects the appropriate one.

-   **Equivalent page navigation**

    In this scenario, navigation is displayed that allows the user to see the same page in a different locale on every page in the site.


## Encoding

UTF-8 \(Unicode\) is recommended as the encoding for your page, since this encoding supports all the characters you need. If you cannot use UTF-8, then you should use escapes to represent characters that are not supported by the encoding of your page. As all content is stored in the JCR database with UTF-8 encoding, character data is preserved.

HCL Portal sites should use the encoding that is set up in the administration portlet. A servlet rendered site should use the encoding that is specified within HCL Portal. If a site needs to have more than one encoding, multiple servers are required each with the different encoding settings. A gateway is then used to convert the encoding.

## Font face considerations

If implementing a multilingual site, it is worth considering what font to use. There are a few font faces in windows that are installed automatically and can show multilingual characters. One of the best font faces is Tahoma. It is easy to read and contains all the Unicode characters.

**Parent topic:**[How to use the HCL Web Content Manager Multilingual Solution](../wcm/wcm_mls_using.md)

**Related information**  


[User plug-ins ](../panel_help/plugin_user.md)

[Adding a new language to render localized content ](../admin-system/add_newlanguage.md)

