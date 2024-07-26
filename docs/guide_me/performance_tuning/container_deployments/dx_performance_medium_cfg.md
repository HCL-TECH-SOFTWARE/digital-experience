# Sizing guidance for DX Rendering Scenarios in a Kubernetes Medium Configuration

## Introduction

Determining Digital Experience (DX) container sizing and the relationships between the components that make up DX a critical part of DX performance testing. The overall goal is to identify the optimal Kubernetes configurations for varying levels of DX demands—ranging from small to large setups. This paper examines these factors in a configuration using 10,000 Virtual Users.
 
At the heart of our investigation are key performance indicators such as the number of concurrent users, average response time, and throughput. These metrics serve as benchmarks for evaluating the performance of a medium DX configuration, providing insights into the system's ability to handle specific loads. Furthermore, this paper explores the impact of core tuning adjustments, pod scaling, node scaling and pod configuration modifications on enhancing system responsiveness. We demonstrate how strategic changes can lead to significant improvements in performance.
 
Our sizing efforts examined rendering scenarios encompassing WCM, portlets, and DAM, facilitated by a rendering setup deployed on AWS/Native-Kubernetes (Kubernetes installed directly in Amazon EC2 instances). This paper aims to present a comprehensive overview of our findings, offering guidance for organizations seeking to optimize their DX platforms for peak performance.

## Methodology

### Overview of DX rendering sizing-performance tests

This sizing work consisted of rendering scenarios of Web Content Management (WCM), portlets, and Digital Asset Management (DAM) with a rendering setup enabled in AWS/Native-Kubernetes (Kubernetes installed directly in Amazon EC2 instances). A combination run was performed that rendered WCM content, DAM assets and DX pages and portlets. The load distribution is WCM content (40%), DAM assets (30%) and DX pages and portlets (30%). All systems were pre-populated before performing the rendering tests. 

To achieve the 10000 concurrent users mark, an initial set of runs was done with a lower number of users on a multiple node setup with a varying number of worker nodes. This started with 3 worker nodes and we increased the number of worker nodes and pods as needed to achieve the desired load with an acceptable error rate (< 0.01%). Once the number of nodes was established, further steps were taken to optimize the limits on the available resources for each pod as well as the ratios of key pods to each other.

- The section below provides details for the WCM, DAM, and pages and portlets data.

#### WCM Default Test Data - 200 pages

This setup is common in most of the scenarios where we have multi-nested site areas in libraries with content like rich text, pdfs and images in a page and nearly ~200 pages in a medium configuration.

- The default test data has a WCM design library called "PerformanceTestDesign" and five content libraries named "PerformanceTestContent01" through to "PerformanceTestContent05".
- Each content library contains four levels of site areas, with four site areas per level. Only the 256 "leaf" site areas contain content.

- Each leaf site area contains ten content items, for a total of 12,800 content items across the libraries.

- Half of the content items are visible to "Anonymous" and "All Authenticated" users

- The other half are visible only to members of ten groups per content item. These ten groups are spread out among the 500 groups assumed to exist in the test LDAP (and assumed to be called "Group0000" through "Group0499").

- Half of the content items (spread evenly over each type described above) are profiled with the keyword "MENU".

- There are twenty test portal pages created under the label "PerformanceTest". Each has a friendly URL of the form "<context-root>/perf/page-xx".

- Each page contains six WCM viewer portlets that show content below one of the twenty top level site areas. Pages 01 to 04 show content from site areas "SA01" through "SA04" in library "PerformanceTestContent01", pages 05 to 08 show content from site areas "SA01" through "SA04" in library "PerformanceTestContent02" etc.

- Four of the portlets on each page show single content items. For page 01 these would be the first content items in site areas "SA01.01.01.01", "SA01.02.01.01", "SA01.03.01.01" and "SA01.04.01.01" respectively. Other pages follow the same pattern.

- Another portlet on each page shows a navigator of site areas and content items below the same top-level area.

- The final portlet on each page shows a menu of items and is both scoped to the top-level site area and also selects only those items profiled with the "MENU" keyword.

- Total 99999 users added to openLDAP as authenticated users.

#### DAM Default Test Data - 25k assets

The Below DAM set up covers the mix and match of all different types of mostly commonly used assets with three different ways UUID, custom and friendly urls.
Testers uploaded 25,000 assets. These assets include images (136 KB, .jpg), documents (199 KB, .docx), and videos (1.1 MB, .mp4) to preheat the environment. After preloading 25,000 assets, 15 assets - containing a mix of original images and renditions were uploaded and rendered for 1 hour at peak load after ramp-up time.

The test then rendered those assets by way of 3 custom URLs, 8 UUID URLs, and 8 short URLs for an hour. Further details provided in the following summary of the results.

| Asset    | Type          | Size                                      |
| -------- | ------------- |-----------------------------------------  |
| Image    | .jpg/png/tif  | 155kb, 2mb,5mb, 500kb, 100 kb, 2 mb,300 kb|
| Video    | mp4/webm      | 5 mb, 199kb,200kb , 2 mb,199kb            |
| Document | docx/xlsx/pptx| mp4- 1mb, 15mb, 100mb, webm- 2 mb         |

- Examples of DAM asset rendering APIs of UUID, Custom URL, and Friendly URL:

      - UUID - `https://<host-name>/dx/api/dam/v1/collections/f5764415-afd3-4b18-90ab-5c933e9965a8/items/b2204c8f-bd26-4f9b-865f-1fc1f8e26a13/renditions/09d278d6-1ae7-4a2a-950d-c1fa7f0bacde?binary=true`

      -  Custom - `https://<host-name>/dx/api/dam/custom/customURL2-1715776542673?binary=true`

      -  Fiendly - `https://<host-name>/dx/api/dam/v1/assets/Jmeter.11667/wcm-sample-content.png?rendition=Tablet?binary=true`

!!!note
      For DAM, only anonymous rendering is available.

#### Pages and portlets default test data: 80 pages

The Below pages & portlets set up covers the different types of mostly commonly used portlets as mentioned below and performance tests include the response time for rendering the whole page with the portlet which is very crucial to know.

We used a total of eight unique pages with portlets. To complete authoring and rendering, both anonymous and authenticated users received access. The same users were added in openLDAP as for WCM rendering. All authenticated users are assigned the User role. The pages in the following list are duplicated 10 times with different page numbers, resulting in 80 pages.

- Page 1 - 2 Articles
- Page 2 - 2 Rich text
- Page 3 - Login portlet
- Page 4 - Information Portlet(JSR) - JSP file -  jsp/oob/welcome.jsp 
- Page 5 - Search Centre portlet
- Page 6 - Custom JSF portlet with simple form [Disable it for now]
- Page 7 - Script Application portlet --> Added JavaScript Functions, Date and Time object examples
- Page 8 - Added all above 7 portlets in this page [except JSF portlet]

As part of authoring, pages and portlets were added manually. The list shows the details of portlets for authoring on every page.

After completing the authoring steps, the anonymous portal user and authenticated users (added to openLDAP) must render the pages. Every page request uses a /GET API call (for example, /wps/portal/portletsperf/page1) and there is a response assertion in a sampler to validate the content html in the response body.


## Environment

The section below provides details for the Kubernetes cluster, Jmeter, LDAP and database.

### AWS/Native Kubernetes

- Kubernetes running on AWS Elastic Compute Cloud (EC2) instance with the DX images installed and configured. 

- In AWS/Native Kubernetes, the tests are executed in EC2 instances with one master (c5.xlarge) and four worker nodes (c5.4xlarge). 

- The tests used a remote DB2 instance for the core database (c5.2xlarge).

- The tests started with worker node type c5.2xlarge, then moved to c5.4xlarge after analyzing test results and observations.

- c5.4xlarge

      - Info

      ![](../../../images/Header-1-AWS-Med.png)

      ![](../../../images/ec2_c5_4xlarge_info.png)


      - Processor details

      ![](../../../images/c5_4xlarge_cpu_info.png)

      - Volume details

      ![](../../../images/c5_4xlarge_volume_info.png){ width="600" }

- c5.large

      - Info

      ![](../../../images/Header-1-AWS-Med.png)

      ![](../../../images/ec2_c5_large_info.png)

      - Processor details

      ![](../../../images/c5_large_cpu_info.png)

      - Volume details

      ![](../../../images/c5_large_volume_info.png){ width="600" }


### DB2 instance

- Remote DB2 - [c5.2xlarge]

      ![](../../../images/Header-1-AWS-Med.png)

      ![](../../../images/C5.2xlarge.png)

- Processor details

      ![](../../../images/Processor_Info_RemoteDB2_Med.png){ width="600" }


- Volume details

      ![](../../../images/Remote-DB2-Volume-Info-Med.png){ width="600" }


### JMeter agents

- JMeter instance - [c5.2xlarge]

- To run the tests, a distributed AWS/JMeter agents setup consisting of one primary and eight subordinates was used.

      ![](../../../images/Header-1-AWS-Med.png)

      ![](../../../images/C5.2xlarge.png)


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


### DX core tuning and enhancements for concurrent user run

The following list contains details of tuning and enhancements done to DX core during testing:

- Initial definition of the deployment as rendering environment to trigger the tuning task for initial tuning.

- LTPA token timeout increased from 120 minutes to 480 minutes for rendering tests execution.

 ![](../../../images/Core_Tuning_LTPA.png)

- WCM object cache for rendering updated as per DX performance tuning guide DX core tuning.


 ![](../../../images/Core_WCM_Object_Cache_list.png)


 ![](../../../images/WCM_Object_Cache_Instances.png)


- Updated abspath, abspathreverse, processing, session, strategy, summary values WCM rendering values as per tuning guide.

- Added new custom property under Resource environment providers > WP CacheManagerService > Custom properties > cacheinstance.com.ibm.wps.resolver.friendly.cache.size.

 ![](../../../images/Core_Friendly_Url_Cache.png)


- Adjusted JVM Heap size from 3584 to 4096 under Application servers > WebSphere_Portal > Process_definition > Java Virtual Machine.

 ![](../../../images/Core_JVM_Tuning.png)


- Set LDAP user cache attributes and search to 10000.

 ![](../../../images/Core_DX_LDAP_User_Cache.png)


- Disabled jcr.text.search under Resource environment providers > JCR ConfigService Portal Content > Custom properties because there is currently no authoring search functionality in these tests.

 ![](../../../images/Core_Tuning_JCR_Text_Search_Disable.png)


- Deleted search collections in Portal > Administration > Search > Search collections (both JCRCollection1 and Default Search Collection).

 ![](../../../images/Core_Tuning_Delete_Search_Collections.png)


- Logged level changes from info to severe in WAS for both configuration and run time.

 ![](../../../images/Core_Tuning_Log_Level_Details.png)


- DB2 tuning performed by executing DB2 Reorg and Runstats.

!!!note
     Neither fragment caching nor static resource caching were enabled to trigger more actual stress and processing. In a customer scenario we would recommend those being enabled.


!!!note
     For DAM no tuning details mentioned in this document except the pod resources like CPU and memory limits for the all pods related to DAM like ring-api, persistence-node, persistence-connection-pool and core. Because for DAM which is NodeJS app it is appropriate to have CPU and memory requests and limits in the Kubernetes by monitoring CPU usage, memory usage using Prometheus and Grafana to have good response times, and throughput.

## Results

The initial sets of tests were run on a AWS-distributed Kubernetes setup with one master and 3 worker nodes. Concurrent user loads of 1000, 2500, 4000 and 5000 users were successful, as measured by a very low error rate (< 0.0001%) and satisfactory response times. At 8000 users, this was no longer the case as the response times increased dramatically and the error rates went up as well.

The tests then successfully moved to a four worker node setup with 10000 concurrent users. The error rates were low (<0.0001%) and response times were satisfactory. At this point, alterations were made to the number of pods, CPU and memory of each of the following containers: HAProxy, Core, RingAPI, digitalAssetManagement, persistenceNode and persistenceConnectionPool to determine which factors were significantly beneficial. 
For the HAProxy container, increasing the CPU dramatically increased throughput. When the number of HAProxy pods was increased, the throughput actually decreased.

For the Core pod, increasing the CPU limit gave a boost to performance but this effect eventually saturated at 5600 millicore. Increasing the number of core pods at this point had additional, beneficial effects. 

## Conclusions

There are numerous factors that can affect the performance of DX in Kubernetes. Changes in the number of running nodes, number of pods and the capacity of individual pods dramatically improved the performance of DX. 

!!!note
     Performance tuning for a Kubernetes DX cluster will need to be conducted for the particular workloads involved.  These recommendations are intended, in general, to speed up this tuning for others. Further enhancements may be achieved by following the DX Core tuning guide (see references).

We have the following recommendations:

- For a medium-sized workload in AWS, the Kubernetes (K8s) cluster should begin with one master and four worker nodes. 

- For the HAProxy and RingApi containers, increasing the CPU will increase throughput, but increasing the number of pods will not.

- For the DAM and persistence node pods CPU limits were increased due to the observations from Grafana about the usage of CPU and memopry on the load test. After this initial change, increasing the pod replicas boosted the performance and handling of 10000 concurrent users load. For DAM, increasing the number of pods will increase throughput.

- OpenLDAP pod values are also increased for holding more authenticated users for rendering for purposes of testing. However, the OpenLDAP pod is not for production use.

- For the DAM and persistence node pods CPU limits are increased by the observations from Grafana about the usage of CPU and memopry on the load test. Then increased the pod replicas which boosted the performance and really helps in handling 10k concurrent users load. For DAM especially increasing more pods will increase throughput not by just increasing the CPU of the pod. 

- For optimizing the Core container begin by increasing the CPU until this saturates. Once the optimal CPU level is determined, increase the number of pods to increase performance.

!!!note
     Do not size your JVM Heap size larger than the allotted memory for the pod.

There were a number of alterations done to the initial Helm chart configuration. The following table contains the number and limits for each pod. Using these values significantly improves the responsiveness of the setup and enabled the system to handle 10000 concurrent users with a vastly improved average response time and a minimal error rate.

|  |  | Request | Request | Limit | Limit |
|---|---|---:|---|---|---|
| **Component** | **No. of pods** | **cpu (m)<br>** | **memory (Mi)<br>** | **cpu (m)<br>** | **memory (Mi)<br>** |
| contentComposer | 1 | 100 | 128 | 100 | 128 |
| **core** | **7** | **5600** | **8192** | **5200** | **8192** |
| **digitalAssetManagement** | **4** | **1000** | **2048** | **1000** | **2048** |
| imageProcessor | 1 | 200 | 2048 | 200 | 2048 |
| **openLdap** | **1** | **500** | **2048** | **500** | **2048** |
| **persistenceNode** | **2** | **1200** | **2048** | **1000** | **2048** |
| **persistenceConnectionPool** | **2** | **700** | **1024** | **700** | **1024** |
| **ringApi** | **2** | **2000** | **512** | **2000** | **512** |
| runtimeController | 1 | 100 | 256 | 100 | 256 |
| **haproxy** | **2** | **2000** | **1024** | **2000** | **1024** |
| licenseManager | 1 | 100 | 300 | 100 | 300 |
| **Total** | | **60000** | **79532** | **60000** | **79532** |

!!!note
     Bolded values are tuned helm values and other values are default minimal values.

For convenience, these values were added to the medium-config-values.yaml file in the hcl-dx-deployment Helm chart. To use these values, complete the following steps:

- Download the Helm chart from FlexNet or Harbor.

- Extract the TGZ file (hcl-dx-deployment-XXX.tgz).

- In the extracted folder, navigate to the following structure to go to the medium-config-values.yaml file: hcl-dx-deployment/value-samples/medium-config-values.yaml.


## Additional References:

- Digital Experience Core tuning details are available in [DX Performance Tuning Guide](https://opensource.hcltechsw.com/digital-experience/CF221/guide_me/Performance_Tuning/)