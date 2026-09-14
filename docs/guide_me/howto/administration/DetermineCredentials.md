# How to determine which user credentials are associated with any given method or thread using the HCL DX trace.log

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

This document provides instructions on how to determine the user id that is responsible for a given thread observed in HCL DX server logs.

## Instructions

1. Review the logs and determine the thread id for the log message you want to work with.  Make note of the id.
2. Enable this trace string: `com.ibm.workplace.wcm.util.LocalDataManager=all`.  For more information on enabling trace refer to [Quick start detailed steps for collecting a Portal Trace](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0088079){target="_blank"}.
3. Reproduce the the problem or wait for the issue to happen again.
4. Monitor the trace for this key: `USER_UTILS_CURRENT_USER`. You should see lines like:

    ```log
    [Timestamp] 0000003e LocalDataMana 3 Put key: USER_UTILS_CURRENT_USER object [uid=AuthorUser,o=defaultWIMFileBasedRealm/652a7f8e-1fca-48af-96a9-e36ad04838e7] attributeSubset: null objectID: [ExtIDImpl 'Z9eAeM9D4JGT663EAMM466RO2MMG6O9OCMM47M9OIJMKCJHD26I16K1E63SKCN1', USER, 652a7f8e-1fca-48af-96a9-e36ad04838e7, [Domain: rel]] com.ibm.wps.um.UserImpl on thread WebContainer : 8
    ```

5. Find an entry like the one above the uses the same thread id as the one you noted in step 1.  

6. The user identified in the trace message from step 4 is the user responsible for the original message.  

!!!note
    Another option might be to enable detailed IBM WebSphere Application Server Security traces as described on the IBM page
    [MustGather: Core Security problems for WebSphere traditional and Liberty](https://www.ibm.com/support/pages/mustgather-core-security-problems-websphere-traditional-and-liberty?view=full){target="_blank"} and then to follow the thread ID in question to find out user information that belongs to it.  
