# Optimizing Pod CPU Limits and Requests in Kubernetes

When tuning performance in Kubernetes, properly configuring CPU requests and limits for pods is essential. A pod(the smallest deployable unit in Kubernetes) can contain one or more containers. CPU requests define the minimum amount of CPU guaranteed to a pod, ensuring it has the resources it needs to operate reliably. CPU limits, on the other hand, set an upper bound on how much CPU the pod can consume, preventing it from impacting other workloads.

To optimize performance, adjust CPU requests and limits based on the specific demands of your application. Increasing CPU requests provides more guaranteed resources, improving stability under sustained load. Raising CPU limits allows a pod to utilize additional CPU during peak periods, enhancing performance when needed. However, it is important to strike a balance—overprovisioning can lead to inefficient resource usage and reduced cluster capacity.

In our medium configuration tests(configuration using 10,000 Virtual Users), we applied the tuning strategies discussed, specifically adjusting the CPU limits and requests for critical components such as HAProxy and `RingAPI.Alterations` were made to the number of pods, CPU, and memory of each of the following containers:`HAProxy`, `Core`, `RingAPI`, `digitalAssetManagement`, `persistenceNode`, and `persistenceConnectionPool`. The alterations to these containers aimed to determine which factors were significantly beneficial.

For the `HAProxy` container, increasing the CPU dramatically increased throughput. When the number of `HAProxy` pods was increased, the throughput decreased.

To access applications from the outside, DX deploys a reverse proxy in the form of an `HAProxy`. This reverse proxy routes the incoming requests to all application services, while honoring session affinity if required, which then distributes the requests to the corresponding pods hosting the applications.

`HAProxy` uses its configuration to select which request is mapped to which application in the DX 9.5 deployment (back-end). When requests are initiated from outside the Kubernetes or OpenShift cluster, `HAProxy` tries to fulfill those requests by using the configured routing. If it finds a matching endpoint, it forwards the request to the corresponding service, which then forwards the same request to a Pod that is ready to fulfill the request.

For the Core pod, increasing the CPU limit gave a boost to performance but this effect eventually saturated at 5600 millicore. Increasing the number of Core pods at this point had additional benefits. These adjustments were made to optimize performance and ensure the system could handle the expected load with improved response times and minimal errors. The results from these tests have validated the effectiveness of these tuning parameters in our Kubernetes environment.

For detailed information on the specific changes we made, including adjustments to CPU limits and requests, please refer to the Medium Configuration Sizing document. This document outlines the exact modifications and their impact on performance, providing a clear view of how we optimized the environment.

For more information and results, see [Medium Config sizing](../rendering_medium_config.md).

## Horizontal Pod Autoscaling

HPA is a feature that automatically scales the number of pods in a deployment, replica set, or stateful set based on observed CPU utilization or other select metrics. HPA helps ensure that your application can handle varying loads efficiently by increasing or decreasing the number of pods as needed.

### How HPA Works:

Metrics Collection: HPA regularly queries the metrics server for resource utilization (e.g., CPU, memory) of the pods.

Scaling Decision: Based on the specified target metrics (e.g., 70% CPU usage), HPA calculates whether the current number of pods is sufficient.

**Adjustment**: If the utilization exceeds or falls below the target, HPA adjusts the number of pods accordingly. You can  either use scaling out (adding more pods) or scaling in (reducing the number of pods).

We have leveraged Horizontal Pod Autoscaling (HPA) to determine the appropriate CPU limits for the Core, DAM, HAProxy, and Ring API pods. By observing how these components scaled under varying workloads, HPA provided valuable insights into the optimal CPU limits required for each pod. This approach allowed us to fine-tune the resource allocation, ensuring that the system can efficiently handle the specific workload while maintaining performance and stability.

To enable HPA for a deployment, you would typically define a YAML configuration that specifies the target CPU utilization and minimum/maximum pod counts. For example:

![alt text](../HorizontalPodAutoScalerLimits.png)

![alt text](../HPAdata.png)

Horizontal Pod Autoscaling is an essential tool in Kubernetes for maintaining application performance and resource efficiency as demands change.