# HCL Content Composer

The HCL Content Composer delivers simplified processes for creating and managing Digital Experience site content.

Users can access the Content Composer features in HCL Digital Experience 9.5 Container Update CF181 and higher releases.

Follow the instructions below to install, configure, and use the HCL Digital Experience 9.5 Content Composer.

## Limitations

The following limitations exist in HCL Content Composer:

-   Content created using Content Composer and Digital Asset Management cannot be used with the HCL Digital Experience Projects capabilities.
-   Content Composer and Digital Asset Management may not be used with HCL DX 9.5 container deployments that set an alternate context root.
-   The use of Content Composer features in a Virtual Portal deployment pattern is not supported for HCL Content Composer 9.5 CF192 and earlier releases.
-   Content Composer Workflow selections can be established in a content template and workflow stages in content items can be progressed by the content author. Workflow item comments and content item workflow approvals by designated reviewers are now available in HCL Content Composer 9.5 CF192 and later releases.
-   When planning to use the Content Composer features in an authoring environment, with the Container Update CF181 release, it is only supported when running with one Digital Experience 9.5 core container \(pod\). This limitation does not apply when using the Web Content Management Authoring Portlet or when just using the new Digital Asset Management feature. It also does not apply to environments used for rendering.
-   When uploading a file or an image via Experience API or Content Composer, the actual file uploaded may be larger than expected when processing through Experience API or Content Composer. This is because REST data in Experience API must be text-based, which is why when uploading files via Experience API or Content Composer, Base64 is used to convert binary content before sending it to HCL Portal. The size increase caused by the Base64 transformation causes the encoded file or image to be approximately **30% larger** than the file size on disk.
-   In Content Composer CF19 and higher releases, there are two modes you can choose between for WCM, authoring performance and rendering performance. If you have tuned WCM for rendering performance, caches are not invalidated immediately. In this setup, if you upload WCM content it will not be immediately available unless you invalidate the cache.

    There are two ways to do a cache invalidation:

    1.  On a Kubernetes platform, it is recommended that you use authoring for any kind of content editing; or
    2.  Use the IBM Extended Cache Monitor for IBM WebSphere Application Server.
        -   Documentation resource: [IBM Extended Cache Monitor for IBM WebSphere Application Server technology preview](https://www.ibm.com/developerworks/websphere/downloads/cache_monitor.md)
-   HCL Content Composer 9.5 CF191 and higher releases supports the following Content Elements only:
    -   Text elements
    -   Media elements \(File and Image\)
    -   Date and Time elements
    -   Component Reference elements
    -   Link elements
    -   Option Selection elements
    -   User Selection elements
-   If HCL Content Composer CF19 through CF192 are deployed in a Hybrid Configuration, and if image element renditions are set and saved, the results will not be visible to the Content Composer page. This is a known issue, and the underlying content and template are saved successfully. This will be resolved in a future Content Composer update.

    Content authors may use the WCM Authoring portlet to preview the selected image renditions.


