# Updating the content menu to open on click instead of on hover

The content menu opens when a user hovers over a portlet containing HCL Web Content Manager items. In Combined Cumulative Fix 05, you can set the content menu to open when a user clicks an icon in the portlet skin instead.

1.  Add the content menu icon to your custom skin. Update the custom theme CSS sprite to include the new content menu icon image. Replace the master.png static resource with the Portal 8.5 default theme image in WebDAV at /themes/Portal8.5/css/images/master.png.

2.  Add the HTML for the icon to the custom skins. Add the following code to the custom skin templates after the `<h2>` node.

    ```
    <a aria-haspopup="true" aria-label="Display component action menu" role="button" href="javascript:;" class="wpthemeIcon wpthemeMenuFocus contextMenuInSkinIcon" style="display:none" tabindex="0">
                    <span title="Display component action menu"><img aria-label="Display component action menu" alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></span>
                    <span class="wpthemeAltText">Component Action Menu</span>
                    <!-- start CAM template -->
                    <span class="wpthemeMenu" data-positioning-handler="horizontallyCenteredBelow">
                        <div class="wpthemeMenuBorder">
                            <!-- define the menu item template inside the "ul" element.  only "css-class", "description", and "title" are handled by the theme's sample javascript. -->
                            <ul class="wpthemeMenuDropDown wpthemeTemplateMenu" role="menu">
                                <li class="${css-class}" role="menuitem" tabindex="-1"><span
                                    class="wpthemeMenuText">${title}</span></li>
                            </ul>
                            <div class="verticalMenuPointer pointer"></div>
                        </div> <!-- Template for loading -->
                        <div class="wpthemeMenuLoading wpthemeTemplateLoading">${loading}</div>
                        <!-- Template for submenu -->
                        <div class="wpthemeAnchorSubmenu wpthemeTemplateSubmenu">
                            <div class="wpthemeMenuBorder wpthemeMenuSubmenu">
                                <ul id="${submenu-id}" class="wpthemeMenuDropDown"
                                    role="menu">
                                    <li role="menuitem" tabindex="-1"></li>
                                </ul>
                            </div>
                        </div>
                    </span>
                    <!-- end CAM template -->
                </a>
    ```

3.  Translate the values of the `aria-label` and `wpthemeAltText` to support any languages you support.

4.  Add the CSS for the icon. Add the following code anywhere in the custom theme.

    ```
    .wpthemeControlHeader a.wpthemeIcon.contextMenuInSkinIcon img {
                    background-position:0 -1496px;
                }
    ```

5.  Add the new content menu to the custom theme profile. Open the theme profile and add `wp_skin_cam` to the `deferredModuleIDs` section.


**Parent topic:**[Menus](../dev-theme/themeopt_menu.md)

