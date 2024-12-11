
# Customizing the Business Card Component in HCL Digital Experience

The Business Card component in HCL Digital Experience (DX) provides a quick overview of a user's profile information. While the shipped Business Card component does not support direct customization, you can fully replace the shipped system module or web component to suit your needs.

In this guide, you will learn how to create a custom web component and customize a Business Card.

For detailed instructions on how to verify and link system modules, refer to the [Verifying and Linking People Service System Modules](../link_system_module_to_theme.md) page.

### Creating a custom web component

Before you can start customizing your Business Card, you need to create a custom web component that will replace the default Business Card component. This custom component should include the desired fields and layout. Copy the existing Business Card web component code from the shipped system module using the following URL:

```
https://your-host-name/dx/ui/people/components/web-components.js
```

Then, modify the web component code as needed and deploy it. For more information on defining or writing modules, refer to [the module framework](https://opensource.hcltechsw.com/digital-experience/latest/build_sites/themes_skins/the_module_framework/) page.

### Customizing a Business Card

You can easily customize the appearance of the business card component using CSS. This component is built with HTML and CSS, similar to any web application, allowing full flexibility in applying your custom styles.

While you can align your overall People Service changes with the Business Card theme module, you can also add them in any other theme module or through other methods such as Script Apps. The Business Card component will not utilize the CSS rules directly. Instead, it will allow the browser to apply new and custom CSS rules that replace the existing ones.

You can inject these styles into your theme module or any other method you prefer. Here are some ways to apply custom styles:

  - Adding Styles to a Theme Module:

    1. Create or edit a theme module to include your custom CSS.
    2. Add the custom styles to the module's CSS file.
    3. Ensure the module is linked to your theme.

  - Using a Script App:

    1. Create a Script App that injects the custom CSS into the page.
    2. Deploy the Script App to your DX environment.

For more information on customizing styles in HCL Digital Experience, refer to the [Customizing Theme Styles](https://opensource.hcltechsw.com/digital-experience/latest/build_sites/themes_skins/customizing_theme/styles/?h=custom+style) page.

???+ info "Related information"
    - [Deploy JavaScript Libraries/Dependencies as a DX Module](../../../../../guide_me/tutorials/scriptapps/how_to/02_dependencies_as_module.md)
    - [The module framework](../../../../../build_sites/themes_skins/the_module_framework/index.md)
    - [Writing modules](../../../../../build_sites/themes_skins/the_module_framework/writing_module/index.md)