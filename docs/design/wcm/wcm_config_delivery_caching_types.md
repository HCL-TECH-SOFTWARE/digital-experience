# Web content cache types

Learn about the types of caching used by HCL Web Content Manager, basic web content caching, and advanced web content caching.

## Basic web content caching

This option is the simplest caching option. The first time a web page is rendered by the Web Content Manager application, it is stored in a cache. Users then access this page from the cache until it expires. Only then is the web page rendered afresh. The main benefit of this scenario is improved performance. Basic caching is used only on static content that does not require "real-time" access.

## Advanced web content caching

There are two major differences between basic caching and advanced caching:

-   Advanced caching can cache pages based on different user profiles.
-   Cache parameters in connect tags and URL requests can be used to override your server's default advanced web content caching settings that allow you to set custom cache settings for individual web pages or components.

|Advanced caching type|Details|
|---------------------|:------|
|Site caching|This type is the same as the basic web content cache except that cache parameters in connect tags and URL requests can be used to override your server's default advanced web content caching settings.|
|Session caching|When session caching is enabled, a copy of each web page a user visits is stored in the session cache. The User accesses the cached version of a web page until they start a new session, or until the cached web page is expired from the cache.|
|User caching|When user caching is enabled, a copy of each web page a user visits is stored in the user cache. The user accesses the cached version of a web page until the cached web page is expired from the cache.|
|Secured caching|Secured caching is used on sites where the item security features are used to grant different users access to different web pages and components based on the groups they belong to.|
|Personalized caching|Personalized caching is used to cache web pages of users who have the same "personalization profile". This means that users who have selected the same personalization categories and keywords, and who belong to the same group, share a single cache.|

## Default web content caching versus custom caching

Cache parameters in connect tags and URL requests can be used to override your server's default advanced web content caching settings allowing you to set custom cache settings for individual web pages or components.

In most cases, basic, site and session caching would only be used as your server's default web content cache. User, secured and personalized caching would mostly be used when using custom caching in connect tags and URL requests.

**Note:** If basic caching is used as your default web content cache, custom caching cannot be used.

## Cache comparisons

|Function|Basic caching|Advanced caching|
|--------|-------------|:--------------:|
|Memory usage per item:|Medium|High|
|Performance improvement:|Very High|High|
|Custom caching available:|No|Yes|
|Connect tag processing:|No|Yes|
|Web Content Viewer Portlet:|No|Yes|

**Caching Personalization components:**

Web content caching can sometimes be used with Personalization components but will depend on the conditions set in the personalization rule, or the resources used to determine the rule results. Cache testing will be required to determine if the content returned by your personalization component can be cached using web content caching.

