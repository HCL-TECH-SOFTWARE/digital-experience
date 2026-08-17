# How to isolate which WCM item is generating particular output/markup?

## Applies to

> HCL Digital Experience 9.5 and higher  

## Introduction

The document describes detailed steps that can be used to isolate WCM items that generating particular output/markups.

## Instructions

1. Enable the following trace string:  

    ```log
    com.aptrix.=finest:com.ibm.workplace.wcm.=finest:com.presence.*=finest
    ```

2. Refresh the page with the markup in question.  

3. Edit `<wp_profile_root>/logs/WebSphere_Portal/trace.log`.  

4. Search for the markup in question, check for the name or uuid of the item that is currently rendered. You may have to scroll up several lines to determine the item in question, or the item that is referencing the item in question.

For example:

When trying to find where the output markup string `file1` is coming from. After collecting the trace recommended above, trace entries like the following sample should be shown up in the trace.log file:

`current component to check: com.aptrix.pluto.cmpnt.TextCmpnt text:[https://myserver.mycompany.com/myfiles/file1]`

Scrolling up through trace.log, the first WCM item that can be found is not a component, but a content item. For example:

`http://myserver.mycompany.com:10039/wps/wcm/myportalcontent/my_site/my_site_area/myfiledescriptions`

When the content item was edited, it is possible to find a reference to a component that contained the markup in question.
