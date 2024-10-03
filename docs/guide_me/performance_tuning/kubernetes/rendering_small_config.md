---
title: Rendering - Small-Sized Configuration
---

# Sizing guidance for rendering in a small-sized Kubernetes configuration

This topic provides the details of the environments used for rendering in a small-sized Kubernetes configuration. You can also find the test results and recommendations for small configurations on this page.

## Methodology

### Overview of DX rendering sizing-performance tests

This sizing work consisted of rendering scenarios of WCM, portlets, and DAM with a rendering setup enabled in AWS/Native-Kubernetes (Kubernetes installed directly in Amazon EC2 instances). A combination run was performed that rendered WCM content, DAM assets, and DX pages and portlets. The load distribution was WCM content (40%), DAM assets (30%), and DX pages and portlets (30%). All systems were pre-populated before performing the rendering tests.

To achieve the 1,000 concurrent users mark, an initial set of runs was done with a lower number of users on a single node setup. The tests started with the desired load of 1,000 users and an acceptable error rate (< 0.01%). Further steps were taken to optimize the limits on the available resources for each pod.

The following table contains the rendering scenario details for a small configuration. 

| Concurrent users     |  WCM pages         |  DAM content         |  Pages and portlets content   |
| -------------------- | ------------------ | -------------------- | ----------------------------- |
| 1,000 users          | 20                 | 2,500                |    8                          |

For more information about the setup of test data, refer to the following:

- [WCM default test data](./index.md#wcm-default-test-data)
- [DAM default test data](./index.md#dam-default-test-data)
- [Pages and portlets default test data](./index.md#pages-and-portlets-default-test-data)

## Environment

This section provides details for the Kubernetes cluster, JMeter, and database.

### AWS/Native Kubernetes

- A Kubernetes platform is running on an AWS Elastic Compute Cloud (EC2) instance with the DX images installed and configured. 

- In AWS/Native Kubernetes, the tests are executed in EC2 instances with one node instance (c5.2xlarge).

- The tests used a remote DB2 instance for the core database (c5.2xlarge).

- [Small Configuration - Single node]  - [c5.2xlarge] 

      - Information
      
      ![](../../../images/Header-1-AWS.png){ width="1000" }
      
      ![](../../../images/C5.2xlarge.png){ width="1000" }

      - Processor details

      ![](../../../images/Processor_Info_Native-Kube.png){ width="600" }

      - Volume details

      ![](../../../images/AWS-Native-Kube-Volume-Info.png){ width="600" }


### DB2 instance

- Remote DB2 - [t3a.large]

       ![](../../../images/Header-2-AWS.png){ width="600" }

       ![](../../../images/t3a.large.png){ width="600" }


- Processor details

       ![](../../../images/Processor_Info_RemoteDB2.png){ width="600" }


- Volume details

       ![](../../../images/Remote-DB2-Volume-Info.png){ width="600" }


### JMeter agents

- JMeter instance - [t2.xlarge]

- To run the tests, a distributed AWS/JMeter agents setup consisting of one primary and two subordinates was used.

      ![](../../../images/Header-3-AWS.png){ width="400" }

      ![](../../../images/t2.xlarge.png){ width="400" }


- Processor details

      ![](../../../images/Processor_Info_JMeterAgent.png){ width="600" }


- Network details

      ![](../../../images/JMeter_Agent_Network_Details.png){ width="400" }


- Volume details

      ![](../../../images/JMeter-Agent-Volume-Info.png){ width="600" }


!!!note
      Ramp-up time is 1.5 seconds per user. Test duration is the total of ramp-up time and 1 hour with peak load of concurrent users.


## Results

The initial test runs were conducted on an AWS-distributed Kubernetes setup with a single node. The system successfully handled concurrent user loads of 100, 200, 400, and 500 users, with a low error rate (0.0%). At 600 users, error rates increased dramatically and response times went up as well. For a response time to be considered optimal, it should be under 1 second. All the errors came from WCM and Pages and Portlets, not from DAM.

Test results were analyzed in Prometheus and Grafana dashboards. For HAProxy and Core pods, the CPU and memory limits were fully utilized. These limits were increased based on the CPU and memory usage observations from Grafana during the load test. Increasing the CPU and memory limits of HAProxy and Core pods resolved the errors.

In addition, the event loop lag for Ring API pod was on the higher end at 400 ms for a user load of 500. After adjusting the CPU and memory limits of the RingAPI pod, event loop lag was reduced to 6.6 ms.

From these observations, CPU and memory limits of core, ringAPI, and HAProxy pods were tuned one by one to see if no errors occur during a user load of 600 to 1,000 users.


## Conclusion

This performance tuning guide aims to understand how the ratios of key pod limits can improve the rendering response time in a simple single pod system. This is an important step before attempting to illustrate the impact of scaling of pods. This guide concludes that:  

- Changes to the pod limits for the following pods significantly improve the responsiveness of the setup and enable the system to handle more users.

| Pod Name | Minimum Number of Pods | Container | Container Image | Container CPU Request and Limit | Container Memory Request and Limit |
| -------- | ---------------------- | --------- | --------------- | ------------------------------- | ---------------------------------- |
| core     | 1                      | core      | core            | 3000 m                           | 5000 Mi                             |
| ringApi  | 1                      | ringApi   | ringApi         | 500 m                            | 512 Mi                              |
| haproxy  | 1                      | haproxy   | haproxy         | 700 m                            | 1024 Mi                             |

-  The modifications recommended in [small-config-helm-values](#recommendations) lead to an improved response time and throughput by 50% compared to using the [default minimal values in the Helm chart](../../../get_started/plan_deployment/container_deployment/limitations_requirements.md#containerization-requirements-and-limitations).

!!!note
     Performance tuning for a Kubernetes DX cluster must be conducted for the particular workloads involving the number of concurrent users. Generally, these recommendations are intended to speed up tuning for others. Refer to the [DX Core tuning guide](../traditional_deployments.md) for further enhancements.

### Recommendations

- Currently, default CPU and memory values in the [Helm chart](../../../get_started/plan_deployment/container_deployment/limitations_requirements.md#containerization-requirements-and-limitations) are the minimum values for DX to work. For a small-sized workload in AWS, the Kubernetes cluster should begin with a single node with at least a c5.2xlarge instance type to support a load of 1,000 users.

- For testing purposes, OpenLDAP pod values were used for holding more authenticated users for rendering. However, the OpenLDAP pod is not for production use.

There were a number of alterations done to the initial Helm chart configuration. The following table contains the number and limits for each pod. Using these values significantly improves the responsiveness of the setup and enables the system to handle 1,000 concurrent users with an improved error rate, average response time, throughput, and an event loop lag of Ring API containers.

|  |  | Request | Request | Limit | Limit |
|---|---|---:|---|---|---|
| **Component** | **No. of pods** | **CPU (m)<br>** | **Memory (Mi)<br>** | **CPU (m)<br>** | **Memory (Mi)<br>** |
| contentComposer | 1 | 100 | 128 | 100 | 128 |
| **core** | **1** | **3000** | **5000** | **3000** | **5000** |
| digitalAssetManagement | 1 | 500 | 1536 | 500 | 1536 |
| imageProcessor | 1 | 200 | 2048 | 200 | 2048 |
| openLdap | 1 | 200 | 768 | 200 | 768 |
| persistenceNode | 1 | 500 | 1024 | 500 | 1024 |
| persistenceConnectionPool | 1 | 500 | 512 | 500 | 512 |
| **ringApi** | **1** | **500** | **512** | **500** | **512** |
| runtimeController | 1 | 100 | 256 | 100 | 256 |
| **haproxy** | **1** | **700** | **1024** | **700** | **1024** |
| licenseManager | 1 | 100 | 300 | 100 | 300 |
| **Total** | | **6400** | **13108** | **6400** | **13108** |

!!!note
     Values in bold are tuned Helm values while the rest are default minimal values.
     

For convenience, these values were added to the `small-config-values.yaml` file in the hcl-dx-deployment Helm chart. To use these values, refer to the following steps:

1. Download the Helm chart from FlexNet or Harbor.

2. Extract the TGZ file (`hcl-dx-deployment-XXX.tgz`).

3. In the extracted folder, navigate to the following structure to go to the `small-config-values.yaml` file: `hcl-dx-deployment/value-samples/small-config-values.yaml`.
 
???+ info "Related information"
    - [DX Performance Tuning Guide](../traditional_deployments.md)
    - [DX Helm Minimal Values](../../../get_started/plan_deployment/container_deployment/limitations_requirements.md/#containerization-requirements-and-limitations)








# Sizing guidance for rendering in a single-node's upper limit Kubernetes configuration

This topic provides the details of the environments used for rendering with the upper limit in a single-node configuration.. You can also find the test results and recommendations for the single-node configurations on this page.

## Methodology

### Overview of DX rendering sizing-performance tests

This sizing work consisted of rendering scenarios of WCM, portlets, and DAM with a rendering setup enabled in AWS/Native-Kubernetes (Kubernetes installed directly in Amazon EC2 instances). A combination run was performed that rendered WCM content, DAM assets, and DX pages and portlets. The load distribution was WCM content (40%), DAM assets (30%), and DX pages and portlets (30%). All systems were pre-populated before performing the rendering tests.

To achieve the maximum throughput users mark, an initial set of runs was done with a lower number of users on a single node setup with scaling of pods.

The following table contains the rendering scenario details for a single-node upper limit configuration. 

| Concurrent users     |  WCM pages         |  DAM content         |  Pages and portlets content   |
| -------------------- | ------------------ | -------------------- | ----------------------------- |
| 10,000 users         | 200                | 25,000               |    80                         |


For more information about the setup of test data, refer to the following:

- [WCM default test data](./index.md#wcm-default-test-data)
- [DAM default test data](./index.md#dam-default-test-data)
- [Pages and portlets default test data](./index.md#pages-and-portlets-default-test-data)

## Environment

This section provides details for the Kubernetes cluster, JMeter, and database.

### AWS/Native Kubernetes

- A Kubernetes platform is running on an AWS Elastic Compute Cloud (EC2) instance with the DX images installed and configured. 

- In AWS/Native Kubernetes, the tests are executed in EC2 instances with one node instance (c5.2xlarge).

- The tests used a remote DB2 instance for the core database (c5.2xlarge).

- [Single node Configuration]  - [c5.9xlarge] 

- The tests started with c5.2xlarge, then c5.4xlarge, and then a c5.9xlarge instance after analyzing test results and observations.

      - Information

      ![](../../../images/Header-1-AWS-Med.png){ width="1000" }

      ![](../../../images/C5.4x_9xlarge.png){ width="1000" }

      - Processor details

      ![](../../../images/Processor_Info_Native-Kube-9x.png){ width="600" }

       ![](../../../images/Processor_Info_Native-Kube-9x.png){ width="600" }

      - Volume details

      ![](../../../images/AWS-Native-Kube-Volume-Info-9x.png){ width="600" }


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


- Processor details

      ![](../../../images/Processor_Info_Native-Kube.png){ width="600" }

- Volume details

      ![](../../../images/AWS-Native-Kube-Volume-Info.png){ width="600" }


!!!note
      Ramp-up time is 1.5 seconds per user. Test duration is the total of ramp-up time and 1 hour with peak load of concurrent users.


### DX core tuning for concurrent user run

 Details of tuning and enhancements done to DX core during testing [DX-Core-Tuning](./rendering_medium_config.md#dx-core-tuning-for-concurrent-user-run)

## Results

The initial test runs were conducted on an AWS-distributed Kubernetes setup with a single node of instance types c5.2xlarge and c5.4xlarge. The system successfully handled concurrent user loads of 1,000, 2,000, 3,000, 5,000 with a error rate (< 0.01%). At 6,000 users, error rates increased dramatically and the response times went up as well. For a response time to be considered optimal, it should be under 1 second. 

Later tests were executed from c5.9xlarge instance and Horizontal Pod Autoscaling (HPA) was enabled for core, DAM, haproxy, and ringAPI Pods with thresholds of 50% for CPU utilization and 80% for memory utilization. HPA test run executed successfully with no errors. Through the HPA tests, it was observed that 4 pods of core, DAM, haproxy, and 3 pods of ringAPI must have a successful run for 6,000 concurrent users. With this setup, the test was run for 10,000 concurrent users. Test was executed successfully until 10,000 concurrent ramp up. 

At a steady state of 10,000 concurrent users, there were few failures due to the ringAPI pod going down intermittently. RingAPI pods are then scaled to 4. The test run was successful with 10,000 concurrent users with 4 pods of core, DAM, haproxy, and ringAPI each.

Test results were analyzed in Prometheus and Grafana dashboards. The single-node CPU usage of a node reached an average of 80% in tests with 10,000 concurrent users. The saturation was checked by reducing the number of users to 5,00, 3,000, and 2,500 users. Node CPU average usage was around 70 to 80% in all 5,000, 3,000, and 2,500 users load test results. So, the recommended load is 2,500 concurrent users where we find the response times are optimal.

## Conclusion

This performance guidance shows the upper limit on a single-node K8s cluster AWS instance (c5.9xlarge). It is suggested that for single-node (c5.9xlarge) rendering scenarios for DAM, WCM, and pages with portlets, the recommended load is 2,500 concurrent users.

- The following table contains the number and limits for each pod. Using these values significantly improves the responsiveness of the setup and enables the system to handle 2,500 concurrent users comfortably.


| Pod name                    | Number of pods | Container                   | Container image             | Container CPU request and limit | Container memory request and limit |
| --------------------------- | -------------- | --------------------------- | --------------------------- | ------------------------------- | ---------------------------------- |
| core                        | 4              | core                        | core                        | 5000 m                          | 8000 Mi                            |
| ringApi                     | 4              | ringApi                     | ringApi                     | 800 m                           | 512 Mi                             |
| haproxy                     | 4              | haproxy                     | haproxy                     | 700 m                           | 1024 Mi                            |
| digitalAssetManagement      | 4              | digitalAssetManagement      | digitalAssetManagement      | 1000 m                          | 2048 Mi                            |
| persistence-connection-pool | 2              | persistence-connection-pool | persistence-connection-pool | 500 m                           | 512 Mi                             |
| persistence-node            | 2              | persistence-node            | persistence-node            | 1000 m                          | 2048 Mi         


!!!note
     Performance tuning for a Kubernetes DX cluster must be conducted for the particular workloads involving the number of concurrent users. Generally, these recommendations are intended to speed up tuning for others. Refer to the [DX Core tuning guide](../traditional_deployments.md) for further enhancements.

### Recommendations

- Currently, default CPU and memory values in the [Helm chart](../../../get_started/plan_deployment/container_deployment/limitations_requirements.md/#containerization-requirements-and-limitations) are the minimum values for DX to work. For an upper limit on one instamce in AWS, the Kubernetes cluster should begin with a single node with at least a c5.9xlarge instance type to support a load of 2,500 users with optimal response time.

- For testing purposes, OpenLDAP pod values were used for holding more authenticated users for rendering. However, the OpenLDAP pod is not for production use.

There were a number of alterations done to the initial Helm chart configuration. The following table contains the number and limits for each pod in the single node set-up.

|  |  | Request | Request | Limit | Limit |
|---|---|---:|---|---|---|
| **Component** | **No. of pods** | **CPU (m)<br>** | **Memory (Mi)<br>** | **CPU (m)<br>** | **Memory (Mi)<br>** |
| contentComposer | 1 | 100 | 128 | 100 | 128 |
| **core** | **4** | **5000** | **8000** | **5000** | **8000** |
| digitalAssetManagement | **4** | **1000** | **2048** | **1000** | **2048** |
| imageProcessor | 1 | 200 | 2048 | 200 | 2048 |
| openLdap | 1 | 200 | 768 | 200 | 768 |
| **persistenceNode** | **2** | **1000** | **2048** | **1000** | **2048** |
| **persistenceConnectionPool** | **2** | 500 | 512 | 500 | 512 |
| **ringApi** | **2** | **800** | **512** | **800** | **512** |
| runtimeController | 1 | 100 | 256 | 100 | 256 |
| **haproxy** | **1** | **700** | **1024** | **700** | **1024** |
| licenseManager | 1 | 100 | 300 | 100 | 300 |
| **Total** | | **30000** | **50860** | **30000** | **50860** |


!!!note
     Values in bold are tuned Helm values while the rest are default minimal values.
     
 
???+ info "Related information"
    - [DX Performance Tuning Guide](../traditional_deployments.md)
    - [DX Helm Minimal Values](../../../get_started/plan_deployment/container_deployment/limitations_requirements.md/#containerization-requirements-and-limitations)
    - [DX Helm Minimal Values](../../../get_started/plan_deployment/container_deployment/limitations_requirements.md#containerization-requirements-and-limitations)
