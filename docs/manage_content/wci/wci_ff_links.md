# Embedded Links

From time to time, the content that is being retrieved by the Web Content Integrator contains embedded links to images, files, and other content within the feed. You can use the link tag in your feed to represent embedded links so that they are converted into links to other Web Content Manager items that are created when the feed is processed.

Three types of embedded links can be processed: images, files, and content. In all cases, the link tag must include a GUID that points to another item in the feed, which describes the target item.

## Content links

In this example, the following feed content contains a link to another web page:

```
<p>
<a href="https://support.hcltechsw.com/csm">Press Release</a>
</p> 

```

To ensure that the embedded link is converted into a link to a related content item that is being created when the feed is processed, you add the following code to your feed. It contains a GUID to the HTML file also being processed by the Web Content Integrator:

```
<![CDATA[<p> 
<a href='<link type="content" guid="80000002"/>'>Press Release</a>
This is some text.
</p>]]>

```

When the content of the feed is saved within Web Content Manager, a link to a content item is added to the content.

```
<p>
<a href="wps/wcm/myconnect/Portal/Press/Announcement1?contentIDR=29e04295034efb">Press Release</a>
This is some text.
</p>

```

Example feed

```
<?xml version="1.0"?>
<rss version="2.0" xmlns:ibmwcm="http://purl.org/net/ibmfeedsvc/wcm/1.0" >
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
<pubDate>Tue, 31 Oct 2006 10:31:00 EST</pubDate>
<guid>80000001</guid>
<ibmwcm:action>add</ibmwcm:action>
<ibmwcm:itemType>content</ibmwcm:itemType>
<ibmwcm:authoringTemplate>News</ibmwcm:authoringTemplate>
<ibmwcm:path>/Portal/News</ibmwcm:path>
<ibmwcm:workflow name="Std Workflow">
<ibmwcm:workflowStage>Live</ibmwcm:workflowStage>
</ibmwcm:workflow>
<ibmwcm:component name="BODY">
<ibmwcm:type>rich text</ibmwcm:type>
<ibmwcm:value>
<![CDATA[<p>
<a href='<link type="content" guid="80000002" />'>some content link</a>
This is some text.
</p>]]>
</ibmwcm:value>
</ibmwcm:component>
</item>
<item>
<title>Announcment1</title>
<link>http://cmsserver.ibm.com/news/one.htm</link>
<description>This is an announcment press release.</description>
<pubDate>Tue, 31 Oct 2006 10:11:00 EST</pubDate>
<guid>80000002</guid>
<ibmwcm:action>add</ibmwcm:action>
<ibmwcm:itemType>Content</ibmwcm:itemType>
<ibmwcm:authoringTemplate>Press Release</ibmwcm:authoringTemplate>
<ibmwcm:path>/Portal/Press</ibmwcm:path>
<ibmwcm:workflow name="Std Workflow">
<ibmwcm:workflowStage>Live</ibmwcm:workflowStage>
</ibmwcm:workflow>
<ibmwcm:component name="BODY">
<ibmwcm:type>rich text</ibmwcm:type>
<ibmwcm:value>This is some more text.</ibmwcm:value>
</ibmwcm:component>
</item>
</channel>
</rss>

```

## File links

In this example, the following feed content contains a link to a PDF file:

```
<p>
<a href="https://support.hcltechsw.com/csm">Product Spec</a>
This is some text.
</p>

```

To ensure that the embedded link is converted into a link to a related file resource component that is being created when the feed is processed, you add the following code to your feed. It contains a GUID to the PDF file also being processed by the Web Content Integrator:

```
<![CDATA[<p>
<a href='<link type="file" guid="50000002"/>'>Product Spec</a>
This is some text.
</p>]]>

```

When the content of the feed is saved within Web Content Manager, a component tag is added to the content.

```
<p>
<a href="<Component name="ProductSpec" />">Product Spec</a>
This is some text.
</p>

```

Example feed

```
<?xml version="1.0"?>
<rss version="2.0" xmlns:ibmwcm="http://purl.org/net/ibmfeedsvc/wcm/1.0" >
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
         <guid>80000001</guid>
         <ibmwcm:action>add</ibmwcm:action>
         <ibmwcm:itemType>Content</ibmwcm:itemType>
         <ibmwcm:authoringTemplate>News</ibmwcm:authoringTemplate>
         <ibmwcm:path>/Portal/News</ibmwcm:path>
         <ibmwcm:workflow name="Std Workflow">
            <ibmwcm:workflowStage>Live</ibmwcm:workflowStage>
         </ibmwcm:workflow>
         <ibmwcm:component name="BODY">
            <ibmwcm:type>rich text</ibmwcm:type>
            <ibmwcm:value>
<![CDATA[<p>
<a href="<link type="file" **guid="50000002"** />">some file link</a>
This is some text.
</p>]]>
            </ibmwcm:value>
         </ibmwcm:component>
      </item>

      <item>
         <title>Product Spec</title>
         <link>http://cmsserver.ibm.com/files/spec.pdf</link>
         <description>This is the product spec document.</description>
         <pubDate> Tue, 31 Oct 2006 10:11:00 EST</pubDate>
         **<guid\>50000002</guid\>**<ibmwcm:action>add</ibmwcm:action>
         <ibmwcm:itemType>component</ibmwcm:itemType>
         <ibmwcm:component name="File">
            <ibmwcm:type>file</ibmwcm:type>
            <ibmwcm:value>
              http://cmsserver.ibm.com/files/spec.pdf
            </ibmwcm:value>
         </ibmwcm:component>
      </item>
   </channel>
</rss>

```

## Image links

In this example, the following feed content contains a link to an image file:

```
<p>
<img src="http://cmsserver.ibm.com/images/mylogo.gif" />
This is some text.
</p>

```

To ensure that the embedded image link is converted into a link to a related image component that is being created when the feed is processed, you add the following code to your feed. It contains a GUID to the image file also being processed by the Web Content Integrator:

```
<![CDATA[<p>
<link type="image" guid="50000001" />
This is some text.
</p>]]>

```

When the content of the feed is saved within Web Content Manager, a component tag is added to the content.

```
<p>
**<Component name="My Logo" /\>**
This is some text.
</p>
```

Example feed

```
<?xml version="1.0"?>
<rss version="2.0" xmlns:ibmwcm="http://purl.org/net/ibmfeedsvc/wcm/1.0" >
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
         <guid>80000001</guid>
         <ibmwcm:action>add</ibmwcm:action>
         <ibmwcm:itemType>Content</ibmwcm:itemType>
         <ibmwcm:authoringTemplate>News</ibmwcm:authoringTemplate>
         <ibmwcm:path>/Portal/News</ibmwcm:path>
         <ibmwcm:workflow name="Std Workflow">
            <ibmwcm:workflowStage>Live</ibmwcm:workflowStage>
         </ibmwcm:workflow>
         <ibmwcm:component name="BODY">
            <ibmwcm:type>rich text</ibmwcm:type>
            <ibmwcm:value>
<![CDATA[<p>
<link type="image" **guid="50000001"** />
This is some text.
</p>]]>
            </ibmwcm:value>
         </ibmwcm:component>
      </item>

      <item>
         <title>My Logo</title>
         <link>http://cmsserver.ibm.com/images/mylogo.gif</link>
         <description>This is our logo image.</description>
         <pubDate> Tue, 31 Oct 2006 10:21:00 EST</pubDate>
         **<guid\>50000001</guid\>**<ibmwcm:action>add</ibmwcm:action>
         <ibmwcm:itemType>component</ibmwcm:itemType>
         <ibmwcm:component name="Image">
            <ibmwcm:type>image</ibmwcm:type>
            <ibmwcm:value>
              http://cmsserver.ibm.com/images/mylogo.gif
            </ibmwcm:value>
         </ibmwcm:component>
      </item>
   </channel>
</rss>

```

## Automatic image tag processing

The Web Content Integrator has an optional feature, which can be used in place of the `<link type="image" />` tag. If enabled, the Web Content Integrator automatically parses the values of any html or rich text elements and search for HTML `<img/>` tags that are embedded within the content. If any are found, the Web Content Integrator attempts to retrieve the referenced image file, create an image component, and then rewrite the reference so that it points to the new image component.

This feature can be enabled by editing the disable.img.proc setting in the WCMConsumerPlugin.properties file and setting it to "false". Automatic image tag processing is disabled by default.

If enabled:

-   Only the content that is imported into HTML elements and components or Rich Text elements and components are processed.
-   All image references matching the pattern "`<img src= ...`" are processed. Image references that are included within JavaScript code or CSS styles are not processed.
-   The URLs specified in the "src" attributes of those image tags are converted to fully qualified URLs by using other information about the content item in the feed. Relative links must be relative to the URL in the <link\> element of the feed that follows the standard rules for relative links.
-   The image files are stored as shared image components. The access controls on the image component are set to match that of the content item, which references it. The name of the image component is based on the server-relative path to the image. For example, an image that is at http://<host\_name\>/guide_me/images/sm\_logo.gif is named resources.images.sm\_logo.gif.
-   The URLs specified in the "src" attributes of the image tags must not contain a query string because everything after a question mark is ignored when the image component is created.

    For example, For example, <img src="http://<host\_name\>/program/path?param1=hello&param2=a.jpg"....\> and <img src="http://<host\_name\>/program/path?param1=world&param2=b.jpg" ...\> both creates or updates the same image component named "program.path".



