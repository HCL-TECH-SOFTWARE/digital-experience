# Elements of a model feed 

The following sections show sample feeds for the different models.

For more information about information that is shown by the feeds, see *Mapping of feed elements to elements of the Model SPI* section.

## Content Model feeds

To obtain information on the content model, you need to send an HTTP GET request to the content handler with the model schema cm.

Example - Content Model feed for the Content Model root node

```
<?xml version="1.0" encoding="UTF-8"?>
<atom:feed xmlns:atom="http://www.w3.org/2005/Atom" 
           xml:base="http://yourservername:10039/wps/mycontenthandler" 
           xmlns:thr="http://purl.org/syndication/thread/1.0" 
           xmlns:xhtml="http://www.w3.org/1999/xhtml" 
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
           xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model"    
           xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements"  
           xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base">
    <atom:author>
           <atom:name>HCL Portal/6.1</atom:name>
    </atom:author>
    <atom:title>HCL Digital Experience Model Feed</atom:title>
    <atom:id>cm:oid:6_000000000000000000000000A0</atom:id>
    <atom:link href="?uri=cm:oid:6_000000000000000000000000A0&mode=download&levels=1&rep=compact" 
               rel="self" type="application/atom+xml"/>
    <atom:updated>2008-02-26T06:36:02.239Z</atom:updated>
    <atom:entry>
        <atom:title>Content Root</atom:title>
        <atom:id portal:uniquename="wps.content.root">cm:oid:6_000000000000000000000000A0</atom:id>
        <atom:published>2002-05-31T22:00:00.000Z</atom:published>
        <atom:updated>2008-02-26T06:36:02.239Z</atom:updated>
        <atom:content type="application/xml">
            <model:content-label>
                <model:title>
                    <base:nls-string xml:lang="de">[G'Ｃoｎｔｅｎｔ Ｒooｔ13:48, 3 Mar 2008 (
                       W. Europe Standard Time)İı｜]</base:nls-string>
                    <base:nls-string xml:lang="en">Content Root</base:nls-string>
                </model:title>
                <model:active>true</model:active>
                <model:supportedMarkup>wml</model:supportedMarkup>
                <model:supportedMarkup>html</model:supportedMarkup>
            </model:content-label>
        </atom:content>
        <atom:link href="?uri=cm:oid:6_000000000000000000000000A0&mode=download&levels=2&rep=compact" 
                   rel="replies" type="application/atom+xml"/>
        <atom:link portal:rel="contextMenu" 
                   portal:uri="wp.operations:page:oid:6_000000000000000000000000A0" 
                   portal:uniquename="wps.content.root"  
                   href="?uri=wp.operations:page:oid:6_000000000000000000000000A0&mode=download" 
                   rel="related" type="application/vnd.mozilla.xul+xml"/>
    </atom:entry>
</atom:feed>

```

## Layout Model feeds

To obtain information on the layout model, send an HTTP GET request to the content handler with the model schema lm.

Example - Layout Model feed for a Layout Model root node of a specific content node

```
<?xml version="1.0" encoding="UTF-8"?>
<atom:feed xmlns:atom="http://www.w3.org/2005/Atom" 
           xml:base="http://yourservername:10039/wps/mycontenthandler" 
           xmlns:thr="http://purl.org/syndication/thread/1.0" 
           xmlns:xhtml="http://www.w3.org/1999/xhtml" 
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
           xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model" 
           xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements"          
           xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base">
    <atom:author>
           <atom:name>HCL Portal/6.1</atom:name>
    </atom:author>
    <atom:title>HCL Digital Experience Model Feed</atom:title>
    <atom:id>lm:oid:6_CGAH47L00GD87023IKNDD41G65</atom:id>
    <atom:link href="?uri=lm:oid:6_CGAH47L00GD87023IKNDD41G65&mode=download&levels=1&rep=compact" 
               rel="self" type="application/atom+xml"/>
    <atom:updated>2008-02-24T03:30:17.059Z</atom:updated>

    <atom:entry>
        <atom:title>7_CGAH47L00GD87023IKNDD41G67</atom:title>
        <atom:id>lm:oid:7_CGAH47L00GD87023IKNDD41G67@oid:6_CGAH47L00GD87023IKNDD41G65</atom:id>
        <atom:published>2008-02-24T03:30:16.817Z</atom:published>
        <atom:updated>2008-02-24T03:30:16.862Z</atom:updated>
        <atom:content type="application/xml">
            <model:layout-container>
                <model:metadata name="ORIENTATION">
                    <base:value xsi:type="base:String" value="Horizontal"/>
                </model:metadata>
                <model:templateName>UnlayeredContainer-H</model:templateName>
                <model:deletable>true</model:deletable>
                <model:deletableFlag>true</model:deletableFlag>
                <model:modifiable>true</model:modifiable>
                <model:modifiableFlag>true</model:modifiableFlag>
                <model:containerChild>true</model:containerChild>
                <model:controlChild>false</model:controlChild>
            </model:layout-container>
        </atom:content>
        <atom:link portal:uri="lm:oid:7_CGAH47L00GD87023IKNDD41G67@oid:6_CGAH47L00GD87023IKNDD41G65" 
                   href="/wps/mypoc/!ut/p/lm/oid:7_CGAH47L00GD87023IKNDD41G67@oid:6_CGAH47L00GD87023IKNDD41G65?uri
                   =lm%3aoid%3a7_CGAH47L00GD87023IKNDD41G67%40oid%3a6_CGAH47L00GD87023IKNDD41G65&mode=view" 
                   type="text/html"/>
        <atom:link href="?uri=lm:oid:7_CGAH47L00GD87023IKNDD41G67@oid:6_CGAH47L00GD87023IKNDD41G65&mode=download&levels=2&rep=compact" 
                   rel="replies" type="application/atom+xml"/>
    </atom:entry>

    <atom:entry>
        ....
    </atom:entry>

    <model:allPortletsAllowed>true</model:allPortletsAllowed>
    <atom:link portal:uri="wm:oid:6_CGAH47L00GD87023IKNDD41G65" 
               portal:uniquename="ibm.portal.Home.Web20Introduction"  
               href="?uri=wm:oid:6_CGAH47L00GD87023IKNDD41G65&mode=download&rep=compact" 
               rel="related" type="application/atom+xml"/>
</atom:feed>

```

## Navigation Model feeds

To obtain information on the Navigation Model, send an HTTP GET request to the content handler with the model schema nm.

Example - Navigation Model feed for the Navigation Model root node

```
<?xml version="1.0" encoding="UTF-8"?>
<atom:feed xmlns:atom="http://www.w3.org/2005/Atom" 
           xml:base="http://yourservername:10039/wps/mycontenthandler" 
           xmlns:thr="http://purl.org/syndication/thread/1.0" 
           xmlns:xhtml="http://www.w3.org/1999/xhtml" 
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
           xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model" 
           xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements"  
           xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base">
    <atom:author>
           <atom:name>HCL Portal/6.1</atom:name>
    </atom:author>
    <atom:title>HCL Digital Experience Model Feed</atom:title>
    <atom:id>nm:oid:6_000000000000000000000000A0</atom:id>
    <atom:link href="?uri=nm:oid:6_000000000000000000000000A0&mode=download&levels=1&rep=compact" 
               rel="self" type="application/atom+xml"/>
    <atom:updated>2008-03-02T19:02:43.754Z</atom:updated>
    <atom:entry>
        <atom:title>Content Root</atom:title>
        <atom:id portal:uniquename="wps.content.root">nm:oid:6_000000000000000000000000A0</atom:id>
        <atom:published>2002-05-31T22:00:00.000Z</atom:published>
        <atom:updated>2008-03-02T19:02:43.754Z</atom:updated>
        <atom:content type="application/xml">
            <model:navigation-node>
                <model:title>
                    <base:nls-string xml:lang="de">[G'oｎｔｅｎｔ Ｒooｔ~~~~~İı｜]</base:nls-string>
                    <base:nls-string xml:lang="en">Content Root</base:nls-string>
                </model:title>
            </model:navigation-node>
        </atom:content>
        <atom:link portal:rel="label" portal:uri="cm:oid:6_000000000000000000000000A0" 
                   portal:uniquename="wps.content.root" 
                   href="?uri=cm:oid:6_000000000000000000000000A0&mode=download&levels=1&rep=compact" 
                   rel="related" type="application/atom+xml"/>
        <atom:link href="?uri=nm:oid:6_000000000000000000000000A0&mode=download&levels=2&rep=compact" 
                   rel="replies" type="application/atom+xml"/>
    <atom:link portal:rel="contextMenu" portal:uri="wp.operations:page:oid:6_000000000000000000000000A0" 
               portal:uniquename="wps.content.root" 
               href="?uri=wp.operations:page:oid:6_000000000000000000000000A0&mode=download" 
               rel="related" type="application/vnd.mozilla.xul+xml"/>
    </atom:entry>
</atom:feed>

```

**Parent topic:**[Feeds for REST services ](../dev/rest_feed.md)

