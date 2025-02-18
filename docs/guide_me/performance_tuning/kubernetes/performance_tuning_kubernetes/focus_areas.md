# Key Focus Areas for Effective Performance Tuning

**Resource Allocation and Management**

- **CPU Limits and Requests**: Ensure that your CPU limits and requests are appropriately configured. This helps in avoiding resource contention and ensuring your application has the necessary resources during peak loads. Refer sizing document for CPU limit and requests. 

Refer to [Medium Config sizing](../rendering_medium_config.md) for more information.

- **Memory Management**: Review and adjust memory allocations to prevent out-of-memory errors and ensure smooth operation. 

Out of Memory (OOM) errors in Kubernetes pods occur when a container inside a pod tries to use more memory than it has been allocated, leading to the container being terminated by the Kubernetes runtime. While executing the performance runs, we observed an OOM error for the OpenLDAP pod. To address out of memory issues, increase the memory limits for the affected pods. Depending on the pod you would also need to increase the JVM heap size as well (like for Core container). 

**Horizontal Pod Autoscaling**

- Configure auto-scaling policies to automatically adjust resources based on demand. Refer Horizontal Pod Acutoscaling topic in this guide.

**WCM advanced Caching**

- Refer WCM advanced caching topic in this guide.
- In a rendering environment (e.g. an environment that serves users as opposed to authors), WCM advanced caching almost always need to be used,

**Performance Monitoring and Integration**

- Refer Whitepaper-on-DX-K8s-Performance-Monitoring-Guidance document (this is internally published as of now)