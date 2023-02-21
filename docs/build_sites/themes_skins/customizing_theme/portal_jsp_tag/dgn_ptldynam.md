# <portal-dynamicui/\> tags

The <portal-dynamicui/\> tags are used to enable dynamic user interface features such as closing dynamic portlets and pages.

The following table provides a brief description of each tag.

!!! note 
    Do not use portal tags in portlet JSPs. The following tags are only for use in theme and skin JSPS.

|Tag|Description|
|---|-----------|
|[<portal-dynamicui:closepage/\>](#portal-dynamicuiclosepage)|Provides a URL that closes a dynamic page. This tag should be used only within a <portal-navigation:navigationLoop/\>|
|[<portal-dynamicui:closeportlet/\>](#portal-dynamicuicloseportlet)|Provides a URL that closes a dynamic portlet. This tag should be used only within a skin JSP.|
|[<portal-dynamicui:pendingTasks/\>](#portal-dynamicuipendingtasks)|Through the use of scripting variables, notifies the user whenever a new, unclaimed task has been assigned. This tag should be used only within theme JSPs.|

## Detailed descriptions of the <portal-dynamicui/\> tags

The following section provides detailed descriptions of the <portal-dynamicui/\> JSP tags:

### **<portal-dynamicui:closePage/\>**

    Provides a URL that closes a dynamically created task page. This tag should be used only within a <portal-navigation:navigationLoop/\>.

### **<portal-dynamicui:closePortlet/\>**

    Provides a URL that closes a dynamic portlet. This tag should be used only within a skin JSP. The content of this tag is rendered only if the portlet is dynamic.

### **<portal-dynamicui:pendingTasks/\>**

    Through the use of scripting variables, notifies the user whenever a new, unclaimed task has been assigned. This tag should be used only within theme JSPs.



