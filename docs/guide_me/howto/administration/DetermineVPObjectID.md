# How to determine which virtual portal name is associated with a virtual portal objectID

## Applies to

> HCL Digital Experience version 8.5 and higher  

## Introduction

This document include detailed instructions to determine the virtual portal (VP) name that is associated with a virtual portal objectID (oid).

## Instructions

Run the following ConfigEngine task:
   
`ConfigEngine.bat|sh list-all-virtual-portals -DPortalAdminPwd=password -DWasPassword=password > VirtualPortals.txt`

At the end of **VirtualPortals.txt**, there are entries that show the relationships between the virtual portal name and the virtual portal objectID (oid). The log-entries look like as following:
```
[wsadmin] VirtualPortal:
[wsadmin] Title: jdr
[wsadmin] Description: jdr virtual portal
[wsadmin] Realm: defaultWIMFileBasedRealm
[wsadmin] Object ID: Z18_MQH41AG0MO4980A5CPQEPC0000
[wsadmin] Hostname: <cannot be retrieved>
[wsadmin] Context: jdr
[wsadmin] Short ID: 28549
[wsadmin] _____________________________________________________
```
The listing above does not include the workspace ID (each VP has unique workspace). If the workspace ID is known, the following query may help to find out more:

`SELECT * FROM JCR.ICMSTCJRWS WHERE WSID = <your wsid>`

More information can be found in [Portal configuration tasks for administering virtual portals](https://opensource.hcltechsw.com/digital-experience/latest/build_sites/virtual_portal/vp_reference/vp_command_ref/portal_cfg_adm_vp/).