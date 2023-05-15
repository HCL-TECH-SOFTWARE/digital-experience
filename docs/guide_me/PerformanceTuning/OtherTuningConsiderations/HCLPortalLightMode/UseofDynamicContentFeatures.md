# Use of Dynamic Content Features

HCL Portal contains dynamic content support infrastructure which supports two dynamic content features:
dynamic user interfaces and attribute based administration. If neither of these features is being used, the
dynamic content support can be disabled. Note that attribute based administration is only one use of the
Personalization capabilities in WebSphere Portal. Other uses of Personalization, such as placing content
spots within a portlet, do not require the dynamic content features.

Disabling the dynamic content features will provide a modest performance benefit. It will provide a
reduction in the memory needed for each user and also will reduce the processing time for generating
pages in HCL Portal. For example, in one measurement with our base Portal scenario, capacity improved
about 5% when disabling the dynamic content support.

## How to Set

In the Integrated Solutions Console

Resources -> Resource Environment -> Resource Environment Providers -> WP ConfigService -> Custom Properties -> New
Name: content.topology.dynamic
Value: false