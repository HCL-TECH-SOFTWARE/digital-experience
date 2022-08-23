# Render parameter tags

To retrieve the value of a shared render parameter, use the \[Plugin:RenderParam\] tag.

-   **Setting a render parameter**

    To set a public render parameter, use the predefined `CUSTOM_CONTEXT` parameter that is defined by the Web Content Manager Rendering Portlet. The following code snippet is an excerpt from the published sample of how to set a public render parameter.

    ```
    <form id="form1" action="[Plugin:RenderUrl copyCurrentParams="true"]" method="get">
            <label for="customerSelect">Select customer:</label> 
            <select name="CUSTOM_CONTEXT" id="customerSelect"></select>
            <button type="submit">Submit</button>
        </form>
    ```

-   **Retrieve value of a shared render parameter**

    Use \[Plugin:RenderParam\] tag. To retrieve a public render parameter, use the identifier of the parameter as defined in the portlet.xml. The following example shows an identifier: \[Plugin:RenderParam key="PUBLIC\_CONTEXT" type="public"\]. If the render parameter does not exist or the value is null, nothing is written unless a default value was specified by using the `defaultValue` attribute. The following example shows a specified default value: \[Plugin:RenderParam key="key1" defaultValue="defaultValue"\].

    \[Plugin:RenderParam defaultValue="defaultValue" type="public" key="\{http://publicrenderparams/\}stockName"\] returns the value of public render parameter stockName.



