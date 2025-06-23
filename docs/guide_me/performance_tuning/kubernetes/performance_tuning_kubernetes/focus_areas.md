# Key Focus Areas for Effective Performance Tuning

## Resource Allocation and Management

- **CPU Limits and Requests**: Ensure that your CPU limits and requests are appropriately configured. This helps in avoiding resource contention and ensuring your application has the necessary resources during peak loads. Refer sizing document for CPU limit and requests. 

Refer to [Medium Config sizing](../rendering_medium_config.md) for more information.

- **Memory Management**: Review and adjust memory allocations to prevent out-of-memory errors and ensure smooth operation. 

Out of Memory (OOM) errors in Kubernetes pods occur when a container exceeds its allocated memory, causing the Kubernetes runtime to terminate the container. During our performance tests, we encountered an OOM error in the OpenLDAP pod. To resolve such issues, increase the memory limits for the affected pods. Additionally, for pods running Java applications(such as the Core container) you should also adjust the JVM heap size accordingly to prevent memory exhaustion.


### Horizontal Pod Autoscaling

- Configure auto-scaling policies to automatically adjust resources based on demand. Refer Horizontal Pod Acutoscaling topic in this guide.

#### WCM advanced Caching

 - Refer to the [WCM advanced caching topic](wcm_tuning.md#wcm-advanced-caching)
 
- In a rendering environment(such as one serving end users rather than authors), advanced caching strategies are essential for optimal performance when using Web Content Manager (WCM) regularly.

**Performance Monitoring and Integration**

- Refer to Refer to [Performance Tuning Kubernetes Base Portal](./base_portal.md)