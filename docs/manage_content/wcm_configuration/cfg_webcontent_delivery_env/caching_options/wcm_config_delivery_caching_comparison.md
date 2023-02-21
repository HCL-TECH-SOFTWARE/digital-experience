# Caching versus pre-rendering

Content that is displayed in rendering portlets and through HCL Web Content Manager can be cached. An alternative to caching is the use of the pre-rendering feature. View the differences between each strategy.

A pre-rendered site can be viewed in two ways:

-   **Using a web server**

    Viewing a pre-rendered site through a web server is similar to using basic caching because the displayed content is static and custom caching cannot be used.

-   **Using Web Content Manager**

    Viewing a pre-rendered site through Web Content Manager is similar to using advanced caching because content can be dynamic and custom caching can be used.


## Basic caching versus a pre-rendered site delivered with a web server

At first glance, the pre-rendering feature and basic caching do the same thing. There are some differences that determine which feature is the best for you.

The main difference between the two features is that the pre-rendering feature takes a snapshot of the entire site each time it is run. Basic caching caches only on a page-by-page basis. If performance is your main issue, then pre-rendering might be the answer. If not, then basic caching might be a better option.

|Function|Basic caching|Pre-rendered site that is delivered with a web server|
|--------|-------------|-----------------------------------------------------|
|Performance:|Very fast|Extremely fast|
|Connect tag processing:|Yes|No|
|Custom caching:|Yes|No|
|Memory requirements:|Low to Medium|Memory requirements depend on the web server that is being used.|
|Disk requirements:|Low to Medium|Potentially very high as the entire site must be able to fit on disk.|
|Unexpected broken links:|Yes <br/> As some pages can be cached at different times, there is a small chance that not all the links on a cached page are currently valid.|No <br/> The site is pre-rendered in a single batch, greatly reducing the chances of inconsistencies in the site.|

## Advanced caching versus a pre-rendered site delivered by using Web Content Manager

These options are similar. You might need to test both strategies before you which is best for your site.

|Function|Advanced caching|Pre-rendered site that is delivered through Web Content Manager|
|--------|----------------|---------------------------------------------------------------|
|Performance:|Fast when cached, but slower if the requested page has expired from the cache. \(As tag processing has a cost, this depends on how many connect tags a page contains.\)|Fast, but as tag processing has a cost, this depends on how many connect tags a page contains.|
|Connect tag processing:|Yes|No|
|Custom caching:|Yes|No|
|Memory requirements:|Medium to high.|Medium to high.|
|Disk requirements:|Medium to high.|Medium to high.|
|Unexpected broken links:|Yes <br/> As some pages may be cached at different times, there is a small chance that not all the links on a cached page will be currently valid.|No <br/> The site is pre-rendered in a single batch, greatly reducing the chances of inconsistencies in the site.|


