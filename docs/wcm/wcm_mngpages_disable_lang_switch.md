# Disabling the language switcher

The language switcher allows you to switch from any of the supported languages. This feature is available only for authenticated portal users.

Introduced in Container Update CF201, you can disable the language switcher by setting disable.languageSwitcher to `true` at the root page level in the configuration page. When set to `true`, the language switcher is hidden from the portal interface for both desktop and mobile views.

-   **`disable.languageSwitcher= true | false`**

    This page parameter specifies if the language switcher displays when in edit mode. By default, the parameter is set to false and the language switcher is displayed. This setting might be set for the root or on individual pages.

    If you are using the XML configuration interface, you can set the parameter as follows:

    ```
    <parameter name=“disable.languageSwitcher“ type=“string“ update=“set“>true</parameter>
    ```


