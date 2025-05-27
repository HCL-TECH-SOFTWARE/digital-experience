# Performance Sizing Guide for Kubernetes Deployments

This section provides sizing guides for HCL Digital Experience (DX) rendering scenarios in a Kubernetes configuration. The goal of these sizing guides is to identify the optimal Kubernetes configurations for varying levels of DX demands, ranging from small to large setups. Additionally, this guide provides tuning recommendations for Kubernetes pods based on their specific workloads, such as rendering-intensive tasks.

For the performance guidance deployments to support Kubernetes container platforms, refer to [Containerization requirements and limitations](../../../get_started/plan_deployment/container_deployment/limitations_requirements.md).

## Introduction

In DX performance testing, it is important to determine both DX container sizing and the relationships between the components that make up DX. The goal of performance testing is to identify the optimal Kubernetes configurations for varying levels of DX demands, ranging from small to large setups. This sizing guidance evaluates configurations supporting 1,000, 10,000, and 30,000 virtual users for small, medium, and large setups, respectively.

The key performance indicators in these tests are the number of concurrent users, the average response time, and throughput. These metrics serve as benchmarks for evaluating the performance of small, medium, and large DX configurations and offer insights into the system's capacity to handle varying loads. This sizing guidance demonstrates how strategic adjustments can result in significant performance improvements.

The sizing tests examined rendering scenarios for the Web Content Manager (WCM), Digital Asset Management (DAM), and HCL DX pages and portlets. The tests were facilitated by rendering setups deployed on AWS/Native-Kubernetes, where Kubernetes is installed directly in Amazon Elastic Cloud Compute (EC2) instances. This guide presents a comprehensive overview of the findings, offering guidance for organizations seeking to optimize their DX platforms for peak performance.

## Definition of terms

Refer to the following definition of terms used throughout the performance tests and sizing guidances:

- Concurrent user: The number of virtual users actively sending requests to the target application simultaneously.

- Thread Groups: Concurrent users are simulated using Thread Groups and are configured using the Threads (Users), the Ramp-up Period, and the Loop Count.
    - Number of Threads (Users): The number of concurrent users.
    - Ramp-up Period: The time taken to start all the Threads (Users).
    - Loop Count: The number of iterations each user performs.
    - Think Time: A timer that can be added to simulate real user behavior. Adding a Think Time may cause the number of concurrent users at any given time to fluctuate.
    
        For example, Threads (Users): 100, Ramp-up Period: 10 seconds, Loop Count: 1.

        This means JMeter will simulate loading 100 users over 10 seconds, leading to approximately 10 users per second.

- Authenticated user: A Portal “User” role.
- Unauthenticated user:  A Portal “Anonymous User” role.
- OpenLDAP:  An open-source implementation of LDAP (Lightweight Directory Access Protocol). All authenticated Users are added to OpenLDAP.

!!!note
    Deployment of the OpenLDAP container in a production environment is not supported. For more information, refer to [Configure Applications - OpenLDAP configuration](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_apps.md#openldap-configuration).

**Metrics**

- Average response time: The average time taken to receive a response from the server for all the requests made during the test.
- 95th Percentile Response Time (95th pct): The response time below which 95% of the requests were completed. Only 5% of the requests took longer than this time to complete.
- Throughput: The number of requests processed by the system per unit of time. For example, requests per second or per minute.

## Methodology

Refer to the following methodology used for the performance tests.

### Overview of DX rendering sizing-performance tests

These sizing activities rendered scenarios for WCM, DAM, and HCL DX pages and portlets. The activities used a rendering setup enabled in AWS/Native-Kubernetes, where Kubernetes is installed directly in Amazon EC2 instances. Combination runs were performed that rendered WCM content, DAM assets, and DX pages and portlets. The load distribution was WCM content (40%), DAM assets (30%), and DX pages and portlets (30%). All systems were pre-populated before performing the rendering tests.

### Rendering scenarios and users details

The following table contains the rendering scenario details for each configuration.

| Concurrent users     |  WCM pages         |  DAM Content         |  Pages and portlets content   |
| -------------------- | ------------------ | -------------------- | ----------------------------- |
| Small – 1,000 users  | 20                 | 2,500                |    8                          |
| Medium – 10,000 users| 200                | 25,000               |    80                         |
| Large – 30,000 users | 200                | 25,000               |    80                         |

- The concurrent user load distribution are as follows:
    - WCM: 40% of the user load (50% authenticated and 50% anonymous).
    - Pages and Portlets: 30% of the user load (50% authenticated and 50% anonymous).
    - DAM: 30% of the user load (all anonymous).

    Refer to the [DX Sizing rendering scenarios guide](./dxsizing_rendering_scenarios.pdf){target="_blank"} for more information.

- All authenticated users were added to openLDAP with the "User" role.
- The same users are utilized for both WCM and Pages and Portlets. 

#### Test data details

Based on the rendering scenarios and user details for small, medium, and large configurations, the following test data are created to support the DX rendering performance tests:

- [WCM default test data](#wcm-default-test-data)
- [DAM default test data](#dam-default-test-data)
- [Pages and portlets default test data](#pages-and-portlets-default-test-data)

#### WCM default test data

The following WCM setup is commonly used in scenarios where there are multi-nested site areas in libraries with content such as rich text, PDF files, and images in a page. 20 pages are used for small configuration testing, and 200 pages are used for medium and large configuration testing. Refer to the following list for more information about this setup:

- The default test data includes a WCM design library named "PerformanceTestDesign" and five content libraries named "PerformanceTestContent01" to "PerformanceTestContent05."

- Each content library has four site area levels, with each level containing four site areas. As a result, there are a total of 256 leaf site areas containing content.

- Each leaf site area holds 10 content items, resulting in a total of 12,800 content items across all libraries.

**Content visibility**

- Half of the content items are accessible to both "Anonymous" and "All Authenticated" users.

- The remaining half is restricted to members of 10 specific groups per content item, distributed among 500 groups in the test LDAP. The groups are named "Group0000" to "Group0499." Half of these restricted content items are tagged with the keyword "MENU" for categorization.

**Portal page setup**

- There are 20 test portal pages labeled "PerformanceTest." Each page is accessible through a user-friendly URL format such as `/perf/page-xx`.

- Each page contains six WCM viewer portlets that display content from one of the 20 top-level site areas.

- Pages 01 to 04 display content from site areas "SA01" to "SA04" in the "PerformanceTestContent01" library.

- Pages 05 to 08 display content from site areas "SA01" to "SA04" in the "PerformanceTestContent02" library, and so on.

**Portlet configurations**

- Four portlets on each page display a single content item from different sub-site areas. For example, on page 01, the portlets will display content items from "SA01.01.01.01," "SA01.02.01.01," and so on.

- One portlet provides a navigator for browsing site areas and content items under the top-level site area.

- The final portlet presents a menu that filters items tagged with the keyword "MENU," scoped to the top-level site area.

**User setup**

A total of 99,999 authenticated users were added to openLDAP for performance testing.

#### DAM default test data

The following DAM setup covers the different types of the most commonly used assets in three different ways: UUID, custom, and friendly URLs. Testers uploaded 2,500 assets for a small configuration and 25,000 assets for medium and large configurations. These assets include 136 KB JPG images, 199 KB DOCX documents, and 1.1 MB MP4 videos to preheat the environment. After preloading the assets for the respective configurations, 15 assets containing a mix of original images and renditions were uploaded and rendered for one hour at peak load, following the ramp-up time.

The test rendered assets using three custom URLs, eight UUID URLs, and eight friendly URLs over one hour. Refer to the detailed summary of the results below.

| Asset    | Type          | Size                                            |
| -------- | ------------- |-------------------------------------------------|
| Image    | JPG/PNG/TIF   | 155 KB, 2 MB, 5 MB, 500 KB, 100 KB, 2 MB, 300 KB|
| Video    | MP4/WebM      | MP4 - 1 MB, 15 MB, 100 MB<br> WebM - 2 MB        |
| Document | DOCX/XLSX/PPTX| 5 MB, 199 KB, 200 KB, 2 MB, 199 KB              |

Examples of DAM asset rendering APIs of UUID, Custom URL, and Friendly URL are provided below:

- UUID: `https://<host-name>/dx/api/dam/v1/collections/f5764415-afd3-4b18-90ab-5c933e9965a8/items/b2204c8f-bd26-4f9b-865f-1fc1f8e26a13/renditions/09d278d6-1ae7-4a2a-950d-c1fa7f0bacde?binary=true`.
    
- Custom: `https://<host-name>/dx/api/dam/custom/customURL2-1715776542673?binary=true`.
    
- Friendly: `https://<host-name>/dx/api/dam/v1/assets/Jmeter.11667/wcm-sample-content.png?rendition=Tablet?binary=true`.

!!!note
      For DAM, only anonymous rendering is available.

#### Pages and portlets default test data

The following pages and portlets setup covers the different types of the most commonly used portlets as listed in this section. Performance tests include the response time for rendering the whole page with the portlet. Knowing the response times for rendering pages is important as these portlets are often used in DX content. Refer to the following list for more information about this setup:

- The tests used a total of 8 unique pages with portlets for the small configuration and 80 pages for medium and large configurations.
- Both anonymous and authenticated users were granted access for authoring and rendering. The same users utilized in WCM rendering are also used here.
- All authenticated users were assigned the "User" role.
- The following list shows the pages, their corresponding page numbers, and the portlet details for authoring on each page:
    - Page 1: Two articles.
    - Page 2: Two rich texts.
    - Page 3: Login portlet.
    - Page 4: Information portlet (JSR).
    - Page 5: Search Center portlet.
    - Page 6: Custom JSF portlet with simple form. Disable this portlet for now.
    - Page 7: Script Application portlet. Added JavaScript Functions and Date and Time object examples.
    - Page 8: Added all mentioned portlets in this section except for the custom JSF portlet.

    !!!note
        The JSP portlet file required to load Page 4 and render its portlets is located at `jsp/oob/welcome.jsp`.

After completing the authoring steps, the anonymous and authenticated portal users must render the pages. Every page request uses a `/GET` API call such as `/wps/portal/portletsperf/page1`. A response assertion in the sampler also validates the HTML content in the response body.

## Limitations

These performance tests are primarily focused on DAM API. Client-side rendering, such as browser-based rendering, is excluded from the tests.

???+ info "Related information"
    - For details about the environments used, test results, and recommendations for each configuration, refer to the following pages:
        - [Sizing guidance for rendering in a small-sized Kubernetes configuration](rendering_small_config.md)
        - [Sizing guidance for rendering in a medium-sized Kubernetes configuration](rendering_medium_config.md)
        - [Sizing guidance for rendering in a large-sized Kubernetes configuration](rendering_large_config.md)
