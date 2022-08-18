# Feed format overview

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

**Note:** If non-ascii data is used in a feed, then encoding="UTF-8" must be specified in the feed: `<?xml version="1.0" encoding="UTF-8"?>`

## Channel-level Elements

Each RSS feed file must contain only one channel element. There are a number of allowable sub-elements of the channel that provide some metadata about the channel itself. The following elements are either required or used by the Web Content Integrator.

-   **title**

    This element is used to provide the name of the feed. This element is required by the RSS 2.0 specification but is not used by the Web Content Integrator.

-   **link**

    This element contains a URL that points to the Web page containing the feed. This element is required by the RSS 2.0 specification but is not used by the Web Content Integrator.

-   **description**

    This element contains a brief description of the content of the channel. This element is required by the RSS 2.0 specification but is not used by the Web Content Integrator.

-   **lastBuildDate**

    This element contains a date and time stamp representing the last time the content of the feed was changed. This date, as well as any others in the feed, must conform to the RFC 822 format. This is an optional element according to the RSS 2.0 specification, however some feed reader applications may depend on it. In certain cases the Web Content Integrator will store the value in the lastBuildDate element and then pass it back to the feed producer on the next request as a way of indicating which version of the feed it has already syndicated.


## Item-level Elements

For the purposes of the Web Content Integrator, each item in the feed represents an item type. The following item types can be created or updated via the feed:

-   Content items
-   Site Areas
-   Taxonomies
-   Categories
-   Component

The following sub-elements are either required or used by the Web Content Integrator:

-   **title**

    The value of this element is stored in the Name field of Web content items. For content items this becomes part of the URL to the content page. As this is used in the Name field of Web content items, the title can contain only alphanumeric characters \(a-z, A-Z, 0-9\), spaces, and the following characters: $ - \_ . ! \( \) , This is a required sub-element.

-   **link**

    This is the URL to the source content. In some cases it will be used as the base URL from which any relative links embedded in the content are resolved.

-   **description**

    The value of this element will be stored in the Description field of Web content items. Although the RSS specification allows entity-encoded or escaped HTML to be placed in this element, the Description field in Web content items is not designed to store HTML. For the purposes of the Web Content Integrator this element must only contain plain text.

-   **pubDate**

    The value of this element must be an RFC 822 time and date stamp representing the time that the item was added to, or updated in, the feed. The Web Content Integrator will use this date in combination with the <guid\> element to determine whether or not it has already processed the item. Each time an item is updated via the feed the value of the <pubDate\> in the feed entry will be updated as well to indicate that something has changed. This is a required sub-element.

-   **guid**

    The <guid\> element must contain an ID to uniquely identify the item. This will often be a unique ID from the source content management system. The Web Content Integrator will maintain a mapping of this ID to the item's internal Web Content Manager ID. This is necessary in order to be able to correctly update or delete items that already exist in Web Content Manager. This field is case sensitive and can contain any string of characters up to a maximum 256 characters in length. The isPermaLink attribute will be ignored. This is a required element.

-   **category**

    Each <category\> element will contain a hierarchical meta data tag that describes the content. The value of this element will be translated into taxonomy and category items in Web Content Manager. If the category tree specified in the <category\> element does not already exist in Web Content Manager it will be created automatically by the Web Content Integrator when the feed entry is processed. The RSS 2.0 specification defines an optional domain attribute for the category element. Feed producers can use this attribute to store the name of the Web content library where the category tree is to be created. This element only applies to content items. A single <item\> may contain multiple category elements. As this will be used in the Name field of Web content taxonomy and category items, the title can contain only alphanumeric characters \(a-z, A-Z, 0-9\), spaces, and the following characters: $ - \_ . ! \( \) , This is a required sub-element.

-   **author**

    According to the RSS 2.0 specification this element contains the author's e-mail address. The specification only allows a single <author\> element per item. Generally this will be the author of the content item in the source content management system. The Web Content Integrator will attempt to resolve the e-mail address into the common name of a portal user and then store the name of that user in the author field the Web Content Manager item. If this element is not present in the feed, or if the e-mail address cannot be resolved, then the name of the system user will stored in the author field of the Web Content Manager item instead.


**Parent topic:**[IBM Web Content Integrator](../wci/wci_intro.md)

