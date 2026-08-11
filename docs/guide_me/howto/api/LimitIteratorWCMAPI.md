# How to limit the number returned for an iterator when using WCM API

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

The WCM Workspace Interface provides several methods to find WCM items and the items returned are stored in an iterator object. You can increase or decrease the value of the WCM Configuration property **iterator.pagesize** to control the maximum number of items returned by the iterator at once.

## Instructions

The custom property can be set as following:  

1. Login into the IBM Integrated Solutions Console (IBM WebSphere Application Server Administrative Console) as administrator.

2. Navigate to **Resources > Resource Environment > Resource environment providers > WCM WCMConfigService > Custom properties**.

3. Click to the **New** button and add the custom property **iterator.pagesize** and assign the desired value.

4. Restart the HCL DX server.

!!!note
    A server restart is required for the setting to take effect.
