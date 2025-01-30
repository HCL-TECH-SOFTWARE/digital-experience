---
title: Rendering - Medium-Sized Configuration
---

# Sizing guidance for rendering in a medium-sized Kubernetes configuration

This topic provides the details of the environments used for rendering in a medium-sized Kubernetes configuration. You can also find the test results and recommendations for medium configurations on this page.

## Methodology

### Overview of DX rendering sizing-performance tests

This sizing work consisted of rendering scenarios of WCM, portlets, and DAM with a rendering setup enabled in AWS/Native-Kubernetes (Kubernetes installed directly in Amazon EC2 instances). A combination run was performed that rendered WCM content, DAM assets, and DX pages and portlets. The load distribution was WCM content (40%), DAM assets (30%), and DX pages and portlets (30%). All systems were pre-populated before performing the rendering tests.

To achieve the 10,000 concurrent users mark, an initial set of runs was done with a lower number of users on a multiple node setup with varying numbers of worker nodes. The tests started with three worker nodes. The number of worker nodes and pods was increased as needed to achieve the desired load with an acceptable error rate (< 0.01%). After establishing the number of nodes, further steps were taken to optimize the limits on the available resources for each pod, as well as the ratios of key pods to each other.

The following table contains the rendering scenario details for a medium configuration. 

| Concurrent users     |  WCM pages         |  DAM content         |  Pages and portlets content   |
| -------------------- | ------------------ | -------------------- | ----------------------------- |
| 10,000 users         | 200                | 25,000               |    80                         |


For more information about the setup of test data, refer to the following:

- [WCM default test data](./index.md#wcm-default-test-data)
- [DAM default test data](./index.md#dam-default-test-data)
- [Pages and portlets default test data](./index.md#pages-and-portlets-default-test-data)


## Environment

This section provides details for the Kubernetes cluster, Jmeter, LDAP, and database.

### AWS/Native Kubernetes

- A Kubernetes platform is running on an AWS Elastic Compute Cloud (EC2) instance with the DX images installed and configured. 

- In AWS/Native Kubernetes, the tests are executed in EC2 instances with one master (c5.xlarge) and four worker nodes (c5.4xlarge). 

- The tests used a remote DB2 instance for the core database (c5.2xlarge).

- The tests started with worker node type c5.2xlarge, then moved to c5.4xlarge after analyzing test results and observations.

- c5.4xlarge

      - Information
      
      ![](../../../images/Header-1-AWS-Med.png){ width="1000" }
      
      ![](../../../images/ec2_c5_4xlarge_info.png){ width="1000" }

      - Processor details

      ![](../../../images/c5_4xlarge_cpu_info.png){ width="1000" }

      - Volume details

      ![](../../../images/c5_4xlarge_volume_info.png){ width="600" }

- c5.large

      - Information

      ![](../../../images/Header-1-AWS-Med.png){ width="1000" }

      ![](../../../images/ec2_c5_large_info.png){ width="1000" }

      - Processor details

      ![](../../../images/c5_large_cpu_info.png){ width="1000" }

      - Volume details

      ![](../../../images/c5_large_volume_info.png){ width="600" }


### DB2 instance

- Remote DB2 - [c5.2xlarge]

      ![](../../../images/Header-1-AWS-Med.png){ width="1000" }

      ![](../../../images/C5.2xlarge.png){ width="1000" }

- Processor details

      ![](../../../images/Processor_Info_RemoteDB2_Med.png){ width="600" }


- Volume details

      ![](../../../images/Remote-DB2-Volume-Info-Med.png){ width="600" }


### JMeter agents

- JMeter instance - [c5.2xlarge]

- To run the tests, a distributed AWS/JMeter agents setup consisting of one primary and eight subordinates was used.

      ![](../../../images/Header-1-AWS-Med.png){ width="1000" }

      ![](../../../images/C5.2xlarge.png){ width="1000" }


- Processor details

      ![](../../../images/Processor_Info_RemoteDB2_Med.png){ width="600" }


- Volume details

      ![](../../../images/Remote-DB2-Volume-Info-Med.png){ width="600" }


!!!note
      Ramp-up time is 1.5 seconds per user. Test duration is the total of ramp-up time and 1 hour with peak load of concurrent users.


### DX core tuning for concurrent user run

The following list contains details of tuning and enhancements done to DX core during testing:

- Defined the initial deployment as a rendering environment to trigger the tuning task for initial tuning. For more information, see [Portal server performance tuning tool](../../../deployment/manage/tune_servers/wp_tune_tool.md).

- LTPA token timeout increased from 120 minutes to 480 minutes for rendering tests execution.

      ![](../../../images/Core_Tuning_LTPA.png){ width="1000" }

- WCM object cache for rendering is updated as per [DX Core tuning guide](../traditional_deployments.md).


      ![](../../../images/Core_WCM_Object_Cache_list.png){ width="1000" }


      ![](../../../images/WCM_Object_Cache_Instances.png){ width="1000" }


- Updated abspath, abspathreverse, processing, session, strategy, summary values, and WCM rendering values as per [DX Core tuning guide](../traditional_deployments.md).

- Added a new custom property under **Resource environment providers > WP CacheManagerService > Custom properties > cacheinstance.com.ibm.wps.resolver.friendly.cache.size**.

      ![](../../../images/Core_Friendly_Url_Cache.png){ width="1000" }


- Adjusted JVM Heap size from 3584 to 4096 under **Application servers > WebSphere_Portal > Process_definition > Java Virtual Machine**.

      ![](../../../images/Core_JVM_Tuning.png){ width="1000" }


- Set LDAP user cache attributes and search to 10000.

      ![](../../../images/Core_DX_LDAP_User_Cache.png){ width="1000" }


- Disabled jcr.text.search under **Resource environment providers > JCR ConfigService Portal Content > Custom properties** because there is currently no authoring search functionality in these tests.

      ![](../../../images/Core_Tuning_JCR_Text_Search_Disable.png)


- Deleted search collections in **Portal > Administration > Search > Search collections** (both JCRCollection1 and Default Search Collection).

      ![](../../../images/Core_Tuning_Delete_Search_Collections.png)


- Logged level changes from info to severe in WAS for both configuration and run time.

      ![](../../../images/Core_Tuning_Log_Level_Details.png){ width="1000" }


- DB2 tuning performed by executing DB2 Reorg and Runstats.

!!!note
     - Neither fragment caching nor static resource caching were enabled to trigger actual stress and processing. In a customer scenario, it is recommended to enable both fragment caching and static resource caching. 

     - For DAM, no tuning details are mentioned in this topic except the pod resources like CPU and memory limits for all pods related to DAM (for example, ring-api, persistence-node, persistence-connection-pool, and core). Because DAM uses Node.js, you can monitor CPU and memory usage using Prometheus and Grafana. Based on your observations, you can modify memory requests and limits in Kubernetes accordingly.

## Results

The initial test runs were conducted on an AWS-distributed Kubernetes setup with one master and three worker nodes. The system successfully handled concurrent user loads of 1,000, 2,500, 4,000, and 5,000 users, with a low error rate (< 0.0001%). At 8,000 users, error rates increased dramatically and the response times went up as well. For a response time to be considered optimal, it should be under 1 second.

The tests then moved to a setup with four worker nodes and 10,000 concurrent users. The error rates were low (<0.0001%) and response times were satisfactory. At this point, alterations were made to the number of pods, CPU, and memory of each of the following containers: HAProxy, Core, RingAPI, digitalAssetManagement, persistenceNode, and persistenceConnectionPool. The alterations to these containers aimed to determine which factors were significantly beneficial.

For the HAProxy container, increasing the CPU dramatically increased throughput. When the number of HAProxy pods was increased, the throughput decreased.

For the Core pod, increasing the CPU limit gave a boost to performance but this effect eventually saturated at 5600 millicore. Increasing the number of Core pods at this point had additional benefits. 

## Conclusion

There are several factors that can affect the performance of DX in Kubernetes. Changes in the number of running nodes, number of pods, and the capacity of individual pods can  improve the performance of DX. 

!!!note
     Performance tuning for a Kubernetes DX cluster must be conducted for the particular workloads involving the number of concurrent users. Refer to the [DX Core tuning guide](../traditional_deployments.md) for further enhancements.

### Recommendations

- For a medium-sized workload in AWS, the Kubernetes cluster should begin with one master and four worker nodes. 

- For the HAProxy and RingApi containers, increasing the CPU increases throughput, but increasing the number of pods does not.

- For DAM and persistence node pods, CPU limits were increased due to the observations from Grafana about the usage of CPU and memory on the load test. After this initial change, increasing the pod replicas boosted the performance and handling of the 10,000 concurrent users load. For DAM, increasing the number of pods increases throughput.

- For testing purposes, OpenLDAP pod values were also increased for holding more authenticated users for rendering. However, the OpenLDAP pod is not for production use.

- For optimizing the Core container, start with increasing the CPU until this saturates. After the optimal CPU level is determined, increase the number of pods to increase performance.

!!!note
     Do not size your JVM Heap size larger than the allotted memory for the pod.

There were a number of alterations done to the initial Helm chart configuration. The following table contains the number and limits for each pod. Using these values significantly improves the responsiveness of the setup and enables the system to handle 10,000 concurrent users with a vastly improved average response time and a minimal error rate.

|  |  | Request | Request | Limit | Limit |
|---|---|---:|---|---|---|
| **Component** | **No. of pods** | **cpu (m)<br>** | **memory (Mi)<br>** | **cpu (m)<br>** | **memory (Mi)<br>** |
| contentComposer | 1 | 100 | 128 | 100 | 128 |
| **core** | **7** | **5600** | **8192** | **5600** | **8192** |
| **digitalAssetManagement** | **4** | **1000** | **2048** | **1000** | **2048** |
| imageProcessor | 1 | 200 | 2048 | 200 | 2048 |
| **openLdap** | **1** | **500** | **2048** | **500** | **2048** |
| **persistenceNode** | **2** | **1200** | **2048** | **1200** | **2048** |
| **persistenceConnectionPool** | **2** | **700** | **1024** | **700** | **1024** |
| **ringApi** | **2** | **2000** | **512** | **2000** | **512** |
| runtimeController | 1 | 100 | 256 | 100 | 256 |
| **haproxy** | **2** | **2000** | **1024** | **2000** | **1024** |
| licenseManager | 1 | 100 | 300 | 100 | 300 |
| **Total** | | **56000** | **79532** | **56000** | **79532** |

!!!note
     Values in bold are tuned Helm values while the rest are default minimal values.

For convenience, these values were added to the `medium-config-values.yaml` file in the hcl-dx-deployment Helm chart. To use these values, complete the following steps:

1. Download the Helm chart from FlexNet or Harbor.

2. Extract the TGZ file (`hcl-dx-deployment-XXX.tgz`).

3. In the extracted folder, navigate to the following structure to go to the `medium-config-values.yaml` file: `hcl-dx-deployment/value-samples/medium-config-values.yaml`.
 
???+ info "Related information"
    - [DX Performance Tuning Guide](../traditional_deployments.md)
