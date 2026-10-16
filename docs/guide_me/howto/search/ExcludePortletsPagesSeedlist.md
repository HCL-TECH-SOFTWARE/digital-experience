# How to exclude portlets or pages from a search collection

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

You can exclude specific portlets or pages from a search collection seedlist in HCL Digital Experience (DX) to prevent unwanted content from being indexed in search results. This article describes how to exclude portlets and pages from a search collection.

## Instructions

To exclude portlets or pages from a search collection, perform the following steps:

1. Log in to HCL DX as an administrator.
2. Navigate to **Open applications menu > Administration > Applications > Portlets**. 
3. Search for the portlet you want to exclude and select the **Configure Portlet** wrench icon.
4. Enter the following details:
    - **New preference**: `INCLUDE_IN_SEARCH_INDEX`
    - **New value**: `false`
5. Select **Add**.
6. Select **OK** to save your changes.

!!!note
    To exclude an entire page, all portlets on that page must have the `INCLUDE_IN_SEARCH_INDEX` parameter set to `false`. This parameter requires the Authorized Program Analysis Report (APAR) [PI65690](https://www.ibm.com/support/pages/apar/PI65690){target="_blank"}, which is included in Combined Cumulative Fix 22, (CF22) and higher.
