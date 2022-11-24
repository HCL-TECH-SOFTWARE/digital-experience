# Strategies for expiring content

Like caching strategies, a server's default expiration strategies can be set in the WCM WCMConfigService service by using the WebSphere Integrated Solutions Console. Custom expiring parameters can also be set in connect tags and URL requests to override a server's default expiration strategies.

!!! note
    If basic caching is used as your default web content cache, custom expiration cannot be used.

In most cases the expiry schedule is based around how often the source content is updated. So, if the source content is updated hourly, then each cache would be expired hourly. If the source content is updated daily, then each cache would be expired daily.

Beyond these examples, a different expiry schedule would be used. If your web pages were only updated weekly, or monthly, you would still schedule your caches to expire daily. Otherwise, when your source content was updated, it might take up to a week for it to appear on your site.

## Caching expiries versus workflow expiries

The expiration parameter in a workflow is not related to the `Expires` parameter in HCL Web Content Manager caching. A page that is set to expire at midnight as part of a workflow will only do so if it has not already been saved in a cache. The page remains in the cache until expired by the Web Content Manager application regardless of the `Expires` setting in a workflow.


???+ info "Related information"
    - [Cache expire parameters](../../../wcm_configuration/custom_caching/wcm_dev_caching_expire-parameters.md)

