# Creating and deleting device classes

You can create and delete device classes using the XML configuration interface.

## Create a device class

The following example creates a device class with the name `smartphone` and the unique name `wps.deviceclass.smartphone`.

```
<?xml version="1.0" encoding="UTF-8"?>
<request type="update" create-oids="true"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd">
	<portal action="locate">
		<device-class action="update" name="smartphone" uniquename="wps.deviceclass.smartphone" />
	</portal>	
</request>
```

## Delete a device class

The following example deletes the device class with the unique name `wps.deviceclass.smartphone`.

```
<?xml version="1.0" encoding="UTF-8"?>
<request type="update" create-oids="true"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd">
    <portal action="locate">
        <device-class action="delete" uniquename="wps.deviceclass.smartphone"/>       
    </portal>
</request>
```

**Parent topic:**[Device classes](../dev-theme/themeopt_devclass.md)

**Previous topic:**[mvc:URI scheme](../rwd/rwd_mvcuri_scheme.md)

**Next topic:**[Assigning device classes](../dev-theme/themeopt_devclass_assign.md)

