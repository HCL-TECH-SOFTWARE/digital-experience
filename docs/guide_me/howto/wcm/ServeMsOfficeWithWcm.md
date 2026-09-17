# How to serve Microsoft Office with WCM e.g. XLS files

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

This document provides steps to serve Microsoft Office with WCM e.g. XLS files.

## Instructions

1. Create a new File Resource Component (e.g. name it **xlsFileResourseComponent**)
2. Upload an XLS spread sheet file and save the file resource component.
3. Edit a presentation template to render a link to the File Resource Component:

    ```html
    <a href="[Component name="web content/xlsfileresourcecomponent"]">xlsLink</a>
    ```

4. Preview the content and verify the link opens a new window and displays the spread sheet.

To load the excel sheet onto a Portal page without having to click on a link, modify the steps above to reference the component like this in the presentation template: `[Component name="xlsfileresourcecomponent" format="HTML"]`  
