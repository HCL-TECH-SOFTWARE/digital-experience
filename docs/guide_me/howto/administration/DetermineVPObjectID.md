# How to determine which virtual portal name is associated with a virtual portal objectID

## Applies to

> HCL Digital Experience version 9.5 and higher  

## Introduction

This document includes detailed instructions to determine the virtual portal (VP) name that is associated with a virtual portal objectID (oid).

## Instructions

Run the following ConfigEngine task:

```shell
ConfigEngine.bat|sh list-all-virtual-portals -DPortalAdminPwd=<your_password> -DWasPassword=<your_password> > VirtualPortals.txt
```

At the end of the created **VirtualPortals.txt** file, there are entries that show the relationships between the virtual portal name and the virtual portal objectID (oid). The log-entries look like as following:

```log
[wsadmin] VirtualPortal:  
[wsadmin] Title: myVP  
[wsadmin] Description: my virtual portal  
[wsadmin] Realm: defaultWIMFileBasedRealm  
[wsadmin] Object ID: Z18_MQH41AG0MO4980A5CPQEPC0000  
[wsadmin] Hostname: <cannot be retrieved>  
[wsadmin] Context: myVP  
[wsadmin] Short ID: 28549  
[wsadmin] _____________________________________________________  
```

The listing above does not include the workspace ID (each VP has a unique workspace). If the workspace ID is known, the following query may help to find out more:

```sql
SELECT * FROM JCR.ICMSTCJRWS WHERE WSID = <your wsid>
```

More information can be found in [Portal configuration tasks for administering virtual portals](../../..//build_sites/virtual_portal/vp_reference/vp_command_ref/portal_cfg_adm_vp/index.md){target="_blank"}.  
