# How to limit the number of items returned by an iterator when using the WCM API

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

The Web Content Manager (WCM) `Workspace` interface in HCL Digital Experience (DX) provides several methods to find WCM items, which are stored in an iterator object. You can configure the `iterator.pagesize` custom property to control the maximum number of items returned by the iterator at one time. This article explains how to limit the number returned for an iterator when using the WCM API.

## Instructions

To limit the number of items returned by an iterator, perform the following steps:

1. Log in to the IBM Integrated Solutions Console (WAS admin console) as an administrator.
2. Navigate to **Resources > Resource Environment > Resource environment providers > WCM WCMConfigService > Custom properties**.
3. Select **New**.
4. In the **Name** box, enter `iterator.pagesize`.
5. In the **Value** box, enter the desired value.
6. Select **Apply**.
7. Select **Save** at the top of the console messages.
8. Restart the HCL DX server.
