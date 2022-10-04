# Adapt the scripts that register the custom theme and skins

You must adapt the scripts that register the custom theme and skins that were moved from the file store.

1.  Open the theme file and adapt the following properties of the theme by changing the code dav:fs-type1 to war:

    ```
          <parameter name="com.ibm.portal.theme.template.ref" type="string" update="set">
       <![CDATA[war:<context-root-static-war>/<customThemePath>/]]>
          </parameter>
          
          <parameter name="com.ibm.portal.layout.template.href" type="string" update="set">
       <![CDATA[war:<context-root-static-war>/layout-templates/2ColumnEqual/]]>
          </parameter>
    ```

2.  Adapt the following properties for all the skins moved from the file store to an EAR file by changing the code dav:fs-type1 to war for the following parameters:

    ```
       <parameter name="com.ibm.portal.skin.template.ref" type="string" update="set">
          <![CDATA[war:<context-root-static-war>/<customSkinPath>/skins/Hidden/]]>
       </parameter>
    ```



???+ info "Related information"
   - [EJPNO1007W error](../../../the_module_framework/themeopt_analyzer/validation_reports/themeopt_an_EJPNO1007W_v85.md)
   - [EJPNO1008W error](../../../the_module_framework/themeopt_analyzer/validation_reports/themeopt_an_EJPNO1008W_v85.md)
   - [EJPNO1011I error](../../../the_module_framework/themeopt_analyzer/validation_reports/themeopt_an_EJPNO1011I_v85.md)

