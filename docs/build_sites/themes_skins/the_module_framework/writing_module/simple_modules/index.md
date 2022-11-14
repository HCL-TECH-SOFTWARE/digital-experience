# Simple modules

Simple modules for the resource aggregator framework are provided in the WebDAV folder. You can define modules quickly with a limited set of features with these simple modules.

If you need all features of the framework, you must define your modules through a plugin.xml or JSON file in the contributions folder.

## Module quick start

Each sub-directory within the modules folder defines one module.

```
WebDAV Root
+ modules
+-- module A
+-- module B
+-- ...
+-- module Z
```

The getting\_started\_module is predefined so you can start quickly. Add your JavaScript, CSS, or markup file to one of the subfolders, and your resources are integrated into HCL Portal.

You must invalidate the resource aggregator cache before your changes are integrated. Click the **Administration menu** icon. Then, click **Portal Analysis** \> **Theme Analyzer**. Then, click **Utilities** \> **Control Center** \> **Invalidate cache** to invalidate the cache. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](themeopt_an_util.md#).

## Module directory

After you create your own module by creating a new directory in the modules directory, you must make sure that the module is integrated with HCL Portal. Add it to the profile currently set on your page. To verify the profile for any page, you can use the Theme Analyzer Page Explorer. Click the **Administration menu** icon. Then, click **Portal Analysis** \> **Theme Analyzer**. Then, click **Examine page profile information**.

Simple contributions can be of three contribution types, `head`, `config`, `menu`.

For more information, on simple modules read the readme.txt file in the getting\_started\_module folder.

## Simple module directory structure

Simple modules can be customized with the following files and directories.

-   **/module-id**

    Each directory in /modules defines a new module, but does not support versions.

    -   **/module-id/prereqs.properties**

        Optional file that defines the `prereqs` of this module. In the file, there is one `module-id` per new line. Module versions are not supported. For example,

        ```
        module-id
        module-id
        ```

    -   **/module-id/capabilities.properties**

        Optional file that defines the capabilities of this module. In the file, there is a property such as style with the `name` and `value` that is separated by an equal sign. Add one per line.

        ```
        name=value
        name=value
        ```

    -   **/module-id/localization.properties**

        Optional file that defines title and description of this module. In the file, there is a property such as style. For example,

        ```
        title.locale=title
        description.locale=description
        ```

        Replace locale and with the local representing code for the location. For example, for the United States, use `en_us`. Replace title with the title of the module.

    -   **/module-id/head**

        For more information, see *Head contribution*.

    -   **/module-id/config**

        For more information, see *Config contribution*.

    -   **/module-id/menu**

        Files that are stored in this directory are made available to the menu framework.

        -   **/module-id/menu/\*.json**

            JSON resources that contain the menu definition are served in alphabetical order.


-   **[Head contribution](../dev-theme/themeopt_simple_modules_head.md)**  
The HEAD folder contains files that are served as head contribution through the resource aggregator framework. Those resources appear in the head tag of the markup served to the browser.
-   **[Config contribution](../dev-theme/themeopt_simple_modules_config.md)**  
The CONFIG folder contains files that are served as config contribution through the resource aggregator framework. Those resources are usually before the closing body tag.


**Related information**  


[Modules that are provided with the modularized theme](../dev-theme/themeopt_oob.md)

