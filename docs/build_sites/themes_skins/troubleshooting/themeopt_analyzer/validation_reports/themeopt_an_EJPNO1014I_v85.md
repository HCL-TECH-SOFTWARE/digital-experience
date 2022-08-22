# EJPNO1014I error

Blacklist configuration is not set.

## Explanation

The theme contains static content deployed in a WAR. With a blacklist you can remove certain entries from the set of files that are available in the whitelist. A blacklist is helpful if you want to serve a folder but not a certain file within that folder.

## User action

The parameters are set in the web.xml file of the web module that contains the static theme content. For example, serve all files that are not part of the WEB-INF folder.

```
<div class="themeOptAnalyzerFixedText"><web-app><br/>...<br/><context-param><br/>&nbsp;&nbsp;<param-name><br/>&nbsp;&nbsp;&nbsp;&nbsp;com.ibm.portal.whitelist<br/>&nbsp;&nbsp;</param-name><br/>&nbsp;&nbsp;<param-value>.*</param-value><br/>&nbsp;&nbsp;<par am-name><br/>&nbsp;&nbsp;&nbsp;&nbsp;com.ibm.portal.blacklist<br/>&nbsp;&nbsp;</param-name><br/>&nbsp;&nbsp;<param-value>WEB-INF/.*</param-value><br/></context-param><br/>....<br/></web-app></div>
```


**Related information**  


[Adding static content to your custom theme](../dev-theme/themeopt_move_repack_addstatic.md)

