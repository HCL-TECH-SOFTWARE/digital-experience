# Performance Sizing Guide for Kubernetes Deployments

This section provides sizing guides for HCL Digital Experience (DX) rendering scenarios in a Kubernetes configuration. The goal of these sizing guides is to identify the optimal Kubernetes configurations for varying levels of DX demands, ranging from small to large setups.

For the performance guidance deployments to support Kubernetes container platforms, refer to [Containerization requirements and limitations](../../../get_started/plan_deployment/container_deployment/limitations_requirements.md).

## Introduction

In Digital Experience (DX) performance testing, it is important to determine both DX container sizing and the relationships between the components that make up DX. The goal of performance testing is to identify the optimal Kubernetes configurations for varying levels of DX demands, ranging from small to large setups. This sizing guidance examines these factors in a configuration using 1,000 and 10,000 virtual users for small and medium configurations, respectively.
 
In this investigation, the key performance indicators are the number of concurrent users, the average response time, and throughput. These metrics serve as benchmarks for evaluating the performance of a small DX configuration, providing insights into the system's ability to handle specific loads. This sizing guidance shows how strategic changes can lead to significant improvements in performance.
 
The sizing tests examined rendering scenarios for Web Content Manager (WCM), portlets, and Digital Asset Management (DAM). The tests were facilitated by a rendering setup deployed on AWS/Native-Kubernetes (Kubernetes installed directly in Amazon EC2 instances). This guide presents a comprehensive overview of the findings, offering guidance for organizations seeking to optimize their DX platforms for peak performance.

## Methodology

### Overview of DX rendering sizing-performance tests

This sizing work consisted of rendering scenarios of WCM, portlets, and DAM with a rendering setup enabled in AWS/Native-Kubernetes (Kubernetes installed directly in Amazon EC2 instances). A combination run was performed that rendered WCM content, DAM assets, and DX pages and portlets. The load distribution was WCM content (40%), DAM assets (30%), and DX pages and portlets (30%). All systems were pre-populated before performing the rendering tests.

### Rendering scenario details

The following table contains the rendering scenario details for each configuration.

| Concurrent users     |  WCM pages         |  DAM Content         |  Pages and portlets content   |
| -------------------- | ------------------ | -------------------- | ----------------------------- |
| Small – 1,000 users  | 20                 | 2,500                |    8                          |
| Medium – 10,000 users| 200                | 25,000               |    80                         |

Based on these details for small and medium configurations, the following test data are created to support the DX rendering performance tests:

- [WCM default test data](#wcm-default-test-data)
- [DAM default test data](#dam-default-test-data)
- [Pages and portlets default test data](#pages-and-portlets-default-test-data)

#### WCM default test data

This setup is common in most of the scenarios where there are multi-nested site areas in libraries with content such as rich text, PDF files, and images in a page and nearly 20 pages in a small configuration and 200 pages in a medium configuration. Refer to the following list for more information about this setup:

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

#### DAM default test data

The following DAM setup covers the mix and match of the different types of most commonly used assets in three different ways: UUID, custom, and friendly URLs. Testers uploaded 2,500 assets for a small configuration and 25,000 assets for a medium configuration. These assets include images (136 KB, .jpg), documents (199 KB, .docx), and videos (1.1 MB, .mp4) to preheat the environment. After preloading 2,500 assets for small and 25,000 assets for medium configuration, 15 assets containing a mix of original images and renditions were uploaded and rendered for 1 hour at peak load after ramp-up time.

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

#### Pages and portlets default test data

The following pages and portlets setup covers the different types of the most commonly used portlets as listed in this section. Performance tests include the response time for rendering the whole page with the portlet. Knowing the response times for rendering pages is important because these portlets are often used in DX content.

The tests used a total of eight unique pages with portlets for small configuration and 80 pages for medium configuration. To complete authoring and rendering, both anonymous and authenticated users received access. The same users were added in openLDAP as for WCM rendering. All authenticated users were assigned the User role. The following list shows the pages, their corresponding page numbers, and the portlet details for authoring on each page.

- Page 1 - 2 Articles
- Page 2 - 2 Rich text
- Page 3 - Login portlet
- Page 4 - Information portlet (JSR) - JSP file -  jsp/oob/welcome.jsp 
- Page 5 - Search Center portlet
- Page 6 - Custom JSF portlet with simple form (Disable this portlet for now.)
- Page 7 - Script Application portlet (Added JavaScript Functions and Date and Time object examples)
- Page 8 - Added all mentioned portlets in this section except JSF portlet


After completing the authoring steps, the anonymous portal user and authenticated users (added to openLDAP) must render the pages. Every page request uses a /GET API call (for example, /wps/portal/portletsperf/page1) and there is a response assertion in a sampler to validate the content HTML in the response body.

For details about the environments used and the test results and recommendations for each configuration, refer to the following pages:

- [Sizing guidance for rendering in a small-sized Kubernetes configuration](rendering_small_config.md)
- [Sizing guidance for rendering in a medium-sized Kubernetes configuration](rendering_medium_config.md)