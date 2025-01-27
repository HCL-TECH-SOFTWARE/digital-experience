# Performance Sizing Guide for Kubernetes Deployments

This section provides sizing guides for HCL Digital Experience (DX) rendering scenarios in a Kubernetes configuration. The goal of these sizing guides is to identify the optimal Kubernetes configurations for varying levels of DX demands, ranging from small to large setups. Additionally, this guide provides tuning recommendations for Kubernetes pods based on their specific workloads, such as rendering-intensive tasks.

For the performance guidance deployments to support Kubernetes container platforms, refer to [Containerization requirements and limitations](../../../get_started/plan_deployment/container_deployment/limitations_requirements.md).

## Introduction

In Digital Experience (DX) performance testing, it is important to determine both DX container sizing and the relationships between the components that make up DX. The goal of performance testing is to identify the optimal Kubernetes configurations for varying levels of DX demands, ranging from small to large setups. This sizing guidance evaluates configurations supporting 1,000, 10,000, and 30,000 virtual users for small, medium, and large setups, respectively.
 
In this investigation, the key performance indicators are the number of concurrent users, the average response time, and throughput. These metrics serve as benchmarks for evaluating the performance of a small, medium and large DX configurations, offering insights into the system's capacity to handle varying loads.. This sizing guidance demonstrates how strategic adjustments can result in significant performance improvements.
 
The sizing tests examined rendering scenarios for Web Content Manager (WCM), portlets, and Digital Asset Management (DAM). The tests were facilitated by a rendering setup deployed on AWS/Native-Kubernetes (Kubernetes installed directly in Amazon EC2 instances). This guide presents a comprehensive overview of the findings, offering guidance for organizations seeking to optimize their DX platforms for peak performance.

## Definition of terms

- In the JMeter context, a Concurrent User refers to the number of users executing test requests at the same time (in parallel). It represents how many virtual users are actively sending requests to the target application simultaneously.

In JMeter, concurrent users are simulated using Thread Groups, where: 

- Number of Threads (users) – Represents the number of concurrent users.

- Ramp-up Period – The time taken to start all the threads (users).

- Loop Count – Number of iterations each user performs.

- Example setup: Threads (Users): 100,  Ramp-up Period: 10 seconds, Loop Count: 1

This means JMeter will start 100 users over 10 seconds, leading to approximately 10 users per second.

- Think Time: If timers (e.g., Think Time) are added to simulate real user behavior, the number of concurrent users at any given time may fluctuate.

- Authenticated user - Portal “User”role
- Unauthenticated user - Portal “Anonymous User”

- OpenLDAP is an open-source implementation of LDAP (Lightweight Directory Access Protocol). All authenticated Users are added to OpenLDAP

Metrics

- Average response time: The average time taken to receive a response from the server for all the requests made during the test.

- 95th Percentile Response Time (95th pct): The response time below which 95% of the requests were completed. In other words, only 5% of the requests took longer than this time to complete.

- Throughput: The number of requests processed by the system per unit of time (e.g., requests per second or per minute).


## Methodology

### Overview of DX rendering sizing-performance tests

This sizing work consisted of rendering scenarios of WCM, portlets, and DAM with a rendering setup enabled in AWS/Native-Kubernetes (Kubernetes installed directly in Amazon EC2 instances). A combination run was performed that rendered WCM content, DAM assets, and DX pages and portlets. The load distribution was WCM content (40%), DAM assets (30%), and DX pages and portlets (30%). All systems were pre-populated before performing the rendering tests.

### Rendering scenario details

The following table contains the rendering scenario details for each configuration.

| Concurrent users     |  WCM pages         |  DAM Content         |  Pages and portlets content   |
| -------------------- | ------------------ | -------------------- | ----------------------------- |
| Small – 1,000 users  | 20                 | 2,500                |    8                          |
| Medium – 10,000 users| 200                | 25,000               |    80                         |
| Large – 30,000 users | 200                | 25,000               |    80                         |

#### Rendering scenarios and users details

- Concurrent user load distribution: WCM - 40% users (50% authenticated and 50% anonymous), Pages and Portlets - 30% users (50% authenticated and 50% anonymous), DAM - 30% users (anonymous).

- All authenticated users were added to openLDAP with the "User" role.

- The same users are utilized for both WCM and Pages and Portlets. 

#### Test data details

Based on these details for small, medium and large configurations, the following test data are created to support the DX rendering performance tests:

- [WCM default test data](#wcm-default-test-data)
- [DAM default test data](#dam-default-test-data)
- [Pages and portlets default test data](#pages-and-portlets-default-test-data)

#### WCM default test data

This setup is common in most of the scenarios where there are multi-nested site areas in libraries with content such as rich text, PDF files, and images in a page and nearly 20 pages in a small configuration and 200 pages in a medium and large configuration. Refer to the following list for more information about this setup:

The default test data includes a WCM design library named "PerformanceTestDesign", along with five content libraries named "PerformanceTestContent01" to "PerformanceTestContent05".

Each content library has four levels of site areas, with four site areas per level, resulting in a total of 256 leaf site areas that contain content.

Each leaf site area holds 10 content items, making a total of 12,800 content items across all libraries.

##### Content visibility

- Half of the content items are accessible to both "Anonymous" and "All Authenticated" users.

- The remaining half is restricted to members of 10 specific groups per content item, distributed among 500 groups in the test LDAP, named "Group0000" to "Group0499". Half of these restricted content items are tagged with the keyword "MENU" for categorization.

##### Portal page setup

- There are 20 test portal pages under the label "PerformanceTest", each with a user-friendly URL format like "/perf/page-xx".

- Each page contains six WCM viewer portlets, displaying content from one of the 20 top-level site areas.

- Pages 01 to 04 display content from site areas "SA01" to "SA04" in the library "PerformanceTestContent01".

- Pages 05 to 08 display content from "SA01" to "SA04" in "PerformanceTestContent02", and so on.

##### Portlet configurations:

- Four portlets on each page display a single content item from different sub-site areas (e.g., on page 01, the first items from "SA01.01.01.01", "SA01.02.01.01", etc.).

- One portlet provides a navigator for browsing site areas and content items under the top-level site area.

- The final portlet presents a menu, filtering items tagged with the keyword "MENU", scoped to the top-level site area.

##### User setup:

A total of 99,999 authenticated users were added to openLDAP for performance testing.

#### DAM default test data

The following DAM setup covers the mix and match of the different types of most commonly used assets in three different ways: UUID, custom, and friendly URLs. Testers uploaded 2,500 assets for a small configuration and 25,000 assets for a medium and large configurations. These assets include images (136 KB, .jpg), documents (199 KB, .docx), and videos (1.1 MB, .mp4) to preheat the environment. After preloading 2,500 assets for small and 25,000 assets for medium and large configurations, 15 assets containing a mix of original images and renditions were uploaded and rendered for 1 hour at peak load after ramp-up time.

The test rendered assets using three custom URLs, 8 UUID URLs, and 8 short URLs over a duration of one hour. A detailed summary of the results is provided below.

| Asset    | Type          | Size                                            |
| -------- | ------------- |-------------------------------------------------|
| Image    | JPG/PNG/TIF   | 155 KB, 2 MB, 5 MB, 500 KB, 100 KB, 2 MB, 300 KB|
| Video    | MP4/WebM      | MP4 - 1MB, 15 MB, 100 MB<br> WebM - 2 MB        |
| Document | DOCX/XLSX/PPTX| 5 MB, 199 KB, 200 KB, 2 MB, 199 KB              |

- Examples of DAM asset rendering APIs of UUID, Custom URL, and Friendly URL:

      - UUID - `https://<host-name>/dx/api/dam/v1/collections/f5764415-afd3-4b18-90ab-5c933e9965a8/items/b2204c8f-bd26-4f9b-865f-1fc1f8e26a13/renditions/09d278d6-1ae7-4a2a-950d-c1fa7f0bacde?binary=true`

      -  Custom - `https://<host-name>/dx/api/dam/custom/customURL2-1715776542673?binary=true`

      -  Friendly - `https://<host-name>/dx/api/dam/v1/assets/Jmeter.11667/wcm-sample-content.png?rendition=Tablet?binary=true`

!!!note
      For DAM, only anonymous rendering is available.

#### Pages and portlets default test data

The following pages and portlets setup covers the different types of the most commonly used portlets as listed in this section. Performance tests include the response time for rendering the whole page with the portlet. Knowing the response times for rendering pages is important because these portlets are often used in DX content.

The tests used a total of eight unique pages with portlets for small configuration and 80 pages for medium and large configurations. To complete authoring and rendering, both anonymous and authenticated users received access. The same users were added in openLDAP as for WCM rendering. All authenticated users were assigned the User role. The following list shows the pages, their corresponding page numbers, and the portlet details for authoring on each page.

- Page 1 - 2 Articles
- Page 2 - 2 Rich text
- Page 3 - Login portlet
- Page 4 - Information portlet (JSR) - JSP file -  jsp/oob/welcome.jsp 
- Page 5 - Search Center portlet
- Page 6 - Custom JSF portlet with simple form (Disable this portlet for now.)
- Page 7 - Script Application portlet (Added JavaScript Functions and Date and Time object examples)
- Page 8 - Added all mentioned portlets in this section except JSF portlet


After completing the authoring steps, the anonymous portal user and authenticated users (added to openLDAP) must render the pages. Every page request uses a /GET API call (for example, /wps/portal/portletsperf/page1) and there is a response assertion in a sampler to validate the content HTML in the response body.


## Limitations

- Our primary focus is on DAM API performance testing. Client-side rendering (e.g., browser-based rendering) is excluded from our tests. 
 

For details about the environments used and the test results and recommendations for each configuration, refer to the following pages:

- [Sizing guidance for rendering in a small-sized Kubernetes configuration](rendering_small_config.md)
- [Sizing guidance for rendering in a medium-sized Kubernetes configuration](rendering_medium_config.md)
- [Sizing guidance for rendering in a large-sized Kubernetes configuration](rendering_large_config.md)
