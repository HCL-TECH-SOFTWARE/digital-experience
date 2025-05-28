# DAM Access Control Cache

This document provides an overview of the Digital Asset Management (DAM) Access Control Caching Service, including its features, functionality, and limitations.  

## Overview

The DAM Access Control Cache reduces the load on the Ring API by caching access control responses. Without caching, every DAM request requires a fresh access control validation through the Ring API, increasing overhead.  

This service improves system efficiency by caching the Ring API response using a cache key and retrieving the stored response for subsequent requests. The cache operates with a Time-To-Live (TTL) mechanism, which can be [configured in Helm](#helm-configuration) and defaults to 10 seconds.  

### Cache Key Generation

The cache key is generated using the function name and request parameters.  

- If two authenticated users request the same resource, each will have a unique cache key.  
- For anonymous users, the cache key remains the same to ensure consistent caching behavior.

!!! note  
    - Avoid setting a high TTL to prevent access issues.  
    - Caching is instance-specific and does not sync across multiple DAM pods.
    - This caching mechanism is not considered during [Staging](../../configuration/staging_dam/dam_subscription_staging.md) and [Export and Import (EXIM)](./dam_exim.md) as real time data is required.
    - There is no active cache invalidation on permission changes. It is recommended to set the TTL based on your usage scenario.

## Helm Configuration  

The following Helm configuration allows you to customize the `aclCacheTtl` TTL parameter in `values.yaml`. The default TTL value of this parameter is 10 seconds.  The value can be overridden using the `custom-values.yaml` file. You can also set this parameter to 0 to disable Access Control Caching.

```yaml
# Application Configuration
configuration:
  digitalAssetManagement:
    # Time-to-live (TTL) value (in seconds) for caching access control (ACL) data
    aclCacheTtl: 10
```  

This configuration ensures that cached access control data remains valid only for the specified TTL duration before requiring a fresh API call.
