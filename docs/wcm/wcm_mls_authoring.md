# Multilingual authoring  Multilingual Solution

Nearly all authoring tasks occur in the base site, and are then replicated, if appropriate, to all of the localized sites. Authoring occurs on translated sites for language or region-specific content, or to fix errors in translation.

## Localization of authoring content

While the initial creation of both the base locale item and any localizations can be done manually by using the authoring portlet, it is recommended to use either a custom authoring field or workflow synchronization code to automate the initial creation of localized documents in the base locale language that are then translated by the appropriate team.

-   **Names and display titles**

    -   The **Name** field in the **Identification** section must not be translated. Doing so breaks the link between the translated item and its base copy.
    -   Translators are free to translate the **Display Title** field. This is recommended so that links are displayed by using the correct translation of the content name.
-   **Other fields**

    -   Other fields can be different between locales, but for the purposes of consistency of availability and access, typically many of the metadata fields would be kept in sync, including: authors, categories, publish date, expiry date, and security.
    -   The **owner** field may be localized to indicate the owner of the specific localization. This might be used during automated workflow code to notify the appropriate users of updates.
    -   The multilingual extensions do not resynchronize fields during updates, nor does it use the owner field. This can be done by using extra custom workflow actions added to the **Localize** and **Regionalize** workflow stages.

## Authoring Templates

There are multiple ways in which authoring templates can be set up in a multilingual environment. The common authoring template model is recommended.

-   **Common Authoring Templates**

    Common authoring templates are usually created in the common library and used for all locales. Text providers can then be written to provide localized template display titles, element names, and help-text. The disadvantage of this approach is that the default values of any elements cannot be translated. You can work around this limitation by moving the recommended default value into the element help text.

-   **Localized Authoring Templates**

    Each locale uses separate authoring templates with manually translated element names. This approach is not recommended for the following reasons.

    -   Querying of content is more complicated. Each separate authoring template must be selected in queries that are used by menus or personalization rules.
    -   Content creation is more complicated. Users must choose the appropriate template not just for the type of content, but also for the appropriate language or locale.
    -   Maintaining localized authoring templates is more complicated than maintaining common authoring templates. Changes to the base authoring template needs to be duplicated in each of the localized authoring templates, although the multilingual workflow extensions can help with coordinating these changes.
    If there is a valid reason to translate the default values of the base authoring template, then it is recommended that this is implemented by creating localized authoring templates in each localized site library that all have the same name, and then set the localize.supportLocalizedAuthoringTemplates and regionalize.supportLocalizedAuthoringTemplates properties of the **Localize Workflow Synchronization Settings** and **Regionalize Workflow Synchronization Settings** sections of each multilingual configuration file to true. Setting the supportLocalizedAuthoringTemplates property to true enables localized authoring template support and automatically associates each created document with its localized authoring template.

-   **Single Authoring Templates**

    This approach involves the use of a single authoring template with fields for each locale. This approach is not recommended for the following reasons:

    -   This approach is not scalable. Only a limited number of languages can be supported due to the number of fields on the authoring template.
    -   You cannot have content authors editing localizations concurrently.
    -   Localizations cannot be syndicated separately.
    -   Only a single workflow can be used.
    -   Localized content cannot be published or expired independently.
    -   You cannot use non-Unicode character sets.

## Previewing

To preview content to see how it will look in a specific locale or language, including the appropriate encoding, preview the content from within the appropriate library.

**Parent topic:**[How to use the HCL Web Content Manager Multilingual Solution](../wcm/wcm_mls_using.md)

