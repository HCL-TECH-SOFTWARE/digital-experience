# Configuring an aggregator at run time

If you want to configure the behavior of an aggregator at run time, you can pass additional meta data values to the aggregator.

All page metadata with names that start with `asa_js` is an attribute of the global JavaScript object called `ibm_page_metadata`. This object is only defined if at least one page metadata exists the key of which starts with `asa_js` .

There are two different ways by which metadata values are evaluated:

1.  If the value starts with an equals sign \( `=` \), the value is interpreted as a JavaScript snippet. This evaluation starts with the first character after the equals sign.

    Example: If the key of a metadata is `<code>asa_js_foo</code>` and its value is set to `<code>='foo' + 'bar'</code>` , then the page meta data object `<code>ibm_page_metadata</code>` defines an attribute `<code>foo</code>` with a value of `<code>foobar</code>` . Refer to the following code snippet:

    ```
    <script language='JavaScript'>     
         var ibm_page_metadata = {         
              'foo' : 'foo' + 'bar'     }   
    </script>
    ```

    The aggregator can then access the metadata by either of the following ways: `<code>ibm_page_metadata['foo']</code>` or `<code>ibm_page_metadata.foo</code>` . It will evaluate to `foobar` .

    The value part of page metadata is evaluated at run time in the client browser.

2.  All other values are treated as JavaScript strings. No further escape mechanism is applied.

    **Example:** If the key of a piece of metadata is `<code>asa_js_bar</code>` , and its value is set to `<code>foo</code>` , then the page metadata object `<code>ibm_page_metadata</code>` defines an attribute `<code>bar</code>` with a value of `<code>foo</code>` .

    ```
    <script language='JavaScript'>     
         var ibm_page_metadata = {         
              'bar' : 'foo'     }   
    </script> 
    ```

    The aggregator can then access the meta data by either of the following ways: `<code>ibm_page_metadata['bar']</code>` or `<code>ibm_page_metadata.bar</code>` .

    **Note:** As the page metadata section requires administrative rights for the page, the portal performs no further checks. It passes all values entered as metadata keys and values to the JavaScript object literally.

    If an error in the metadata value prevents the page from being rendered, you can still change or remove the value by using other administrative ways to access the portal. For example, this can be WebDAV, the XML configuration interface, or the Portal Scripting Interface.


**Parent topic:**[Collecting analytics data](../admin-system/sa_asa_collct_data.md)

