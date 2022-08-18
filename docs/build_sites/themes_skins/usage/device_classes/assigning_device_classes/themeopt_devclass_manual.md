# Assigning a device class manually to a client

You can manually assign a device class to a client.

In the Supported Clients administration section, add a specific capability on the client:

1.  To assign a client the device class `smartphone`, add the following capability: `com.ibm.portal.devicesupport.deviceclass=smartphone`.

    You can add multiple device classes to a client, ensure that they are separated by a comma: `com.ibm.portal.devicesupport.deviceclass=smartphone,worklight,ios`.

    **Note:** During the matching process between the client user agent and the client, only one client is chosen. If multiple clients match, the highest priority client is used. Only the device classes that are assigned to the highest priority client are available. The priority is set with the ordinal attribute on the client definition. The larger the value of the ordinal, the higher priority it has during the matching process. The lowest priority client has an ordinal set to zero.


**Parent topic:**[Assigning device classes](../dev-theme/themeopt_devclass_assign.md)

