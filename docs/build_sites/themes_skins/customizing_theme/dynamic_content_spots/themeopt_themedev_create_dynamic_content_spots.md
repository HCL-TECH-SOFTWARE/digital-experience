# Creating custom dynamic content spots

After you create a new theme, you can customize it by creating your own dynamic content spots.

1.  Create a WAR file with an arbitrary context root.

2.  Create a module plugin.xml that describes your content spot. You can use the following sample code to create your plugin.xml:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <plugin id="com.yourcompany.customtheme" name="Custom Theme Modules" provider-name="Your Company" version="1.0.0">
    
    <extension id="wp_dynamicContentSpots_custom" point="com.ibm.portal.resourceaggregator.module">
        <module id="wp_dynamicContentSpots_custom">
            <contribution type="dyn-cs">
                <sub-contribution type="markup" ref-id="myID">
                    <uri value="res:{war:context-root}/themes/html/dynamicSpots/myNewSpot.jsp"/>
                </sub-contribution>
            </contribution>
        </module>
    </extension>
    ```

3.  Deploy the WAR file.

4.  Reference the new module `wp_dynamicContentSpots_custom` in your profile.

5.  Use the dynamic content spot by adding the following code to your theme.html:

    `<a rel="dynamic-content" href="dyn-cs:id:myID"></a>`



???+ info "Related information:"
    - [Modules and dynamic content spots](../dynamic_content_spots/working_with_dcs/themeopt_modules_dyn_cnt_spts.md)

