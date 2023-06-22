# DynaCache Custom Properties

In the WebSphere Integrated Solutions Console
Servers -> WebSphere_Portal -> Java and Process Management -> Process Definition -> Java Virtual Machine -> Custom properties -> New

Create the following new properties:
    - Name: com.ibm.ws.cache.CacheConfig.ignoreValueInInvalidationEvent
        Value: true
    - Name: com.ibm.ws.cache.CacheConfig.filterInactivityInvalidation
        Value: true

For more information on DynaCache, see http://publib.boulder.ibm.com/infocenter/lnxinfo/v3r0m0/index.jsp?topic=%2Fliaag%2Fcache%2Fpubwasdynacachoverview.htm.