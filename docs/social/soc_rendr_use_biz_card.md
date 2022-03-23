# Using the business card 

You can integrate the business card and online status in a list of social objects by using live text micro format.

You can find a sample HTML component that includes this micro format in the HCL Connections library at the following location: **Social Lists 1.0** \> **Components** \> **Fragments** \> **Business Card**. This HTML component is referenced by the default **Comprehensive** list appearance option for social objects that you can select when you customize social list definitions.

The business card sample identifies a user by the `authorObjectID` attribute of a social object that is returned by HCL Connections.

If your HCL Digital Experience is configured to show the HCL Connections business card information, use the `authorID` attribute instead of `authorObjectID` . For more information, read *Integrating with HCL Connections*in the HCL Portal product documentation.

The following sample shows how you can map the different social object attributes to the microformat class attributes. This microformat works with both the HCL Portal business card and with the HCL Connections business card. This means that the sample works, independent of whether HCL Portal is configured to show the portal business card or the HCL Connections business card.

```
<span class='vcard X-sametime-resolve'>
   <span class="lotusMeta">
      <a target="" title="" href="javascript:SemTagMenu.a11y(event)"  
                   class="fn lotusPerson" style="text-decoration:none;" 
                   onclick="return false;">
                   [AttributeResource attributeName="authorName" separator=","]
      </a>
   </span>
   <span style="display: none;" 
         class="userObjectId">[AttributeResource attributeName="authorObjectID" 
         separator=","]</span>
   <span style="display: none;" 
         class="x-lconn-userid">[AttributeResource attributeName="authorID" 
         separator=","]</span>
</span>
```

For more information, read *Integrating the business card and online status in a custom portlet*.

**Notes:**

-   If you integrate an HCL Connections server that runs in the Smart Cloud for Social Business, support for the business card is currently not available. The Business Card HTML component that is contained in the Social Lists 1.0 library does not generate the business card microformat in this case. You can check whether you integrate an HCL Connections server that runs in the Smart Cloud for social business in your own design components. To do so, use the `[Plugin:ConnectionsContext type="config" key="server.config"]`. For details, read *Configuring global settings for social rendering*.
-   If you want to use the business card on a HCL Portal page, the page editor must add the `portal.livetext.hcard` theme capability to the page. To achieve this, the page editor can add the `wp_liveobject_framework` theme module to the current page profile. For more information, read *The module framework*in the HCL Portal product documentation.

**Parent topic:**[Customizing the visual design of your view definitions ](../social/soc_rendr_cust_socl_list_visual_design.md)

**Related information**  


[Configuring global settings for social rendering ](../social/soc_rendr_cfg_global.md)

[Integrating with HCL Connections](../collab/i_coll_t_enable_lc.md)

[Integrating the Business card and online status in a custom portlet ](../collab/i_domi_t_api_ptag_add_to_portlet.md)

[The module framework ](../dev-theme/themeopt_module.md)

