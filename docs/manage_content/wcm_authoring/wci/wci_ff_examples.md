# Example feeds

This section provides examples that illustrate how to represent various item types within a feed.

!!! note
    If your feed contains non-ASCII data, you must specify `encoding="UTF-8"` in the XML declaration:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    ```
## Site area feed


This example shows an RSS feed that creates a site area in Web Content Manager.


```
<?xml version="1.0"?>
<rss version="2.0" xmlns:hclwcm="http://purl.org/net/hclfeedsvc/wcm/1.0">
  <channel>
    <title>Sample Feed</title>
    <link>http://www.hcl.com/feeds/sample.rss</link>
    <description>An example RSS feed</description>
    <lastBuildDate>Tue, 31 Oct 2006 10:31:00 EST</lastBuildDate>


    <item>
      <title>News</title>
      <link>http://www.hcl.com/news/index.htm</link>
      <description>This is a site area.</description>
      <guid>20000001</guid>
      <pubDate>Tue, 31 Oct 2006 10:31:00 EST</pubDate>
      <author>jsample@hcl.com</author>
      <hclwcm:action>add</hclwcm:action>
      <hclwcm:itemType>siteArea</hclwcm:itemType>
      <hclwcm:path>/SiteAreaName</hclwcm:path>
      <hclwcm:owner>jsample</hclwcm:owner>
      <hclwcm:defaultContent>80000002</hclwcm:defaultContent>
      <hclwcm:children>
        <hclwcm:childGuid>20000011</hclwcm:childGuid>
        <hclwcm:childGuid>80000002</hclwcm:childGuid>
      </hclwcm:children>
      <hclwcm:templateMap authoring="AT News" presentation="PT News" />
      <hclwcm:access type="user">[all users]</hclwcm:access>
    </item>
  </channel>
</rss>
```
## Taxonomy feed


This example shows an RSS feed that creates a top-level taxonomy category in Web Content Manager.


```
<?xml version="1.0"?>
<rss version="2.0" xmlns:hclwcm="http://purl.org/net/hclfeedsvc/wcm/1.0">
  <channel>
    <title>Sample Feed</title>
    <link>http://www.hcl.com/feeds/sample.rss</link>
    <description>An example RSS feed</description>
    <lastBuildDate>Tue, 31 Oct 2006 10:31:00 EST</lastBuildDate>


    <item>
      <title>Audience</title>
      <link>http://www.hcl.com/index.htm</link>
      <description>This is the top-level taxonomy.</description>
      <guid>30000001</guid>
      <pubDate>Tue, 31 Oct 2006 10:31:00 EST</pubDate>
      <author>jsample@hcl.com</author>
      <hclwcm:action>add</hclwcm:action>
      <hclwcm:itemType>category</hclwcm:itemType>
      <hclwcm:path>/</hclwcm:path>
      <hclwcm:owner>jsample</hclwcm:owner>
      <hclwcm:access type="user">[all users]</hclwcm:access>
    </item>
  </channel>
</rss>
```

## Category feed

This example shows an RSS feed that creates a second-level category under an existing taxonomy in Web Content Manager.

```
<?xml version="1.0"?>
<rss version="2.0" xmlns:hclwcm="http://purl.org/net/hclfeedsvc/wcm/1.0">
  <channel>
    <title>Sample Feed</title>
    <link>http://www.hcl.com/feeds/sample.rss</link>
    <description>An example RSS feed</description>
    <lastBuildDate>Tue, 31 Oct 2006 10:31:00 EST</lastBuildDate>

    <item>
      <title>Employees</title>
      <link>http://www.hcl.com/index.htm</link>
      <description>This is a second-level category.</description>
      <guid>40000001</guid>
      <pubDate>Tue, 31 Oct 2006 10:31:00 EST</pubDate>
      <author>jsample@hcl.com</author>
      <hclwcm:action>add</hclwcm:action>
      <hclwcm:itemType>category</hclwcm:itemType>
      <hclwcm:path>/Audience</hclwcm:path>
      <hclwcm:createLinks>
        <hclwcm:parentGuid>30000001</hclwcm:parentGuid>
      </hclwcm:createLinks>
      <hclwcm:owner>jsample</hclwcm:owner>
      <hclwcm:children>
        <hclwcm:childGuid>40000011</hclwcm:childGuid>
      </hclwcm:children>
      <hclwcm:access type="user">[all users]</hclwcm:access>
    </item>
  </channel>
</rss>
```

## Component feed


This example shows an RSS feed that creates a reusable HTML component in Web Content Manager.


```
<?xml version="1.0"?>
<rss version="2.0" xmlns:hclwcm="http://purl.org/net/hclfeedsvc/wcm/1.0">
  <channel>
    <title>Sample Feed</title>
    <link>http://www.hcl.com/feeds/sample.rss</link>
    <description>An example RSS feed</description>
    <lastBuildDate>Tue, 31 Oct 2006 10:31:00 EST</lastBuildDate>


    <item>
      <title>hcl Footer</title>
      <link>http://www.hcl.com/files/footer.htm</link>
      <description>This is a shared chunk of HTML.</description>
      <guid>53000001</guid>
      <pubDate>Tue, 31 Oct 2006 10:31:00 EST</pubDate>
      <author>jsample@hcl.com</author>
      <hclwcm:action>add</hclwcm:action>
      <hclwcm:itemType>component</hclwcm:itemType>
      <hclwcm:owner>jsample</hclwcm:owner>
      <hclwcm:element name="footer">
        <hclwcm:type>html</hclwcm:type>
        <hclwcm:value>
<![CDATA[<span style="font-size: 8pt;">Copyright 2006 
<a href="http://www.hcl.com">International Business Machines, Inc.</a> 
All rights reserved.</span>]]>
        </hclwcm:value>
      </hclwcm:element>
      <hclwcm:access type="user">[all users]</hclwcm:access>
    </item>
  </channel>
</rss>
```

## Content feed

This example shows an RSS feed that creates a content item in Web Content Manager.

```
<?xml version="1.0"?>
<rss version="2.0" xmlns:hclwcm="http://purl.org/net/hclfeedsvc/wcm/1.0">
  <channel>
    <title>Sample Feed</title>
    <link>http://www.hcl.com/feeds/sample.rss</link>
    <description>An example RSS feed</description>
    <lastBuildDate>Tue, 31 Oct 2006 10:31:00 EST</lastBuildDate>

    <item>
      <title>Release 2.0 Announcement</title>
      <link>http://www.hcl.com/news/Rel2Announce.htm</link>
      <description>This is a content item.</description>
      <guid>80000001</guid>
      <pubDate>Tue, 31 Oct 2006 10:31:00 EST</pubDate>
      <author>jsample@hcl.com</author>
      <category>/Audience/Employees</category>
      <category>/Audience/Customers</category>
      <hclwcm:action>add</hclwcm:action>
      <hclwcm:itemType>content</hclwcm:itemType>
      <hclwcm:authoringTemplate>News</hclwcm:authoringTemplate>
      <hclwcm:path>/SiteAreaName/News</hclwcm:path>
      <hclwcm:createLinks>
        <hclwcm:parentGuid>20000001</hclwcm:parentGuid>
      </hclwcm:createLinks>
      <hclwcm:owner>jsample</hclwcm:owner>
      <hclwcm:keywords>software,content management</hclwcm:keywords>
      <hclwcm:workflow name="Std Workflow">
        <hclwcm:workflowStage>Live</hclwcm:workflowStage>
      </hclwcm:workflow>
      <hclwcm:publishDate>Wed, 1 Nov 2006 06:00:00 EST</hclwcm:publishDate>
      <hclwcm:expirationDate>Sun, 31 Dec 2006 23:59:00 EST</hclwcm:expirationDate>
      <hclwcm:genDateOne>Fri, 15 Dec 2006 09:00:00 EST</hclwcm:genDateOne>
      <hclwcm:additionalViewer>All Dealers</hclwcm:additionalViewer>
      <hclwcm:element name="Headline">
        <hclwcm:type>text</hclwcm:type>
        <hclwcm:value>Release 2.0 Ships Today</hclwcm:value>
      </hclwcm:element>
      <hclwcm:element name="Summary">
        <hclwcm:type>text</hclwcm:type>
        <hclwcm:value>
The long anticipated Release 2.0 of our flagship product became available earlier today.
        </hclwcm:value>
      </hclwcm:element>
      <hclwcm:element name="Body">
        <hclwcm:type>rich text</hclwcm:type>
        <hclwcm:value>
<![CDATA[<p>Suspendisse posuere commodo turpis.</p>
<p>Vivamus nunc nulla, volutpat in, luctus a, facilisis eu, mi.</p>]]>
        </hclwcm:value>
      </hclwcm:element>
      <hclwcm:element name="Image">
        <hclwcm:type>image</hclwcm:type>
        <hclwcm:source>http://cmsserver.hcl.com/images/rel20box.gif</hclwcm:source>
      </hclwcm:element>
      <hclwcm:access type="user">[all users]</hclwcm:access>
    </item>
  </channel>
</rss>
```





