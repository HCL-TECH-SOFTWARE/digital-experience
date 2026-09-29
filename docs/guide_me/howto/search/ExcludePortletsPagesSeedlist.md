# How to exclude portlets or pages from a search collection

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Exclude specific portlets or pages from an HCL Digital Experience (DX) search collection seedlist to prevent unwanted content from being indexed in search results. This article describes how to exclude portlets and pages from a search collection.

## Instructions

To exclude portlets or pages from a search collection, perform the following steps:

1. Log in to HCL DX as an administrator.
2. Navigate to **Open applications menu > Administration > Applications > Portlets**. 
3. Search for the portlet you want to exclude and select the **Configure Portlet** icon.
4. Enter the following parameters:
    - New preference: `INCLUDE_IN_SEARCH_INDEX`
    - New value: `false`
5. Select **Add > OK** to save changes.

!!!note
    To exclude an entire page, all portlets on that page must have the `INCLUDE_IN_SEARCH_INDEX` parameter set to `false`. This parameter requires fix [PI65690](https://www.ibm.com/support/pages/apar/PI65690){target="_blank"} (included in Combined Cumulative Fix 22 [CF22] and higher).
