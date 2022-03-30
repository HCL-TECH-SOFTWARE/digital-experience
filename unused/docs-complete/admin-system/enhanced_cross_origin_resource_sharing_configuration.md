# Enhanced Cross Origin Resource Sharing Configuration 

Enhanced Cross Origin Resource Sharing Configuration adds new options for HCL Digital  Experience administrators to set configuration for CORS using a WP configuration service in  the IBM WebSphere Application Server resource environment provider. This new configuration  option is supported with HCL DX 9.5 Container Update CF195 and higher, and HCL DX CF196 and  higher for customers deploying to on premises platforms.

## Introduction

CORS stands for "[Cross Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)" and describes a pattern on how to  share data between different source origins for JavaScript. There is high demand  within the Web Community to mashup services and combine them in a common UI. Up  until this option, Web browsers did not allow requests to systems to be send across  Origin borders. CORS changes this paradigm and now pushes the responsibility for  such verifications to the Web server. To support this, the server side needs to  differentiate if the incoming request is trusted and should be processed, or if it  should be blocked.

## How to work with CORS in HCL DX

It is possible to control which origins can work with an instance of HCL Digital  Experience core Portal and Web Content services. By default, DX only grants  JavaScript of the same origin access to functions of the DX server. You can modify  this default by configuring a list of trusted domains inside of DX. Prior to this  configuration update, the list of trusted domains had to be defined in the DX  web.xml, which added steps to deploy and update.

Reference the existing documentation on the HCL Support Site – Technote that presents  these steps, for the current supported deployment pattern: [DX CORS Headers](https://support.hcltechsw.com/csm?sys_kb_id=3aa0a5ae1b492098a2f48661cd4bcb9c&id=kb_article_view&sysparm_rank=1&sysparm_tsqueryId=24d8f7471b9ba81c534c4159cc4bcb76)

This enhancement, available with HCL DX 9.5 Container Update CF195 and higher enables  the configuration to be set inside the WP ConfigService [IBM WebSphere Application  Server resource environment provider](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=settings-resource-environment-entry). The change requires a restart of HCL DX Core.  

## Sample

The sample below shows how to define the properties for two  entries.

```
com.ibm.portal.cors.domain.0.entry=http:// 
test.hcl.com com.ibm.portal.cors.domain.0.methods=PUT, GET  
com.ibm.portal.cors.domain.0.allowheaders=*  
com.ibm.portal.cors.domain.0.exposeheaders=MyHeader  
com.ibm.portal.cors.domain.1.entry=http://test2.hcl.com  
```

## Configuration explanation

-   **com.ibm.portal.cors.domain.number.maxage**

    Defines the max age for the granted permission. Default value is  1000.

-   **com.ibm.portal.cors.domain.number.methods**

    Defines the methods allowed for this domain. Default is GET,  OPTIONS.

-   **com.ibm.portal.cors.domain.number.allowheaders**

    Headers to allow.

-   **com.ibm.portal.cors.domain.number.exposeheaders**

    Headers to expose.


**Parent topic:**[Configuring authentication filters ](../admin-system/adauthflt.md)

