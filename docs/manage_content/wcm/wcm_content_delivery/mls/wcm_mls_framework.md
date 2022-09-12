# Framework for multilingual site management Multilingual Solution

The framework covers a data model for storing multilingual sites, processes for managing multilingual sites, and a model for delivering multilingual sites to site visitors.

The key elements of this framework are:

-   **Use one library per locale**

    A library is created for the base site, and one library for each localized site, and another library for shared templates and components. When you create libraries, ensure that the correct locale is specified during the creation process, as this locale is used during search and in the multilingual user interface extensions.

    **Note:** If a language does not exist in the list of languages available when you create a library, you can add that language to the list of supported languages.

-   **Same site structure in each locale**

    For content to be recognized as being equivalent between sites, they must have the same URL path. This means the names and structure of all the site areas and content items in your site framework must be identical in each site if they are to be equivalent. The display titles can be different, but the names must match.

-   **Use workflow for all modifications**

    Creating, updating, publishing, expiring, deleting, and moving content and components are made by using workflow. This strategy allows code to be triggered by the workflow to notify localized sites owners, automate parts of the localization process, and synchronize important stages in the workflow.

    Workflows can be localized by creating an equivalently named workflow in each locale library. Localizing the workflow allows separate approval processes to be run per locale and is also a requirement for regionalized sites. Localizing the workflow is part of synchronization process, and the provided extension for workflow synchronization has this ability.

    When you create new templated portal pages that are associated with site areas and content items, the templated items are published. The items that are created by copying the site areas and content items are also published. In this case, the items need to be copied to all of the localized sites.

-   **Use shared templates and components**

    Authoring templates, presentation templates, and components are shared across locales as much as possible. Variability can be built in using workflows or workflow code that differs across locales, and presentation components that are picked up from the current locale.

    Authoring templates can be shared across localizes whenever possible with text providers used to provide localized template display titles, element names, and help-text.

    Presentation templates can be different across locales by having different mappings in each locale.



