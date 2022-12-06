# Configuring the MobileFirst properties

Configure the MobileFirst properties to add your preferences to the portal page.

The wp\_worklight module requires a wl\_config module that is defined in [PortalServer\_root](../../../../guide_me/wpsdirstr.md)\\theme\\wp.theme.worklight.ext\\installedApps\\wp.theme.worklight.ext.ear\\wp.theme.worklight.ext.war\\WEB-INF\\plugin.xml file.

1.  Use the `wl_config` module to load the MobileFirst® configuration properties.

    ```
        <extension point="com.ibm.portal.resourceaggregator.module" id="wl_portal_config" >
            <module id="wl_config">
            	<runtimeActivation>
    				<condition deviceClass="worklight"/>
    			</runtimeActivation>
    			
                <contribution type="config">
                    <sub-contribution type="config_dynamic">
                        <uri value="wl:id" />
                    </sub-contribution>
                </contribution>
            </module>
        </extension>
    
    ```

2.  To activate the MobileFirst configuration properties, add the "?uri=wl:id:appid" parameter to the URL from the hybrid application, where the appid is replaced with the actual application ID in MobileFirst.

    After it is activated, the MobileFirst configuration properties are dynamically injected from the application HTML file to the portal page. For example:

    ```
    <script>
      // Define WL namespace.
      var WL = WL ? WL : {};
      /**  * WLClient configuration variables.  * Values are injected by the deployer that packs the gadget.  */  
      WL.StaticAppProps = {    "APP_DISPLAY_NAME": "DemoApp",    
    						   "APP_SERVICES_URL": "\/apps\/services\/",    
    						   "ENVIRONMENT": "iphone",    
    						   "LOGIN_DISPLAY_TYPE": "embedded",    
    						   "POSTFIX_APP_SERVICES_URL": "\/apps\/services\/",    
    						   "POSTFIX_WORKLIGHT_ROOT_URL": "\/apps\/services\/api\/DemoApp\/iphone\/",    
    						   "WORKLIGHT_ROOT_URL": "\/apps\/services\/api\/DemoApp\/iphone\/" 
    					  };
    </script>
    
    ```

3.  Configure the MobileFirst configuration properties through JavaScript.

    For example, use this code:

    ```
    WL.StaticAppProps.ENVIRONMENT
    
    ```

4.  If your application needs configuration properties in addition to the base ones provided, you can easily mix them into this WL.StaticAppProps object with JavaScript.

    For example:

    ```
    <script type="text/javascript">
    i$.bindDomEvt(window, "onload", function(evt) {
    	if (window.WL && window.WL.StaticAppProps) {
    		window.WL.StaticAppProps.APP_VERSION = "1.0";
    		window.WL.StaticAppProps.WORKLIGHT_PLATFORM_VERSION = "7.0.0";
    	}
    });
    </script>
    ```

5.  Inject the JavaScript code that you created onto your page from your theme. You can add the code that you just created to one of your existing dynamic content spot .jsps or create a new dynamic content spot. Or, you can add the JavaScript to an HTML file in an existing or new module.



