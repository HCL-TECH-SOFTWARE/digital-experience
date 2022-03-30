# Logging for Collaborative Services 

The Lotus Collaborative Services APIs use the WebSphere JRas facility for logging error information to the WebSphere Integrated Solutions Console or to log files.

For Diagnostic Trace, specify the following value to log information that is related to the Collaborative Services:

```
com.lotus.cs.cslog=all=:com.lotus.ap.portlets.*=all=:com.ibm.wkplc.people.portal.taglib.*=finest
```

The trace file can be found in the following location:

-   AIX®: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/logs/HCL Portal and HCL Web Content Manager/trace.log
-   HP-UX: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/logs/HCL Portal and HCL Web Content Manager/trace.log
-   IBM® i: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/logs/HCL Portal and HCL Web Content Manager/trace.log
-   Linux™: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/logs/HCL Portal and HCL Web Content Manager/trace.log
-   Solaris: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/logs/HCL Portal and HCL Web Content Manager/trace.log
-   Windows™: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\logs\\HCL Portal and HCL Web Content Manager\\trace.log
-   z/OS®: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/logs/HCL Portal and HCL Web Content Manager/trace.log

**Parent topic:**[Collaborative Services API and the person tag ](../collab/i_coll_r_cs_api.md)

