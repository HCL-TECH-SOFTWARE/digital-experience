# Creating the dynamic list page 

This roadmap describes how to create the dynamic list page component of the design from an HTML component. The dynamic list page component is used on the Home, Product, and Events page.

## Who should use this roadmap

You are a developer on the technical team that is tasked with creating home and landing page templates for content authors to use on the site. You are responsible only for creating page components and design templates. Other developers are responsible for developing other pieces of the design. Learn the basics of developing the dynamic list page component.

**Parent topic:**[Creating HTML page components ](../install/rm_create_site_dev_pcomponents.md)

# Creating your dynamic list page component

Ensure that your design library exists, for example, Greenwheels Design.

1.  Click the **Applications menu** icon. Then, click **Content** \> **Web Content Authoring**.

2.  Go to your design library.

3.  Click **New** \> **Component** \> **Menu** to create a menu component.

    1.  Enter a name for your menu.

        For example, type List.

    2.  Ensure that your location is set to **your\_design\_library** \> **your\_dyn\_list\_page\_component**.

        For example, ensure that the location is **Greenwheels** \> **List**. If the location is not set, click **Select Location**.

    3.  Select the **Query string** check box in the Further options section and then enter the parameter name for the query string.

        For example, type list\_path.

    4.  In the Menu design properties section, you can also define the following parameters to customize your dynamic list page component:

        -   **Display order**
        -   **Sort results first by**
        -   **Formatting**
    5.  Enter the following information in the **Results design** text box in the List Presentation Markup section:

        ```
        [Content context="autofill" renderMode="summary"]
        ```

        This text renders the summary presentation template for each item in the list.

    6.  Click **Save and Close**.

4.  Click **Generate** \> **Page Component**.

    1.  Select Teaser as the template type.

    2.  Enter a page component name for your teaser.

        For example, type List.

    3.  Ensure that your design library is selected.

    4.  Click **OK**.

5.  Click the following link in the **Information** dialog box to customize the page component:

    **your\_design\_library** \> **Authoring Templates** \> **your\_page\_component**. For example, click **Greenwheels Design** \> **Authoring Templates** \> **List**.

    **Note:** If you close the **Information** dialog box, you can follow the path in your design library.

6.  Click **Edit**.

7.  Click **Manage Elements**.

8.  Delete all of the listed default elements before you create a customized element for the page component.

9.  Create a list element:

    1.  Select Link as the **Element type**.

    2.  Enter a name for your element.

        For example, type list\_path.

    3.  Click **Add**.

    4.  Click **OK**.

10. Click the **Default Content** tab.

    1.  Click the **Element\_type field property** icon.

        For example, select the **Link:** field property icon.

    2.  Click **Select** in the Restrict Link Type section.

    3.  Select the **Portal Page** check box to restrict the link type to portal pages.

    4.  Click **OK**.

11. Click the following icons, select the **Hide field** check box, and then click **Hide**:

    -   **Display link as**
    -   **Link Text field property**
    -   **Managing references** in the Link Attributes section
    -   **Link description**
    -   **Link Query string**
    -   **Link target**
    -   **Link Additional attributes**
12. Click the drop-down menu on the **Save and Close** button. Then, select **Save and Read**.

13. Click **Apply Author Template** to update the content associated with this authoring template.

14. Select the **Add new elements** and **Remove existing elements** check boxes.

15. Click **OK**.

16. Click **Close** to close the authoring template.

17. Click the following link in the **Information** dialog box to customize the page component:

    **your\_design\_library** \> **Presentation Templates** \> **your\_page\_component**. For example, click **Greenwheels Design** \> **Presentation Templates** \> **List**.

    **Note:** If you close the **Information** dialog box, you can follow the path in your design library.

18. Click **Edit**.

19. Delete the default text in the **Presentation Template Options** text box. Then, enter the following information:

    ```
    [IfEditMode]
    <p><strong>Configure this list to show items in the path:</strong>
    [EditableElement:list_path placeholder="Select context" format="span" callback="location.reload();"]
    [Element:list_path format='titlepath']
    [/EditableElement:list_path]</p>
    [/IfEditMode]
    
    [RequestAttribute key="list_path" value="[Element:list_path format='namepath']"]
    [Component name="Greenwheels Design/list/list"]
    ```

    This text allows Krista to select the path where the list items are coming from. This selection is shown only in edit mode. It then passes this path into the menu component as a query parameter by using the RequestAttribute tag. Finally, it renders the menu component.

20. Click **Save and Close**.


The content author can now go into **Edit** mode and add the dynamic list page component to the landing page template. The content author sets the list path by selecting the content page that contains articles or events. The list is then displayed on the landing page template.

