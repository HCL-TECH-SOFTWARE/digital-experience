# Removing Person Tag hidden pages 

Remove Person Tag hidden pages from migrated environments where Search for Portal Site was previously configured. If you migrated or updated to HCL Digital Experience 8.5 CF04 or later, then you do not need to complete these steps.

You might find errors that are captured in the systemOut.log file if the migrated system has Search for Portal Site configured and crawling runs. The following excerpt is provided as an example.

```

00000052 PortletContai E com.ibm.wps.pe.pc.legacy.PortletContainerImpl 
         performBeginEvents EJPPG1122E: 
         
         An error occurred during portlet event processing.
             javax.portlet.PortletException: javax.servlet.UnavailableException: SRVE0200E: 
         
         Servlet [com.ibm.wkplc.people.portal.portlet.dynamicpersontag.DynamicPersonTagPortlet]: Could not 
         find required class -  class java.lang.ClassNotFoundException: com.ibm.wkplc.people.portal.portlet.
         dynamicpersontag.DynamicPersonTagPortlet
                
         at com.ibm.wps.pe.pc.legacy.PortletContainerImpl.callPortletMethod(PortletContainerImpl.java:1308)
```

1.  Remove the hidden pages to avoid these errors in the systemOut.log.
2.  Log in to Portal as an Administrator.

3.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

4.  Then, click **Context Root** \> **Hidden Pages**.

5.  Look for **Person Tag** with unique name **ibm.portal.Person.Tag**.

6.  Delete this page.


**Parent topic:**[Portal tasks ](../migrate/mig_post_portaltasks.md)

**Related information**  


[Virtual Portal tasks ](../migrate/virt_portal_post_mig.md)

