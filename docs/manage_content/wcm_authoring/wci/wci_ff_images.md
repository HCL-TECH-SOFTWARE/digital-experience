# Processing Images

The Web Content Integrator has an image-processing feature, which allows images that are referenced within HTML and rich text elements to be created as image components while processing a feed.

## Image-processing configuration

The following parameters can be set in the `WCMConsumerPlugin.properties` file:

- **Enable and disable image processing**

    By default, image processing is enabled. To disable it, set the property `disable.img.processing=true`.

If image processing is enabled, do not include query strings in the `src` attributes of `<img>` tags. The system ignores everything after a question mark when it creates the image component.

For example:

- `<img src="http://<host_name>/program/path?param1=hello&param2=a.jpg" ...>`
- `<img src="http://<host_name>/program/path?param1=world&param2=b.jpg" ...>`

Both URLs create or update the same image component, named `program.path`.

-   **Enable and disable embedded rich text images**:
    Images can be embedded directly into rich text elements instead of first creating a separate image component. This function ensures that images within rich text elements consumed by the Web Content Integrator process identically to images added through the authoring UI.

    By default, embedded rich text images are disabled. To enable them, set these properties:

    -   `disable.img.processing=false`
    -   `richtext.embedded.images.enabled=true`

## Absolute image source URLs

You can specify images within HTML and rich text elements using absolute HTTP URLs in the `src` attribute. The Web Content Integrator processes these URLs exactly as specified in the feed.

The following example shows an absolute image source URL in a feed item:

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

You can specify images within HTML and rich text elements using relative HTTP URLs in the src attribute. The link element of the item provides the base URL. The Web Content Integrator processes relative image source URLs by concatenating the item's link element and the image's src attributes in the HTML

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


Images within HTML and rich text elements can use a combination of relative and absolute HTTP URLs in the `src` attribute.  


- The Web Content Integrator processes **relative image source URLs** by combining the item's `<link>` element with the relative path.  
- It processes **absolute image source URLs** exactly as specified in the feed.


### Example feed item


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

Example feed item:

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
