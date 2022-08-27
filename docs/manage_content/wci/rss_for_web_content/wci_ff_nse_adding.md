# Adding the custom namespace definition to the feed

The first requirement is to add the namespace reference to the RSS element at the beginning of the feed.

The URL of the namespace is specified by using the following tag:

```
<rss version="2.0" xmlns:ibmwcm="http://purl.org/net/ibmfeedsvc/wcm/1.0" >
```

This is a fixed property value that the feed parser uses as the key to identify elements that belong to the custom Web Content Integrator namespace.

For example:

```
<?xml version="1.0"?>
	**<rss version="2.0" xmlns:ibmwcm="http://purl.org/net/ibmfeedsvc/wcm/1.0" \>**
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
			**<ibmwcm:itemType\>Content</ibmwcm:itemType\>**
		</item>
	</channel>
</rss>
```

The namespace label "ibmwcm" can be changed if the label specified in the namespace declaration matches the label that is used on the extended elements in the feed.


