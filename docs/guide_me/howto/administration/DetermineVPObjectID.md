# How to find the virtual portal name by ObjectID

## Applies to

> HCL Digital Experience version 9.5 and higher  

## Introduction

When reviewing diagnostic logs, database records, or XMLAccess scripts, you may encounter a virtual portal (VP) referenced only by its unique ObjectID (OID). This article describes how to determine the name of a VP using its OID.

## Instructions

Run the following ConfigEngine task:

- For Linux:

    ```shell
    ConfigEngine.sh list-all-virtual-portals -DPortalAdminPwd=<your_password> -DWasPassword=<your_password> > VirtualPortals.txt
    ```

- For Windows:

    ```shell
    ConfigEngine.bat list-all-virtual-portals -DPortalAdminPwd=<your_password> -DWasPassword=<your_password> > VirtualPortals.txt
    ```

At the end of the created `VirtualPortals.txt` file, there are entries that show the relationships between the VP name and its OID. For example:

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

These entries do not include the workspace ID, as each virtual portal is assigned a unique JCR workspace. If you already have a workspace ID and need to retrieve its associated workspace name and database metadata, run the following SQL query against your portal database:

```sql
SELECT * FROM JCR.ICMSTCJRWS WHERE WSID = '<your wsid>'
```

For more information, refer to [Portal configuration tasks for administering virtual portals](../../../build_sites/virtual_portal/vp_reference/vp_command_ref/portal_cfg_adm_vp/index.md).  
