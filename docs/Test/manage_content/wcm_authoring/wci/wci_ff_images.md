# Processing Images

The Web Content Integrator has an image-processing feature, which allows images that are referenced within HTML and rich text elements to be created as image components while processing a feed.

## Image-processing configuration

The following parameters can be set in the WCMConsumerPlugin.properties file:

-   **Enable and disable image processing**

    By default, image processing is enabled. To disable image processing set the property: disable.img.processing=true

    If image processing is enabled, then the URLs specified in the "src" attributes of the image tags must not contain a query string because everything after a question mark is ignored when the image component is created.

    For example, `<img src="http://<host_name>/program/path?param1=hello&param2=a.jpg" ...>` and `<img src="http://<host_name>/program/path?param1=world&param2=b.jpg" ...>` both creates or updates the same image component named "program.path".

-   **Enable and disable embedded rich text images**

    Images can be embedded directly into the rich text elements instead of first creating an image component. This function makes images within rich text elements that are consumed by the Web Content Integrator be processed identically to images added to rich text elements in the authoring UI. By default embedded rich text images are disabled. To enable them, set the properties:

    -   disable.img.processing=false
    -   richtext.embedded.images.enabled=true

## Absolute image source URLs

Images within HTML and rich text elements can be specified by using absolute HTTP URLs within the image source attribute. The Web Content Integrator processes absolute image source URLs as specified in the feed.

Example feed item:

```
<item>
    <title>RichText Component With Image 1</title>
    <pubDate>Thu, 30 Mar 2011 16:00:00 EDT</pubDate>
    <guid>Image_Example_1</guid>
    <ibmwcm:action>add</ibmwcm:action>
    <ibmwcm:itemType>Component</ibmwcm:itemType>
    <ibmwcm:element>
      <ibmwcm:type>rich text</ibmwcm:type>
      <ibmwcm:value>
         <![CDATA[
         <p>Image 1:</p><img src="http://wci-feed-server/img/f/flower.jpg"/>
         <p>Image 2:</p><img src="http://wci-feed-server/img/g/guitar.jpg"/>
         ]]>
      </ibmwcm:value>
    </ibmwcm:element>
  </item>
```

## Relative image source URLs

Images within HTML and rich text elements can be specified by using relative HTTP URLs within the image source attribute and a base URL from the link element of the item. The Web Content Integrator processes relative image source URLs as a concatenation of the item's link element and image source attributes in the HTML.

Example feed item:

```
<item>
    <title>RichText Component With Image 2</title>
    <pubDate>Thu, 30 Mar 2011 16:00:00 EDT</pubDate>
    <guid>Image_Example_2</guid>
    <link>http://wci-feed-server</link>
    <ibmwcm:action>add</ibmwcm:action>
    <ibmwcm:itemType>Component</ibmwcm:itemType>
    <ibmwcm:element>
      <ibmwcm:type>rich text</ibmwcm:type>
      <ibmwcm:value>
         <![CDATA[
         <p>Image 1:</p><img src="/img/p/penguin.jpg"/>
         <p>Image 2:</p><img src="/img/s/sunset.jpg"/>
         ]]>
      </ibmwcm:value>
    </ibmwcm:element>
  </item>
```

## How to use both absolute and relative image source URLs

Images within HTML and rich text elements can be specified by using a combination of relative and absolute HTTP URLs within the image source attributes. The Web Content Integrator processes relative image source URLs as a concatenation of the item's link element and image source attributes in the HTML. The Web Content Integrator processes absolute image source URLs as specified in the feed.

Example feed item:

```
<item>
    <title>RichText Component With Image 3</title>
    <pubDate>Thu, 30 Mar 2011 16:00:00 EDT</pubDate>
    <guid>Image_Example_3</guid>
    <link>http://wci-feed-server</link>
    <ibmwcm:action>add</ibmwcm:action>
    <ibmwcm:itemType>Component</ibmwcm:itemType>
    <ibmwcm:element>
      <ibmwcm:type>rich text</ibmwcm:type>
      <ibmwcm:value>
         <![CDATA[
         <p>Image 1:</p><img src="http://www.ibm.com/favicon.ico"/>
         <p>Image 2:</p><img src="/img/f/fish.jpg"/>
         <p>Image 3:</p><img src="/img/g/grapes.jpg"/>
         ]]>
      </ibmwcm:value>
    </ibmwcm:element>
  </item>
```

## Expected results for a rich text component

Example rich text component feed item:

```
<item>
    <title>RichText Component With Image 4</title>
    <pubDate>Thu, 30 Mar 2011 16:00:00 EDT</pubDate>
    <guid>Image_Example_4</guid>
    <ibmwcm:action>add</ibmwcm:action>
    <ibmwcm:itemType>Component</ibmwcm:itemType>
    <ibmwcm:element>
      <ibmwcm:type>rich text</ibmwcm:type>
      <ibmwcm:value>
         <![CDATA[
         <p>Image 1:</p><img src="http://wci-feed-server/img/l/leaf.jpg"/>
         ]]>
      </ibmwcm:value>
    </ibmwcm:element>
  </item>
```

-   **Rich text component with image processing disabled:**

    -   A rich text component named: "RichText Component With Image 4" is created in the feed library.
    -   HTML Source of the rich text Component: `<p>Image 1:</p><img src="http://wci-feed-server/img/l/leaf.jpg">`
    -   The rich text HTML is not modified.
    -   The image source is unmanaged because Web Content Manager cannot detect a broken image source.

-   **Rich text component with image processing enabled:**

    -   A rich text component named: "RichText Component With Image 4" is created in the feed library.
    -   An Image Component that is named "img.l.leaf.jpg" is created in the feed library
    -   HTML Source of the rich text Component: `<p>Image 1:</p><img src="/wps/wcm/myconnect/[IMAGE COMPONENT ID]/leaf.jpg?MOD=AJPERES">`
    -   The image source is replaced with a URL pointing to the newly created image.
    -   The image source is managed by Web Content Manager and is updated as the image component is updated.

-   **Rich text component with embedded images enabled:**

    -   A rich text component named: "RichText Component With Image 4" is created in the feed library.
    -   HTML Source of the rich text Component: `<p>Image 1:</p><img src="/wps/wcm/myconnect/[RT COMPONENT UUID]/1/img.l.leaf.jpg?MOD=AJPERES">`
    -   The rich text HTML is modified replacing the image source with a URL for the image that is embedded within the rich text Component.
    -   The image source is managed by Web Content Manager and is updated as the rich text changes.

## Expected results for a HTML component

Example feed item:

```
<item>
    <title>HTML Component With Image 1</title>
    <pubDate>Thu, 30 Mar 2011 16:00:00 EDT</pubDate>
    <guid>Image_Example_5</guid>
    <ibmwcm:action>add</ibmwcm:action>
    <ibmwcm:itemType>Component</ibmwcm:itemType>
    <ibmwcm:element>
      <ibmwcm:type>html</ibmwcm:type>
      <ibmwcm:value>
         <![CDATA[
         <p>Image 1:</p><img src="http://wci-feed-server/img/l/leaf.jpg"/>
         ]]>
      </ibmwcm:value>
    </ibmwcm:element>
  </item>
```

-   **HTML element with image processing disabled**

    -   HTML Component that is named "HTML Component With Image 1" is created in the feed library.
    -   HTML Source of the HTML Component: `<p>Image 1:</p><img src="http://wci-feed-server/img/l/leaf.jpg"/>`
    -   The HTML is not modified.
    -   The image source is unmanaged because Web Content Manager cannot detect a broken image source.
    
-   **HTML element with image processing enabled**

    -   HTML Component that is named "HTML Component With Image 1" is created in the feed library.
    -   Image Component that is named "img.l.leaf.jpg" is created in the feed library
    -   HTML Source of the HTML Component: `<p>Image 1:</p><img src="<Component id="[IMAGE COMPONENT ID]" name="img test 1/img.l.leaf.jpg" format="url"/>"/>`
    -   The image source is replaced with a component tag that points to the newly created image.
    -   The image source is managed by Web Content Manager and is updated as the image component is updated.


