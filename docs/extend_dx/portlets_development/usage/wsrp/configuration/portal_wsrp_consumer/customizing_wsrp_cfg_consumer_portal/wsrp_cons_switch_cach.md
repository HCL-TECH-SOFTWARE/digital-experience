# Switch off the caching of Producer service descriptions

By default, the Consumer portal caches the WSRP service descriptions that it receives from Producers. If required, you can switch off the caching.

The caching of the WSRP service descriptions in the Consumer is determined by the portal Cache Manager Service property `cacheinstance.wsrp.cache.servicedescription.enabled`. The default setting is `true`. The caching increases performance and reduces network traffic.

If you encounter problems, or if you want to turn off caching of the service description for other reasons, switch off the caching. To do so, set the property `cacheinstance.wsrp.cache.servicedescription.enabled = false` in the WP Cache Manager Service. You set this parameter by using the WebSphere® Integrated Solutions Console.


