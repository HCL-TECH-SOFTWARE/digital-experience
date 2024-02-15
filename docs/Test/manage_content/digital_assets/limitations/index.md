# Limitations

The following limitations exist in HCL DAM:

-   Content created using Content Composer and DAM cannot be used with the HCL Digital Experience Projects capabilities.
-   Deployments that set an alternate context root are supported in Content Composer from HCL DX 9.5 Container Update CF195 and in DAM from HCL DX 9.5 Container Update CF193.
-   Renditions for graphics interchange format (GIF) images are not yet supported.
-   When using Kaltura with DAM, all uploaded videos are anonymously accessible for everyone who knows the URL, regardless of the access control setting on the collection containing the video. Do not use Kaltura integration if you have sensitive videos that should not be available without authentication.
-   If you are using a content delivery network (CDN) such as [Akamai](https://www.akamai.com/our-thinking/cdn/what-is-a-cdn){:target="_blank"}, using `Vary: Origin` may prevent you from caching content. To bypass this limitation, your CDN configuration must strip the `Vary` header on the way in, to reinstate your ability to cache content. On the way out, you can append the `Origin` parameter to the `Vary` header when serving a response using **'Modify Outgoing Response Header'**.
-   The following are additional limitations at this time related to [DAM staging](../configuration/staging_dam/dam_subscription_staging.md):
    -   Two-way staging for DAM is currently not supported in HCL Digital Experience. 
    -   WCM syndication and DAM staging are not integrated, and as such, there are times where either DAM or WCM have been updated while the other one is still in progress - during those times links could result in 404 errors or older links being displayed. We are improving the integration for future releases.
    -   In case of issues with DAM staging, a solution can be to [de-register and register the subscriber/s](../configuration/staging_dam/dam_subscription_staging#registering-or-deregistering-for-dam-staging).
    -   You can [find mismatches and resync DAM](../configuration/staging_dam/dam_staging_mismatch.md) items between publisher and subscriber using DX-Client. There are certain [limitations](../configuration/staging_dam/dam_staging_mismatch.md#limitations) when generating reports and executing the resync.
    -   DAM staging between environments is supported only within the same CF versions.
-   Editing functions in DAM are limited to images with a pixel count of up to `268402689` (`~268 Megapixels`).
-  When migrating from CF204 or below to CF208 or above, ensure you have the mime type image/webp added to your allowed media types via [API](../../../extend_dx/apis/hcl_experience_api/openapi_example_API_calls.md#add-a-new-mime-type-in-dam). If not, upgrade to CF205 and then upgrade to any version of CF208 or above.
- Image tagging in DAM by **Google Vision** is limited to images with a pixel count of up to `75 Megapixels` and an image size of up to `40 MB`.
- If you are uploading multiple large-sized images simultaneously and the mime types of those images are configured for Keyword generation, you can increase the memory limit for the google vision pod to avoid any out-of-memory issues that can occur.
