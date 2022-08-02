# Creating the promotional text page

This roadmap describes how to generate the promotional text page component of the design from an HTML prototype. The promotional text page component is used to briefly describe something on your site.

## Who should use this roadmap

You are a developer on the technical team that is tasked with creating home and landing page templates for content authors to use on the site. You are responsible only for creating page components and design templates. Other developers are responsible for developing other pieces of the design. Learn the basics of generating the promotional text page component. The promotional text component is used for short summaries about a web document.

![HTML prototype of the home page with two promotional text page components highlighted. Content authors customize the promotional text page component after they add it to a page. So the same promotional text page component can be added multiple times to show different text - even on the same page!](../images/promotional.jpg)

**Parent topic:**[Creating HTML page components](../install/rm_create_site_dev_pcomponents.md)

# Creating your promotional text page component

Ensure that your design library exists, for example, Greenwheels Design. If the library does not exist, more topic information about creating a design library can be found in our product base documentation [here](../welcome/wp_welcome.html).

1.  Click the **Applications menu** icon. Then, click **Content** \> **Web Content Authoring**.

2.  Go to your design library.

3.  Click **Generate** \> **Page Component**.

    1.  Select Teaser as the template type.

    2.  Enter a page component name for your teaser.

        For example, type Promotional Text.

    3.  Ensure that your design library is selected.

    4.  Click **OK**.

4.  Click the following link in the **Information** dialog box to customize the page component:

    **your\_design\_library** \> **Authoring Templates** \> **your\_page\_component**. For example, click **Greenwheels Design** \> **Authoring Templates** \> **Promotional Text**.

    **Note:** If you close the **Information** dialog box, you can follow the path in your design library.

5.  Click **Edit**.

6.  Click **Manage Elements**.

7.  Delete all of the listed default elements before you create a customized element for the page component.

8.  Create a text element:

    1.  Select Text as the **Element type**.

    2.  Enter a name for your element.

        For example, type promotional\_text.

    3.  Click **Add**.

    4.  Click **OK**.

    5.  Click the drop-down menu on the **Save and Close** button. Then, select **Save and Read**.

9.  Click **Apply Author Template** to update the content associated with this authoring template.

10. Select the **Add new elements** and **Remove existing elements** check boxes.

11. Click **OK**.

12. Click **Close** to close the authoring template.

13. Click the following link to customize the page component:

    **your\_design\_library** \> **Presentation Templates** \> **your\_page\_component**. For example, click **Greenwheels Design** \> **Presentation Templates** \> **Promotional Text**.

14. Click **Edit**.

15. Delete the existing presentation template markup and replace it with the following information:

    ```
    <style>
    .promotional-text {
    text-align: center;
    margin: 10px;
    font-style: italic;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.2;
    }
    </style>
    <div class="promotional-text">
    [EditableElement:promotional_text placeholder="Enter promotional text"]
    </div>
    ```

    If you already have a defined CSS style for the promotional text in your theme, you can use the CSS, rather than defining the styles here. The advantage of putting the styles in the theme is that these styles are sent to the browser once, which improves your site performance. Adding the style to the presentation template causes the style to be sent to the browser for each promotional text page component on the page.

16. Click **Save and Close**.

17. If you do not plan to translate your promotional text, delete the localization page component:

    **your\_design\_library** \> **Localizations** \> **your\_page\_component**. For example, click **Greenwheels Design** \> **Localizations** \> **Promotional Text**.

    If you plan to translate your promotional text, you can add the translations to the page component.

18. In this simple Greenwheels example, you can delete styles page component:

    **your\_design\_library** \> **Components** \> **your\_page\_component** \> **Styles**. For example, click **Greenwheels Design** \> **Components** \> **Promotional Text** \> **Styles**.

19. Click **Save and Close**.

20. Click **Close**.


The content author can now add the promotional text page component to the home page. Then, the author can enter the promotional text.

