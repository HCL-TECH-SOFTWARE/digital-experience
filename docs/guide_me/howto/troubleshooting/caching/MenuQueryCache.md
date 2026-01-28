# How to resolve caching issues with WCM menus

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

In HCL Digital Experience (DX), the Web Content Manager (WCM) uses the `MenuQueryCach` to store results from menu components and reduce database load. When the number of unique menu requests exceeds the configured limit, the system stops caching new results to prevent memory exhaustion and potential `OutOfMemoryError` failures.

You can identify this issue by the following warning in the `SystemOut.log` file:

```log
MenuQueryCach W The cache has been exhausted. Stopped retrieving results for menu 
```

For example:

```log
[Date/Time] [ThreadID] MenuQueryCach W The cache has been exhausted. Stopped retrieving results for menu [expiring content:d70c43c7-3b3a-4602-9fc7-aeda9a77ada3] as we have 900 in the cache and max = 300
```

- `[expiring content:ID]`: Identifies the specific menu component triggering the limit.
- `900 in the cache`: Shows the current number of unique menu permutations being requested.
- `max = 300`: Shows the current limit defined in the WCM service configuration.

When these values mismatch, menus may fail to render correctly or display outdated content because the system cannot store the new query results.

This article describes how to resolve caching issue with WCM menus.

## Instructions

To increase the value of the menu cache, follow these steps:

1. Log in to the **WebSphere Integrated Solutions Console** as an administrator.
2. Navigate to **Resources > Resource Environment > Resource Environment Providers > WCM WCMConfigService > Custom properties**.
3. Click **New...**.
4. Under **Name**, enter `menu.cache.max.items`.
5. Under **Value**, enter your desired value. The default is `300`.
6. Click **Apply**.
7. Click **Save** at the top of the console messages.
