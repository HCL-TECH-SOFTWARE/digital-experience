# How to search for WCM documents within a specific date range

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

This article describes how to find Web Content Manager (WCM) content created or updated within a specified time range using WCM search.

## Instructions

1. Use the supported search format `yyyy-MM-dd` to find documents by specific dates and date ranges. For additional details and other supported search terms, refer to [Search Center](../../../build_sites/search/search_center/index.md).

2. Enter the following syntax into the search bar in the WCM authoring portlet or the Search Center:

    ```syntax
    update_date::>=yyyy-MM-dd<yyyy-MM-dd
    ```

    For example, to find all documents updates in March 2023, use:

    ```syntax
    update_date::>=2013-03-01<1013-03-01
    ```
