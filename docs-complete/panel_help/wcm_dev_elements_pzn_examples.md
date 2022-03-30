# Personalization element examples 

The layout and design of a personalization element is created in a similar way to a menu element, with a header design, footer design, and a design to be repeated for each result.

## Creating a **Personalized** menu

1.  Create a content spot or personalization rule in Portal Personalization based on some Web Content Manager content.
2.  Create a personalization element in Web Content Manager.
    -   Click **Search** and select the content spot or personalization rule you created before. Click **OK**.
    -   Create an element design to display the results of the content spot or personalization rule. This method is similar to designing a menu element or navigator. For example, enter this text in the "**Design for each menu search result**" section:

        ```
        [placeholder tag="namelink"] 
        <br>
        ```

3.  Save the personalization element.
4.  Reference the personalization element in a presentation template.

## Displaying personalized content

To display a single piece of personalized Web Content Manager content for different users:

1.  Create an authoring template that includes an element. For example, a text element called "body".
2.  Create a set of content items that are based on this authoring template.
3.  Create a content spot or personalization rule in Portal Personalization based on the authoring template and content. The content spot or personalization rule must return only a single piece of Web Content Manager Content for each user.
4.  Create a personalization element in Web Content Manager.
    -   Click **Search** and select the content spot or personalization rule you created before. Click **OK**.
    -   Create an element design to display the results of the content spot or personalization rule. For example, enter this text in the **Design for each menu search result** section:

        ```
        [element type="Content" context="autofill" key="Body"]
        ```

        This displays the content of the text element called "Body" from the content item that is returned by the content spot or personalization rule.

5.  Save the personalization element.
6.  Reference the personalization element in a presentation template.

## Displaying personalized web content components

A set of personalized web content components can be displayed by using a personalization element:

1.  Create a content spot or personalization rule in Portal Personalization that searches for web content components.
2.  Create a personalization element in Web Content Manager.
    -   Click **Search** and select the content spot or personalization rule you created before. Click **OK**.
    -   Create an element design to display the results of the content spot or personalization rule. For example, Enter this text in the **element design** section:

        **Header:**

        ```
        <div>
        ```

        **Design for each menu search result:**

        You must use a Component tag with a context of "autofill".

        ```
        <span>
        [Component context="autofill"]
        </span><br>
        ```

        **Footer:**

        ```
        </div>
        ```

3.  Save the personalization element.
4.  Reference the personalization element in a presentation template.

## Displaying attributes of Personalized content

The attributes of personalized content can also be displayed by using a personalization element:

1.  Create a content spot or personalization rule in Portal Personalization .
2.  Create a personalization element in Web Content Manager.
    -   Click **Search** and select the content spot or personalization rule you created before. Click **OK**.
    -   Create an element design to display the results of the content spot or personalization rule. For example, Enter this text in the **element design** section:

        **Header:**

        ```
        <div>
        ```

        **Design for each menu search result:**

        You must use a "AttributeResource" tag for each attribute you want to display. For example:

        ```
        <span>
        [AttributeResource attributeName="ibmcm:title"]
        [AttributeResource attributeName="ibmcm:effectiveDate"]
        </span><br>
        ```

        **Footer:**

        ```
        </div>
        ```

3.  Save the personalization element.
4.  Reference the personalization element in a presentation template.

## Notes:

**Displaying keywords and categories:**

To retrieve a list of categories or keywords, Use the Property tag.

**Displaying authors and owners:**

To retrieve a list of authors or owners, Use the Property tag.

**Displaying the Site Path:**

To display the site path to a personalized Web Content Manager element, use a placeholder tag.

**Parent topic:**[Personalized content ](../wcm/wcm_dev_elements_types_personalize.md)

