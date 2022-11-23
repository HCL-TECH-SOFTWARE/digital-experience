# Putting a Portlet on a Page

Portal Model REST services allow you to put portlets on pages.

Example: Putting a portlet on a page:

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
        <atom:name>HCL Portal/6.0.1</atom:name>
    </atom:author>
    <atom:title>HCL Portal Model Feed</atom:title>
    <atom:id/>
    <atom:link href="." rel="self" type="application/atom+xml"/>
    <atom:updated>2007-07-04T13:29:14.444+0200</atom:updated>
    <atom:entry>
        <atom:title>lm:oid:newid_layout_5_1183548514616@oid:testpage_1183548505593</atom:title>
        <atom:id portal:uniquename="testpage_1183548505593_control">lm:oid:testpage_1183548505593</atom:id>
        <atom:updated>2007-07-04T13:29:14.444+0200</atom:updated>
        <atom:content type="application/xml">
            <portal:layout-control creation-context:portlet-definition="pm:oid:wps.p.Welcome"/>
        </atom:content>
        <thr:in-reply-to href="lm:oid:testpage_1183548505593_lmcontainer4@oid:testpage_1183548505593" 
                         ref="lm:oid:testpage_1183548505593_lmcontainer4@oid:testpage_1183548505593" 
                         type="application/atom+xml"/>
    </atom:entry>
</atom:feed>

```


???+ info "Related information:"
    - [Managing iWidgets in your portal](../../../../../portlets_development/mng_portlets_apps_widgets/managing_iwidgets/index.md)

