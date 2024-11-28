
# Customizing the Business Card Component in HCL Digital Experience

The Business Card component in HCL Digital Experience (DX) provides a quick overview of a user's profile information. While the shipped Business Card component does not support direct customization, you can fully replace the shipped system module or web component to suit your needs. This guide provides the steps to customize the Business Card component.

## Steps to Customize the Business Card Component

### Create a Custom Web Component

First, create a custom web component that will replace the default business card component. This custom component should include the desired fields and layout. You can start by copying the existing business card web component code from the shipped system module using the following URL:

```
https://your-host-name/dx/ui/people/components/web-components.js
```

Once copied, modify the web component code as needed and deploy it. For more information on defining or writing modules, please refer to [the module framework](https://opensource.hcltechsw.com/digital-experience/latest/build_sites/themes_skins/the_module_framework/)

### Style Customization

You can easily customize the appearance of the business card component using CSS. Just like any web application, it's built with HTML and CSS, allowing full flexibility in applying your custom styles.

While you can align your overall People Service changes with the Business Card theme module, you can also add them in any other theme module or through other methods like a script app. The  Business Card component will not utilize the CSS rules directly but will instead allow the browser to apply new and custom CSS rules that supersede the existing ones.

You can inject these styles into your theme module or any other method you prefer. Here are some ways to apply custom styles:

  1. Adding Styles to a Theme Module:

    - Create or edit a theme module to include your custom CSS.
    - Add the custom styles to the module's CSS file.
    - Ensure the module is linked to your theme.

  2. Using a Script App:

    - Create a script app that injects the custom CSS into the page.
    - Deploy the script app to your DX environment.

For more information on customizing styles in HCL Digital Experience, refer to the [Customizing Theme Styles](https://opensource.hcltechsw.com/digital-experience/latest/build_sites/themes_skins/customizing_theme/styles/?h=custom+style) documentation.


### Verify and Link the Custom Module to the Theme

For detailed instructions on verifying and linking system modules, refer to the [Verifying and Linking People Service System Modules in HCL Digital Experience](../link_system_module_to_theme.md)

### Additional reference

1. [Deploy JavaScript Libraries/Dependencies as a DX Module](https://opensource.hcltechsw.com/digital-experience/latest/guide_me/tutorials/scriptapps/how_to/02_dependencies_as_module/)

2. [The module framework](https://opensource.hcltechsw.com/digital-experience/latest/build_sites/themes_skins/the_module_framework/)

3. [Writing modules](https://opensource.hcltechsw.com/digital-experience/latest/build_sites/themes_skins/the_module_framework/writing_module/)