# Logging for Collaborative Services

The Lotus Collaborative Services APIs use the WebSphere JRas facility for logging error information to the WebSphere Integrated Solutions Console or to log files.

For Diagnostic Trace, specify the following value to log information that is related to the Collaborative Services:

```
com.lotus.cs.cslog=all=:com.lotus.ap.portlets.*=all=:com.ibm.wkplc.people.portal.taglib.*=finest
```

The trace file can be found in the following location:

-   AIX®: wp_profile_root/logs/HCL Portal and HCL Web Content Manager/trace.log
-   Linux™: wp_profile_root/logs/HCL Portal and HCL Web Content Manager/trace.log
-   Windows™: wp_profile_root\logs\HCL Portal and HCL Web Content Manager\trace.log



