---
id: DX_Rendering_Sizing_Small_Configuration_Results
title: Performance Sizing Guidance for Rendering with a Small Configuration
---

# Performance-sizing guidance for rendering with a small configuration

## Overview of DX rendering sizing-performance tests

DX sizing is one of the goals of DX performance tests. DX sizing aims to identify the reliable Kubernetes environment for small, medium, and large DX configurations. This topic presents the important KPIs (for example, number of concurrent users, average response time, and throughput) in small configurations. A similar approach will be applied for medium and large configurations. This topic also discusses how adjustments to the pod configuration can make significant improvements in system responsiveness.

This sizing work started with rendering scenarios of Web Content Management (WCM), portlets, and Digital Asset Management (DAM) with a rendering setup enabled in AWS/Native-Kubernetes. The Apache JMeter tool was used for performance tests.

## Conclusion

This initial performance guidance aims to understand how the ratios of key pod limits can improve the rendering response time in a simple single-pod system. Understanding these limits is an important step to do before you attempt to illustrate the impact of scaling pods.


- Changes to the pod limits for the following pods significantly improve the responsiveness of the setup and enable the system to handle more users.

| Pod name | Minimum number of pods | Container | Container image | Container CPU request and limit | Container memory request and limit |
| -------- | ---------------------- | --------- | --------------- | ------------------------------- | ---------------------------------- |
| core     | 1                      | core      | core            | 3000m                           | 5000Mi                             |
| ringApi  | 1                      | ringApi   | ringApi         | 500m                            | 512Mi                              |
| haproxy  | 1                      | haproxy   | haproxy         | 700m                            | 1024Mi                             |

- These modifications resulted in better response time and throughput by 50 percent. Detailed data are shown in the next sections.

## DX small configuration helm values in hcl-dx-deployment

To see the `small-config-values.yaml` file in the hcl-dx-deployment Helm chart, complete the following steps:

1. Download the Helm chart from FlexNet or Harbor.

2. Extract the `TGZ` file (`hcl-dx-deployment-XXX.tgz`).

3. In the extracted folder, navigate to the following structure to go to the `small-config-values.yaml` file: `hcl-dx-deployment/value-samples/small-config-values.yaml`.

## Customer rendering scenario details

| Concurrent users      | Existing WCM pages | Existing DAM content |
| --------------------  | ------------------ | -------------------- |
| Small  – 1000 users   | 20                 | 2k                   |
| Medium – 10000 users  | 200                | 10k                  |
| Large  – 100000 users | 2000               | 50 - 100k              |

## Environment

### AWS/Native Kubernetes
- An AWS Elastic Compute Cloud (EC2) instance is running on a native Kubernetes platform with the DX images installed and configured.
- In AWS/Native Kubernetes, the test started with the minimal EC2 instance with a single node.
- The tests used a remote DB2 instance.

[Small Configuration]  - [c5.2xlarge] 

![](../../../../images/Header-1-AWS.png)

![](../../../../images/C5.2xlarge.png)


- Processor details

![](../../../../images/Processor_Info_Native-Kube.png)

- Volume details

![](../../../../images/AWS-Native-Kube-Volume-Info.png)


### DB2 instance

- Remote DB2 - [t3a.large]

![](../../../../images/Header-2-AWS.png)

![](../../../../images/t3a.large.png)


- Processor details

![](../../../../images/Processor_Info_RemoteDB2.png)


- Volume details

![](../../../../images/Remote-DB2-Volume-Info.png)


### JMeter agents

- JMeter instance - [t2.xlarge]
- To run the tests, a distributed AWS/JMeter agents setup consisting of one primary and two subordinates was used.<!-- never use "master" and "slave." -->

![](../../../../images/Header-3-AWS.png)

![](../../../../images/t2.xlarge.png)


- Processor details

![](../../../../images/Processor_Info_JMeterAgent.png)


- Network details

![](../../../../images/JMeter_Agent_Network_Details.png)


- Volume details

![](../../../../images/JMeter-Agent-Volume-Info.png)




## Authoring details for small config in rendering sizing

Set up the systems before performing rendering tests. This section provides details for WCM, DAM, and portlets authoring.


## WCM Default Test Data - 20 pages

### WCM test data characteristics

- The default test data has a WCM design library called "PerformanceTestDesign" and five content libraries named "PerformanceTestContent01" to "PerformanceTestContent05".
- Each content library contains four levels of site areas, with four site areas per level. Only the 256 "leaf" site areas contain content.

- Each leaf site area contains ten content items, for a total of 12,800 content items across the libraries.

- Half of the content items are visible to "Anonymous" and "All Authenticated" users.

- The other half is visible only to members of ten groups per content item. These ten groups are spread out among the 500 groups assumed to exist in the test LDAP (and assumed to be called "Group0000" through "Group0499").

- Half of the content items (spread evenly over each type described previously) are profiled with the keyword "MENU."

- There are 20 test-portal pages created under the "PerformanceTest" label. Each has a URL in the form "<context-root>/perf/page-xx".

- Each page contains 6 WCM viewer portlets that show content below one of the 20 top-level site areas. For example, Pages 01 to 04 show content from site areas "SA01" through "SA04" in the "PerformanceTestContent01" library, and pages 05 to 08 show content from site areas "SA01" through "SA04" in the "PerformanceTestContent02"  library, and so on.

- Four of the portlets on each page show single-content items. For page 01, these are the first content items in site areas "SA01.01.01.01", "SA01.02.01.01", "SA01.03.01.01", and "SA01.04.01.01" respectively. Other pages follow the same pattern.

- Another portlet on each page shows a navigator of site areas and content items below the same top-level area.

- The final portlet on each page shows a menu of items and is scoped to the top-level site area. It also selects only those items profiled with the "MENU" keyword.

- A total of 99,999 users were added to openLDAP as authenticated users.

## DAM default test data: 2,500 assets

- Testers uploaded 2,500 assets. These assets include images (136kb, .jpg), documents (199kb, .docx), and videos (1.1mb, .mp4) to preheat. After preloading 2,500 assets, 15 assets were uploaded and rendered for 1 hour.

- Details of 15 assets were uploaded for rendering.
      
- There are 19 URLs in total, three of which are custom URLs, 8 are uuid URLs, and 8 are short URLs, which are combinations of original, tablet, smartphone, and desktop renditions.

| Asset    | Type          | Size                                      |
| -------- | ------------- |-----------------------------------------  |
| Image    | .jpg/png/tif  | 155kb, 2mb,5mb, 500kb, 100 kb, 2 mb,300 kb|
| Video    | mp4/webm      | 5 mb, 199kb,200kb , 2 mb,199kb            |
| Document | docx/xlsx/pptx| mp4- 1mb, 15mb, 100mb, webm- 2 mb         |

!!!note
      For DAM, only anonymous rendering is available.

## Pages and portlets default test data: 8 pages

Customers typically use a total of eight pages with portlets. To complete authoring and rendering, both anonymous and authenticated users received access. The same users were added in openLDAP for WCM rendering. All authenticated users are assigned the User role.
 
As part of authoring, pages and portlets were added manually. The following list shows the details of portlets for authoring on every page:

- Page 1 - 2 Articles
- Page 2 - 2 Rich text
- Page 3 - Login portlet
- Page 4 - Information Portlet(JSR) - JSP file -  jsp/oob/welcome.jsp 
- Page 5 - Search Centre portlet
- Page 6 - Custom JSF portlet with simple form
- Page 7 - Script Application portlet (Added JavaScript Functions, Date and Time object examples)
- Page 8 - Added all above 7 portlets in this page

After users completed the authoring steps, the anonymous portal user and authenticated users (added to openLDAP) must render the pages. Every page request uses a `/GET API` call (for example, `/wps/portal/portletsperf/page1`) and there is a response assertion in a sampler to validate the content html in the response body. 

### Combined DX rendering of WCM, DAM, and pages and portlets

For rendering sizing, all rendering JMeter scripts of WCM, DAM, and pages and portlets are combined. See the following section for details of load distribution.

**Load distribution**

- WCM - 40%
- DAM - 30%
- Pages and Portlets - 30%

## Pods in a native-Kubernetes deployment are 1:1 in small config
![](../../../../images/small-config-pods.png)

### Results summary

The following stages were conducted, starting with the default Kubernetes configuration.

#### Stage 1

- The DX combined rendering ran with default minimal deployments as mentioned in the following Helm values. 
- No issues were found with a user load of up to 500. 
- Errors occurred at a user load of 600. This total number of errors is around five percent.<!-- five percent of what? -->


##### stage-1 Helm values
                                 Requests                 Limits        
| Component                 | cpu(m) | memory(Mi) | cpu(m) | memory(Mi) |
| ------------------------- | ------ | ---------- | ------ | ---------- |
| contentComposer           | 100    | 128        | 100    | 128        |
| core                      | 2000   | 4096       | 4000   | 6144       |
| digitalAssetManagement    | 500    | 1536       | 500    | 1536       |
| imageProcessor            | 200    | 2048       | 200    | 2048       |
| openLdap                  | 200    | 768        | 200    | 768        |
| persistenceNode           | 500    | 1024       | 500    | 1024       |
| persistenceConnectionPool | 500    | 512        | 500    | 512        |
| ringApi                   | 100    | 256        | 100    | 256        |
| runtimeController         | 100    | 256        | 100    | 256        |
| haproxy                   | 200    | 300        | 200    | 300        |
| licenseManager            | 100    | 300        | 100    | 300        |
| Total                     | 4500   | 11224      | 6500   | 13272      |


##### Results overview


| AWS/Native-Kubernetes                            | Test-6                                                       | Test-7 (after tuning - core, ring api, haproxy)                     |
| ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------- |
| Test time                                  | July 21st IST 12:30 am - 1:30 am                             | July 27th IST 14:08 pm - 15:12 pm                                   |
| Total samples                              | 66959                                                        | 918415                                                              |
| Concurent Users                            | 600(WCM=240+DAM=180+PNP=180)                                 | 600(WCM=240+DAM=180+PNP=180)                                        |
| Total throughput (transactions/sec)        | **110.3**                                                    | **238.18**                                                          |
| Total avg response time (in milli seconds) | **4671**                                                     | **994.89**                                                          |
| CPU usage                                  | 25%                                                          | 52.36%                                                              |
| Memory usage                               | 56%                                                          | 62.23%                                                              |
| Disk reads I/O                               |                                                              | 0 B/s                                                               |
| Disk writes I/O                              |                                                              | 13.65 io/s                                                          |
| DAM EventLoop lag (in milli seconds)       |                                                              | 16.14                                                               |
| Ring EventLoop lag (in milli seconds)      | **450**                                                      | **5.19**                                                            |
| Errors                                      | 4.87%                                                        | 0                                                                   |
| TimeDuration                               | 3600                                                         | 3850                                                                |
|                                            | Top 5 request samples (avg response time in ms)              | Top 5 request samples (avg response time in ms)                      |              |
|                                            | Get video - mp4 1.1 mb custom url - curlmp41.1mb.    (25044) | Get video - mp4 15mb - idmp415mb (6253.29)                          |              |
|                                            | Get image - jpeg 155 kb custom url - curljpg155kb   (23851)  | Get video - mp4 1.1 mb custom url - curlmp41.1mb (5512.89)          |              |
|                                            | Get video - mp4 15mb - idmp415mb -      (23620)              | Get doc - pdf - 5mb - short url - Desktop - furlpdf5mb (5296.89) |              |
|                                            | Get doc - pdf 171 kb custom url - curlpdf171kb.   (23011)    | Get image - jpeg 155 kb custom url - curljpg155kb (5128.01)         |              |
|                                            | Initial Page Request (21145)                                 | Get video - webm 2mb - friendly url - furlwebm2mb (4895.61)         |              |



##### Observations

- For a user load of 600, there is an http response code: `503 service unavailable errors in test.`

- All errors are from WCM and pages and portlets, not from DAM.

- Total average response time increases exponentially with load.

- Event loop lag for the Ring API pod is also on the higher end (approximately 400 ms for a user load of 500).

- No pod restarts were observed.


#### Stage 2

From stage-1 observations, limits of core, ring API, and HA proxy pods were tuned one by one to see whether no errors occurred during a user load of 600.

See the following section for the tuned Helm values.


##### stage-2 Helm values
                                 Requests                 Limits        
| Component                 | cpu(m) | memory(Mi) | cpu(m) | memory(Mi) |
| ------------------------- | ------ | ---------- | ------ | ---------- |
| contentComposer           | 100    | 128        | 100    | 128        |
| **core**                  |**3000**| **5000**   |**3000**| **5000**   |
| digitalAssetManagement    | 500    | 1536       | 500    | 1536       |
| imageProcessor            | 200    | 2048       | 200    | 2048       |
| openLdap                  | 200    | 768        | 200    | 768        |
| persistenceNode           | 500    | 1024       | 500    | 1024       |
| persistenceConnectionPool | 500    | 512        | 500    | 512        |
| **ringApi**               | **500**| **512**    | **500**| **512**    |
| runtimeController         | 100    | 256        | 100    | 256        |
| **haproxy**               | **700**| **1024**   | **700**| **1024**   |
| licenseManager            | 100    | 300        | 100    | 300        |
| Total                     | 6400   | 13108      | 6400   | 13108      |


##### Results overview

| AWS/Native-Kubernet                            | Test-6                                                       | Test-11 (after tuning - core, ring api, haproxy)            |
| ------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------------------- |
| Test time                                  | July 21st IST 12:30 am - 1:30 am                             | July 28th IST 12:12 pm to 13:17 pm                          |
| Total samples                              | 66959                                                        | 692505                                                      |
| Concurent users                            | 600(WCM=240+DAM=180+PNP=180)                                 | 600(WCM=240+DAM=180+PNP=180)                                |
| Total throughput (transactions/sec)        | 110.3                                                        | 179.63 ± 16.59                                              |
| Total avg response time (in milli seconds) | 4671                                                         | 2063.32 ± 308.33                                            |
| CPU usage                                  | 25%                                                          | 39.72%                                                      |
| Memory usage                               | 56%                                                          | 61.70%                                                      |
| Disk reads I/O                               |                                                              | 0 io/s                                                      |
| Disk writes I/O                              |                                                              | 13.04 io/s                                                  |
| DAM EventLoop lag (in milli seconds)       |                                                              | 16.1                                                        |
| Ring EventLoop lag (in milli seconds)      | 450                                                          | 4.57                                                        |
| Errors                                      | 4.87%                                                        | 0                                                           |
| TimeDuration                               | 3600                                                         | 3850                                                        |
|                                            | Top 5 request samples (avg response time in ms)              | Top 5 request samples (avg response time in ms)              |               |
|                                            | Get video - mp4 1.1 mb custom url - curlmp41.1mb.    (25044) | Initial Page Request (11235.13)                             |               |
|                                            | Get image - jpeg 155 kb custom url - curljpg155kb   (23851)  | Get video - mp4 1.1 mb custom url - curlmp41.1mb (6791.20)  |               |
|                                            | Get video - mp4 15mb - idmp415mb -      (23620)              | Get image - jpeg 155 kb custom url - curljpg155kb (6123.23) |               |
|                                            | Get doc - pdf 171 kb custom url - curlpdf171kb.   (23011)    | Get doc - pdf 171 kb custom url - curlpdf171kb (6037.59)    |               |
|                                            | Initial Page Request (21145)                                 | Get video - mp4 15mb - idmp415mb (5931.95)                  |               |



| AWS/Native-Kubernetes                            | Test-10 (after tuning - core, ring api, haproxy)             |
| ------------------------------------------ | ------------------------------------------------------------ |
| Test time                                  | July 27th IST 19:58 pm to 20:58 pm                           |
| Total samples                              | 610496                                                       |
| Concurent users                            | 1000(WCM=400+DAM=300+PNP=300)                                |
| Total throughput (transactions/sec)        | **169.19 ± 0.68**                                            |
| Total avg response time (in milli seconds) | **5578.84 ± 32.01**                                          |
| CPU usage                                  | 39%                                                          |
| Memory usage                               | 64%                                                          |
| Disk reads I/O                               | 0 io/s                                                       |
| Disk writes I/O                              | 14.45 io/s                                                   |
| DAM EventLoop lag (in milli seconds)       | 20.4                                                         |
| Ring EventLoop lag (in milli seconds)      | 6.6                                                          |
| Errors                                      | 0                                                            |
| TimeDuration                               | 3600                                                         |
|                                            | Top 5 request samples (avg respone time in ms)               |
|                                            | Initial Page Request (30396.43)                              |
|                                            | Get video - mp4 1.1 mb custom url - curlmp41.1mb (14561.34)  |
|                                            | Get image - jpeg 155 kb custom url - curljpg155kb (14448.63) |
|                                            | Get doc - pdf 171 kb custom url - curlpdf171kb (14370.48)    |
|                                            | Get video - mp4 15mb - idmp415mb (10716.05)                  |



##### Observations

- No errors were observed and no pods restarted during the test.

- The total average response time, total throughput, and event loop lag for the Ring API pod improved significantly.

- The top five requests with higher response times are from DAM rendering and WCM inital page requests.



## Performance-sizing guidance for rendering with maximum throughput on a single node

### Overview of DX rendering sizing-performance tests

DX sizing is one of the goals of DX performance tests. DX sizing aims to identify the reliable Kubernetes environment for small, medium, and large DX configurations. This topic presents the important KPIs (for example, number of concurrent users, average response time, and throughput) for the upper limit in a single-node configuration. This topic also discusses how adjustments to the core tuning, scaling of pods, and pod configuration can make significant improvements in system responsiveness.

This sizing work started with rendering scenarios of Web Content Management (WCM), portlets, and Digital Asset Management (DAM) with a rendering setup enabled in AWS/Native-Kubernetes. The Apache JMeter tool was used for performance tests.

### Conclusion

This performance guidance shows the upper limit on a single-node K8s cluster AWS instance (c5.9xlarge). It is suggested that for single-node (c5.9xlarge) rendering scenarios for DAM, WCM, and pages with portlets, the recommended load is 2500 concurrent users with good average and 90th percentile (pct) response times. The top five response times of rendering APIs are all in the range of 4 to 5 seconds.

- Core tuning details are available in [DX core tuning](#dx-core-tuning-and-enhancements-after-10000-concurrent-user-run).

- The following table contains the number and limits for each pod. Using these values significantly improves the responsiveness of the setup and enables the system to handle 2500 concurrent users with average and 90th percentile (pct) response times in the range of 4 to 5 seconds.


| Pod name                    | Number of pods | Container                   | Container image             | Container CPU request and limit | Container memory request and limit |
| --------------------------- | -------------- | --------------------------- | --------------------------- | ------------------------------- | ---------------------------------- |
| core                        | 4              | core                        | core                        | 5000m                           | 8000Mi                             |
| ringApi                     | 4              | ringApi                     | ringApi                     | 800m                            | 512Mi                              |
| haproxy                     | 4              | haproxy                     | haproxy                     | 700m                            | 1024Mi                             |
| digitalAssetManagement      | 4              | digitalAssetManagement      | digitalAssetManagement      | 1000m                           | 2048Mi                             |
| persistence-connection-pool | 2              | persistence-connection-pool | persistence-connection-pool | 500m                            | 512Mi                              |
| persistence-node            | 2              | persistence-node            | persistence-node            | 1000m                           | 2048Mi                             |


### Customer rendering scenario details

| Concurrent users      | Existing WCM pages | Existing DAM content | Pages with portlets |
| --------------------  | ------------------ | -------------------- | ------------------- |
| Small  – 1000 users   | 20                 | 2k                   | 80                  |
| Medium – 10000 users  | 200                | 10k                  | 800                 |
| Large  – 100000 users | 2000               | 50 - 100k            | 8000                | 

### Environment

#### AWS/Native Kubernetes

- An AWS Elastic Compute Cloud (EC2) instance is running on a native Kubernetes platform with the DX images installed and configured.

- In AWS/Native Kubernetes, the tests are executed in EC2 instance (c5.9xlarge).

- The tests used a remote DB2 instance.

      [Single node Configuration]  - [c5.9xlarge] 

- The tests started with c5.2xlarge, then c5.4xlarge, and then a c5.9xlarge instance after analyzing test results and observations.

      ![](../../../../images/Header-1-AWS-Med.png)

      ![](../../../../images/C5.4x_9xlarge.png)


- Processor details

      ![](../../../../images/Processor_Info_Native-Kube-9x.png)

- Volume details

      ![](../../../../images/AWS-Native-Kube-Volume-Info-9x.png)

#### DB2 instance

- Remote DB2 - [c5.2xlarge]

      ![](../../../../images/Header-1-AWS-Med.png)

      ![](../../../../images/C5.2xlarge.png)

- Processor details

      ![](../../../../images/Processor_Info_RemoteDB2_Med.png)


- Volume details

      ![](../../../../images/Remote-DB2-Volume-Info-Med.png)


#### JMeter agents

- JMeter instance - [c5.2xlarge]

- To run the tests, a distributed AWS/JMeter agents setup consisting of one primary and eight subordinates was used.

      ![](../../../../images/Header-1-AWS-Med.png)

      ![](../../../../images/C5.2xlarge.png)


- Processor details

      ![](../../../../images/Processor_Info_RemoteDB2_Med.png)


- Volume details

      ![](../../../../images/Remote-DB2-Volume-Info-Med.png)


- Processor details

      ![](../../../../images/Processor_Info_Native-Kube.png)

- Volume details

      ![](../../../../images/AWS-Native-Kube-Volume-Info.png)


### Authoring details

Set up the systems before performing the rendering tests. This section provides details for WCM, DAM, and portlets authoring.


### WCM Default Test Data - 200 pages

#### WCM test data characteristics

- The default test data has a WCM design library called "PerformanceTestDesign" and five content libraries named "PerformanceTestContent01" to "PerformanceTestContent05".
      
- Each content library contains four levels of site areas, with four site areas per level. Only the 256 "leaf" site areas contain content.

- Each leaf site area contains ten content items, for a total of 12,800 content items across the libraries.

- Half of the content items are visible to "Anonymous" and "All Authenticated" users. This portion of the content items is evenly distributed between these two types of users and is profiled with the keyword "MENU".

- The other half is visible only to members of ten groups per content item. These ten groups are spread out among the 500 groups assumed to exist in the test LDAP, and assumed to be called "Group0000" through "Group0499".

- There are 20 test-portal pages created under the "PerformanceTest" label. Each page has a URL in the form "<context-root>/perf/page-xx". 20 pages are duplicated to 200 pages.

- Each page contains 6 WCM viewer portlets that show content below one of the 20 top-level site areas. For example, Pages 01 to 04 show content from site areas "SA01" through "SA04" in the "PerformanceTestContent01" library, and pages 05 to 08 show content from site areas "SA01" through "SA04" in the "PerformanceTestContent02"  library, and so on.

- Four of the portlets on each page show single-content items. For page 01, these are the first content items in site areas: "SA01.01.01.01", "SA01.02.01.01", "SA01.03.01.01", and "SA01.04.01.01" respectively. Other pages follow the same pattern.

- Another portlet on each page shows a navigator of site areas and content items below the same top-level area.

- The final portlet on each page shows a menu of items and is scoped to the top-level site area. It also selects only those items profiled with the "MENU" keyword.

- A total of 99,999 users were added to openLDAP as authenticated users.

### DAM default test data: 25,000 assets

- Testers uploaded 2,500 assets. These assets include images (136kb, .jpg), documents (199kb, .docx), and videos (1.1mb, .mp4) to preheat. After preloading 2,500 assets, 15 assets were uploaded and rendered for 1 hour.

- Details of 15 assets were uploaded for rendering.
      
- There are 19 URLs in total, three of which are custom URLs, eight are uuid URLs, and eight are short URLs, which are combinations of original, tablet, smartphone, and desktop renditions.

      | Asset    | Type          | Size                                      |
      | -------- | ------------- |-----------------------------------------  |
      | Image    | .jpg/png/tif  | 155kb, 2mb,5mb, 500kb, 100 kb, 2 mb,300 kb|
      | Video    | mp4/webm      | 5 mb, 199kb,200kb , 2 mb,199kb            |
      | Document | docx/xlsx/pptx| mp4- 1mb, 15mb, 100mb, webm- 2 mb         |

!!!note
      For DAM, only anonymous rendering is available.

### Pages and portlets default test data: 80 pages

Customers typically use a total of eight pages with portlets. To complete authoring and rendering, both anonymous and authenticated users received access. The same users were added in openLDAP for WCM rendering. All authenticated users are assigned the User role. The pages in the following list are duplicated 10 times with different page numbers, resulting to 80 pages.
 
As part of authoring, pages and portlets were added manually. The list shows the details of portlets for authoring on every page.

- Page 1 - 2 Articles
- Page 2 - 2 Rich text
- Page 3 - Login portlet
- Page 4 - Information Portlet(JSR) - JSP file -  jsp/oob/welcome.jsp 
- Page 5 - Search Centre portlet
- Page 6 - Custom JSF portlet with simple form (disabled in JMeter script because there are some errors)
- Page 7 - Script Application portlet (Added JavaScript Functions, Date and Time object examples)
- Page 8 - Added all mentioned portlets except JSF portlet

After completing the authoring steps, the anonymous portal user and authenticated users (added to openLDAP) must render the pages. Every page request uses a `/GET API` call (for example, `/wps/portal/portletsperf/page1`) and there is a response assertion in a sampler to validate the content html in the response body. 

### Combined DX rendering of WCM, DAM, and pages and portlets

For rendering sizing, all rendering JMeter scripts of WCM, DAM, and pages and portlets are combined. See the following section for details of load distribution.

**Load distribution**

- WCM - 40%
- DAM - 30%
- Pages and Portlets - 30%

### Results summary

The following stages were conducted, starting with config DX kube configuration on a c5.4xlarge instance.

#### Stage 1

- The DX combined rendering ran with config deployments as mentioned in the following Helm values.

- For 1000 concurrent users, tests finished successfully with no errors.

- Errors occurred at a user load of 2000. Total error is around 1%.

- Helm values were modified for core, DAM, persistenceNode, and haproxy as seen in the following table.

- With this setup, the tests were able to run until 3000 concurrent users.

 
##### stage-1 Helm values of a single-node configuration

                                        Requests                Limits 
| Component                  | No. of pods | cpu(m)   | memory(Mi) | cpu(m)   | memory(Mi) |
|----------------------------|-------------|----------|------------|----------|------------|
| contentComposer            | 1           | 100      | 128        | 100      | 128        |
| **core**                   | **1**       | **5000** | **8000**   | **5000** | **8000**   |
| **digitalAssetManagement** | **1**       | **1000** | **2048**   | **1000** | **2048**   |
| imageProcessor             | 1           | 200      | 2048       | 200      | 2048       |
| openLdap                   | 1           | 200      | 768        | 200      | 768        |
| **persistenceNode**        | **1**       | **1000** | **2048**   | **1000** | **2048**   |
| persistenceConnectionPool  | 1           | 500      | 512        | 500      | 512        |
| **ringApi**                | **1**       | **500**  | **512**    | 500      | **512**    |
| runtimeController          | 1           | 100      | 256        | 100      | 256        |
| **haproxy**                | **1**       | **1000** | **1024**   | **1000** | **1024**   |
| licenseManager             | 1           | 100      | 300        | 100      | 300        |
| **Total**                  |             | **9700** | **17644**  | **9700** | **17644**  |



##### Results overview

| Medium Config Sizing                                           | Run1                                                           | Run2                                          |
| -------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------- |
| Environment                                                    | AWS/Native Kube                                                | AWS/Native Kube                               |
| Test Time (IST)                                                 | 2023-10-11T08:05:00 - 10:28:00                                 | 2023-10-11T17:15:00 - 20:25:00                |
| Total Samples                                                  | 2611885                                                        | 3416582                                       |
| Concurent Users                                                | 2000(WCM - 800 DAM - 600 Page&Portlet - 600)                   | 3000(WCM - 1200 DAM - 900 Page&Portlet - 900) |
| Total Throughput (transactions/sec)                            | 303.33                                                         | 307.33                                        |
| Total Avg Response Time (in milli seconds)                     | 4656.72                                                        | 7138.92                                       |
| CPU Usage (%)                                                   | 42.42                                                          | 44.04                                         |
| Memory Usage (%)                                                | 35.52                                                          | 36.35                                         |
| Disk Read IO (io/sec)                                           | 0.08                                                           | 0.12                                          |
| Disk Write IO (io/sec)                                          | 15.33                                                          | 15.73                                         |
| DAM EventLoop lag (ms)                                          | 8.19                                                           | 10.6                                          |
| Ring EventLoop lag (ms)                                         | 16.8                                                           | 23.4                                          |
| Error(%)                                                       | 0                                                              | 0                                             |
| Test Duration(sec)                                             | 8600                                                           | 11100                                         |
|  | Top 5 Requests (Avg Response Time in ms)                       | Top 5 Requests (Avg Response Time in ms)                       |
|  | Initial Page Request - (26850.86)                              | Initial Page Request - (41396.12)                              |
|  | Get video - mp4 1.1 mb custom url - curlmp41.1mb - (13922.89)  | Get video - mp4 1.1 mb custom url - curlmp41.1mb - (21806.35)  |
|  | Get doc - pdf 171 kb  custom url - curlpdf171kb - (13752.72)   | Get doc - pdf 171 kb  custom url - curlpdf171kb - (21481.04)   |
|  | Get image - jpeg 155 kb custom url - curljpg155kb - (13744.08) | Get image - jpeg 155 kb custom url - curljpg155kb - (21449.53) |
|  | Get video - mp4 15mb - idmp415mb - (7650.36)                   | Get video - webm 2mb - friendly url - furlwebm2mb - (11830.96) |

##### Observations

- For 3000 concurrent users, there is a total high response time, particularly for WCM APIs.

- For a user load of 6000, there is an http response code: `503 service unavailable errors in the test.`

- All errors were from WCM and pages with portlets, not from DAM.

- Total average response time increases exponentially with load.

- No pod restarts observed.

- The goal is to have average and 90th pct response times in the range of 4 to 5 seconds. The tests were then moved to the next instance, from c5.4xlarge to c5.9xlarge.


#### Stage 2 

##### Helm values

                                        Requests                Limits 
| Component                  | No. of pods | cpu(m)   | memory(Mi) | cpu(m)   | memory(Mi) |
|----------------------------|-------------|----------|------------|----------|------------|
| contentComposer            | 1           | 100      | 128        | 100      | 128        |
| **core**                   | **4**       | **5000** | **8000**   | **5000** | **8000**   |
| **digitalAssetManagement** | **4**       | **1000** | **2048**   | **1000** | **2048**   |
| imageProcessor             | 1           | 200      | 2048       | 200      | 2048       |
| openLdap                   | 1           | 200      | 768        | 200      | 768        |
| **persistenceNode**        | **2**       | **1000** | **2048**   | **1000** | **2048**   |
| persistenceConnectionPool  | 1           | 500      | 512        | 500      | 512        |
| **ringApi**                | **4**       | **500**  | **512**    | 500      | **512**    |
| runtimeController          | 1           | 100      | 256        | 100      | 256        |
| **haproxy**                | **4**       | **1000** | **1024**   | **1000** | **1024**   |
| licenseManager             | 1           | 100      | 300        | 100      | 300        |
| **Total**                  |             | **33200**| **54444**  | **33200**| **54444**  |



##### Pods in native-kube deployment in stage-2
![](../../../../images/medium-config-pods.png)


##### Results overview

| Medium Config Sizing                       | Run1                                                           | Run2                                                          |
| ------------------------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------- |
| Environment                                | AWS/Native Kube                                                | AWS/Native Kube                                                |
| Test Time (IST)                             | 2023-10-17T12:10:00 - 15:40:00                                 | 2023-10-19T06:43:00 - 11:53:00                                 |
| Total Samples                              | 10288912                                                       | 15602157                                                       |
| Concurent Users                            | 6000(WCM - 2400 DAM - 1800 Page&Portlet - 1800)                | 10000(WCM - 4000 DAM - 3000 Page&Portlet - 3000)               |
| Total Throughput (transactions/sec)        | 815.05                                                         | 837.06                                                         |
| Total Avg Response Time (in milli seconds) | 4813.22                                                        | 8130.75                                                        |
| CPU Usage (%)                               | 64.09                                                          | 65.63                                                          |
| Memory Usage (%)                            | 30.69                                                          | 45.9                                                           |
| Disk Read IO (io/sec)                       | 1.24                                                           | 1.5                                                            |
| Disk Write IO (io/sec)                      | 27.5                                                           | 24.73                                                          |
| DAM EventLoop lag (ms)                      | 8.36                                                           | 15.5                                                           |
| Ring EventLoop lag (ms)                     | 9.31                                                           | 17.6                                                           |
| Error (%)                                   | 0                                                              | 0                                                              |
| Test Duration (sec)                         | 12600                                                          | 18600                                                          |
|                                            | Top 5 Requests (Avg Response Time in ms)                       | Top 5 Requests (Avg Response Time in ms)                        |
|                                            | Get video - mp4 1.1 mb custom url - curlmp41.1mb - (26663.91)  | Get video - mp4 1.1 mb custom url - curlmp41.1mb - (43301.53)  |
|                                            | Get doc - pdf 171 kb  custom url - curlpdf171kb - (26463.77)   | Get doc - pdf 171 kb  custom url - curlpdf171kb - (42721.38)   |
|                                            | Get image - jpeg 155 kb custom url - curljpg155kb - (26244.08) | Initial Page Request - (42702.96)                              |
|                                            | Initial Page Request - (24795.62)                              | Get image - jpeg 155 kb custom url - curljpg155kb - (42464.43) |
|                                            | Get image - png - 500kb - Desktop - idpng500kbD -(16446.86)    | Get video - webm 2mb - friendly url - furlwebm2mb - (26543.91) |


##### Observations 

- For 6000 concurrent users (WCM - 2400, DAM - 1800, Pages and portlets - 1800) and 6 JMeter subordinates, the core was scaled to 3 pods, and DAM, Persistence Node, Ring API, and HAProxy were scaled to 2 each.

- Horizontal Pod Autoscaling (HPA) was enabled for core, DAM, haproxy, and ringAPI Pods with thresholds of 50% for CPU utilization and 80% for memory utilization. HPA test run executed successfully with no errors.

- Through HPA tests, it was observed that 4 pods of core, DAM, haproxy, and 3 pods of ringAPI must have a successful run for 6000 concurrent users.

-  With this setup, the test was run for 10000 concurrent users. Test was executed successfully until 10000 concurrent ramp up. At a steady state of 10000 concurrent users, there are a few failures due to the ringAPI pod going down intermittently. RingAPI pods are then scaled to 4.

- The test run was successful with 10000 concurrent users with 4 pods of core, DAM, haproxy, and ringAPI each.

#### Stage 3

##### Improved response times of individual APIs and conclusion on load for comfortable rendering

As there is a high response time for individual API requests, tuning of core and code improvements in DAM began in CF219.

##### DX core tuning and enhancements after 10000 concurrent user run
      
The following list contains details of tuning and enhancements done to DX core during testing:

- LTPA token timeout increased from 120 minutes to 480 minutes for rendering tests execution.

 ![](../../../../images/Core_Tuning_LTPA.png)

- WCM object cache for rendering updated as per DX performance tuning guide.

 ![](../../../../images/Core_WCM_Object_Cache_list.png)


 ![](../../../../images/WCM_Object_Cache_Instances.png)

- Updated abspath, abspathreverse, processing, session, strategy, summary values WCM rendering values as per tuning guide.

- Added new custom property under **Resource environment providers > WP CacheManagerService > Custom properties > cacheinstance.com.ibm.wps.resolver.friendly.cache.size**.

 ![](../../../../images/Core_Friendly_Url_Cache.png)

- Adjusted JVM Heap size from 3584 to 4096 under **Application servers > WebSphere_Portal > Process_definition > Java Virtual Machine**.

 ![](../../../../images/Core_JVM_Tuning.png)

- Set LDAP user cache attributes and search to 10000.

 ![](../../../../images/Core_DX_LDAP_User_Cache.png)

- Disabled jcr.text.search under **Resource environment providers > JCR ConfigService Portal Content > Custom properties** because there is no search functionality.

 ![](../../../../images/Core_Tuning_JCR_Text_Search_Disable.png)

- Deleted search collections in **Portal > Administration > Search > Search collections** (both JCRCollection1 and Default Search Collection).

 ![](../../../../images/Core_Tuning_Delete_Search_Collections.png)

- Logged level changes from info to severe in WAS for in both configuration and run time.

 ![](../../../../images/Core_Tuning_Log_Level_Details.png)

 !!!note
       Restart all core pods after performing all the tunings steps mentioned.

 - DB2 tuning performed by executing DB2 Reorg and Runstats.



#### Stage-3 Helm values

                                        Requests                Limits 
| Component                     | No. of pods | cpu(m)    | memory(Mi) | cpu(m)    | memory(Mi) |
|-------------------------------|-------------|-----------|------------|-----------|------------|
| contentComposer               | 1           | 100       | 128        | 100       | 128        |
| **core**                      | **4**       | **5000**  | **8000**   | **5000**  | **8000**   |
| **digitalAssetManagement**    | **4**       | **1000**  | **2048**   | **1000**  | **2048**   |
| imageProcessor                | 1           | 200       | 2048       | 200       | 2048       |
| openLdap                      | 1           | 200       | 768        | 200       | 768        |
| **persistenceNode**           | **2**       | **1000**  | **2048**   | **1000**  | **2048**   |
| **persistenceConnectionPool** | **2**       | 500       | 512        | 500       | 512        |
| **ringApi**                   | **4**       | **800**   | **512**    | 500       | **512**    |
| runtimeController             | 1           | 100       | 256        | 100       | 256        |
| **haproxy**                   | **4**       | **700**   | **1024**   | **1000**  | **1024**   |
| licenseManager                | 1           | 100       | 300        | 100       | 300        |
| **Total**                     |             | **33700** | **54956**  | **33700** | **54956**  |


##### Details of Pods in native-kube deployment

![](../../../../images/pods_single-node_c5_9xlarge_config.png)

##### Results overview


| DX Single node Config Sizing               | Run1                                                                   | Run2                                                                  | Run3                                                                  | Run4                                                                 |
| ------------------------------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Environment                                | AWS/Native Kube                                                        | AWS/Native Kube                                                       | AWS/Native Kube                                                       | AWS/Native Kube                                                      |
| Test Time (IST)                             | 2024-03-15T13:30:00 - 18:30:00                                         | 2024-04-17T22:49:00 - 2024-04-18T1:54:00                              | 2024-04-18T8:36:00 - 10:51:00                                         | 2024-04-18T12:32:00 - 14:35:00                                       |
| Total samples                              | 19715730                                                               | 10927343                                                              | 7596758                                                               | 6781806                                                              |
| Concurrent Users                           | 10000(WCM - 4000 DAM - 3000 Page&Portlet - 3000)                       | 5000(WCM - 2000 DAM - 1500 Page&Portlet - 1500)                       | 3016(WCM - 1200 DAM - 904 Page&Portlet - 912)                         | 2504(WCM - 1008 DAM - 744 Page&Portlet - 752)                        |
| Total Throughput (transactions/sec)        | 1058.66                                                                | 983.73                                                                | 937.44                                                                | 922.4                                                                |
| Total Avg Response Time (in milli seconds) | 5572.72                                                                | 2526.04                                                               | 1203.10                                                               | 845.84                                                               |
| CPU Usage (%)                               | 80.2                                                                   | 70.90 ( max-80.9)                                                     | 69.46 (max -80.5)                                                     | 69.29(max-82.74)                                                     |
| Memory Usage (%)                            | 44.56                                                                  | 42.63                                                                 | 40.96                                                                 | 34.3                                                                 |
| Disk Read IO (io/sec)                       | 0.5                                                                    | 0.14                                                                  | 0.05                                                                  | 0.1                                                                  |
| Disk Write IO (io/sec)                      | 23.1                                                                   | 16.17                                                                 | 15.41                                                                 | 14.71                                                                |
| DAM EventLoop lag (ms)                      | 16.3                                                                   | 11.40                                                                 | 10.80                                                                 | 8.16                                                                 |
| Ring EventLoop lag (ms)                     | 7.26                                                                   | 26.30                                                                 | 26.30                                                                 | 6.73                                                                 |
| Error (%)                                   | 0                                                                      | 0.00                                                                  | 0.01                                                                  | 0                                                                    |
| Test Duration (sec)                         | 18600                                                                  | 11100                                                                 | 8100.00                                                               | 7350                                                                 |
|                                            | Top 5 Requests (Avg Respone Time in ms)                                | Top 5 Requests (Avg Respone Time in ms)                               | Top 5 Requests (Avg Respone Time in ms)                               | Top 5 Requests (Avg Respone Time in ms)                              |
|                                            | Get video - mp4 1.1 mb custom url - curlmp41.1mb - (24315.91)          | Get video - mp4 1.1 mb custom url - curlmp41.1mb - (10053.67)         | Get video - mp4 1.1 mb custom url - curlmp41.1mb - (4381.84)          | Get video - mp4 1.1 mb custom url - curlmp41.1mb - (2913.21)         |
|                                            | Get doc - pdf 171 kb  custom url - curlpdf171kb - (24228.67)           | Get doc - pdf 171 kb  custom url - curlpdf171kb - (10023.32)          | Get doc - pdf 171 kb  custom url - curlpdf171kb - (4340.01)           | Get doc - pdf 171 kb  custom url - curlpdf171kb - (2856.73)          |
|                                            | Get image - jpeg 155 kb custom url - curljpg155kb - (24194.05)         | Get image - jpeg 155 kb custom url - curljpg155kb - (9979.99)         | Get image - jpeg 155 kb custom url - curljpg155kb - (4331.49)         | Get image - jpeg 155 kb custom url - curljpg155kb - (2845.83)        |
|                                            | Get video - mp4 15mb - idmp415mb - (13017.10)                          | Get video - mp4 15mb - idmp415mb - (5777.50)                          | Get video - mp4 15mb - idmp415mb - (3029.90)                          | Get video - mp4 15mb - idmp415mb - (2326.63)                         |
|                                            | Get doc - pdf - 5mb - friendly url - Desktop - furlpdf5mb - (12745.02) | Get doc - pdf - 5mb - friendly url - Desktop - furlpdf5mb - (5550.00) | Get doc - pdf - 5mb - friendly url - Desktop - furlpdf5mb - (2807.16) | Get doc - pdf - 5mb - friendly url - Desktop - furlpdf5mb- (2029.32) |



##### Observations 

- 76 bad requests out of 6647702 samples (contributing to 0% error rate) from JMeter results observed only in DAM APIs, which is negligible.

- The CPU usage of a node reached an average of 80% in tests with 10000 concurrent users. The saturation was checked by reducing the number of users to 5000, 3000, and 2500 users. Node CPU average usage is then close to 70% and maximum is 80% in all 5000, 3000, and 2500 users load test results.

- For 5000 and 3000 concurrent users, results of average and 90th pct response time of APIs exceed 5 seconds.

-  It is suggested that for a single node (c5.9xlarge) rendering scenarios for DAM, WCM, and pages with portlets, the recommended load is 2500 concurrent users with good average and 90th percentile (pct) response times. The top five response times of rendering APIs are all in the range of 4 to 5 seconds.


