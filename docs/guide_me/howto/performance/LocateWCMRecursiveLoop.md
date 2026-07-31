# How to locate a recursive loop with a WCM item causing high CPU or JVM hang?

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

According to [HCL Web Content Manager Tracing](../../../deployment/manage/troubleshooting/logging_and_tracing/wcm_logs.md){target="_blank"} it is usually suggested to trace WCM component problems with the following trace-string:

`com.ibm.workplace.wcm.*=all:com.aptrix.*=all:com.presence.connect.*=all:com.ibm.wps.engine.Servlet=all`

This may result in a HUGE set of traces that will take support 6 hours to analyze and identify the site area in question. An entry like this occurred approximately 8 thousand times in the trace:

```log
BaseReference > com.aptrix.pluto.cmpnt.BaseReferenceCmpnt retrieveCmpnt
ENTRY RenderContext [PlutoRequestContext
[hasDelegatedContentMappings=false, m_webAppUrl=WebAppURL
[m_url=https://myserver.mycompany.com/wps/wcm/connect/mySite/home/mySiteArea1/mySiteArea2/myContent,
```

When determining a loop in the content there is a smarter way to do it. This documentation describe in how to find that out at best.

## Instructions

Instead of using trace-string:  

`com.ibm.workplace.wcm.*=all:com.aptrix.*=all:com.presence.connect.*=all:com.ibm.wps.engine.Servlet=all`  

use trace string:  

`com.aptrix.pluto.cmpnt.*=all`  

Then grep trace.log for `retrieveCmpnt` eg:  

`tail -f trace.log |grep -i retrieveCmpnt`  

or perhaps:  

`grep -e retrieveCmpnt -e itemPath trace*.log`  

Look for any WCM items that are re-occurring far out of proportion to other items in the trace. This will identify the WCM items involved in the recursive loop.  

Loops can also be found out by searching for `getByUUID Getting object with UUID` messages backwards through the trace.  
