# Cache expire parameters

You use the "expires" parameter in HCL Web Content Manager tags and URLs to specify how long to maintain data in the cache before it is expired. When data expires from a cache, the next request for the data will be retrieved from the original server. The expires parameter is not mandatory.

Custom expiring parameters can be used only when a server's default web content cache is set to none or advanced caching. If basic caching is used as your default web content cache, custom expiration cannot be used. Even though you cannot use custom expiration with basic caching enabled, you can still use custom expiration \(when you use the advanced cache\) to expire data in the basic cache.

Values for the expires parameter can represent either a relative period or an absolute date and time:

-   **Basic cache**

    -   `EXPIRES="ABS {date and time}"`
    -   `EXPIRES="REL {integer}{units}"`
-   **Advanced Caching**

    -   `CONTENTCACHEEXPIRES="ABS {date and time}"`
    -   `CONTENTCACHEEXPIRES="REL {integer}{units}"`
-   **Data caching**

    -   `CONNECTORCACHEEXPIRES="ABS {date and time}"`
    -   `CONNECTORCACHEEXPIRES="REL {integer}{units}"`

**Examples:**

```
<CONNECT MOD=Web SRV=HTML ACTION=http://www.ibm.com CACHE=SITE 
EXPIRES="REL 9000s">
```

```
http://host:port/wps/wcm/connect/library/sitearea/content?cache=site&expires="REL 9000s"
```

## Custom expiring strategies

-   `CONNECTORCACHEEXPIRY=` must be used when you set custom expiry parameters to retrieving external data by using a connect tag or URL request.
-   If your default cache is basic, or if you specify `CACHE=` in a connect tag or URL request, you must use `EXPIRES=`.
-   If your default cache is advanced, or if you specify `CONTENTCACHE=` in a connect tag or URL request, you must use `CONTENTCACHEEXPIRES=`.
-   If your default cache is none, and only `CACHE=`, or `CONTENTCACHE=` is specified in a connect tag or URL request, the `connect.connector.httpconnector.defaultcacheexpires` property in the `WCM WCMConfigService` service is used to expire the data.

## Specifying an absolute time

An absolute date specifies the date and time the document expires.

To indicate a time, use the following format:

-   ABS \{date and time\}

For example:

-   ABS Mon, 29 May 2000 03:04:18 GMT

A request for this document after this exact time causes the document to be flushed from the cache and a new copy retrieved.

When you specify an absolute expiry date, the date must be prefixed with ABS, and the date must be in one of the following formats:

-   Mon, 06 Nov 2000 09:00:00 GMT
-   Monday, 06-Nov-00 09:00:00 GMT
-   Mon Nov 6 09:00:00 2000.
-   6 Nov 2000 9:00 AM.

The first three date formats use the standard HTTP specification, while the last is a simple, short date format for convenience.

When you use absolute times and dates to expire data, cached items remain in the cache until they expire. When expired, the original item is retrieved on the next request and a copy is placed in the cache. Because the absolute time or date has already expired, the item will immediately be expired. Whn expired, an item is not permanently cached again when you use absolute times and dates. All absolute time values are in GMT.

## Specifying a relative period

Rather than specifying an absolute time, a relative time can be used to specify that the document will expire some time after the document is placed in the cache, for example a number of hours or days. The actual time the document expires is then calculated from the time the document is retrieved and added to the cache.

Rather than specifying a fixed time for the expiry of cached data, the expiry can be specified relative to the time that the data was added to the cache, for example, a number of hours or days.

To indicate a relative time use the following format:

-   REL \{integer\}\{units\}

**Note:** The space after REL is required.

The integer specifies a whole number of time units. Decimal numbers are not supported. The units are specified by using a single case-insensitive character:

-   S: Seconds
-   H: Hours
-   D: Days
-   M: Months

|In a connect tag|In a URL Request|
|----------------|----------------|
|-   `EXPIRES="REL 2M"`
-   `EXPIRES="REL 9000s"`

|-   `EXPIRES=REL 2M`
-   `EXPIRES=REL 9000s`

|

The first example indicates an expiry of two months. The second indicates 9000 seconds \(2.5 hours\).

By design only seconds, hours, days, or months can be specified. Minutes are not supported to simplify the interface \(M is used for months\). Instead, a multiple of seconds can be used \(for example, 300 seconds for 5 minutes\).

## Caching, content updates, and syndication

When an item is updated, either directly or as a result of syndication, no cache is updated. The rendered item is not updated until each configured cache is expired. It is important to choose cache timeout parameters that compliment your syndication strategy.


**Related information**  


[Strategies for expiring content](../wcm/wcm_config_delivery_caching_expiring.md)

[Controlling access to hosts specified in a URL](../wcm/wcm_config_accesshost.md)

[Setting service configuration properties](../admin-system/adsetcfg.md)

