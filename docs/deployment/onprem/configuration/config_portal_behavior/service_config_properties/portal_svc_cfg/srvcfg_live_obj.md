# Live Object Service

You can use the Live Object configuration service to configure the behavior of the live object framework.

-   **isLOFServiceRequired = true\|false**

    Use this property to specify whether the theme loads the live object service code or not. It is up to the theme code to enforce this property. The portal default theme supports this property. The default value is true .

    -   **true**

        The theme loads the live object framework service code. This is the default value.

    -   **false**

        The theme does not load the live object framework service code.

-   **isDynamicLoading = true\|false**

    Use this property to specify whether the live object handlers are loaded dynamically or statically. The default value is false . The setting of this property influences the effect of the properties for specific handlers.

    -   **false**

        If you set this property to false , the handlers are loaded statically. This means that the handler JavaScript code is loaded as part of the static file of the live object framework service at the time when the service is requested. This is the default. This setting increases the size of the initial download content, but reduces the number of requests if the live object framework is used on the page.

    -   **true**

        If you set this property to true , the handlers are loaded dynamically if the appropriate microformat is part of the page. This means that handlers such as click-to-action \(C2A\) and Person Card are loaded by the semantic service, if DOM \(document object model\) nodes exist in the page that match the appropriate criteria. After you set this property to true , changing the properties for specific handlers has no effect. For example, if you set this property to true and the property isPersonCardHandlerRequired is set to false , the semantic service loads the Person Card handler dynamically if a `vcard` node exists in the page markup. This setting reduces the size of downloaded content on first page access, but it might increase the number of requests required to render the page.

-   **isPersonCardHandlerRequired = true\|false**

    Use this property to specify whether the Person Card handler is included in static content. The default value is true .

    **Note:** This property is only considered if the property isDynamicLoading is set to the value false .

    -   **true**

        The Person Card handler is loaded.

    -   **false**

        The Person Card handler is not loaded, and the Person Card does not show, even if `vcard` nodes are on the page.

-   **isActionHandlerRequired**

    Use this property to specify whether the Person Card action handler is included in static content. The default value is true .

    **Note:** This property is only considered if the property isDynamicLoading is set to the value false .

    -   **true**

        The Person Card action handler is loaded.

    -   **false**

        The Person Card action handler is not be loaded and `vcard` does not show extension menu actions, even if they are on the page.

-   **isC2AHandlerRequired**

    Use this property to specify whether the click-to-action \(C2A\) handler is included in static content. The default value is true .

    **Note:** This property is only considered if the property isDynamicLoading is set to the value false .

    -   **true**

        The C2A handler is loaded.

    -   **false**

        The C2A handler is not loaded and click-to-action does not work, even if C2A nodes are on the page.


**Parent topic:**[Portal service configuration](../admin-system/srvcfgref.md)

