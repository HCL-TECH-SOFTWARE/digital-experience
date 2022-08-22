# Selecting and changing the language

You can control the multiple language-specific settings within the portal.

## Changing the default portal language

After the installation, you can change the default language of the portal. To change the language, use the **Global Settings** portlet. Click the **Administration menu** icon. Then, click **Portal Settings** \> **Global Settings**. From the drop-down list, select the required default language for the portal. This option can be, for example, en for English. For a list of languages that are supported by the portal, refer to the topic about Language support.

**Note:** The Global Settings portlet does not work in portal cluster configurations. For portal clusters, set the portal default language in the portal Localizer service by using the WebSphere® Integrated Solutions Console. For details about how to set the language refer to the topic about Setting service configuration properties.

## Portlets

A portlet can support one or more locales. All portlets must have their own default language that is specified in the deployment descriptor. Otherwise, the portlet cannot be installed.

## Changing titles for pages

You can edit titles for pages in the portlet for Managing Pages by using the configure option for the locale-specific settings. To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**. Click the **Edit Page Properties** icon, expand the Advanced options, and select the option for setting page titles and descriptions. You can enter a different title for each available language.

## Language selection by the user

The user can select the preferred language for rendering portal content during the enrollment process. The user can select from a list of available languages. If required, the user can later change the selected language in the self-care portlet by selecting **Edit My Profile**. The selection list that is shown to the user for choosing a language shows all available portal languages.

**Note:** The user's language selection does not become effective until after the user logs in.

## Language determined by the portal

The portal determines the language for rendering the portal content by a search process along the following sequence at login time:

1.  The language that is encoded in the URL by the value for the `locale` parameter takes highest priority. The portal does not encode a locale into the URL by default. However, you can add code to the JSPs to support dynamic language selection. For more information, read *Dynamically changing the language during the user session*.
2.  The language that is encoded in the navigational state by the locale tag: `<locale> . . . </locale>`.
3.  The language that is stored in the `com.ibm.wps.state.preprocessors.locale.CookieSupportedLanguagePreProcessor` in the portal State Manager Service. For more information, read *State Manager Service*.
4.  If the user logged in, the portal displays in the preferred language that is selected and stored in the user repository by the user.
5.  If no preferred user language can be found, the portal looks for the language that is defined in the user's browser. If the portal supports that language, it displays the content in that language. If the browser has more than one language that is defined, the portal uses the first language in the list to display the content.
6.  If no browser language can be found, for example if the browser used does not send a language or if the portal does not support the language that is set in the browser, the portal resorts to its own default language.
7.  If the user has a portlet that does not support the language that was determined by the previous steps, that portlet is shown in its own default language.

This sequence describes the language selection process that is applied for each user at logon time. For pages viewed by anonymous users only, the last three steps for determining the language apply. This step applies, for example, before login and after logoff.

The language that is determined by this selection process is applied to the complete portal. If the portal or one component does not find the appropriate resources for the language as selected by this sequence, it tries to find the resources in a similar language. For example, if the determined language was US English \(`en_US`\), the next closest option is English \(`en`\).

This search sequence applies to all portal components individually including portlets. For example, if a portlet does not support the language that is selected by the portal, it is shown in default language of the portlet. This way, the portal can show individual portlets in different languages.

If a page does not support any of the languages that are determined by the steps that are given in the preceding list, then the navigation displays the object ID of the page rather than the page title. Such an object ID can be, for example, 7\_0\_5T.

## Preserving the language of the browser session

The language choice of a user is lost when the navigational state is cleared. For example, the language information is lost if users use bookmarks to friendly URLs for navigation or if the navigational state is cleared intentionally. You can preserve the language choice of the user's browser session. To do so, use the `com.ibm.wps.state.preprocessors.locale.CookieSupportedLanguagePreProcessor` preprocessor in the portal State Manager Service. It stores the language information to a cookie.

You can also determine the maximum lifetime of the cookie that holds the language information. To do so, use the `com.ibm.wps.state.preprocessors.locale.CookieSupportedLanguagePreProcessor.cookie.maxage` property in the portal State Manager Service.

For more detailed information, read *State Manager Service*


**Related information**  


[Creating a virtual portal](../admin-system/advp_tsk_create_vp.md)

[Dynamically changing the language during the user session](../admin-system/adchglang_dynamic.md)

[State Manager Service](../admin-system/srvcfgref_state_mgr.md)

