# Limitations

The following limitations exist in HCL DAM:

-   Content created using Content Composer and DAM cannot be used with the HCL Digital Experience Projects capabilities.
-   Deployments that set an alternate context root are supported in Content Composer from HCL DX 9.5 Container Update CF195 and in DAM from HCL DX 9.5 Container Update CF193.
-   Renditions for graphics interchange format (GIF) images are not yet supported.
-   When planning to use the Content Composer features in an authoring environment, with the Container Update CF181 release, it is only supported when running with one Digital Experience 9.5 core container (pod). This limitation does not apply when using the Web Content Management Authoring Portlet or when just using the new DAM feature. It also does not apply to environments used for rendering.
-   When using Kaltura with DAM, all uploaded videos are anonymously accessible for everyone who knows the URL, regardless of the access control setting on the collection containing the video. Do not use Kaltura integration if you have sensitive videos that should not be available without authentication.
-   If you are using a content delivery network (CDN) such as [Akamai](https://www.akamai.com/our-thinking/cdn/what-is-a-cdn){:target="_blank"}, using `Vary: Origin` may prevent you from caching content. To bypass this limitation, your CDN configuration must strip the `Vary` header on the way in, to reinstate your ability to cache content. On the way out, you can append the `Origin` parameter to the `Vary` header when serving a response using **'Modify Outgoing Response Header'**.
-   The following are additional limitations at this time related to [DAM staging](../configuration/staging_dam/dam_subscription_staging.md):
    -   Two-way staging for DAM is currently not supported in HCL Digital Experience. 
    -   Staging assets between DAM servers is currently supported only when moving small batches of assets (around 5) at a single point in time, irrespective of the number of assets in the DAM. Staging larger volumes of assets may experience problems and so is not supported at this time. This functionality is currently being updated to improve performance and robustness and to provide support for staging larger volumes.
    -   WCM syndication and DAM staging are not integrated, and as such, there are times where either DAM or WCM have been updated while the other one is still in progress - during those times links could result in 404 errors or older links being displayed. We are improving the integration for future releases.
    -   In case of issues with DAM staging, a solution can be to [de-register and register the subscriber/s](../configuration/staging_dam/dam_subscription_staging#registering-or-deregistering-for-dam-staging).
-   Editing functions in DAM are limited to images with a pixel count of up to `268402689` (`~268 Megapixels`).
-  When migrating from CF204 or below to CF208 or above, ensure you have image/webp added to your allowed media types via [API](https://opensource.hcltechsw.com/experience-api-documentation/dam-api/#operation/MediaTypeController.createAll). If not, upgrade to CF205 and then upgrade to any version of CF208 or above.
- Image tagging in DAM by **Google Vision** is limited to images with a pixel count of up to `75 Megapixels` and size up to `40 MB`.
- If you are uploading multiple large size images simultaneously for Image tagging by **Google Vision**, memory limit for google vision pod can be increased to avoid Out-of-memory issue.
