# Creating Resources

Portal Model REST services allow you to create new resources.

Example 1: Creating a page; note that this page has no layout or content defined:

```
<?xml version="1.0" encoding="UTF-8"?>
<atom:feed xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base" 
           xmlns:creation-context="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.2/portal-creation-context" 
           xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements" 
           xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model" 
           xmlns:thr="http://purl.org/syndication/thread/1.0" 
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
           xmlns:atom="http://www.w3.org/2005/Atom">
    <atom:author>
        <atom:name>HCL Portal/78.0</atom:name>
    </atom:author>
    <atom:title>HCL Digital Experience Model Feed</atom:title>
    <atom:id/>
    <atom:link href="." rel="self" type="application/atom+xml"/>
    <atom:updated>2007-07-04T13:28:37.721+0200</atom:updated>
    <atom:entry>
        <atom:title>test page - testpage_1183548505593</atom:title>
        <atom:id portal:uniquename="testpage_1183548505593">cid:testpage_1183548505593</atom:id>
        <atom:updated>2007-07-04T13:28:37.731+0200</atom:updated>
        <atom:content type="application/xml">
            <portal:content-page>
                <model:supported-markup>html</model:supported-markup>
                <model:supported-markup>wml</model:supported-markup>
                <model:title>
                    <base:nls-string xml:lang="en">test page - testpage_1183548505593</base:nls-string>
                </model:title>
            </portal:content-page>
        </atom:content>
        <thr:in-reply-to href="cm:oid:6_000000000000000000000000A0" ref="cm:oid:6_000000000000000000000000A0" 
                         type="application/atom+xml"/>
    </atom:entry>
</atom:feed>

```

Example 2: Putting a layout container on a page:

```
<?xml version="1.0" encoding="UTF-8"?>
<atom:feed xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base" 
           xmlns:creation-context="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.2/portal-creation-context" 
           xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements" 
           xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model" 
           xmlns:thr="http://purl.org/syndication/thread/1.0"  
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
           xmlns:atom="http://www.w3.org/2005/Atom">
  <atom:author>
    <atom:name>HCL Portal/78.0</atom:name>
  </atom:author>
  <atom:title>HCL Digital Experience Model Feed</atom:title>
  <atom:id/>
  <atom:link href="." rel="self" type="application/atom+xml"/>
  <atom:updated>2007-07-04T13:28:56.358+0200</atom:updated>
  <atom:entry>
    <atom:title>lm:oid:newid_layout_0_1183548510931@oid:testpage_1183548505593</atom:title>
    <atom:id portal:uniquename="testpage_1183548505593_lmroot">lm:oid:testpage_1183548505593</atom:id>
    <atom:updated>2007-07-04T13:28:56.358+0200</atom:updated>
    <atom:content type="application/xml">
      <portal:layout-container/>
    </atom:content>
  </atom:entry>
</atom:feed>

```

**Parent topic:**[Use cases for modifying resources](../dev/rest_feed_mod_resrc.md)

