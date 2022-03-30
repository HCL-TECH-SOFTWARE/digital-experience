# Example feeds 

View some example feeds that illustrate how to represent the various item types within a feed.

**Note:** If non-ASCII data is used in a feed, then encoding="UTF-8" must be specified in the feed:

```
<?xml version="1.0" encoding="UTF-8"?>
```

## Site area feed

```
<?xml version="1.0"?>
<rss version="2.0" xmlns:ibmwcm="http://purl.org/net/ibmfeedsvc/wcm/1.0" >
   <channel>
      <title>Sample Feed</title>
      <link>http://www.ibm.com/feeds/sample.rss</link>
      <description>An example RSS Feed</description>
      <lastBuildDate>Tue, 31 Oct 2006 10:31:00 EST</lastBuildDate>

      <item>
         <title>News</title>
         <link>http://www.ibm.com/news/index.htm</link>
         <description>This is a Site Area.</description>
         <guid>20000001</guid>
         <pubDate> Tue, 31 Oct 2006 10:31:00 EST</pubDate>
         <author>jsample@ibm.com</author>
         <ibmwcm:action>add</ibmwcm:action>
         <ibmwcm:itemType>siteArea</ibmwcm:itemType>
         <ibmwcm:path>/SiteAreaName</ibmwcm:path>
         <ibmwcm:owner>jsample</ibmwcm:owner>
         <ibmwcm:defaultContent>80000002</ibmwcm:defaultContent>
         <ibmwcm:children>
            <ibmwcm:childGuid>20000011</ibmwcm:childGuid>
            <ibmwcm:childGuid>80000002</ibmwcm:childGuid>
         </ibmwcm:children>
				<ibmwcm:templateMap authoring="AT News" presentation="PT News" />
				<ibmwcm:access type="user">[all users]</ibmwcm:access>
      </item>
   </channel>
</rss>
```

## Taxonomy feed

```
<?xml version="1.0"?>
<rss version="2.0" xmlns:ibmwcm="http://purl.org/net/ibmfeedsvc/wcm/1.0" >
   <channel>
      <title>Sample Feed</title>
      <link>http://www.ibm.com/feeds/sample.rss</link>
      <description>An example RSS Feed</description>
      <lastBuildDate>Tue, 31 Oct 2006 10:31:00 EST</lastBuildDate>

      <item>
         <title>Audience</title>
         <link>http://www.ibm.com/index.htm</link>
         <description>This is the top-level Taxonomy.</description>
         <guid>30000001</guid>
         <pubDate> Tue, 31 Oct 2006 10:31:00 EST</pubDate>
         <author>jsample@ibm.com</author>
         <ibmwcm:action>add</ibmwcm:action>
         <ibmwcm:itemType>category</ibmwcm:itemType>
         <ibmwcm:path>/</ibmwcm:path>
         <ibmwcm:owner>jsample</ibmwcm:owner>
         <ibmwcm:access type="user">[all users]</ibmwcm:access>
      </item>
   </channel>
</rss>
```

## Category feed

```
<?xml version="1.0"?>
<rss version="2.0" xmlns:ibmwcm="http://purl.org/net/ibmfeedsvc/wcm/1.0" >
   <channel>
      <title>Sample Feed</title>
      <link>http://www.ibm.com/feeds/sample.rss</link>
      <description>An example RSS Feed</description>
      <lastBuildDate>Tue, 31 Oct 2006 10:31:00 EST</lastBuildDate>

      <item>
         <title>Employees</title>
         <link>http://www.ibm.com/index.htm</link>
         <description>This is a second-level Category.</description>
         <guid>40000001</guid>
         <pubDate> Tue, 31 Oct 2006 10:31:00 EST</pubDate>
         <author>jsample@ibm.com</author>
         <ibmwcm:action>add</ibmwcm:action>
         <ibmwcm:itemType>category</ibmwcm:itemType>
         <ibmwcm:path>/Audience</ibmwcm:path>
         <ibmwcm:createLinks>
            <ibmwcm:parentGuid>30000001</ibmwcm:parentGuid>
         </ibmwcm:createLinks>
         <ibmwcm:owner>jsample</ibmwcm:owner>
         <ibmwcm:children>
            <ibmwcm:childGuid>40000011</ibmwcm:childGuid>
         </ibmwcm:children>
         <ibmwcm:access type="user">[all users]</ibmwcm:access>
      </item>
   </channel>
</rss>
```

## Component feed

```
<?xml version="1.0"?>
<rss version="2.0" xmlns:ibmwcm="http://purl.org/net/ibmfeedsvc/wcm/1.0" >
   <channel>
      <title>Sample Feed</title>
      <link>http://www.ibm.com/feeds/sample.rss</link>
      <description>An example RSS Feed</description>
      <lastBuildDate>Tue, 31 Oct 2006 10:31:00 EST</lastBuildDate>

      <item>
         <title>IBM Footer</title>
         <link>http://www.ibm.com/files/footer.htm</link>
         <description>This is a shared chunk of HTML.</description>
         <guid>53000001</guid>
         <pubDate> Tue, 31 Oct 2006 10:31:00 EST</pubDate>
         <author>jsample@ibm.com</author>
         <ibmwcm:action>add</ibmwcm:action>
         <ibmwcm:itemType>component</ibmwcm:itemType>
         <ibmwcm:owner>jsample</ibmwcm:owner>
         <ibmwcm:element name="footer">
            <ibmwcm:type>html</ibmwcm:type>
            <ibmwcm:value>
<![CDATA[<span style="font-size: 8pt;">Copyright 2006 <a href="http://www.ibm.com">
  International Business Machines, Inc.</a> All rights reserved.</span>]]>
            </ibmwcm:value>
         </ibmwcm:element>
         <ibmwcm:access type="user">[all users]</ibmwcm:access>
      </item>
   </channel>
</rss>
```

## Content feed

```
<?xml version="1.0"?>
<rss version="2.0" xmlns:ibmwcm="http://purl.org/net/ibmfeedsvc/wcm/1.0" >
   <channel>
      <title>Sample Feed</title>
      <link>http://www.ibm.com/feeds/sample.rss</link>
      <description>An example RSS Feed</description>
      <lastBuildDate>Tue, 31 Oct 2006 10:31:00 EST</lastBuildDate>

      <item>
         <title>Release 2.0 Announcement</title>
         <link>http://www.ibm.com/news/Rel2Announce.htm</link>
         <description>This is a content item.</description>
         <guid>80000001</guid>
         <pubDate> Tue, 31 Oct 2006 10:31:00 EST</pubDate>
         <author>jsample@ibm.com</author>
         <category>/Audience/Employees</category>
         <category>/Audience/Customers</category>
         <ibmwcm:action>add</ibmwcm:action>
         <ibmwcm:itemType>content</ibmwcm:itemType>
         <ibmwcm:authoringTemplate>News</ibmwcm:authoringTemplate>
         <ibmwcm:path>/SiteAreaName/News</ibmwcm:path>
         <ibmwcm:createLinks>
            <ibmwcm:parentGuid>20000001</ibmwcm:parentGuid>
         </ibmwcm:createLinks>
         <ibmwcm:owner>jsample</ibmwcm:owner>
         <ibmwcm:keywords>software,content management</ibmwcm:keywords>
         <ibmwcm:workflow name="Std Workflow">
            <ibmwcm:workflowStage>Live</ibmwcm:workflowStage>
         </ibmwcm:workflow>
         <ibmwcm:publishDate>
            Wed, 1 Nov 2006 06:00:00 EST
         </ibmwcm:publishDate>
         <ibmwcm:expirationDate>
            Sun, 31 Dec 2006 23:59:00 EST
         </ibmwcm:expirationDate>
         <ibmwcm:genDateOne>Fri, 15 Dec 2006 09:00:00 EST</ibmwcm:genDateOne>
         <ibmwcm:additionalViewer>All Dealers</ibmwcm:additionalViewer>
         <ibmwcm:element name="Headline">
            <ibmwcm:type>text</ibmwcm:type>
            <ibmwcm:value>Release 2.0 Ships Today</ibmwcm:value>
         </ibmwcm:element>
         <ibmwcm:element name="Summary">
            <ibmwcm:type>text</ibmwcm:type>
            <ibmwcm:value>
The long anticipated Release 2.0 of our flagship product became available earlier today.
            </ibmwcm:value>
         </ibmwcm:element>
         <ibmwcm:element name="Body">
            <ibmwcm:type>rich text</ibmwcm:type>
            <ibmwcm:value>
<![CDATA[<p>Suspendisse posuere commodo turpis.</p>
<p>Vivamus nunc nulla, volutpat in, luctus a, facilisis eu, mi.</p>]]>
            </ibmwcm:value>
         </ibmwcm:element>
         <ibmwcm:element name="Image">
            <ibmwcm:type>image</ibmwcm:type>
            <ibmwcm:source>
               http://cmsserver.ibm.com/images/rel20box.gif
            </ibmwcm:source>
         </ibmwcm:element>
         <ibmwcm:access type="user">[all users]</ibmwcm:access>
      </item>
   </channel>
</rss>
```

**Parent topic:**[IBM Web Content Integrator ](../wci/wci_intro.md)

