# XML samples for creating or removing language definitions

You can modify these XML samples and use them to create or remove language definitions from your portal.

The following XML sample shows how you use the XML configuration interface to create Japanese language in your portal:

```
<request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" type="update"
         xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
     <portal action="locate">
          <language action="update" domain="rel" locale="ja">
          <localedata locale="ja">
           <title>Japanese</title>
          </localedata>
          </language>
     </portal>
</request>
```

The following XML sample shows how you use the XML configuration interface to remove Japanese language in your portal:

```
<request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" type="update"  
         xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
    <portal action="locate">
         <language action="delete" domain="rel" locale="ja">
         <localedata locale="ja">
           <title>Japanese</title>
         </localedata>
         </language>
    </portal>
</request>
```
## HCLSoftware U learning materials

For an introduction and a demo on how to manage multilingual sites as a business user, go to [Multilingual for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D2792){target="_blank"}. You can try it out using the [Multilingual Lab for Business Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab.pdf){target="_blank"} and corresponding [Multilingual Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab_Resources.zip).

To learn more about multilingual deployment options, go to [Multilingual for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}. In this course, you will learn about language support and selection, page translation, search, and the built-in multilingual solution for web content. You will also learn how to manage the locale URL, plan site capacity, and optimize performance. You can try it out using the [Multilingual Lab for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}.

???+ info "Related information"  
     -    [Sample XML configuration files](../../../portal_admin_tools/xml_config_interface/xml_config_ref/admxmsmp.md)
     -    [Working with the XML configuration interface](../../../portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)
     -    [How to control the behavior of the language fallback filter](../../../portal_admin_tools/language_support/adlangflt.md)

