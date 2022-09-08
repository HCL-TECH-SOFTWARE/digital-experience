---
id: h_markups_edit
title: Editing a markup
---


You can edit an existing markup type and its locale-specific settings.

1.  Select the markup from the list on **Manage Markups** and click **Edit selected markup**.

    The Markup fields are displayed for you to enter the properties of the new markup.

2.  Make the desired edits to the following fields:

    1.  **Markup name:** Required. Indicate the name of the markup. Directories of this name also have to be created to support the aggregation of the portal for clients that support this markup.

        For example, to add the markup MathML, the following directories have to be created:

        -   theme\_web\_module\_root\_path/MathML
        -   theme\_web\_module\_root\_path/themes/MathML
        -   theme\_web\_module\_root\_path/skins/MathML
        -   theme\_web\_module\_root\_path/screens/MathML
        For this reason, avoid characters in the markup name that might cause conflicts in file or path names, such as / , \\ , . , or & . The markup name also acts as default title for those languages where no locale-specific title has been set.

    2.  **MIME type:** Required. Enter the MIME type associated with this markup.

    3.  **Default character set:** Indicate the character encoding that is to be used for this markup if it is not specified in the locale-specific settings.

        If you leave this field empty, UTF-8 is used as the default character set.

3.  Click the **Set locale-specific settings** icon.

    1.  Select the language you want to edit and click **Edit setting for selected language**.

    2.  Enter the Title and Character set for the Language.

        The table has the following columns:

        -   **Language** Indicates a language supported by the portal server.
        -   **Title** Indicates a title of the markup for this language. By default, this displays the markup name
        -   **Character set** Indicates the character set used by this language for this markup. The default character set is displayed if this has not been explicitly set.
    3.  Click **OK** to save the changes to your locale-specific settings, or **Cancel** to return to the list of languages.

4.  To save your changes click **OK**. To exit without saving your changes, click **Cancel**.


