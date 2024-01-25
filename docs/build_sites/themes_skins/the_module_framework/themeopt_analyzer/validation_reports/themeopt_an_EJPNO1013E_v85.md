# EJPNO1013E error

Whitelist configuration is not set.

## Explanation

The theme contains static content deployed in a WAR. For security reasons, the WAR data source does not serve content until a special context parameter is set. This context parameter defines which files from your web module HCL Digital Experience is able to serve. You must define a whitelist using a regular expression that matches the files that you want to make available.

## User action

The parameters are set in the web.xml file of the web module that contains the static theme content. For example, serve all files that are not part of the WEB-INF folder.

```
<div class="themeOptAnalyzerFixedText"><web-app><br/>...<br/><context-param><br/>&nbsp;&nbsp;<param-name><br/>&nbsp;&nbsp;&nbsp;&nbsp;com.ibm.portal.whitelist<br/>&nbsp;&nbsp;</param-name><br/>&nbsp;&nbsp;<param-value>.*</param-value><br/></context-param><br/>....<br/></web-app></div>
```


???+ info "Related information"
    - [Adapt the scripts that register the custom theme and skins](../../../developing_theme/dev_op_overview/manual_packaging_themes/themeopt_move_repack_script.md)

