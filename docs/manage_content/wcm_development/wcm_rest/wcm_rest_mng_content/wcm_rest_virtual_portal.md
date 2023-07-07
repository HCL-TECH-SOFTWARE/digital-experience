# How to use REST on virtual portals

When using the REST API on virtual portals, the correct format is:

`/wps/mycontenthandler/vpcontext/!ut/p/wcmrest/...`

It must have `/!ut/p/` after the VP context.

For example:

`/wps/mycontenthandler/VP1/!ut/p/wcmrest/query?type=Library`

Set the contentHandlerPath to be /wps/mycontenthandler/VP1:

```
{ "connectionId": "myserver-vp1" , "host": "myserver.hcl.com" , "port": 10039 , "username" : "wpsadmin" , "password" : "wpsadmin" , "contentHandlerPath" : "/wps/mycontenthandler/VP1" , "secure" : false , "libraryName" : "" }
```

