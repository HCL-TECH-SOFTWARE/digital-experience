# EJPNO1012W error

Default layout template is missing from the theme configuration.

## Explanation

The theme does not have a default layout template defined. This can cause pages to be created with the incorrect type.

## User action

Create a theme metadata with the key com.ibm.portal.layout.template.ref. XMLAccess Snippet:

```
<div class="themeOptAnalyzerFixedText"><parameter name="com.ibm.portal.layout.template.href" type="string" update="set"><br/><![CDATA[[{0}]]><br/></parameter></div>
```


**Related information**  


[Changing theme metadata](../dev-theme/themeopt_cust_config_metadata.md)

