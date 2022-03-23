# Customizing the rating widget 

The user interface of the rating widget consists of Web Content Manager HTML components. You can customize the rating widgets by modifying one or more of these components. For example, you can change the order of the user interface elements, or you can remove a field that you do not want to show in the user interface. The components are listed here.

Changes that you make here apply to all instances of the rating widget.

Some of the components are mandatory. Do not remove them.

-   **HTML - Rating Widget Light - Label:**

    This component is mandatory. Do not remove it. This component renders the default label for the rating widget. The rating widget shows one of the following types of rating. The shown rating type depends on the setting of the rating scope parameter for the widget instance. For more information about this parameter, read the *Rating widget parameter reference*.

    -   **Personal public rating**

        With the rating scope parameter set to this value, the rating widget shows all public ratings that the user applied to this resource.

    -   **Personal private rating**

        With the rating scope parameter set to this value, the rating widget shows all private ratings that the user applied to this resource.

    The following labels are shown for the corresponding rating scopes:

    -   **My public rating**

        This label indicates PERSONAL\_PUBLIC rating.

    -   **My private ratings**

        This label indicates PERSONAL\_PRIVATE rating.

-   **HTML - Rating Widget Light - Menu:**

    This component is mandatory. Do not remove it. This component renders the drop-down menu that is used for switching between the different rating scopes.

-   **HTML - Rating Widget Light - Divider1:**

    This component renders the divider that separates the menu and the rating asterisks.

-   **HTML - Rating Widget Light - Stars:**

    This component is mandatory. Do not remove it. This component renders the asterisks that show the rating for the resource.

-   **HTML - Rating Widget Light - Divider2:**

    This component renders the divider that separates the menu and the rating description.

-   **HTML - Rating Widget Light - Divider3:**

    If the widget shows an error message, this component renders the divider that separates the rating description and the error message.

-   **HTML - Rating Widget Light - ErrorMessageDivider:**

    If the widget shows an error message, this component renders the divider that separates the ratings and the error message.

-   **HTML - Rating Widget Light - Messages:**

    This component is mandatory. Do not remove it. If the widget shows an error message while a user is using the rating widget, this component renders the error message.

-   **HTML - Rating Widget Light:**

    This component contains all the components that are shown earlier in this list.


**Parent topic:**[The rating widget ](../admin-system/tag_rate_inline_rate_wdgt_lite.md)

**Related information**  


[Tag widget parameter reference ](../admin-system/tag_rate_parm_ref_inl_tag_lite.md)

