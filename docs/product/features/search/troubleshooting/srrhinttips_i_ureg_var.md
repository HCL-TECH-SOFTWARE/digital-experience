# On IBM i set USER.REGION variable

Under IBM i, Portal Search collections might fail to collect documents.

In this case the logs will provide the following or similar information:

```
[8/24/08 23:19:47:164 EDT] 000000cd ServletWrappe E   
         Uncaught init() exception thrown by servlet SearchSeedlistServletSecured
[8/24/08 23:19:47:175 EDT] 000000cd ServletWrappe E   
         Deregister the mbean because of uncaught init() exception thrown by 
         servlet SearchSeedlistServletSecured: javax.servlet.ServletException: 
         Could not load resource bundle nls.SeedlistServletMessages using locale 
         en_${USER.REGION} - Java Exception Message: java.util.MissingResourceException: 
         Can't find bundle for base name nls.SeedlistServletMessages, 
         locale en_${USER.REGION}
```

**Solution:** In order for portal collections to work on a IBM® i system, set the system variable USER.REGION.

**Parent topic:**[Hints and tips for using Portal Search](../admin-system/srrhinttips.md)

