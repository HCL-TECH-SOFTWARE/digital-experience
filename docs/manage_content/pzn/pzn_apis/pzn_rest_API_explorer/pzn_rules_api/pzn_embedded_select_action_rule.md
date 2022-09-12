# Personalization Embedded WCM Select Action Rule

The following topic provides details about DX Personalization Embedded WCM Select Action rules.

## Introduction

Personalization components in WCM surround PZN rules to allow rendering of the rules similar to menus or navigators, they allow result set, no result, separator, markup options. Personalization components can refer either to Embedded Select Action rules \(stored in WCM\) or content spots or regular \(not embedded\) Select Action rules \(stored in PZN\). The Select Action rule which is created inside the Personalization Component is called "Embedded Select Action rule". The advantage of Embedded Select Action rules are that they are syndicated and support workflow.

The Personalization Component \(termed as Content-spot\) can be accessed, created & modified using below URLs:

-   GET & POST request to:

    ```
    https://localhost:10039/wps/mycontenthandler/wcmrest-v2/component/content-spots
    ```

-   GET, PUT & DELETE request to:

    ```
    https://localhost:10039/wps/mycontenthandler/wcmrest-v2/component/content-spots/{content_spot_id}
    ```

    !!! note
        While creating a content-spot, if `embeddedRuleId` is not passed in the request body, a default Embedded Select Action rule gets created.

-   Default Embedded Select Action rule JSON structure:

    ```
    {
      "id": "ad0a2475-94cf-42b9-9fb4-f6ecc5646ac3",
      "description": "",
      "title": "ibmcontentwcm:pznEmbeddedRule",
      "ruleType": "Select Action",
      "contents": {
        "select": "Web Content",
        "conditions": {
          "and": []
        }
      },
      "authors": null,
      "creator": null,
      "created": "2022-07-03T04:41:00.218Z",
      "publishedOnDate": "1970-01-01T00:00:00.000Z",
      "lastModified": "2022-07-03T04:41:00.218Z",
      "lastModifier": null,
      "parentId": "159f39b3-c95e-4a69-b92e-5310cd1b0df7"
    }
    ```


## WCM REST API details

The detailed functionality of the above mentioned API for accessing WCM Personalization Component is documented here: [WCM Component](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/#tag/Component).

**Limitation:**

WCM endpoint to manage the personalization component \(/component/content-spots\) supports either Embedded Select Action rules or referenced Select Action rules, the external content-spots in PZN are not supported yet.

-   Sample JSON response for a content-spot:

    ```
    {
      "id": "a67ab57a-1346-4e9e-9d96-011f6af776cd",
      "title": {
        "lang": "en",
        "value": "DX Content-spot"
      },
      "name": "DXContent-spot",
      "type": "LibraryPersonalizationComponent",
      "created": "Sat, 02 Jul 2022 09:22:26.252Z",
      "author": [
        {
          "distinguishedName": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "uri": "/wps/mycontenthandler/!ut/p/digest!lnbGJvENdSIBp17gbs_TQw/um/users/profiles/Z9eAeOPCCJG9CJHCGJMKC3JD8JMG6L9DAMM073BC6JM46P1P46IPCP9E4JOS6P1",
          "name": "wpsadmin",
          "type": "USER"
        }
      ],
      "owner": [
        {
          "distinguishedName": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "uri": "/wps/mycontenthandler/!ut/p/digest!lnbGJvENdSIBp17gbs_TQw/um/users/profiles/Z9eAeOPCCJG9CJHCGJMKC3JD8JMG6L9DAMM073BC6JM46P1P46IPCP9E4JOS6P1",
          "name": "wpsadmin",
          "type": "USER"
        }
      ],
      "lastModifier": {
        "distinguishedName": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
        "uri": "/wps/mycontenthandler/!ut/p/digest!lnbGJvENdSIBp17gbs_TQw/um/users/profiles/Z9eAeOPCCJG9CJHCGJMKC3JD8JMG6L9DAMM073BC6JM46P1P46IPCP9E4JOS6P1",
        "name": "wpsadmin",
        "type": "USER"
      },
      "creator": {
        "distinguishedName": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
        "uri": "/wps/mycontenthandler/!ut/p/digest!lnbGJvENdSIBp17gbs_TQw/um/users/profiles/Z9eAeOPCCJG9CJHCGJMKC3JD8JMG6L9DAMM073BC6JM46P1P46IPCP9E4JOS6P1",
        "name": "wpsadmin",
        "type": "USER"
      },
      "profile": {},
      "link": [
        {
          "rel": "self",
          "href": "/wps/mycontenthandler/!ut/p/digest!lnbGJvENdSIBp17gbs_TQw/wcmrest-v2/component/content-spots/a67ab57a-1346-4e9e-9d96-011f6af776cd",
          "lang": "en",
          "label": "Read"
        },
        {
          "rel": "edit",
          "href": "/wps/mycontenthandler/!ut/p/digest!lnbGJvENdSIBp17gbs_TQw/wcmrest-v2/component/content-spots/a67ab57a-1346-4e9e-9d96-011f6af776cd",
          "lang": "en",
          "label": "Edit"
        },
        {
          "rel": "delete",
          "href": "/wps/mycontenthandler/!ut/p/digest!lnbGJvENdSIBp17gbs_TQw/wcmrest-v2/component/content-spots/a67ab57a-1346-4e9e-9d96-011f6af776cd",
          "lang": "en",
          "label": "Delete"
        }
      ],
      "status": "PUBLISHED",
      "lastModified": "Sat, 02 Jul 2022 09:22:26.252Z",
      "libraryID": "5786f67a-6aa0-4769-94cb-2ecb3263b2b3",
      "parentID": "329669cd-acb7-47a8-ba16-02c04dddbd73",
      "lock": {
        "isLocked": "true",
        "owner": {
          "distinguishedName": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "uri": "/wps/mycontenthandler/!ut/p/digest!lnbGJvENdSIBp17gbs_TQw/um/users/profiles/Z9eAeOPCCJG9CJHCGJMKC3JD8JMG6L9DAMM073BC6JM46P1P46IPCP9E4JOS6P1",
          "name": "wpsadmin",
          "type": "USER"
        }
      },
      "history": {
        "entries": [
          {
            "date": "Sat, 02 Jul 2022 09:22:26.252Z",
            "name": "wpsadmin",
            "message": "Document created by wpsadmin"
          }
        ]
      },
      "data": {
        "footerLayout": "",
        "headerLayout": "",
        "noResultsLayout": "",
        "resultsLayout": "",
        "separatorLayout": "",
        "resultsPerPage": "10",
        "startPage": "1",
        "maxPages": "10",
        "embeddedRuleID": "d3548bd9-fcf5-49c4-a926-09b6c03d1fbf"
      }
    }
    ```

-   Explanation of JSON structure of content-spot:

    ```
    {
      "id": "Uuid of the content-spot.",
      "type": "Represents the type of the component.",
      "name": "Name of the component. It should be unique.",
      "description": "Field to indicate that description of the component.",
      "title": "Component's title.",
      "owners": "Owner/s of the component.",
      "authors": "Author/s of the component.",
      "link": "Field to indicate related links.",
      "status": "It indicates the current stage of the component(E.g. - Draft, Published, Expired).",
      "lastModified": "It indicates the last date and time component is modified.",
      "libraryID": "Uuid of the document library containing the component.",
      "parentID": "Uuid of the parent web folder of the component.",
      "lock": "Provides the lock information for the component",
      "history": "It Contains the history associated to the current item..",
      "data": {
        "footerLayout": "It contains HTML script to define how footer of list results are presented to your site visitors.",
        "headerLayout": "It contais HTML script to define how header of list results are presented to your site visitors.",
        "noResultsLayout": "It contains HTML script to define how list results are presented to your site visitors if it returns no results.",
        "resultsLayout": "It contains HTML script to define how list results are presented to your site visitors.",
        "separatorLayout": "It contains HTML script to define how seperation of header, result & footer is presented to your site visitors.",
        "resultsPerPage": "A paging option which indicates the maximum number of results displayed per page.",
        "startPage": "A paging option which indicates the page result that we want to display first.",
        "maxPages": "A paging option which indicates the maximum number of result pages.",
        "embeddedRuleID": "Uuid of the personalization element specifically select action rule.",
        "listPresentation": "Uuid of the list presentation which frames the result display."
      }
    }
    ```


In the Json structure of content-spot there is a key-embeddedRuleId inside key-data. This embeddedRuleId points to the uuid of either the Embedded Select Action rule or referenced Select Action rule. This Embedded Select Action rule can be accessed and modified using below URLs:

GET, PUT & POST\(Invoke\) request to:

```
https://localhost:10039/wps/mycontenthandler/pzn-rest/rules/{rule-id}
```

!!! note
  The title & parentId of the Embedded Select Acton Rule cannot be updated and the title will always be "ibmcontentwcm:pznEmbeddedRule".
