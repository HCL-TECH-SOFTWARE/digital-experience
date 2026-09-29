# How to create links that display WCM content without the portal theme

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Display content directly through the Web Content Manager (WCM) without the default portal theme wrapping. Creating a menu item allows links to open content in an isolated window using designated placeholder tags. This article explains how to create menu item links that display content through WCM without the portal theme.

## Instructions

To create links that display content without the portal theme, perform the following steps:

1. Log in to HCL Digital Experience (DX) and open the applications menu.
2. Go to **Web Content > Authoring** and select your target web content library.
3. Select **New > Component > Menu** and enter a name for the component.
4. Locate the **Result design** field and add the HTML code similar to the following:

    ```html
    <tr>
        <td>
            <a href="[Placeholder tag='noprefixhref']" target="_blank">
                [Placeholder tag='name']
            </a><br>
        </td>
    </tr>
    ```

5. Select **Save and close**.
