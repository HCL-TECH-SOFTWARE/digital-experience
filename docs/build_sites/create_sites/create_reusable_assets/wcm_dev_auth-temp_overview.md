# An overview of authoring templates

Authoring templates are like forms that content authors can use to create new content. It defines default settings for the items that are created by using the authoring template. There are two types in authoring templates, site area and content.

Create authoring templates for your content authors to use as they develop new content for the website. The authoring template is mapped to a presentation template. You can use one presentation template for multiple authoring templates. This removes presentation considerations and treatment from the content. The website design is updated by modifying the presentation template instead of modifying multiple pieces of content.

## Authoring template types

-   **Site area templates**

    Site area authoring templates are used to define the default settings of site areas.

    **Default site area template:**

    A default site area is installed with HCL Web Content Manager. This can be used to maintain the behavior of site areas that are migrated from previous releases. You can disable the creation of new site areas by using the default site area template by changing the following configuration parameter to "false" in the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console. If the setting does not exist, it can be added.

    ```
    wcm.authoringui.defaultSiteAreaTemplateEnabled=false
    ```

-   **Content templates**

    Content authoring templates are used to define the default settings for content items. You create render content in two different ways:

    -   **Content rendering.**

        If you configure a content authoring template to render as content, then the content items you create are standard content items. These content items are used to store elements that can be rendered within presentation templates.

    -   **Resource rendering.**

        If you configure a content authoring template to render as a resource, then the content items you create are based on a file that is stored in a file resource element. When a resource content item is rendered, the file that is stored in the selected file resource element is rendered on the web page. No presentation template is used when the file is rendered, only the content of the file itself. This strategy is useful when you want to store a file, such as a PDF file, and render it directly on a page but would also like to have the PDF file that is listed in navigational components such as menus and navigators.


## Authoring template properties

-   **Element selection**

    When you create an authoring template, you can add elements to the template to determine what types of content is stored within the item. When you construct the authoring template, you can select more than one element field of the same element type. For example, you might add three text element fields, two rich text element fields, and four image element fields to the same authoring template.

-   **Default values**

    You can specify default values for each field and element in the authoring template to make it easier and more efficient for an author to create new items and streamline the item creation process.

-   **Simplified form layout**

    The authoring template provides features that help you simplify the presentation of the authoring form.

    -   **Authoring form layout options.**

        You can control the general layout of the fields on the authoring form by specifying an authoring form layout option. Depending on the layout option, this selection can reduce the vertical space that is required to display the elements on the authoring form.

    -   **Hidden fields.**

        In addition to organizing an authoring form with a layout option for the fields, you can further simplify the form that is presented to the item author by using hidden fields. Except for those fields that are required for an authoring form, you can designate any other field in the authoring template to be hidden. A field marked to be hidden in the authoring template is not displayed on the authoring form, which streamlines the form's visual appearance. Note, however, that although a hidden field is not displayed on the authoring form, the information that is defined in the field is still associated with the authoring form and is processed with the form. This is useful when used with a default value for a field because it means you can specify a setting for a field and then hide the field on the authoring form to ensure that the field's value cannot be changed by the item author. For example, you might want to set access control levels for item that is generated from the authoring template in the Access Control section of the template and then hide that section on the resulting authoring form. When an item is generated from the template, the access control levels for the item are derived from the default values in the template.

-   **Custom help text**

    To further help tailor the content form for an item author, Web Content Manager provides the capability of adding customized help text to the authoring template.

    -   You can define help text for the entire authoring form that is generated from the authoring template. For example, this help text can be used to describe the purpose of the form. You must include whatever specific information you feel would be of use to the authors by using the form.
    -   In addition to the HTML text, you can also specify in-line help text that is displayed with each element on the form. This help text can provide targeted information for a particular field on the form, explaining possible values or noting special conditions that are related to the field.

## Labeling elements

The names of element labels in different items must be the same if an element reference in a presentation template is to change depending on the current context. This is an important consideration if two authoring templates are using the same presentation template. The element types however, do not have to be consistent.

|Site area|Element label|Element type|
|---------|-------------|------------|
|Business|Heading|Image|
|Personal|Heading|Rich Text|
|Features|Heading|Text|
|News|Heading|Text|
