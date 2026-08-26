# How to isolate the WCM item generating a specific output or markup

## Applies to

> HCL Digital Experience 9.5 and higher  

## Introduction

Web Content Manager (WCM) items dynamically render HTML output across HCL DX site pages. When troubleshooting rendering issues, identify the specific item responsible for generating a target markup snippet. This article describes how to isolate which WCM item generates specific output or markup.

## Instructions

To isolate the WCM item generating specific output or markup, perform the following steps:

### Enabling trace logging

1. Log in to the Websphere Integration Solutions Console (WAS admin console) as an administrator.
2. Navigate to **Troubleshooting > Logs and trace > WebSphere_Portal > Change log detail levels**.
3. Select the **Runtime** tab to apply changes immediately without a server restart, or select the **Configuration** tab to persist changes across server restarts.
4. Under **Change log detail levels**, append the following trace string:

    ```log
    com.aptrix.=finest:com.ibm.workplace.wcm.=finest:com.presence.*=finest
    ```

5. Select **Apply**.
6. Click **Save** at the top of the console messages.
7. Refresh the page displaying the target output.

### Analyzing trace logs

1. Locate `<wp_profile_root>` on the server file system. Default directory locations include:

    - **Windows:** `C:\HCL\wp_profile\` or `C:\IBM\WebSphere\wp_profile\`
    - **Linux or Unix:** `/opt/HCL/wp_profile/` or `/opt/IBM/WebSphere/wp_profile/`

2. Open `<wp_profile_root>/logs/WebSphere_Portal/trace.log` in a text editor.
3. Search for the target markup string to locate the name or UUID of the rendered item. If necessary, scroll up to find the referencing parent item.

    For example, to locate the origin of the markup string `file1`, search `trace.log` for the string. The log displays entries similar to:

    `current component to check: com.aptrix.pluto.cmpnt.TextCmpnt text:[https://myserver.mycompany.com/myfiles/file1]`

    Scrolling up in `trace.log` shows the referencing WCM content item:

    `http://myserver.mycompany.com:10039/wps/wcm/myportalcontent/my_site/my_site_area/myfiledescriptions`

    Open and edit this content item to locate the component reference containing the target markup.
