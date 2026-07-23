# Embedded links

Content retrieved by the Web Content Integrator can contain embedded links to images, files, and other content within the feed. Use the `<link>` tag in your feed to represent these embedded links. The Web Content Integrator converts them into links to other Web Content Manager items when it processes the feed.

The Web Content Integrator can process three types of embedded links: images, files, and content. In all cases, the `<link>` tag must include a GUID that points to another item in the feed, which describes the target item.

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
To convert the embedded image link into a related image component during feed processing, add the following code to your feed. This code contains a **GUID** that points to the image file also processed by the Web Content Integrator:
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

Automatic image tag processing is disabled by default. To enable this feature, set the `disable.img.proc` property to `false` in the `WCMConsumerPlugin.properties` file.

If enabled:

-   Only content imported into HTML or rich text elements and components is processed.
-   All image references matching the pattern `<img src="..." />` are processed. The system does not process image references included within JavaScript code or CSS styles.
-   The URLs specified in the `src` attributes of `<img>` tags are converted to fully qualified URLs. This conversion uses other information about the content item in the feed. Relative links must be relative to the URL in the `<link>` element of the feed and follow standard relative link rules.
-   Image files are stored as shared image components. Their access controls match those of the referencing content item. The image component's name is based on the server-relative path to the image. For example, an image at `http://<host_name>/guide_me/images/sm_logo.gif` is named `resources.images.sm_logo.gif`.
-   Do not include query strings in the `src` attributes of `<img>` tags. The system ignores everything after a question mark when it creates the image component.

    For example:

    * `<img src="http://<host_name>/program/path?param1=hello&param2=a.jpg" />`
    * `<img src="http://<host_name>/program/path?param1=world&param2=b.jpg" />`

    Both URLs create or update the same image component, named `program.path`.

