---
title: Configure HCL DX Cloud Native 9.5 entitlement-check scenarios
---

# Configure HCL DX Cloud Native 9.5 entitlement-check scenarios

Review the following [HCL Digital Experience Cloud Native 9.5](../../../product_overview/offerings.md#hcl-digital-experience-cloud-native) entitlement validation check scenarios to use to formulate responses when entitlement-validation attempts fail.

HCL’s approach is to conduct automated license validation for all products. This kind of license validation is called an entitlement check. The following information highlights all scenarios that involve HCL Software License Portal entitlement checks for the [HCL Digital Experience Cloud Native 9.5 Tier 1 – 7](../../../product_overview/offerings.md#hcl-digital-experience-cloud-native) offering deployments. An entitlement check verifies the customer's purchased product (a DX Cloud Native 9.5 Tier 1- 7 part number that is mapped in their FlexNet Server instances) subscription period is valid. If a customer’s subscription lapses, the customer must renew the subscription with HCL. For example, if a customer purchases a Digital Experience Cloud Native 9.5 Tier 2 part on May 30, 2024, the entitlement period is valid through May 30, 2025.

## Entitlement-check scenarios
Depending upon your entitlement check result, the HCL DX Cloud Native 9.5 server starts, issues warning messages when an error occurs, or indicates that an entitlement requires renewal.
  
The following table describes all possible entitlement-check scenarios and the corresponding behavior of the Digital Experience Cloud Native 9.5 Tier 1 – 7 (CN) server.

!!!note
    -   The grace period is 28 days. This period is determined and defined by the FlexNet entitlement server. During this time, the DX Cloud Native 9.5 server starts, despite failing an entitlement check.
    -   To confirm that your entitlement is verified and that your HCL DX CN 9.5 server is not in the grace period, access the HCL Digital Experience v9.5 Container Update Log Manager pod logs. However, you must first ensure that your DX Cloud Native 9.5 deployment Helm chart is configured for entitlement checking to verify that there are no HCL DX CN 9.5 entitlement messages.

| Entitlement-check scenario | Digital Experience Cloud Native 9.5 Server behavior |
| ----------- | ----------- |
| 1. The connection to the entitlement server is successful. You have a valid HCL Digital Experience Cloud Native 9.5 entitlement.|The HCL DX Cloud Native 9.5 server starts.|
| 2. The connection to the entitlement server is successful. The HCL DX CN 9.5 entitlement has expired. You are operating within the HCL DX CN 9.5 entitlement grace period.|HCL DX Cloud Native 9.5 server starts. The following message is included in the server-side log file and on another DX location: <br><br> `HCL DX CN 9.5 entitlement has ended on expiry date. The grace period will expire in (number of days remaining). To avoid interruption in service, please contact your HCL salesperson to resolve the entitlement issue.`|
| 3. The connection to the entitlement server is successful. You do not have a valid HCL Digital Experience Cloud Native 9.5 entitlement. |HCL DX Cloud Native 9.5 server starts. The following message is included in the server-side log file: <br><br> `HCL DX CN 9.5 entitlement grace period has ended on grace period end date. Resolve this issue to avoid interruption in the service.`|
| 4. The connection to the entitlement server fails. The HCL DX CN 9.5 entitlement grace period has started.|HCL DX Cloud Native 9.5 server starts. The following message is included in the server-side log file in the HCL DX 9.5 Container Update License Manager pod logs: <br><br> `The connection to the entitlement server failed. HCL DX CN 9.5 entitlement grace period of four weeks has started and will expire on (grace period end date). Please contact HCL Support to resolve the connection issue and try again.`|
| 5. The connection to the entitlement server fails. You are operating within the HCL DX CN 9.5 entitlement grace period.|HCL DX Cloud Native 9.5 server starts. The following message is included in the HCL DX 9.5 Container Update License Manager pod logs: <br><br> `The connection to the entitlement server failed. You are currently operating within the HCL DX CN 9.5 entitlement grace period of four weeks, which expires on (grace period end date). Please contact HCL Support to resolve the connection issue and try again.`|
| 6. The connection to the entitlement server fails. The HCL DX CN 9.5 entitlement grace period has expired.|The following message is included in the HCL DX 9.5 Container Update License Manager pod logs: <br><br> `HCL DX CN 9.5 entitlement grace period has ended on (grace period end date). If you feel this is an error, please log in to the HCL Customer Support portal ([https://support.hcltechsw.com/csm](https://support.hcltechsw.com/csm)) and open a Licensing case (New cases > Licensing case). Otherwise, contact your HCL salesperson to update your licensing.`<br> If you require an extension to the grace period, you can contact Support for a one-time extension of up to 14 additional days. |

## How to monitor user-session consumption for HCL DX Cloud Native v9.5 production deployments
In addition to verifying entitlement to the contract period for purchased subscription software, the HCL Software License and Delivery Portal can present usage information of HCL Software offerings that have been developed to report use metrics. This information includes HCL Digital Experience Cloud Native v9.5 Tier 1 – 7 offerings for production deployments. 

HCL Digital Experience Cloud Native 9.5 Tier 1 – 7 offerings are purchased according to the number of user sessions to be consumed annually.  A *user session* is defined as a single web session or other online interaction by anonymous or authenticated users of the program when it is deployed for production use. User sessions also include API calls, which deliver production-use website content or application data to external resources, excluding deliveries to a content-delivery network.

**A user session begins** when a user (authenticated or anonymous) visits a DX deployment operating for production use and then interacts with program website pages and is identified through appropriate tags that use the appropriate scripts for each site page view request. User session interactions can include one or more production-use website page views.

**A user session ends** when the user interaction with the production-use program is idle for 30 minutes or until the user ends the interaction explicitly by closing their authentication or web session with the site.

The maximum duration for an individual user session with continuous interactions is 4 hours.

User session consumption can be viewed by using usage reports in the HCL Software Licensing Portal. To be included in these reports, your Digital Experience Cloud Native 9.5 entitlements must be as follows:

- Mapped to your HCL Software License portal instances for entitlement checking.
- Configured for production use in your deployment Helm charts.

Refer to the guidance in the following HCL Support knowledge article: [What is the HCL Software License and Download Portal?](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344#a8).

Run the “Reports for Metered products” section to understand how to access your FlexNet entitlement dashboard. Users with authorized access to this service can run usage reports. The Digital Experience Cloud Native 9.5 entitlements are configured to report user-session consumption for deployments configured for production use.

## How user sessions in production deployments are calculated for report totals 

HCL Digital Experience Cloud Native 9.5 applies the following approach when it reports totals for user session consumption in deployments configured for production to individual customer FlexNet dashboards or MHS dashboards: 

When a user interacts with an HCL DX Cloud Native 9.5 production deployment site, the License Manager pod, in conjunction with the HAProxy Pod coordinates a combination of IP address and user agent to identify a unique user session. For every request, a key is computed based on the requesting IP of the user, combined with the user agent and a forwarding header (`X-Forwarded-For`) for proxy (if a customer uses a proxy in their deployment setup) usage. Subsequent interactions during the same user session period use that key to identify the same user. 

This information is stored in memory only for up to 4 hours. It is discarded afterward. This information is only accessible by a Kubernetes administrator with permissions to access the log files. HCL cannot access this information at any time.

Some customers might choose to use a proxy, for example, a load balancer, DMZ endpoint, or other service that resides between the user and the HCL DX Cloud Native v9.5 deployment. In that case, the customer should ensure the relevant information to facilitate user-session tracking arrives properly at the DX deployment for accurate tracking.

The License Manager pod manages entitlement checking and user-session consumption reporting for production deployments. 

The License Manager transmits the total number of completed user sessions to the customer [HCL Software License Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344#a8) instance (FlexNet/My HCL Software) dashboard. The user session keys are not transmitted, nor is any other information about users or sessions.

The License Manager uses a FlexNet/MHS API to transmit the data total amount and each API request contains in its entirety the following data, and nothing more:

-   Timestamp of data transmission (implicit in the call, not explicitly provided)

-   FlexNet account identification information

-   Total number of completed user sessions calculated by the License Manager since the last transmission

For more details regarding MHS API refer [Configuring My HCL Software API and File based export](./configuring_mhs_api_file_based_export.md)

Access the Reports section of the HCL Software License and Download Portal (FlexNet) server.

![](../../software_licensing_portal/_img/access_reports_software_license_portal.png)

Select your account and then click **Search**. Select **Digital Experience Cloud Native 9.5** from the list of your account entitlements. Results are displayed and are similar to the following example. 

!!!note
    The results might show an overage percentage amount in parentheses which does not apply to this informational dashboard report.

    ![](../../software_licensing_portal/_img/select_account_entitlements.png)

The Usage report shows the following information:

-   **Period**: The period for the report results.
-   **Usage**: The number of user sessions that ran on your Digital Experience 9.5 Container Update deployment that is mapped to this entitlement and that has the **ProductionEnvironment** variable enabled and set to `True`. See the user session details in the [HCL Digital Experience Cloud Native 9.5 license](https://www.hcltechsw.com/wps/wcm/connect/61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d/HCL+Digital+Experience+Cloud+Native+v9.5.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d-n-MmIad) on the [HCL Software License Agreements](https://www.hcltechsw.com/resources/license-agreements) site.

    !!!note
        Only user-session data totals per month for the calendar year of purchase are transmitted to the customer's FlexNet dashboards for their viewing and monitoring purposes. No personal or PII data is transmitted.
        
-   **Entitlement**: Amount will equal one, which is equivalent to your HCL Digital Experience Cloud Native 9.5 Tier 1 – 7 purchased part. 

!!!note
    The FlexNet dashboard **Usage** data might show a data percentage amount in parentheses. This overage percentage amount does not apply to HCL Digital Experience Cloud Native 9.5 Tier 1 - 7 entitlement checking and informational user-session consumption reporting and can be disregarded. 

???+ info "Additional references"
    -   [HCL Digital Experience Cloud Native v9.5 license](https://www.hcltechsw.com/wps/wcm/connect/61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d/HCL+Digital+Experience+Cloud+Native+v9.5.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d-n-MmIad)
    -   [Simplified Pricing, More Value: HCL Digital Experience v9.5 User Session bundle](https://blog.hcltechsw.com/digital-experience/simplified-pricing-more-value-hcl-digital-experience-cloud-native-9-5-bundle-with-user-session-pricing/)
