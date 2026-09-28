# How to host Microsoft Office files with Web Content Manager (WCM)

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Host Microsoft Office files, such as Excel spreadsheets (XLS/XLSX), through HCL Digital Experience (DX) Web Content Manager (WCM) by using file resource components and delivering within presentation templates. This article explains how to serve Microsoft Office files with WCM.

## Instructions

To host Microsoft Office files with WCM, perform the following steps:

1. In WCM, go to **Web Content > Authoring** and select your target web content library.
2. Select **New > Component > File Resource** and name the component (for example, `xlsFileResourceComponent`).
3. Upload the Microsoft Office file and save the component.
4. Edit your Presentation Template to include a link referencing the File Resource Component:

    ```html
    <a href='[Component name="web content/xlsfileresourcecomponent"]'>xlsLink</a>
    ```

5. Preview the content and verify that the link opens the spreadsheet in a new window.
6. (Optional) To display the spreadsheet directly on a Portal page without requiring a user to select a link, update the component reference in the presentation template to:

    ```html
    [Component name="xlsfilerescomponent" format="HTML"]
    ```
