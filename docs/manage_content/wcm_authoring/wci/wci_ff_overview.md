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

## RSS Feed Elements for Web Content Integrator

The following section outlines the key channel-level and item-level elements relevant to the Web Content Integrator when processing RSS feed files.

### Channel-Level Elements

Each RSS feed file must contain exactly one `<channel>` element. This element holds various sub-elements that provide metadata about the feed itself. The Web Content Integrator specifically uses or requires the following sub-elements within the `<channel>` element:

#### title

* **Purpose:** Specifies the name of the feed.
* **RSS 2.0 Requirement:** This element is **required** by the RSS 2.0 specification.
* **Integrator Use:** The Web Content Integrator does not use the value of this element.

#### link

* **Purpose:** Contains a URL that points to the web page hosting the feed.
* **RSS 2.0 Requirement:** This element is **required** by the RSS 2.0 specification.
* **Integrator Use:** The Web Content Integrator does not use the value of this element.

#### description

* **Purpose:** Provides a brief description of the channel's content.
* **RSS 2.0 Requirement:** This element is **required** by the RSS 2.0 specification.
* **Integrator Use:** The Web Content Integrator does not use the value of this element.

#### lastBuildDate

* **Purpose:** Contains a date and time stamp indicating the last time the feed's content changed. All dates within the feed must conform to the [RFC 822 format](https://datatracker.ietf.org/doc/html/rfc822).
* **RSS 2.0 Requirement:** This element is optional according to the RSS 2.0 specification. However, some feed reader applications might depend on its presence.
* **Integrator Use:** In certain scenarios, the Web Content Integrator stores the `lastBuildDate` element's value and passes it back to the feed producer in subsequent requests. This mechanism helps to indicate which version of the feed has already been syndicated.

### Item-Level Elements

For the Web Content Integrator, each `<item>` element within the feed represents a specific item type. The Web Content Integrator supports creating or updating the following item types via the feed:

* Content items
* Site areas
* Taxonomies
* Categories
* Components

### Web Content Integrator Sub-Elements

The Web Content Integrator utilizes or requires the following sub-elements within feed entries:

#### title

* **Purpose:** The value of this element is stored in the **Name** field of Web Content Manager items. For content items, it also forms part of the URL to the content page.
* **Naming Conventions:** Because it is used in the **Name** field, the title can contain only alphanumeric characters (a-z, A-Z, 0-9), spaces, and the following special characters: `$`, `-`, `_`, `.`, `!`, `(`, `)`, `,`.
* **Requirement:** This is a **required** sub-element.

#### link

* **Purpose:** This element specifies the URL to the source content. In some scenarios, it serves as the base URL for resolving any relative links embedded within the content.

#### description

* **Purpose:** This element's value is stored in the **Description** field of Web Content Manager items.
* **Format:** Although the RSS specification permits entity-encoded or escaped HTML in this element, the **Description** field in Web Content Manager items is designed for plain text only. Therefore, for the Web Content Integrator, this element must contain only plain text.

#### pubDate

* **Purpose:** This element's value must be an [RFC 822](https://datatracker.ietf.org/doc/html/rfc822) time and date stamp. It represents the time an item was added to, or last updated in, the feed.
* **Integrator Use:** The Web Content Integrator uses this date in combination with the `<guid>` element to determine if an item has already been processed. Each time an item is updated via the feed, the `pubDate` value in the feed entry must also update to reflect the change.
* **Requirement:** This is a **required** sub-element.

#### guid

* **Purpose:** The `<guid>` element must contain an ID that uniquely identifies the item. This is often a unique identifier from the source content management system.
* **Integrator Use:** The Web Content Integrator maintains a mapping of this ID to the item's internal Web Content Manager ID to ensure correct updates or deletions of existing Web Content Manager items.
* **Format:** This field is case-sensitive and can contain any string of characters up to 256 characters in length. The `isPermaLink` attribute is ignored by the Integrator.
* **Requirement:** This is a **required** element.

#### category

* **Purpose:** Each `<category>` element contains a hierarchical metadata tag that describes the content. The Web Content Integrator translates this element's value into taxonomy and category items in Web Content Manager.
* **Automatic Creation:** If the category tree specified in the `<category>` element does not already exist in Web Content Manager, the Integrator automatically creates it when processing the feed entry.
* **Optional `domain` Attribute:** The RSS 2.0 specification defines an optional `domain` attribute for the category element. Feed producers can use this attribute to specify the name of the Web Content Library where the category tree should be created. This attribute applies only to content items.
* **Multiple Categories:** A single `<item>` element may contain multiple `<category>` elements.
* **Naming Conventions:** Because this value is used in the **Name** field of Web Content Manager taxonomy and category items, the title can contain only alphanumeric characters (a-z, A-Z, 0-9), spaces, and the following special characters: `$`, `-`, `_`, `.`, `!`, `(`, `)`, `,`.
* **Requirement:** This is a **required** sub-element.

#### author

* **Purpose:** According to the RSS 2.0 specification, this element contains the author's email address. The specification allows only a single `<author>` element per item. Generally, this refers to the author of the content item in the source content management system.
* **Integrator Use:** The Web Content Integrator attempts to resolve the email address into the common name of a portal user. If successful, that user's name is stored in the author field of the Web Content Manager item.
* **Default Behavior:** If this element is not present in the feed, or if the email address cannot be resolved to a portal user, the system user's name is stored in the author field instead.
