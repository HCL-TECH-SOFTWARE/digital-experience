# Limitations

The following limitations exist in HCL DAM:

-   Content created using Content Composer and DAM cannot be used with the HCL Digital Experience Projects capabilities.
-   Deployments that set an alternate context root are supported in Content Composer from HCL DX 9.5 Container Update CF195 and in DAM from HCL DX 9.5 Container Update CF193.
-   Renditions for graphics interchange format \(GIF\) images are not yet supported.
-   When planning to use the Content Composer features in an authoring environment, with the Container Update CF181 release, it is only supported when running with one Digital Experience 9.5 core container \(pod\). This limitation does not apply when using the Web Content Management Authoring Portlet or when just using the new DAM feature. It also does not apply to environments used for rendering.
-   When using Kaltura with DAM, all uploaded videos are anonymously accessible for everyone who knows the URL, regardless of the access control setting on the collection containing the video. Do not use Kaltura integration if you have sensitive videos that should not be available without authentication.
-   If you are using a content delivery network \(CDN\) such as [Akamai](https://www.akamai.com/our-thinking/cdn/what-is-a-cdn), using `Vary: Origin` may prevent you from caching content. To bypass this limitation, your CDN configuration must strip the `Vary` header on the way in, to reinstate your ability to cache content. On the way out, you can append the `Origin` parameter to the `Vary` header when serving a response using **'Modify Outgoing Response Header'**.



