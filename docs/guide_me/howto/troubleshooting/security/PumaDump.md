# How to generate a PumaDump aka PACDump

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

In some cases a Puma Access Control Dump (PACDump) is requested by the Portal support team to debug issues with roles/permissions.

## Instructions

!!!note
    It is not possible to take PACDump of individual virtual portal. The base PACDump contains data for the entire Portal including all virtual portals.

### PACDumps

To collect a full PACDump use the following URL:

```url
http://<host>:<port>/wps/mycontenthandler/!ut/p/pacdump/0
```

To collect a full PACDump for a specific domain:

```url
http://<host>:<port>/wps/mycontenthandler/pacdump/0?domain=jcr
```

To collect at PACDump for the tree of resources rooted at specific resource (e.g. `wp.content.root`):

```url
http://<host>:<port>/wps/mycontenthandler/pacdump/wp.content.root
```

To collect PACDump for the single resource (e.g. `wp.content.root`):

```url
http://<host>:<port>/wps/mycontenthandler/pacdump/wp.content.root&levels=1
```

To collect PACDump for the single resource (e.g. `wp.content.root`) only:

```url
http://<host>:<port>/wps/mycontenthandler/pacdump/wp.content.root?domain=rel&levels=1&exportUserInfo=false&exportApplicationRoles=false&exportDomainInfo=false&exportStatistics=false
```

To collect minimal PACDump for the single resource (e.g. `wp.content.root`):

```url
http://<host>:<port>/wps/mycontenthandler/pacdump/wp.content.root?domain=rel&levels=1&compact=true
```

Some REST URLs to generate PAC data for individual items:

```url
http://<host>:<port>/wps/mycontenthandler/!ut/p/digest!xejZtYUbiw6-elhgRpNIIg/ac/member:Contributor@oid:Z6QReDeG9DGJIDC43CEJMOC3RD0JMG65JC4MM8C4RD8JM46LPCG3S07L9CC3I175JEK2T873HE63
```

```url
http://<host>:<port>/wps/mycontenthandler/!ut/p/digest!xejZtYUbiw6-elhgRpNIIg/ac/member:user@oid:Z6QReDeNPO4MS06IPC4MMKCKPD8MMG6OHP4JM4CNHP4MMK653P03JD6KHC43ID63JEK2T873HE63
```

### Role Block checks

For a WCM Item:  

```url
http://<host>:<port>/wps/mycontenthandler/ac/resourceconfig:oid:Z6QReDeGPC8MPCC53C03QG62BEE3OKC2BE2JRC6P9E26OG633E4MI5CN1D3
```

If there are role blocks you will see something similar to this:

```xml
         <ac:resource-config>
             <ac:role-block ac:block-type=\"inheritance\" ac:type=\"User\"/>
             <ac:role-block ac:block-type=\"propagation\" ac:type=\"User\"/>
         </ac:resource-config>
```

In case there is an unwanted role block, you can edit this response to remove the wrong role block. Then use HTTP PUT request to send this edited response back to the server using the same URL and content type "application/xml". This approach is especially useful when you have two environments exhibiting different behavior for an identical item.  
