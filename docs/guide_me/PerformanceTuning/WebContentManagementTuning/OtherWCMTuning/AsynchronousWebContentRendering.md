# Asynchronous Web Content Rendering

WP 8.5 CF06 introduced the asynchronous web content rendering feature to decrease page loading
response times. As described in the HCL Digital Experience Help Center, asynchronous web content
rendering can selectively be enabled for Web Content Viewer portlets that take a long time to render.
When we apply this feature to heavy-weight Web Content Viewer portlets or Web Content Viewer portlets
with a slow back end, we measure significant performance enhancements. But we do not recommend
applying this feature to all Web Content Viewer portlets.

## How to Set

- Go to the page that contains the Web Content Viewer portlet for which you want to enable asynchronous web content rendering.
- Change to Edit mode.
- Open the display menu of the portlet.
- Select Edit Shared Settings to enter the configuration mode.
- Expand the Advanced Options section if it is not expanded yet.
- Scroll down to the Asynchronous Web Content Rendering section.
- To enable asynchronous web content rendering for this portlet, select the check box in the Asynchronous Web Content Rendering subsection.
- Click OK to save and leave the Edit Shared Settings mode. [Asynchronous Web Content Rendering Setting](../../../../images/AsynchronousWebContentRendering.png)
- There are other values that can be set. For more details, see: https://help.hcltechsw.com/digitalexperience/9.5/wcm/wcm_config_asynch_wcm_rendr.html

Use of WCM advanced caching with Aynchronous Web Content Rendering is recommended to improve
response times of subsequent requests. See the WCM Advanced Caching section for instructions on
how to enable WCM advanced caching.
