# How to prevent `cacheId` from appending to WCM URLs

## Applies to

> HCL Digital Experience v9.5 and higher  

## Introduction

By default, Web Content Manager (WCM) in HCL Digital Experience (DX) appends a `cacheId` query parameter to generated URLs during component tag rendering to track version state. Enabling URL encoding prevents `cacheId` from appending to generated links. This article explains how to prevent `cacheId` from appending to WCM URLs.

## Instructions

1. Log in to the IBM Integrated Solutions Console (WAS admin console) as an administrator.
2. Navigate to **Resources > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom properties**.
3. Select or create the `cmpnt.htmlEncodeURLs` property:
    - To create a new property:
        1. Select **New**.
        2. Set **Name** to `cmpnt.htmlEncodeURLs`.
        3. Set **Value** to `true`.

    - To edit an existing property:
        1. Select **cmpnt.htmlEncodeURLs** from the list.
        2. Set **Value** to `true`.

4. Select **Apply**.
5. Select **Save** at the top of the console messages.
