---
id: toolbar_friendlyurl
title: Friendly URL name
---

Associate friendly URL names with pages, labels, and content items in your website. Then, the URLs are constructed by using the friendly URLs names. As a result, your website has human readable URLs that are easy to remember.

For a friendly URL to work for a specific page or content item, every page or label that leads to that page or content item must have a friendly URL name. When you create a new page or content item from site manager, the system recommends a friendly URL name, based on the title of your content item or page. Friendly URLs take the following general form:

```
http://host\_name/context/content_root/friendly\_url\_name/friendly\_url\_name/[!ut/p/encoded\_portal\_suffix]
```

The `friendly_url_name` portion of the URL is made up of the friendly URL names of all pages in the path of the website hierarchy. The hierarchy begins at the content root and ends with the page or content item for which you want to give your users a friendly URL.

For example, you have a page that is named **Products** and it has a friendly URL name of `products`. The Products page has a child page that is named Appliances and has a friendly URL name of `appliances`. To access the appliances page, site visitors can type the following friendly URL into the browser address field:

```
http://www.host_name/wps/portal/products/appliances
```

When the page renders, the URL resolves to `http://www.host_name/wps/portal/products/appliances/[!ut/p/encoded\_portal\_suffix]`

Portal appends an encoded suffix to that friendly URL. The suffix represents the current state of the page and its components.
