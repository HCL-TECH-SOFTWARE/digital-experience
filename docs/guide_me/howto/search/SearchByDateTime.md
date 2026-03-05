# How to search documents created within a specific time range using WCM search

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

This article describes how to search for content created or updated within a specified time range. For example all documents created in March 2023.  

## Instructions

Starting in CF05 it is possible to search documents by date and date ranges. Please review the [Search Center](../../../build_sites/search/search_center/index.md){target="_blank"} for additional details. The supported format is `yyyy-MM-dd`.  

To search for date range you can use:  

```syntax
update_date::>=yyyy-MM-dd<yyyy-MM-dd
```

For example, to find all documents updates in March 2023 use:

```syntax
update_date::>=2013-03-01<1013-03-01
```

For other supported search terms, please refer to documentation above.
