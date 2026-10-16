# How to create links that display WCM content without the portal theme

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

You can display content directly through the Web Content Manager (WCM) in HCL Digital Experience (DX) without the default portal theme wrapping by creating a Menu component that allows links to open content in an isolated window using designated placeholder tags. This is useful for displaying clean content fragments in pop-up windows or embedding raw content into external applications. This article explains how to create menu item links that display content through WCM without the portal theme.

## Instructions

To create links that display content without the portal theme, perform the following steps:

1. Log in to HCL DX as an administrator.
2. Navigate to **Open applications menu > Web Content > Authoring**.
3. Select your target web content library.
4. Select **New > Component > Menu**.
5. Enter a **Name** for the component.
6. In the **Result design** box under **List Presentation Markup**, add the HTML code similar to the following:

    ```html
    <tr>
        <td>
            <a href="[Placeholder tag='noprefixhref']" target="_blank">
                [Placeholder tag='name']
            </a><br>
        </td>
    </tr>
    ```

    - `[Placeholder tag='noprefixhref']`: Renders the direct URL to the content item without the portal context path prefix, allowing the content to render outside the theme.
    - `[Placeholder tag='name']`: Dynamically displays the name or title of the target content item as the link text.

7. Select **Save and Close**.