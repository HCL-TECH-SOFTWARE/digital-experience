# Syndication properties

You can tailor the syndication behavior of your web content environment by changing configuration settings such as the syndication interval and automatic syndication.

You define and manage syndication options in the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console.

## Changing the syndication interval

Although the frequency of syndication is set by default during installation, you can change the syndication interval to better suit the needs of your environment.

For example, you might shorten the interval in an active authoring environment where users must collaborate heavily and rely on timely replication. Similarly, you might lengthen the interval to avoid excessive replication of data that does not change often.

!!! note
    The syndication interval applies to all syndication operations and cannot be specified separately for different syndicator-subscriber pairs.

To change the syndication interval, modify the deployment.itemChangedTaskDelay property. By default, the syndication interval is set to 30 seconds. Specify the number of seconds to use as the syndication interval, with a minimum of 0 seconds and a maximum of 65536 seconds. A value of 0 prevents syndication from occurring. If you set the value to so short an interval that syndication cannot complete before the interval expires, syndication begins again when the previous syndication completes.

## Syndication scheduling mode

Syndication can be set to either happen automatically, or manually:

-   **Automatic**

    Syndication is scheduled automatically based on the configured syndication interval.

-   **Manual**

    Syndication occurs only when requested by using the administration portlet.


Automatic syndication is enabled by default. To disable automatic syndication, specify the following property: connect.moduleconfig.syndication.inittasks=false

## Configuring a subscriber-only server

A syndicator server uses several processes to gather and queue content for syndication. These processes can sometimes affect server performance when run. However, a subscriber-only server does not require these processes, so you can improve performance on the subscriber-only server by disabling the processes.

To do this, ensure that `deployment.subscriberOnly` property is set to `true`.

## Enabling secure syndication by using SSL

To enable and use SSL for syndication, the following properties must be changed in the `WCM WCMConfigService` to use the "https" protocol and the appropriate port.

-   deployment.itemDispatcherUrl=http://$\{WCM\_HOST\}:$\{WCM\_PORT\}/$\{WCM\_CONTEXT\_ROOT\_PATH\}/connect/?MOD=ItemDispatcher

-   deployment.syndicatorUrl=http://$\{WCM\_HOST\}:$\{WCM\_PORT\}/$\{WCM\_CONTEXT\_ROOT\_PATH\}/connect/?MOD=Synd

-   deployment.subscriberUrl=http://$\{WCM\_HOST\}:$\{WCM\_PORT\}/$\{WCM\_CONTEXT\_ROOT\_PATH\}/connect/?MOD=Subs


For example, to enable SSL for syndication where the server is configured to provide SSL on port 10080, change deployment.syndicatorUrl from http://$\{WCM\_HOST\}:$\{WCM\_PORT\}/$\{WCM\_CONTEXT\_ROOT\_PATH\}/connect/?MOD=Synd to https://$\{WCM\_HOST\}:10080/$\{WCM\_CONTEXT\_ROOT\_PATH\}/connect/?MOD=Synd.

If self-signed certificates are used, extra steps may be necessary to ensure the certificates that are exchanged are trusted on both servers. See the "SSL Configurations" topic in the WebSphere Application Server documentation.


???+ info "Related information:"
    - [Setting service configuration properties](../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

