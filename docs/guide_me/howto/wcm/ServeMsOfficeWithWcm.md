# How to host Microsoft Office files with Web Content Manager (WCM)

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Host Microsoft Office files, such as Excel spreadsheets (XLS/XLSX), through HCL Digital Experience (DX) Web Content Manager (WCM) by using file resource components and delivering within presentation templates. This article explains how to serve Microsoft Office files with WCM.

## Instructions

To host Microsoft Office files with WCM, perform the following steps:

1. Log in to HCL DX and open the applications menu.
2. Go to **Web Content > Authoring** and select your target web content library.
3. Select **New > Component > File** and enter a name for the component (for example, `xlsFileResourceComponent`).
4. Under File Element, select **Upload** and choose the Microsoft Office file.
5. Select **Save and Close**.
6. Select **New > Presentation Template** and enter a name for the presentation template.   
7. Edit the presentation template to include a link referencing the file resource component similar to the following:

    ```html
    <a href='[Component name="web content/xlsfileresourcecomponent"]'>xlsLink</a>
    ```

8. Preview the content and verify that the link opens the spreadsheet in a new window.
9. (Optional) To display the spreadsheet directly on a Portal page without requiring a user to select a link, update the component reference in the presentation template to:

    ```html
    [Component name="xlsfilerescomponent" format="HTML"]
    ```

10. Select **Save and Close**.