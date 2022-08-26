# Caching HCL Web Content Manager elements

You can apply caching to elements by using "connect" tags to reference elements within presentation templates instead of the component or element tag.

**Important:**

-   See [Enabling connect tags](wcm_config_connect.md) for information on enabling connect tags.
-   **Process Connect Tags** must be selected in a presentation template form for connect tags to be processed.

## Example: Applying custom caching

An example of the type of tag that can be used to cache individual elements within a presentation template:

```
<connect
 SRV="cmpnt" PATH="/Library/SiteArea/Content"
 SOURCE="library" CMPNTNAME="TestNav" CONTENTCACHE="site" CONTENTCACHEEXPIRES="REL 9000s">
</connect>
```

|Parameter|Details|
|---------|-------|
|`SRV="cmpnt"`|The Service for this Module is "cmpnt".|
|`PATH="/libraryname/SiteArea/Content"`|This parameter sets the context for the element.The "sitepath" and "name" placeholders can be used instead of "PATH=" when caching menus or navigators:

```
[placeholder tag="sitepath"]/[placeholder tag="name"]
```

|
|`SOURCE="library"`|Source is either "content", "sitearea" or "library". In this example it is "library" because the element being cached comes from a component.|
|`CMPNTNAME="TestNav"`|This parameter is the name of the element to be cached.|
|`CONTENTCACHE="site"`|This parameter is either "site or "session".|
|`CONTENTCACHEEXPIRES="REL 9000s"`|The time the component expires from the cache is set here.|

The first time the presentation template is rendered, the element is added to the cache. The next time the presentation template is rendered, the element is displayed from the cache instead of being rendered afresh by the Web Content Manager application. The element is not rendered again by the Web Content Manager application until it is expired from the cache. For this reason, only elements that do not require to be freshly rendered every time that a page is accessed should be cached.

If you are caching a component that is used in more than one presentation template, save the connect tag as a HTML component and then reference that component in each presentation template. If you then need to change the cached component tags, you only need to change it in the HTML component rather than in multiple presentation templates.

If you have a set of cached components that use the same `ContentCacheExpires` parameter, save the `ContentCacheExpires` parameter as an HTML component and then reference that component in each connect tag that is used to cache components. If you then need to change the `ContentCacheExpires` parameter, you change it in the HTML component only, rather than in multiple connect tags. This also applies to any common cache tags.

## Example: Disabling caching

You can also use this method to disable caching. In this example the property CONTENTCACHE=NONE is used to disable caching of this element.

```
<connect
 SRV="cmpnt" PATH="/SiteArea/Content"
 SOURCE="library" CMPNTNAME="TestNav" CONTENTCACHE="none" >
</connect>
```


