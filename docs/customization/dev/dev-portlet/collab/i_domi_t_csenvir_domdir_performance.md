# Tuning performance of the Domino Directory

If you are using Domino Directory as the primary \(and only\) LDAP server for HCL Portal, you can set the following property in the CSEnvironment.properties file to false to improve the performance of Domino Directory.

Modify the `CSEnvironment.properties` file to change the following setting:

```
CS_PERF_PROP_USEWMM.enabled=true  
```

**Parent topic:**[Collaborative Services environment properties](../collab/i_domi_c_csenvironment_props_intro.md)

