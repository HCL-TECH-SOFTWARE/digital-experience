# XML sample for assigning a device class

This example creates a client that matches devices that send iPhone in the user agent. The device class smartphone and iOS are assigned to the client.

```
<?xml version="1.0" encoding="UTF-8"?>
<request type="update" create-oids="true"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd">
  <portal action="locate">       
      <!--  iPhone -->
      <client action="update" manufacturer="Apple" markup="html"
        markup-version="" name="iPhone" ordinal="10000" uniquename="wps.client.iphone"
        version="7.0">
        <useragent-pattern>.*iPhone.*</useragent-pattern>
        <client-capability update="set">HTML_4_0</client-capability>
        <client-capability update="set">com.ibm.portal.devicesupport.deviceclass=smartphone
        </client-capability>
      </client>
  </portal>
</request>
```

**Note:** The ordinal attribute on the client definition sets the priority of the client during the matching process. Only one client is chosen and the device classes on that client are made available.


