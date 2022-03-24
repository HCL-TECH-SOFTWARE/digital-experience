# API for accessing Portlet load monitoring data 

Portlet load monitoring provides an API for accessing the monitoring data. You can use this API to write custom code to access that data.

**Note:** This API can change for future portal versions. If you use this API, you may have to modify your code in future portal versions in order to adapt to API changes.

**Parent topic:**[Portlet load monitoring for HCL Portal ](../dev-portlet/plmc.md)

## Portlet load metrics interface

The `PortletLoadMetrics` object is defined in the package `com.ibm.portal.plm.PortletLoadMetrics`. It contains metrics data for one specific PortletDefinition. The interface looks as follows:

```
package com.ibm.portal.plm;

/*
 *  This interface provides access to portlet metrics stored for Portlet Load Monitoring.
 */
public interface PortletLoadMetrics {

	/*
	 * Returns true if the portlet is enabled for rendering (either by admin or by PLM).
	 * If the portlet is disabled for rendering, this method returns false.
	 * 
	 * @return boolean true if the portlet is enabled either by admin or by PLM.
	 */
	public abstract boolean isPortletEnabled();

	/*
	 * Checks if the Portlet is currently enabled for rendering due to PLM constraints.
	 * If PLM disabled the portlet for rendering, this method returns false.
	 * 
	 * @return boolean true if the Portlet is enabled for rendering, 
                     false if the Portlet is disabled for rendering.
	 */
	public abstract boolean isPortletEnabledByPLM();

	/*
	 * Returns true if the portlet is manually enabled by the portal administrator.
	 * If the portal administrator disabled the portlet for rendering, this method returns false.
	 * 
	 * @return boolean true if the portlet is enabled for rendering by the portal administrator.
	 */
	public abstract boolean isPortletEnabledByAdmin();
	
	/*
	 * Returns the number of requests this portlet currently serves.
	 * 
	 * @return int number of requests this portlet currently serves.
	 */
	public abstract int getCurrentNumberOfRequests();

	/*
	 * Calculates the average response time for requests of this portlet in milliseconds.
	 * 
	 * @return int average response time of the portlet in milliseconds.
	 */
	public abstract int getAverageResponseTime();

```

## Portlet load metrics service

The `isPortletLoadMetricsService` is contained in the package `com.ibm.portal.plm.service.PortletLoadMetricsService`. You can use this service to access `PortletLoadMetrics` objects. It also allows you to query general Portlet load monitoring related information. In order to obtain the `PortletLoadMetricsService`, you have to perform a JNDI lookup in the following way:

```
     PortletLoadMetricsEnabled(ObjectID portletID) plm;
      javax.naming.Context ctx = new javax.naming.InitialContext();
      try {
           plm = (PortletLoadMetricsService 
              ctx.lookup(PortletLoadMetricsService.JNDI_NAME);
      } catch(javax.naming.NameNotFoundException ex) {
           ... error handling ...
      }
```

Once you successfully obtained the `PortletLoadMetricsService`, you can use methods as defined in the `PortletLoadMetrics` interface:

```
public interface PortletLoadMetricsService {

	String JNDI_NAME = "portal:service/plm/PortletLoadMetrics";
	
	/**
	 * Determines if PLM is enabled for a given portlet. 
	 * 
	 * @param portletID ObjectID of the portlet.
	 * @return true If PLM is enable for a given portlet.
	 * 		   false If PLM is not enabled for a given portlet or if portlet does not exist.
	 */
	boolean isPortletLoadMetricsEnabled(ObjectID portletID); 

	/**
	 * Returns a PortletLoadMetrics object for the portlet. 
	 * Creates the PortletLoadMetrics if PLM is enabled for this portlet and
	 * it the PortletLoadMetrics object does not yet exist.
	 * 
	 * @param portletID ObjectID of the portlet.
	 * @return Reference to a PortletLoadMetrics object.
	 * 		   Null if PLM is not enabled for the specified portlet.
	 */
	PortletLoadMetrics getPortletLoadMetrics(ObjectID portletID);
	
	/**
	 * Returns a String object containing the portlet preference value set for maximum concurrent 
	 * requests allowed for this portlet.
	 * 
	 * @param portletID ObjectID of the portlet.
	 * @return String containing the portlet preference value set for maximum concurrent 
	 *         requests allowed for this portlet. Returns "null" if the portlet did not set the
	 *         portlet preference for maximum concurrent requests.
	 */
	String getMaximumRequestPreferenceValue(ObjectID portletID);
	
	/**
	 * Returns a String object containing the portlet preference value set for the  
	 * reactivation limit for this portlet (PLM self-healing)
	 * 
	 * @param portletID ObjectID of the portlet.
	 * @return String containing the portlet preference value set for the reactivation 
	 *         limit for this portlet (PLM self-healing). Returns "null" if the portlet 
	 *         did not set the portlet preference for the reactivation limit.
	 */
	String getMinimumRequestPreferenceValue(ObjectID portletID);
	
	/**
	 * Returns a String object containing the portlet preference value set for allowed average 
	 * response time for this portlet
	 * 
	 * @param portletID ObjectID of the portlet.
	 * @return String containing the portlet preference value set for allowed average 
	 *         response time for this portlet. Returns "null" if the portlet 
	 *         did not set the portlet preference for allowed average response time.
	 */
	String getAverageResponseTimePreferenceValue(ObjectID portletID);
	
	/**
	 * Returns a Map containing all PortletLoadMetrics objects.
	 * 
	 * @return Map<ObjectID, PortletLoadMetrics> containig all PortletLoadMetrics objects.
	 *         Key of the Map is the ObjectID of the PortletDefinition. 
	 *         The value of the Map is the PortletLoadMetrics object of the PortletDefinition.
	 */
	Map<ObjectID, PortletLoadMetrics> getAllPortletLoadMetricsObjects();

}
```

