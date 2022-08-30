---
id: h_markups_create
title: Creating a new markup
---
import useBaseUrl from '@docusaurus/useBaseUrl';



You can add a new markup type to your list of supported markups.

1.  From **Manage Markups**, click **Add new markup**.

    The Markup fields are displayed for you to enter the properties of the new markup.

2.  Fill in the following fields:

    1.  **Markup name** Required. Indicate the name of the markup. Directories of this name also have to be created to support the aggregation of the portal for clients that support this markup.

        For example, to add the markup MathML, the following directories have to be created:

        -   theme\_web\_module\_root\_path/MathML
        -   theme\_web\_module\_root\_path/themes/MathML
        -   theme\_web\_module\_root\_path/skins/MathML
        -   theme\_web\_module\_root\_path/screens/MathML
        For this reason, avoid characters in the markup name that might cause conflicts in file or path names, such as / , \\ , . , or & . The markup name also acts as default title for those languages where no locale-specific title has been set.

    2.  **MIME type** Required. Enter the MIME type associated with this markup.

    3.  **Default character set** Optional. Indicate the character encoding to be used for this markup unless not specified in the locale-specific settings.

        If you leave this field empty, UTF-8 is used as the default character set.

3.  To save your changes click **OK**. To exit without saving your changes, click **Cancel**.

    **Note:** The markup is not supported by the portal until it is activated by selecting the language and clicking the **Activate/Deactivate selected markup** icon.


