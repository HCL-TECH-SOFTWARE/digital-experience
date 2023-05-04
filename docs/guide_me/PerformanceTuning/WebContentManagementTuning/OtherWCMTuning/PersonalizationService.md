# Personalization Service

In a rendering scenario that uses personalization, performance can be improved by setting the following
tuning parameters:

|Parameter |Default Value |Value Used|
|rulesEngine.cache.timeout<br>Rule results updates can take up to the length of this timeout to show up so set it the timeout to an acceptable
duration based on your business requirements. |300 |900|

## How to Set
Edit <wp_profile_root>/PortalServer/config/config/services/PersonalizationService.properties.

Set `rulesEngine.cache.timeout` = 900
Restart the Portal server