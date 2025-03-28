# **DAM Access Control Cache**  

This document provides an overview of the **Digital Asset Management (DAM) Access Control Caching Service**, outlining its features, functionality, and limitations.  

## **Overview**  

The **DAM Access Control Cache** reduces the load on the **Ring API** by caching access control responses. Without caching, every DAM request requires a fresh access control validation via the Ring API, increasing overhead.  

By caching the Ring API response using a **cache key** and retrieving the stored response for subsequent requests, the system improves efficiency. The cache operates with a **Time-To-Live (TTL)** mechanism, which is **configurable** via Helm and defaults to **10 seconds**.  

### **Cache Key Generation**  
The **cache key** is generated using a combination of the **function name** and **request parameters**.  
- If two **authenticated users** request the same resource, **each will have a unique cache key**.  
- For **anonymous users**, the **cache key remains the same**, ensuring consistent caching behavior.  

### **Handling In-Flight Requests**  
To prevent redundant requests to the **Ring API**, the caching service **stores in-flight request promises**:  
- When a request is made, the **pending promise** is stored.  
- If the same request is received before the first one resolves, it **waits for the stored promise** instead of making another API call.  
- Once resolved, the response is stored in the cache with the corresponding **cache key**.  

!!! note  
    - Avoid setting a high TTL, as it may cause **accessibility conflicts**.  
    - Caching is per **instance only** and does **not sync** across multiple DAM pods. 
    - This caching mechanism is not implemented for Staging and EXIM.

## **Helm Configuration**  

The following Helm configuration allows users to customize `aclCacheTtl`. The default TTL value is **10 seconds**.  

```yaml
# Application Configuration
configuration:
  digitalAssetManagement:
    # Time-to-live (TTL) value (in seconds) for caching access control (ACL) data
    aclCacheTtl: 10
```  

This configuration ensures that cached access control data remains valid only for the specified TTL duration before requiring a fresh API call.