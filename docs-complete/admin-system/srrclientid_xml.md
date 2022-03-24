# Adding search engines by using the XML configuration interface 

To add search engines by using the XML configuration interface, you import them by an XML script file. To make sure that the search mechanism works correctly, you need to add the capability HTML\_SEARCH.

Here is an example XML script, with the `HTML_SEARCH` capability highlighted:

```
<?xml version="1.0" encoding="UTF-8"?>
<request    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
            xsi:noNamespaceSchemaLocation="PortalConfig_1.4.xsd"
            type="update" create-oids="true">
    <portal action="locate">

        <client action="update" uniquename="wps.client.search.Your Search Engine Name" 
                manufacturer="Your Search Engine Manufacturer" markup="html">

            <useragent-pattern>Your User-Agent Pattern</useragent-pattern>

            <client-capability update="set">**HTML\_SEARCH**</client-capability>
            <client-capability update="set">HTML_4_0</client-capability>
            <client-capability update="set">HTML_IFRAME</client-capability>
            <client-capability update="set">HTML_FRAME</client-capability>
            <client-capability update="set">HTML_NESTED_TABLE</client-capability>
            <client-capability update="set">HTML_2_0</client-capability>
            <client-capability update="set">HTML_JAVASCRIPT</client-capability>
            <client-capability update="set">HTML_3_2</client-capability>
            <client-capability update="set">HTML_3_0</client-capability>
            <client-capability update="set">HTML_CSS</client-capability>
            <client-capability update="set">HTML_TABLE</client-capability>

        </client>
    </portal>
</request>

```

**Parent topic:**[Client identification for external search engines ](../admin-system/srrclientid.md)

