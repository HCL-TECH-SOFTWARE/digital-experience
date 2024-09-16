---
title: Rendering - Small-Sized Configuration
---

# Sizing guidance for rendering in a small-sized Kubernetes configuration

## Introduction

In Digital Experience (DX) performance testing, it is important to determine both DX container sizing and the relationships between the components that make up DX. The goal of performance testing is to identify the optimal Kubernetes configurations for varying levels of DX demands, ranging from small to large setups. This sizing guidance examines these factors in a configuration using 1,000 Virtual Users.
 
In this investigation, the key performance indicators are the number of concurrent users, the average response time, and throughput. These metrics serve as benchmarks for evaluating the performance of a small DX configuration, providing insights into the system's ability to handle specific loads. This sizing guidance shows how strategic changes can lead to significant improvements in performance.
 
The sizing tests examined rendering scenarios for Web Content Manager (WCM), portlets, and Digital Asset Management (DAM). The tests were facilitated by a rendering setup deployed on AWS/Native-Kubernetes (Kubernetes installed directly in Amazon EC2 instances). This topic presents a comprehensive overview of the findings, offering guidance for organizations seeking to optimize their DX platforms for peak performance.

## Methodology

### Overview of DX rendering sizing-performance tests

This sizing work consisted of rendering scenarios of WCM, portlets, and DAM with a rendering setup enabled in AWS/Native-Kubernetes (Kubernetes installed directly in Amazon EC2 instances). A combination run was performed that rendered WCM content, DAM assets, and DX pages and portlets. The load distribution was WCM content (40%), DAM assets (30%), and DX pages and portlets (30%). All systems were pre-populated before performing the rendering tests.

To achieve the 1,000 concurrent users mark, an initial set of runs was done with a lower number of users on a single node setup. The tests started with the desired load of 1,000 users and an acceptable error rate (< 0.01%). Further steps were taken to optimize the limits on the available resources for each pod.

The following sections provide details for the [WCM default test data - 20 pages](#wcm-default-test-data-20-pages), [DAM default test data - 2,500 assets](#dam-default-test-data-2500-assets), and [Pages and portlets default test data - 8 pages](#pages-and-portlets-default-test-data-8-pages).

#### WCM default test data - 20 pages

This setup is common in most of the scenarios where there are multi-nested site areas in libraries with content such as rich text, PDF files, and images in a page and nearly 20 pages in a small configuration. Refer to the following list for more information about this setup:

- The default test data has a WCM design library called "PerformanceTestDesign" and five content libraries named "PerformanceTestContent01" through "PerformanceTestContent05".

-  Each content library contains four levels of site areas, with four site areas per level. Only the 256 leaf site areas contain content.

- Each leaf site area contains ten content items, for a total of 12,800 content items across the libraries.

- Half of the content items are visible to "Anonymous" and "All Authenticated" users. The other half are visible only to members of ten groups per content item. These ten groups are spread out among the 500 groups assumed to exist in the test LDAP (and assumed to be called "Group0000" through "Group0499").

- Half of the content items visible to members of ten groups per content item are profiled with the keyword "MENU".

- There are 20 test portal pages created under the label "PerformanceTest". Each has a friendly URL of the form "<context-root>/perf/page-xx".

- Each page contains six WCM viewer portlets that show content below one of the 20 top-level site areas. Pages 01 to 04 show content from site areas "SA01" through "SA04" in library "PerformanceTestContent01". Pages 05 to 08 show content from site areas "SA01" through "SA04" in library "PerformanceTestContent02", and so on.

- Four of the portlets on each page show single content items. For page 01, these would be the first content items in site areas "SA01.01.01.01", "SA01.02.01.01", "SA01.03.01.01", and "SA01.04.01.01" respectively. Other pages follow the same pattern.

- Another portlet on each page shows a navigator of site areas and content items below the same top-level area.

- The final portlet on each page shows a menu of items. This portlet is scoped to the top-level site area and selects only those items profiled with the "MENU" keyword.

- A total of 99,999 users was added to openLDAP as authenticated users.

#### DAM default test data - 2,500 assets

The following DAM setup covers the mix and match of the different types of most commonly used assets in three different ways: UUID, custom, and friendly URLs. Testers uploaded 2,500 assets. These assets include images (136 KB, .jpg), documents (199 KB, .docx), and videos (1.1 MB, .mp4) to preheat the environment. After preloading 2,500 assets, 15 assets containing a mix of original images and renditions were uploaded and rendered for 1 hour at peak load after ramp-up time.

The test then rendered those assets by way of 3 custom URLs, 8 UUID URLs, and 8 short URLs for an hour. Further details provided in the following summary of the results.

| Asset    | Type          | Size                                            |
| -------- | ------------- |-------------------------------------------------|
| Image    | JPG/PNG/TIF   | 155 KB, 2 MB, 5 MB, 500 KB, 100 KB, 2 MB, 300 KB|
| Video    | MP4/WebM      | MP4 - 1MB, 15 MB, 100 MB<br> WebM - 2 MB        |
| Document | DOCX/XLSX/PPTX| 5 MB, 199 KB, 200 KB, 2 MB, 199 KB              |

- Examples of DAM asset rendering APIs of UUID, Custom URL, and Friendly URL:

      - UUID - `https://<host-name>/dx/api/dam/v1/collections/f5764415-afd3-4b18-90ab-5c933e9965a8/items/b2204c8f-bd26-4f9b-865f-1fc1f8e26a13/renditions/09d278d6-1ae7-4a2a-950d-c1fa7f0bacde?binary=true`

      -  Custom - `https://<host-name>/dx/api/dam/custom/customURL2-1715776542673?binary=true`

      -  Fiendly - `https://<host-name>/dx/api/dam/v1/assets/Jmeter.11667/wcm-sample-content.png?rendition=Tablet?binary=true`

!!!note
      For DAM, only anonymous rendering is available.

#### Pages and portlets default test data - 8 pages

The following pages and portlets setup covers the different types of the most commonly used portlets as listed in this section. Performance tests include the response time for rendering the whole page with the portlet. Knowing the response times for rendering pages is important because these portlets are often used in DX content.

The tests used a total of eight unique pages with portlets. To complete authoring and rendering, both anonymous and authenticated users received access. The same users were added in openLDAP as for WCM rendering. All authenticated users were assigned the User role. The following list shows the pages, their corresponding page numbers, and the portlet details for authoring on each page.

- Page 1 - 2 Articles
- Page 2 - 2 Rich text
- Page 3 - Login portlet
- Page 4 - Information portlet (JSR) - JSP file -  jsp/oob/welcome.jsp 
- Page 5 - Search Center portlet
- Page 6 - Custom JSF portlet with simple form (Disable this portlet for now.)
- Page 7 - Script Application portlet (Added JavaScript Functions and Date and Time object examples)
- Page 8 - Added all mentioned portlets in this section except JSF portlet


After completing the authoring steps, the anonymous portal user and authenticated users (added to openLDAP) must render the pages. Every page request uses a /GET API call (for example, /wps/portal/portletsperf/page1) and there is a response assertion in a sampler to validate the content HTML in the response body.

## Environment

This section provides details for the Kubernetes cluster, JMeter, and database.

### AWS/Native Kubernetes

- A Kubernetes platform is running on an AWS Elastic Compute Cloud (EC2) instance with the DX images installed and configured. 

- In AWS/Native Kubernetes, the tests are executed in EC2 instances with one node instance (c5.2xlarge).

- The tests used a remote DB2 instance for the core database (c5.2xlarge).

- [Small Configuration - Single node]  - [c5.2xlarge] 

      - Information
      
      ![](../../../../images/Header-1-AWS.png){ width="1000" }
      
      ![](../../../../images/C5.2xlarge.png){ width="1000" }

      - Processor details

      ![](../../../../images/Processor_Info_Native-Kube.png){ width="600" }

      - Volume details

      ![](../../../../images/AWS-Native-Kube-Volume-Info.png){ width="600" }


### DB2 instance

- Remote DB2 - [t3a.large]

       ![](../../../../images/Header-2-AWS.png){ width="600" }

       ![](../../../../images/t3a.large.png){ width="600" }


- Processor details

       ![](../../../../images/Processor_Info_RemoteDB2.png){ width="600" }


- Volume details

       ![](../../../../images/Remote-DB2-Volume-Info.png){ width="600" }


### JMeter agents

- JMeter instance - [t2.xlarge]

- To run the tests, a distributed AWS/JMeter agents setup consisting of one primary and two subordinates was used.

      ![](../../../../images/Header-3-AWS.png){ width="400" }

      ![](../../../../images/t2.xlarge.png){ width="400" }


- Processor details

      ![](../../../../images/Processor_Info_JMeterAgent.png){ width="600" }


- Network details

      ![](../../../../images/JMeter_Agent_Network_Details.png){ width="400" }


- Volume details

      ![](../../../../images/JMeter-Agent-Volume-Info.png){ width="600" }


!!!note
      Ramp-up time is 1.5 seconds per user. Test duration is the total of ramp-up time and 1 hour with peak load of concurrent users.


## Results

The initial sets of tests were run on an AWS-distributed Kubernetes setup with a single node. Concurrent user loads of 100, 200, 400, and 500 users were successful, as measured by a low error rate (0.0%) and satisfactory response times. At 600 users, response times increased dramatically and the error rates went up as well.

Test results were analyzed in Prometheus and Grafana dashboards. CPU limits were increased based on the observations from Grafana regarding the CPU and memory usage during the load test.

The event loop lag for Ring API pod was on the higher end at 400 ms for a user load of 500. All the errors came from WCM and Pages and Portlets, not from DAM.

From these observations, CPU and memory limits of core, ringAPI, and HAProxy pods were tuned one by one to see if no errors occur during a user load of 600 to 1,000 users.

## Conclusion

This performance tuning guide aims to understand how the ratios of key pod limits can improve the rendering response time in a simple single pod system. This is an important step before attempting to illustrate the impact of scaling of pods. This guide concludes that:  

- Changes to the pod limits for the following pods significantly improve the responsiveness of the setup and enable the system to handle more users.

| Pod Name | Minimum Number of Pods | Container | Container Image | Container CPU Request and Limit | Container Memory Request and Limit |
| -------- | ---------------------- | --------- | --------------- | ------------------------------- | ---------------------------------- |
| core     | 1                      | core      | core            | 3000 m                           | 5000 Mi                             |
| ringApi  | 1                      | ringApi   | ringApi         | 500 m                            | 512 Mi                              |
| haproxy  | 1                      | haproxy   | haproxy         | 700 m                            | 1024 Mi                             |

-  The modifications recommended in [small-config-helm-values](#recommendations) lead to an improved response time and throughput by 50% compared to using the [default minimal values in the Helm chart](../../../get_started/plan_deployment/container_deployment/limitations_requirements.md/#containerization-requirements-and-limitations).

!!!note
     Performance tuning for a Kubernetes DX cluster must be conducted for the particular workloads involving the number of concurrent users. Generally, these recommendations are intended to speed up tuning for others. Refer to the [DX Core tuning guide](../traditional_deployments.md) for further enhancements.

### Recommendations

- Currently, default CPU and memory values in the [Helm chart](../../../get_started/plan_deployment/container_deployment/limitations_requirements.md/#containerization-requirements-and-limitations) are the minimum values for DX to work. For a small-sized workload in AWS, the Kubernetes cluster should begin with a single node with at least a c5.2xlarge instance type to support a load of 1,000 users.

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
