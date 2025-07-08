# Feed Format Overview

RSS 2.0 is a dialect of XML, and all RSS files must comply with the XML 1.0 specification as published by the World Wide Web Consortium \(W3C\). RSS feed files typically have file extensions of either .rss or .xml. The Web Content Integrator does not impose any file naming conventions on the feed producer.

## RSS 2.0 feed file format

The most commonly used media type options are "text/xml" and "application/rss+xml". The choice of media type does impact how the Web Content Integrator is able to determine the character encoding of the feed. If the character encoding cannot be determined correctly, the Web Content Integrator will produce errors when parsing the feed. Therefore it is important to choose an appropriate media type for your environment.

Following the XML prolog, an RSS 2.0 file begins with a single <rss\> element. This element has one required attribute, "version", which must be set to "2.0". The file must also contain a single <channel\> element which contains a number of sub-elements that provide some metadata about the feed as a whole. The <channel\> element must contain one or more <item\> elements. The <item\> elements in turn contain sub-elements which provide information about the content that is being syndicated. For example:

```
<?xml version="1.0"?>
<rss version="2.0">
	<channel>
		<title>Sample Feed</title>
		<link>http://www.ibm.com/feeds/sample.rss</link>
		<description>An example RSS Feed</description>
		<lastBuildDate>Tue, 31 Oct 2006 10:31:00 EST</lastBuildDate>
		<item>
			<title>News Item Two</title>
			<link>http://www.ibm.com/news/two.htm</link>
			<description>
			This is a summary of the second news article
			</description>
			<pubDate> Tue, 31 Oct 2006 10:31:00 EST</pubDate>
		</item>
		<item>
			<title>News Item One</title>
			<link>http://www.ibm.com/news/one.htm</link>
			<description>
			This is a summary of the first news article.
			</description>
			<pubDate> Tue, 31 Oct 2006 10:30:00 EST</pubDate>
		</item>
		</channel>
	</rss>
```

!!! note
    If your feed contains non-ASCII data, you must specify `encoding="UTF-8"` in the XML declaration:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    ```

## Channel-level elements

Each RSS feed file must contain only one `<channel>` element. This element allows a number of sub-elements that provide metadata about the channel. The Web Content Integrator uses or requires the following elements:

-   **title**

    This element specifies the name of the feed. The RSS 2.0 specification requires this element, but the Web Content Integrator does not use it.

-   **link**

    This element contains a URL that points to the web page hosting the feed. The RSS 2.0 specification requires this element, but the Web Content Integrator does not use it.

-   **description**

    This element contains a brief description of the channel's content. The RSS 2.0 specification requires this element, but the Web Content Integrator does not use it.

-   **lastBuildDate**

    This element contains a date and time stamp that represents the last time the feed's content changed. This date, and any others in the feed, must conform to the RFC 822 format. This element is optional according to the RSS 2.0 specification; however, some feed reader applications might depend on it. In certain cases, the Web Content Integrator stores the `lastBuildDate` element's value and passes it back to the feed producer on the next request. This indicates which version of the feed it has already syndicated.

## Item-level elements

For the Web Content Integrator, each item in the feed represents an item type. You can create or update the following item types via the feed:

-   Content items
-   Site areas
-   Taxonomies
-   Categories
-   Components

The Web Content Integrator uses or requires the following sub-elements:

-   **title**

    This element's value is stored in the **Name** field of Web Content Manager items. For content items, it becomes part of the URL to the content page. Because it is used in the **Name** field, the title can contain only alphanumeric characters (a-z, A-Z, 0-9), spaces, and the following characters: `$`, `-`, `_`, `.`, `!`, `(`, `)`, `,`. This is a required sub-element.

-   **link**

    This is the URL to the source content. In some cases, it acts as the base URL from which any relative links embedded in the content are resolved.

-   **description**

    This element's value is stored in the **Description** field of Web Content Manager items. Although the RSS specification allows entity-encoded or escaped HTML in this element, the **Description** field in Web Content Manager items is not designed to store HTML. For the Web Content Integrator, this element must contain only plain text.

-   **pubDate**

    This element's value must be an RFC 822 time and date stamp, representing the time the item was added to, or updated in, the feed. The Web Content Integrator uses this date in combination with the `<guid>` element to determine if it has already processed the item. Each time an item updates via the feed, the `pubDate` value in the feed entry also updates to indicate a change. This is a required sub-element.

-   -   **guid**

    The `<guid>` element must contain an ID to uniquely identify the item, often a unique ID from the source content management system. The Web Content Integrator maintains a mapping of this ID to the item's internal Web Content Manager ID to correctly update or delete existing Web Content Manager items. This field is case-sensitive and can contain any string of characters up to 256 characters in length. The `isPermaLink` attribute is ignored. This is a required element.

-   **category**

    Each `<category>` element contains a hierarchical metadata tag that describes the content. The Web Content Integrator translates this element's value into taxonomy and category items in Web Content Manager. If the category tree specified in the `<category>` element does not already exist in Web Content Manager, the Web Content Integrator automatically creates it when it processes the feed entry.

    The RSS 2.0 specification defines an optional `domain` attribute for the category element. Feed producers can use this attribute to store the name of the Web content library where the category tree is to be created. This element applies only to content items. A single `<item>` may contain multiple category elements.

    Because this value is used in the **Name** field of Web Content Manager taxonomy and category items, the title can contain only alphanumeric characters (a-z, A-Z, 0-9), spaces, and the following characters: `$`, `-`, `_`, `.`, `!`, `(`, `)`, `,`. This is a required sub-element.

-   **author**

    According to the RSS 2.0 specification, this element contains the author's email address. The specification allows only a single `<author>` element per item. Generally, this is the author of the content item in the source content management system.

    The Web Content Integrator attempts to resolve the email address into the common name of a portal user and then stores that user's name in the author field of the Web Content Manager item. If this element is not present in the feed or if the email address cannot be resolved, the system user's name is stored in the author field instead.



