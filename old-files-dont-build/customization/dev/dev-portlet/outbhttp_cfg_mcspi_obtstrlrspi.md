# Obtaining the Controller SPI

The Outbound HTTP Connection configuration model SPI grants read access to the configuration only. You can make updates to the outbound HTTP connection configuration model by using the Controller SPI.

Here is a sample code snippet:

```
import com.ibm.portal.outbound.config.*;
...
OutboundConnectionModel model; // refer to the previous example for information 
                               // about how to instantiate this model
... 

javax.naming.Context ctx = new javax.naming.InitialContext();
OutboundConnectionModelControllerHome chome = (OutboundConnectionModelControllerHome) 
    ctx.lookup("portal:service/model/OutboundConnectionModelController");
OutboundConnectionModelController ctrl = 
    home.getOutboundConnectionModelControllerProvider().getOutboundConnectionModelController(model);
```

The code that calls the SPI must run in the context of the portal server. Note that access to the Controller SPI is only possible for users who have administrative rights.

Locating configuration items: You can access configuration items by using `Locator` interfaces that are provided by the Outbound Connection Model. The following locators are defined at the model SPI: `OutboundConnectionProfileLocator`, `PolicyMappingLocator`, `PolicyRuleLocator CookieRuleLocator`, and `PolicyVariableLocator`. The following example shows how to locate configuration items using various locators:

```
import com.ibm.portal.outbound.config.*;

OutboundConnectionModel model; // refer to previous examples, how to instantiate this model 
...

// Locate the global outbound HTTP connection profile:
OutboundConnectionProfile profile = model.getProfileLocator().findGlobalProfile();


// Locate the mapping that is assigned with the context path "/proxy":
PolicyMapping mapping = model.getPolicyMappingLocator(profile).findByContextPath("/proxy")


// Locate a policy rule that resides in the selected mapping and has a the following URL pattern: 
PolicyRule rule = model.getPolicyRuleLocator(mapping).findByUrlPattern("http://localhost:9092/*");


// Collect a list of cookie rules that reside in the selected policy rule and start with the 
// cookie name "myCookie". The items are collected in the list "filteredCookies":

List<CookieRule> filteredCookies = new ArrayList<CookieRule>();
model.getCookieRuleLocator(rule).collectAllMatching(
   new PatternMatcher<CookieRule>() {
	public int getMatchValue (CookieRule candidate) {
	   return (candidate.getCookieNames()[0].startsWith("myCookie")) ? 1 : 0;
	}
   },filteredCookies);

// Locate a policy variable by its name:
PolicyVariable pvar = model.getPolicyVariableLocator(globalProfile).findByName("the.policy.var");
```

**Parent topic:**[Configuring outbound HTTP connections by using the Model Controller SPI](../dev-portlet/outbhttp_cfg_mcspi.md)

**Previous topic:**[Obtaining the Model SPI](../dev-portlet/outbhttp_cfg_mcspi_obtmapi.md)

**Next topic:**[Viewing the configuration settings of the outbound HTTP connection](../dev-portlet/outbhttp_cfg_mcspi_viewcfgsets.md)

**Related information**  


[Controller SPI](../dev/ctrlrapic_ovu.md)

