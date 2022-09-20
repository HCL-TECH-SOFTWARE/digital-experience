# Adding or removing a capability from a portlet

To add or remove a capability from a portlet, update the portlet.xml for the portlet, or update the portlet preferences sections for the portlet definition or portlet entity with XML access.

Read the topics on Module dependencies in portlets and writing modules.

1.  Open the portlet.xml in your portlet archive.

2.  Create a portlet preference section. Or add a preference to the existing section.

    This example shows a preference that you can add to an existing section.

    ```
    <portlet-preferences>
        <preference>
            <name>capability.1.id</name>
            <value>dojo</value>
            <read-only>true</read-only>
        </preference>
        <preference>
            <name>capability.1.minValue</name>
            <value>1.6</value>
            <read-only>true</read-only>
        </preference> 
    </portlet-preferences>
    
    ```

    For more information, see *Module dependencies in portlets*.

3.  Package your .WAR file.

4.  Redeploy the portlet with the Portal Administrator portlet. Click the **Administration menu** icon. Then, click **Portlet Management** \> **Web Modules**.Install or update your portlet there.



???+ info "Related information"
    - [Module dependencies in portlets](../themeopt_mod_capfilters.md)

