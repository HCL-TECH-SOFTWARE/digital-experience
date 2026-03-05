# How to Search Documents Created Within a Specific Time Range Using WCM Search

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction
You would like to search for content created or updated within a specified time range. For example all documents created in March 2023.  This document describes how that can be achieved.

## Instructions
Starting in CF05 you can search documents by date and date ranges.  Please review the following documentation for additional details:

[Search Center](../../../build_sites/search/search_center/index.md){target="_blank"}

The supported format is "yyyy-MM-dd".  To search for date range you can use:

`update_date::>=yyyy-MM-dd<yyyy-MM-dd`

For example, to find all documents updates in March 2023 use:

`update_date::>=2013-03-01<1013-03-01`

For other supported search terms, please refer to documentation above.
