# Web Content Manager Syndication REST APIs

The Web Content Manager Syndication REST APIs let you control syndication processes.

**Note:** Developers should continue to use the Digital Experience Administration panel and options to create or delete Web Content Manager syndicator and subscriber pairs. See the [**Creating a syndication relationship by using the Administration view**](../panel_help/wcm_syndication_settingup.md) topic for further information.



The following Web Content Manager REST APIs may be used to query and manage several syndication operations.

## Available Syndication Pairs

These two Web Content Manager REST calls return a list of all defined syndicators or subscribers:

-   **GET**

    ```
    http(s)://host:port/wps/mycontenthandler/{VP Name}/!ut/p/wcmrest/Syndication/Syndicators
    ```

    Sample output:

    ```
    {
       "entry":{
          "content":{
             "Syndicators":{
                "SyndicatorList":[
                   {
                      "SyndicatorName":"The Syndicator",
                      "SyndicatorUUID":"23ccb6d9-3f25-4211-8861-4747527fbd4e"
                   },
                   {
                      "SyndicatorName":"The Syndicator2",
                      "SyndicatorUUID":"e235c757-c406-4ec1-b80b-3d49a815d2f0"
                   },
                   {
                      "SyndicatorName":"The Syndicator3",
                      "SyndicatorUUID":"8a7ad1b8-165f-444e-890b-9f5c1734a232"
                   }
                ]
             }
          }
      
    
    
    ```


-   **GET**

    ```
    http(s)://host:port/wps/mycontenthandler/{VP Name}/!ut/p/wcmrest/Syndication/Subscribers
    ```

    Sample output:

    ```
    {
       "entry":{
          "content":{
             "Subscribers":{
                "SubscriberList":[
                   {
                      "SubscriberName":"The Subscriber2",
                      "SubscriberUUID":"1dd7950d-4294-40d8-95cd-ef75266d913f"
                   },
                   {
                      "SubscriberName":"The Subscriber3",
                      "SubscriberUUID":"80a10a35-06b2-4297-9f11-7c7c0bab36eb"
                   },
                   {
                      "SubscriberName":"The Subscriber",
                      "SubscriberUUID":"9bc95c72-edcf-4d72-af35-cfa124f0a2a4"
                   }
                ]
             }
          }
       }
    }
    
    ```


The Virtual Portal \(VP\) "\{VP Name\}/" may be blank for the base VP. Information returned includes:

-   Name of Syndicator/Subscriber
-   UUID of Syndicator/Subscriber

If the VP has no syndicators or subscribers, the returned JSON or ATOM will have no list and look like this:

```
{
   "entry":{
      "content":{
         "Syndicators":{}
      }
   }
}

```

Issuers of this REST call must have the DX role of "User" to get either of these lists.

## Status of a Syndicator or Subscriber

Once a specific UUID of a syndicator/subscriber is obtained, the full status of that syndicator/subscriber can be obtained via the following REST call:

-   **GET**

    ```
    http(s)://host:port/wps/mycontenthandler/{VP Name}/wcmrest/{"Syndicator"/"Subscriber"}/{UUID of syndicator/subscriber}/Status
    ```

    The "\{VP Name\}/" may be blank for the base Virtual Portal \(VP\).

    This WCM REST API will return the following attributes:

    Syndicator Status:

    ```
    {
       "entry":{
          "content":{
             "SyndicatorStatus":{
                "Name":"The Syndicator",
                "UUID":"23ccb6d9-3f25-4211-8861-4747527fbd4e",
                "Description":"This is a test syndicator",
                "isEnabled":"true",
                "State":"idle",
                "LastRunDate":"2020-Sep-02 04:33:31 EDT",
                "SyndicatorLibraries":[
                   "testlibrary"
                ]
             }
          }
       }
    }
    
    ```

    Subscriber Status:

    ```
    {
       "entry":{
          "content":{
             "SyndicatorStatus":{
                "Name":"The Syndicator",
                "UUID":"23ccb6d9-3f25-4211-8861-4747527fbd4e",
                "Description":"This is a test syndicator",
                "isEnabled":"true",
                "State":"idle",
                "LastRunDate":"2020-Sep-02 04:33:31 EDT",
                "SyndicatorLibraries":[
                   "testlibrary"
                ]
             }
          }
       }
    }
    
    ```

    Note that both the syndicator and its associated subscriber both have to be enabled to successfully syndicate content between the two.

    If the VP has no syndicators or subscribers, the returned JSON or ATOM will present no status attributes like this:

    ```
    {
       "entry":{
          "content":{
             "SyndicatorStatus":{}
          }
       }
    }
    {
       "entry":{
          "content":{
             "SubscriberStatus":{}
          }
       }
    }
    
    ```

    Developers must have the role of Administrator in order to retrieve these attributes.


## Set Enabled/Disabled Status on Syndicator/Subsriber

Once a UUID is available, another set of WCM REST APIs need to be applied to set the syndication status of the Syndicator/Subscriber:

-   **PUT**

    ```
    http(s)://host:port/wps/mycontenthandler/{VP Name}/wcmrest/{"Syndicator" or "Subscriber"}/{UUID of syndicator/subscriber}/Status
    ```

    Sample output:

    Note in this case the JSON input was exactly the same output from the corresponding GET request. However, two fields can change the status of the Syndicator:

    -   "`isEnabled`": Set the enabled state of the syndicator to either "true" or "false"

    -   "`State`": Set the overall state of the Syndicator to "update". When set to "update", this will initiate an immediate "update now" request on the Syndicator. The returned state will either be "running" or "idle".

    Sample output:

    Note in this case the JSON input was exactly the same output from the corresponding GET request:

    -   "`isEnabled`": Set the enabled state of the syndicator to either "true" or "false"

    -   "`State`": Set the overall state of the Subscriber to "update". When set to "update", this will initiate an immediate "update now" request on the Subscriber. The returned state will either be "running" or "idle".

        Sufficient privilege must be available for the PUT call. Typically, the issuer of this REST call will need to be an HCL DX Administrative user.


## Syndicate Now \(Update Syndicator\)

See the previous command for details on how to pro grammatically issue an immediate "update" call on the Syndicator/Subscriber.

Note that in the HCL DX Administration User interface, this action is known as “update syndicator” or “update subscriber”.

The effect of this call will be to override the normal scheduled behavior of the syndicator/subscriber and initiate an immediate syndication request. It need only be done once on either the syndicator or the subscriber. It does not need to be issued on both. This will mimic the “syndicate now” icon on the HCL DX Administration UI for syndication/subscriber.

## Use of the WCM Syndication REST APIs on the Primary Virtual Portal \(VP\) versus all other VPs

Note that on a Virtual Portal, the “!ut/p/digest” portion of the DX URL must be included because the content handler cannot issue the redirect when using the URL format without the portion mentioned.

So, in the example URLs above, the "!ut/p/digest!...." portion of the DX URL is NOT included. This implies that this URL is issued in the "main" or primary VP of the DX Portal. A 302 redirect will take place and the "!ut/p/digest!" will be inserted in the final URL. This portion of the URL can also be used for the VP URL request.

