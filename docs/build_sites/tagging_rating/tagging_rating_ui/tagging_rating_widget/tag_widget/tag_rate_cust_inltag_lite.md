# Customizing the tag widget

The user interface of the tag widget consists of Web Content Manager HTML components. You can customize the tag widgets by modifying one or more of these components. For example, you can change the order of the user interface elements, or you can remove a field that you do not want to show in the user interface. The components are listed here.

Changes that you make here apply to all instances of the rating widget.

Some of the components are mandatory. Do not remove them.

To modify the components, navigate to **Applications** \> **Content** \> **WCM Authoring** \> **Libraries** \> **Web Resources v70** \> **Components**.

-   **HTML - Tagging Widget Light - Label:**

    This component is mandatory. It renders the default label for the tag widget. The tag widget shows one of the following tag sets. The shown tag set depends on the setting of the tag scope parameter for the widget instance. For more information about this parameter, read the *Tag widget parameter reference*.

    -   **Community tags**

        With the tag scope parameter set to this value, the tag widget shows tags that other users applied to the resource as public tags.

    -   **Personal public tags**

        With the tag scope parameter set to this value, the tag widget shows all public tags that the user applied to this resource.

    -   **Personal private tags**

        With the tag scope parameter set to this value, the tag widget shows all private tags that the user applied to this resource.

    The following labels are shown for the corresponding tag scopes:

    -   **Tags**

        This label indicates COMMUNITY\_PERSONAL\_PUBLIC tags.

    -   **My public tags**

        This label indicates PERSONAL\_PUBLIC tags.

    -   **My private tags**

        This label indicates PERSONAL\_PRIVATE tags.

-   **HTML - Tagging Widget Light - Tags:**

    This component is mandatory. It renders the list of tags for the resource.

-   **HTML - Tagging Widget Light - Menu:**

    This component is mandatory. It renders the drop-down menu that is used for switching between the different tag scopes.

-   **HTML - Tagging Widget Light - More Tags:**

    This component is mandatory. It renders the **More tags** link that is used to show the extra tags that cannot be displayed by using the HTML - Tagging Widget Light - Tags component. When a user clicks **More tags**, the widget shows the extra tags.

-   **HTML - Tagging Widget Light - Divider1:**

    This component renders the divider that separates the tags and the **More tags** link.

-   **HTML - Tagging Widget Light - Divider2:**

    This component renders the divider that separates the **More tags** link and the drop-down menu.

-   **HTML - Tagging Widget Light - Divider3:**

    This component renders the divider that separates the drop-down menu and the plus \( **+** \) icon.

-   **HTML - Tagging Widget Light - ErrorMessageDivider:**

    If the widget shows an error message, this component renders the divider that separates the tags and the error message.

-   **HTML - Tagging Widget Light - Add Tags - Image:**

    This component is mandatory. It renders the plus \( **+** \) icon for showing the input field for adding tags.

-   **HTML - Tagging Widget Light - Add Tags - Input:**

    This component is mandatory. It renders the input field in which a users adds tags.

-   **HTML - Tagging Widget Light - Messages:**

    This component is mandatory. If the widget shows an error message while a user is using the tag widget, this component renders the error message.

-   **HTML - Tagging Widget Light:**

    This component contains all the components shown earlier in this list.



???+ info "Related information"
    - [Tag widget parameter reference](../../../cfg_reference/parm_ref_tag_rate_widget/tag_rate_parm_ref_inl_tag_lite.md)

