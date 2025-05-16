# HCL Digital Experience Cloud Native 9.5 entitlement checks

Both the [HCL Software License Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344){target="_blank"} and [My HCLSoftware](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0109011){target="_blank"} portals support entitlement checking and usage reporting for several HCL Software solutions, including the [HCL Digital Experience (DX) Cloud Native 9.5 Tier 1 – 7 offerings](https://blog.hcltechsw.com/digital-experience/introducing-new-hcl-digital-experience-cloud-native-9-5-bundle-with-user-session-pricing/){target="_blank"} in the HCL DX portfolio. By checking entitlements, customers can track purchased software entitlement periods and usage levels. 

Entitlement checking and usage reporting are done differently, depending on whether customers are using Cloud Native (Kubernetes) or traditional (non-Kuberntes) deployments.

For Kubernetes deployments, the HCL License Manager container service is configured to check entitlements and record usage against one or another (but not both) of the software delivery portals. Where customers cannot or do not want to integrate directly with a delivery portal for automatic online reporting, alternative options are available to connect to either a local License Server (in the case of FlexNet), or to produce report extracts in a simple file format, that can be read and shared in other ways. This [reporting options table](#reporting-options) identifies the reporting options for Kubernetes and traditional deployments.

!!! note
    Entitlement checking is not implemented in the HCL DX Cloud Native v9.5 software that is deployed to supported specified Operating Systems (for example, Windows, Linux or IBM AIX). Customers deploying HCL DX Cloud Native v9.5 software to these platforms should plan to measure and report the total number of user sessions consumed per contract year, in accordance with the terms of the [HCL DX Cloud Native v9.5 license](https://www.hcltechsw.com/wps/wcm/connect/61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d/HCL+Digital+Experience+Cloud+Native+v9.5.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d-ofP.t-Y){target="_blank"} .  

For traditional deployments (non-Kubernetes), you can use web analytics reporting software such as Google Analytics to track user session consumption in their DX v9.5 production deployments. For more information, see [Integrate Google Analytics with HCL Digital Experience](../../../../build_sites/site_analytics/google_analytics/index.md).

A standalone tool called the [User session reporting tool](./user_session_reporting_tool.md) was delivered in CF223 and is available from the software delivery portals, as an alternative to Google Analytics or other methods customers might have used to gather usage data.

## HCL DX Cloud Native 9.5 entitlement-check requirement

If you deploy DX to supported Kubernetes platforms, you must specify certain entitlement check parameters in [HCL Digital Experience Cloud Native 9.5 Tier 1 – 7](../../../../get_started/product_overview/offerings.md#hcl-digital-experience-cloud-native) installations to accomplish entitlement checks. If you do not specify these entitlement check parameters or fail to configure them correctly, then the entitlement check will not pass and software access will enter the grace period.

Review the following [HCL Digital Experience Cloud Native 9.5](../../../product_overview/offerings.md#hcl-digital-experience-cloud-native) entitlement validation check scenarios see responses when entitlement-validation attempts fail.

HCL’s approach is to conduct automated license validation for all products. This kind of license validation is called an entitlement check. The following information highlights all scenarios that involve HCL Software License Portal entitlement checks for the [HCL Digital Experience Cloud Native 9.5 Tier 1 – 7](../../../product_overview/offerings.md#hcl-digital-experience-cloud-native) offering deployments. An entitlement check verifies the customer's purchased product subscription period is valid. If a customer’s subscription lapses, the customer must renew the subscription with HCL. For example, if a customer purchases a Digital Experience Cloud Native 9.5 Tier 2 part on May 30, 2024, the entitlement period is valid until May 30, 2025.

### Entitlement-check scenarios

When the HCL DX Cloud Native 9.5 License Manager container service starts, and entitlement checking and usage reporting are enabled, it will perform an entitlement check against the configured software delivery portal and report the result of that check in log messages.

During the grace period and beyond, messages are displayed in the License Manager container logs as a reminder that the contracted entitlement has expired. If you encounter these messages, contact your HCL salesperson to discuss the entitlement.


!!!note
    - The grace period is 28 days. This period is determined and defined by the entitlement server. During this time, the DX Cloud Native 9.5 server starts, despite failing an entitlement check.
    - To confirm that your entitlement is verified and that your HCL DX CN 9.5 server is not in the grace period, access the HCL Digital Experience v9.5 Container Update Log Manager pod logs. However, you must first ensure that your DX Cloud Native 9.5 deployment Helm chart is configured for entitlement checking to verify that there are no HCL DX CN 9.5 entitlement messages.

The following table describes the possible entitlement-check response scenarios and the corresponding behavior of the Digital Experience Cloud Native 9.5 Tier 1 – 7 (CN) services. 

| Entitlement-Check Response Scenario | Digital Experience Cloud Native 9.5 Server Behavior |
| ----------- | ----------- |
| 1. The connection to the entitlement server is successful. You have a valid HCL Digital Experience Cloud Native 9.5 entitlement.|The HCL DX Cloud Native 9.5 server starts.|
| 2. The connection to the entitlement server is successful. The HCL DX CN 9.5 entitlement has expired. You are operating within the HCL DX CN 9.5 entitlement grace period.|HCL DX Cloud Native 9.5 server starts. The following message is included in the server-side log file and on another DX location: <br><br> `HCL DX CN 9.5 entitlement has ended on expiry date. The grace period will expire in (number of days remaining). To avoid interruption in service, please contact your HCL salesperson to resolve the entitlement issue.`|
| 3. The connection to the entitlement server is successful. You do not have a valid HCL Digital Experience Cloud Native 9.5 entitlement. |HCL DX Cloud Native 9.5 server starts. The following message is included in the server-side log file: <br><br> `HCL DX CN 9.5 entitlement grace period has ended on grace period end date. Resolve this issue to avoid interruption in the service.`|
| 4. The connection to the entitlement server fails. The HCL DX CN 9.5 entitlement grace period has started.|HCL DX Cloud Native 9.5 server starts. The following message is included in the server-side log file in the HCL DX 9.5 Container Update License Manager pod logs: <br><br> `The connection to the entitlement server failed. HCL DX CN 9.5 entitlement grace period of four weeks has started and will expire on (grace period end date). Please contact HCL Support to resolve the connection issue and try again.`|
| 5. The connection to the entitlement server fails. You are operating within the HCL DX CN 9.5 entitlement grace period.|HCL DX Cloud Native 9.5 server starts. The following message is included in the HCL DX 9.5 Container Update License Manager pod logs: <br><br> `The connection to the entitlement server failed. You are currently operating within the HCL DX CN 9.5 entitlement grace period of four weeks, which expires on (grace period end date). Please contact HCL Support to resolve the connection issue and try again.`|
| 6. The connection to the entitlement server fails. The HCL DX CN 9.5 entitlement grace period has expired.|The following message is included in the HCL DX 9.5 Container Update License Manager pod logs: <br><br> `HCL DX CN 9.5 entitlement grace period has ended on (grace period end date). If you feel this is an error, please log in to the HCL Customer Support portal ([https://support.hcltechsw.com/csm](https://support.hcltechsw.com/csm)) and open a Licensing case (New cases > Licensing case). Otherwise, contact your HCL salesperson to update your licensing.`<br><br> If you require an extension to the grace period, you can contact Support for a one-time extension of up to 14 additional days. |

## HCL DX Cloud Native v9.5 Usage Reporting

### Reporting Options

When reporting product usage in HCL Digital Experience (DX), the method of reporting depends on the connectivity of your deployment to external licensing services. Two primary modes are available: Online and Offline (Disconnected) usage reporting.

1. **Online Usage Reporting** - In online mode, the deployment is connected to the internet and can communicate directly with licensing services like FlexNet or My HCLSoftware (MHS). Usage data such as user sessions or feature utilization is automatically reported in near real-time through integrated APIs. This is the most seamless and automated method of entitlement tracking and compliance.

2. **Offline / Disconnected Usage Reporting** - In offline or disconnected mode, the environment has no external connectivity to licensing servers. This is common in air-gapped, on-premises, or highly secure deployments. In this mode, usage data must be collected manually, converted into supported metric formats, and then uploaded manually via a web portal or submitted to HCL teams.

To determine the appropriate reporting method for your existing deployment, refer to the table below. It outlines the available usage reporting options for both Kubernetes and Traditional (on-premises) environments, along with their corresponding software portals and documentation links.

| **Reporting Target**     | **Deployment Type** | **Further Information**                                                                                                                                              |
|-------------------------|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **FlexNet**             | Kubernetes          | [Online Reporting](./flexnet_license_and_delivery.md)                                                                                                                |
|                         | Kubernetes          | [Offline / Disconnected Reporting](./configuring_local_flexnet_entitlement_server.md) (Local FlexNet License Server)                                                |
| **My HCLSoftware**      | Kubernetes          | [Online Reporting](./mhs_license_and_delivery.md#configuring-the-dx-cloud-native-95-entitlement)                                                                    |
|                         | Kubernetes          | [Offline / Disconnected Reporting](./configuring_mfs_file_base_session_reporting.md/#mhs-file-based-usage-reporting-for-kubernetes-deployments)                    |
|                         | Traditional         | [Non-Kubernetes Disconnected Reporting](./configuring_mfs_file_base_session_reporting.md/#mhs-file-based-usage-reporting-for-non-kubernetes-deployments)           |
| **Manual Export**       | Kubernetes          | [Manual Report Extracts](./export_usage_report.md)                                                                                                                   |
|                         | Traditional         | [User Session Reporting Tool](./user_session_reporting_tool.md)                                                                                                               |

### Monitoring user-session consumption for HCL DX Cloud Native v9.5 production deployments

!!! note
    Calculating and reporting of user session consumption produces the same results, regardless of which software delivery portal is being used.

In addition to verifying entitlement to the contract period for purchased subscription software, the HCL Software delivery portals can present usage information of HCL Software offerings that have been developed to report usage metrics. This information includes HCL DX Cloud Native v9.5 Tier 1 – 7 offerings for production deployments. 

HCL DX Cloud Native 9.5 Tier 1 – 7 offerings are purchased according to the number of user sessions to be consumed annually.  A user session is defined as a single web session or other online interaction by anonymous or authenticated users of the program when it is deployed for production use. User sessions also include API calls, which deliver production-use website content or application data to external resources, excluding deliveries to a content-delivery network.

**A user session begins** when a user (authenticated or anonymous) visits a DX deployment operating for production use and then interacts with program website pages and is identified through appropriate tags that use the appropriate scripts for each site page view request. User session interactions can include one or more production-use website page views.

**A user session ends** when the user interaction with the production-use program is idle for 30 minutes or until the user ends the interaction explicitly by closing their authentication or web session with the site.

The maximum duration for an individual user session with continuous interactions is four hours.

You can view user-session consumption by using usage reports in the corresponding software delivery portal. To be included in these reports, your DX Cloud Native 9.5 entitlements must be:

- Mapped to the appropriate software delivery portal for entitlement checking.
- Configured for production use in your deployment Helm charts.

For more information, refer to [What is the HCL Software License and Download Portal?](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344#a8){target="_blank"}.

Run the [Reports for metered products](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0073344#a8){target="_blank"} section to understand how to access your FlexNet/MHS entitlement dashboard. Users with authorized access to this service can run usage reports. The DX Cloud Native 9.5 entitlements are configured to report user-session consumption for deployments configured for production use.

### How user sessions in production deployments are calculated for report totals

HCL DX Cloud Native 9.5 applies the following approach when it reports totals for user-session consumption in deployments configured for production to individual customer FlexNet dashboards or MHS dashboards: 

When a user interacts with an HCL DX Cloud Native 9.5 production deployment site, the License Manager pod, in conjunction with the HAProxy Pod, coordinates a combination of IP address and user agent to identify a unique user session. For every request, a key is computed based on the requesting IP of the user, combined with the user agent and a forwarding header (`X-Forwarded-For`) for proxy (if a customer uses a proxy in their deployment setup) usage. Subsequent interactions during the same user session period use that key to identify the same user. 

This information is stored in memory only for up to four hours and is discarded afterwards. This information is only accessible by a Kubernetes administrator with permissions to access the log files. HCL cannot access this information at any time.

Some customers might choose to use a proxy, for example, a load balancer, DMZ endpoint, or other service that resides between the user and the HCL DX Cloud Native v9.5 deployment. In that case, the customer should ensure the relevant information to facilitate user-session tracking arrives properly at the DX deployment for accurate tracking.

The License Manager pod manages entitlement checking and user-session consumption reporting for production deployments. 

The License Manager transmits the total number of completed user sessions to the customer [HCL Software License Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344#a8){target="_blank"} instance (FlexNet/My HCL Software) dashboard. The user session keys are not transmitted, nor is any other information about users or sessions.

The License Manager uses whichever FlexNet or MHS service endpoint is configured to transmit the data total amount and each API request contains in its entirety the following data:

-   Timestamp of data transmission (implicit in the call, not explicitly provided)
-   Deployment identification information
-   Total number of completed user sessions calculated by the License Manager since the last transmission

For more information about FlexNet entitlement checking / usage reporting, see [Entitlement checking in FlexNet software delivery portal](./flexnet_license_and_delivery.md).

For more information about My HCLSoftware entitlement checking / usage reporting, see [Entitlement checking in My HCLSoftware delivery portal](./mhs_license_and_delivery.md).

???+ info "Related information"
    -   [HCL Digital Experience Cloud Native v9.5 license](https://www.hcltechsw.com/wps/wcm/connect/61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d/HCL+Digital+Experience+Cloud+Native+v9.5.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d-n-MmIad){target="_blank"}
    -   [Simplified Pricing, More Value: HCL Digital Experience v9.5 User Session bundle](https://blog.hcltechsw.com/digital-experience/simplified-pricing-more-value-hcl-digital-experience-cloud-native-9-5-bundle-with-user-session-pricing/){target="_blank"}
