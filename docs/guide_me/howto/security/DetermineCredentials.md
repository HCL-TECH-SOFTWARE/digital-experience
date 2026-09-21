# How to determine user credentials for a method or thread using trace logs

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Use trace logging to identify the user associated with a specific method or thread when troubleshooting authentication, authorization, or access-related issues in HCL Digital Experience (DX). This article describes how to determine user credentials for a method or thread using a trace log.

## Instructions

To determine the user credentials for a method or thread, perform the following steps:

1. Review the logs and record the thread ID for the log message that you want to investigate.
2. Enable the `com.ibm.workplace.wcm.util.LocalDataManager=all` trace string. For more information about enabling trace, refer to [Quick start detailed steps for collecting a Portal Trace](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0088079){target="_blank"}.
3. Reproduce the issue or wait for it to occur again.
4. Monitor the log for the `USER_UTILS_CURRENT_USER` key. You should find entries similar to the following:

    ```log
    [Timestamp] 0000003e LocalDataMana 3 Put key: USER_UTILS_CURRENT_USER object [uid=AuthorUser,o=defaultWIMFileBasedRealm/652a7f8e-1fca-48af-96a9-e36ad04838e7] attributeSubset: null objectID: [ExtIDImpl 'Z9eAeM9D4JGT663EAMM466RO2MMG6O9OCMM47M9OIJMKCJHD26I16K1E63SKCN1', USER, 652a7f8e-1fca-48af-96a9-e36ad04838e7, [Domain: rel]] com.ibm.wps.um.UserImpl on thread WebContainer : 8
    ```

5. Locate an entry that contains the thread ID recorded in Step 1.  

    !!!note
        - The user identified in the trace message from Step 4 is the user associated with the thread that generated the original log message.
        - Alternatively, enable detailed IBM WebSphere Application Server (WAS) security traces (trace-string: `*=info:com.ibm.ws.security.*=all:com.ibm.websphere.security.*=all:com.ibm.websphere.wim.*=all:com.ibm.wsspi.wim.*=all:com.ibm.ws.wim.*=all`) and follow the relevant thread ID to identify the authenticated user associated with the request. For more information, refer to [MustGather: Core Security problems for WebSphere traditional and Liberty](https://www.ibm.com/support/pages/mustgather-core-security-problems-websphere-traditional-and-liberty){target="_blank"}.
