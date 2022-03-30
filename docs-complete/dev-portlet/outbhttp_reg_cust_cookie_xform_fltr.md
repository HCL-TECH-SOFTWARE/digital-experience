# Registering a custom cookie transformation filter 

For a custom cookie transformation filter to take effect, you must register it.

You define custom cookie transformation handlers at a cookie rule. The following xml snippet shows how you register a custom cookie transformation filter:

```
<cookie-rule>
    <cookie>TransformationCookie</cookie>
    <handling>store-in-session</handling>
    <transformation>
        <classname>test.sample.SampleCookieXformerFactory</classname>
    </transformation>
</cookie-rule>
```

The `transformation` section contains a class name that specifies the factory class for custom cookie transformation filters.

**Parent topic:**[Using custom cookie transformation handlers ](../dev-portlet/outbhttp_cust_cookie_xform_hdlr.md)

