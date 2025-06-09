# Customizations for Search V2

This topic provides information on the possible style customizations for Search V2.

## Providing a custom CSS theme module

To provide a custom Cascading Style Sheets (CSS) theme module, there are two options:

- [Add a custom CSS theme module with styling overrides.](#adding-a-custom-css-theme-module-with-styling-overrides)
- [Create a custom CSS theme module and extend the default CSS module.](#creating-a-custom-css-theme-module-and-extending-the-default-css-module)

### Adding a custom CSS theme module with styling overrides

1. Create a new module under Practitioner Studio.
    1. Connect to the Core theme section using WebDAV. There are two options:
        - Open the theme resources from your Digital Experience (DX) system using WebDAV to adjust some resources. For more information, see [Using WebDAV file store](../../manage_content/wcm_delivery/webdav/administer_webdav/mash_webdav_store.md).
        - You can also use the DXClient tool to connect to the Core theme section. For more information, see the topics [DXClient](../../extend_dx/development_tools/dxclient/index.md) and [Themes artifacts](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/themes.md).

    2. Create a new theme module.
        1. Open the `PractitionerStudio` theme.
        2. In the `modules` folder, create a new folder with a unique module ID (for example, `dx_search_custom_css`).
        3. Apply the following structure to the new module:
            - `../PractitionerStudio/modules/<unique-module-id>/localization.properties`
            - `../PractitionerStudio/modules/<unique-module-id>/head/`
            - `../PractitionerStudio/modules/<unique-module-id>/head/index.css`

        4. Add the following localization information to the `localization.properties` file:
            - `title.en=DX Search Customization CSS`
            - `description.en=DX Search Customization CSS`

        5. Add styling overrides to the `index.css` file.

            See the following customized CSS code sample. This code changes the background color of the `dx-search-center-layout` component.

            ```css
            dx-search-center-layout::part(main) {
                background-color: #f0f0f0;
            }
            ```

        6. Check the new theme module using the **Analyzer** tab. 

        7. Verify the `index.css` stylings by clicking the **Sub-Contribution** link.
            ![Screenshot](../../assets/HCL_Search_Theme_Analyzer_New_Module.png)

2. Use the new custom CSS module in a theme profile.
    
    Edit the `../PractitionerStudio/profiles/profile_search_v2.json` and add the new unique module ID to the profile.

3. Open DX and start a new search.

    Your styling overrides should be visible when you start a new search. 

### Creating a custom CSS theme module and extending the default CSS module

1. Download the current stylings using the **Analyzer** tab. For more information, see [Getting the default theme modules](components.md#getting-the-default-theme-modules).

2. Apply your desired changes to the stylings you downloaded. Make sure to use a formatting tool to get a formatted version of the CSS content.

3. In Practitioner Studio, create a new module.
    1. Connect to the Core theme section using WebDAV. There are two options:
        - Open the theme resources from your Digital Experience (DX) system using WebDAV to adjust some resources. For more information, see [Using WebDAV file store](../../manage_content/wcm_delivery/webdav/administer_webdav/mash_webdav_store.md).
        - You can also use the DXClient tool to connect to the Core theme section. For more information, see the topics [DXClient](../../extend_dx/development_tools/dxclient/index.md) and [Themes artifacts](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/themes.md).

    2. Create a new theme module.
        1. Open the `PractitionerStudio` theme.
        2. In the `modules` folder, create a new folder with a unique module ID (for example, `dx_search_custom_css`).
        3. Apply the following structure to the new module:
            - `../PractitionerStudio/modules/<unique-module-id>/localization.properties`
            - `../PractitionerStudio/modules/<unique-module-id>/head/`
            - `../PractitionerStudio/modules/<unique-module-id>/head/index.css`

        4. Add the following localization information to the `localization.properties` file:
            - `title.en=DX Search Customization CSS`
            - `description.en=DX Search Customization CSS`

        5. Copy your formatted and adjusted stylings and paste them to the `index.css` file.

            See the following customized CSS code sample. This code changes the background color of the `dx-search-center-layout` component.

            ```css
            dx-search-center-layout::part(main) {
                background-color: #f0f0f0;
            }
            ```

        6. Check the new theme module using the **Analyzer** tab.

        7. Verify the `index.css` stylings by clicking the **Sub-Contribution** link.
            ![Screenshot](../../assets/HCL_Search_Theme_Analyzer_New_Module.png)

5. Use the new custom CSS module in a theme profile.
    
    Edit the `../PractitionerStudio/profiles/profile_search_v2.json` and replace the `dx_search_css` module ID with the new custom unique module ID.

6. Open DX and start a new search.

    Your styling changes should be visible when you start a new search.

## Styling search components

This section explains the default styles for search components and how to customize them.

### Default styling

Each component comes with default styles. See the following examples of different default styles:

```scss
dx-button::part(button) {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  background-color: #0550DC;
  border: none;
  color: #FFFFFF;
  display: flex;
  flex: 0 1 auto;
  font-size: 16px;
  height: 32px;
  padding: 8px 12px;
}
dx-button::part(button-disabled) {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  background-color: #0550DC;
  border: none;
  color: #FFFFFF;
  display: flex;
  flex: 0 1 auto;
  font-size: 16px;
  height: 32px;
  padding: 8px 12px;
  background-color: lightgray;
  color: darkgray;
  cursor: not-allowed;
}
dx-button::part(button-text) {
  font-size: 16px;
  line-height: 1;
  overflow: hidden;
}
...

dx-input-textfield::part(div) {
  width: 100%;
  position: relative;
}
dx-input-textfield::part(label) {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  width: 100%;
  margin-bottom: 10px;
  display: block;
  color: rgba(0, 0, 0, 0.87);
}
dx-input-textfield::part(input) {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.87);
  background-color: #FFFFFF;
  display: block;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.38);
  padding: 7px 8px;
  height: 16px;
}
...
```

### Style customization

You can override styles by targeting the component's class names or part attribute. You can override other components in a similar manner. Refer to the following styling examples for `dx-button` and `dx-input-textfield`.

!!! note
    The `part` attribute is used to name parts of a shadow tree, which can then be styled from outside the shadow DOM using the `::part()` pseudo-element. This allows you to apply CSS styles to shadow tree elements from the parent DOM. For more information about supported `part` attributes, see [Atomic Components](components.md#atomic-components).    

```css
/* for dx-button */
dx-button::part(button-text) {
  color: #FF0000; /* is overriding the button-start-icon color */
}

/* for dx-input-textfield */
dx-input-textfield::part(label) {
  color: #FF0000; /* is overriding the button label color */
}
```