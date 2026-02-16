# How to generate a PACDump

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

In some cases, a Puma Access Control Dump (PACDump) is requested by HCL Support to debug issues with roles and permissions. This article describes how to generate a PACDump.

## Instructions

To generate a PACDump, you must send an HTTP GET request to one of the following URLs as an authenticated portal administrator. You can do this in two ways:

- **Using a browser:** Log in to HCL DX as an administrator, open a new tab in the same browser window, and paste the URL into the address bar.
- **Using a REST client:** Use a tool such `curl` or Postman to send a GET request to the URL, ensuring you pass your portal administrator credentials.

!!!note
    It is not possible to take a PACDump of individual virtual portal. The base PACDump contains data for the entire portal, including all virtual portals.

Use the following URLs to generate different types of PACDumps based on your troubleshooting needs. The examples provided in this section use `wp.content.root` as the resource.

- **Full PACDump:**

    ```url
    http://<host>:<port>/wps/mycontenthandler/!ut/p/pacdump/0
    ```

- **Full PACDump for a specific domain:**

    ```url
    http://<host>:<port>/wps/mycontenthandler/pacdump/0?domain=jcr
    ```

- **PACDump for the tree of resources rooted at specific resource:**

    ```url
    http://<host>:<port>/wps/mycontenthandler/pacdump/wp.content.root
    ```

- **PACDump for a single resource (includes standard metadata):**

    ```url
    http://<host>:<port>/wps/mycontenthandler/pacdump/wp.content.root&levels=1
    ```

- **Filtered PACDump for a single resource (excludes users, roles, and stats):**

    ```url
    http://<host>:<port>/wps/mycontenthandler/pacdump/wp.content.root?domain=rel&levels=1&exportUserInfo=false&exportApplicationRoles=false&exportDomainInfo=false&exportStatistics=false
    ```

- **Minimal PACDump for a single resource:**

    ```url
    http://<host>:<port>/wps/mycontenthandler/pacdump/wp.content.root?domain=rel&levels=1&compact=true
    ```

- **PAC data for individual items using REST URLs:**

    ```url
    http://<host>:<port>/wps/mycontenthandler/!ut/p/digest!xejZtYUbiw6-elhgRpNIIg/ac/member:Contributor@oid:Z6QReDeG9DGJIDC43CEJMOC3RD0JMG65JC4MM8C4RD8JM46LPCG3S07L9CC3I175JEK2T873HE63
    ```

    ```url
    http://<host>:<port>/wps/mycontenthandler/!ut/p/digest!xejZtYUbiw6-elhgRpNIIg/ac/member:user@oid:Z6QReDeNPO4MS06IPC4MMKCKPD8MMG6OHP4JM4CNHP4MMK653P03JD6KHC43ID63JEK2T873HE63
    ```

### Check role blocks

To check role blocks for a Web Content Manager (WCM) item, use a URL similar to the following:

```url
http://<host>:<port>/wps/mycontenthandler/ac/resourceconfig:oid:Z6QReDeGPC8MPCC53C03QG62BEE3OKC2BE2JRC6P9E26OG633E4MI5CN1D3
```

If role blocks exist, the output resembles the following example:

```xml
<ac:resource-config>
    <ac:role-block ac:block-type=\"inheritance\" ac:type=\"User\"/>
    <ac:role-block ac:block-type=\"propagation\" ac:type=\"User\"/>
</ac:resource-config>
```

If you find an unwanted role block, remove it by editing the response. Then, send the edited XML back to the server using an HTTP PUT request to the same URL. Ensure you set the content type to `application/xml`. This approach is especially useful for troubleshooting when two environments exhibit different behavior for an identical item.
