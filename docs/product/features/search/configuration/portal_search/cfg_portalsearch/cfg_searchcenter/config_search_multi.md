# Configuring search for multilingual sites

By default, the Search Center uses the preferred language of the user to analyze search terms and to refine the search results. Search results in different languages are not displayed. You can enable users to search for terms in a language other than their preferred language.

-   Complete the following steps to configure the Search Center for use in a multilingual environment where users have different preferred languages and information is distributed in multilingual content sources:

    1.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**.

    2.  Locate the Search Center portlet by either navigating through the pages or searching for it in the search field.

    3.  Click the **Configure portlet** icon for the Search Center portlet.

    4.  Click the **Edit value** icon for the preference SEARCH\_LANG, and set it to ALL. This enables the display of search results of all available content sources regardless of their language information.

    5.  Click the **Edit value** icon for the preference QUERY\_LANG, and set it toCOLLECTION. This enables the Search Center to analyze the search terms by using the language of each collection to be searched.

    6.  Click **OK** to activate the changes.

-   To enable the default behavior, complete the following steps:

    1.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**.

    2.  Locate the Search Center portlet by either navigating through the pages or searching for it in the search field.

    3.  Click the **Configure portlet** icon for the Search Center portlet.

    4.  Click the **Edit value** icon for the preference SEARCH\_LANG, and set it to PREFERRED.

    5.  Click the **Edit value** icon for the preference QUERY\_LANG, and set it to PREFERRED.

    6.  Click **OK** to activate the changes.


**Parent topic:**[Configuring the Search Center portlet](../admin-system/srtcfgsrchcntrprlt.md)

