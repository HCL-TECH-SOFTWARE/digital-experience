# How do I decode long Portal URLs

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

When I access pages in Portal site I always see long and unreadable Portal URLs. How can I decode these long Portal URLs?

## Instructions

The main reason the URL is long and unreadable is that it's a base64 and gzip encoding of the XML needed to code both the page and the portlet states of all the portlets on the page for the back-button.

To decode a URL, paste the whole URL or URL starting with /wps in a contentHandler query:

```url
http://<server>:<port>/wps/mycontenthandler?uri=state:http://<server>:<port>/<URL to be decoded>
```

So it would be like this:

```url
http://<server>:<port>/wps/mycontenthandler?uri=state:http://<server>:<port>/wps/portal/home/shopapply/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zizSzcDTzcDYx8DMzdHA0cDV2MTM2cLA1M_A31wwkpiAJKG-AAjgZA_VFgJThMMPA1gSrAY0ZBboRBpqOiIgBSYigH/dz/d5/L2dBISEvZ0FBIS9nQSEh/
```

Then you will see an XML output like this:

```xml
<root>
<state type="navigational">  
<selection selection-node="Z6_68G0HG02L07FA0A1D256B904O1">  
<mapping src="Z6_68G0HG02L07FA0A1D256B904O1" dst="Z6_000000000000000000000000A0"/>
</selection>
<expansions>
<node id="Z6_68G0HG02L07FA0A1D256B900M4"/>
<node id="Z6_000000000000000000000000A0"/>
</expansions>
</state>
</root>
```

From that XML, you need to look at an XMLAccess result of the site to see the page in question. It's the objectid above called "Z6_68G0HG02L07FA0A1D256B904O1" and is referenced as the "selection-node".
