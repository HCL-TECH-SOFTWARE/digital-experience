# Integrate HCL Unica Discover with HCL Digital Experience {#integrate_hcl_unica_discover .concept}

This section includes information to set up integration of Digital Experience 9.5 Container Update CF192 and later sites with HCL Unica Discover to access deep insight analytics and session replay services to assess the effectiveness of your DX site pages with end user audiences.

[HCL Unica Discover](https://www.hcltechsw.com/products/unica/offerings/discover) provides insights to the online user journeys, enabling DX site managers and marketers to deliver optimized experiences. HCL Unica Discover records what your customers are seeing on your Digital Experience web pages and how they interact with those pages.

By integrating with HCL Unica Discover you can:

-   Detect and address user struggles in real time.
-   Improve user experience, by capturing and analyzing behavioral data.
-   Obtain visibility into business impact and opportunities.

For more information, see the [HCL Unica Discover product documentation](https://help.hcltechsw.com/UnicaDiscover/12.1.0/en/index.html).

See the following to integrate HCL Unica Discover services to HCL Digital Experience platform pages and uncover opportunities to generate positive experiences for users that make them want to visit your DX sites again.

## How does the integration work? {#section_vzn_kwv_r4b .section}

When a user opens a Digital Experience page in the browser, the Digital Experience theme module includes an HCL Unica Discover javascript file, which handles the data capturing on the DX site. The file also handles sending the information to the Unica Discover Server to enable collection of user data.

## Setting up the integration {#section_xym_2yv_r4b .section}

Before you can set up the integration, HCL Unica Discover must be installed and configured. HCL Unica Discover entitlements are acquired separately. For more information, see the [HCL Unica Discover product documentation](https://help.hcltechsw.com/UnicaDiscover/12.1.0/en/index.html).

## Managing privacy rules in HCL Unica Discover {#section_yym_2yv_r4b .section}

For information about managing sensitive customer data, see [Editing Privacy through Manage Services](https://help.hcltechsw.com/UnicaDiscover/12.1.0/en/DC/InitDCCfg/EditingPrivacyThroughMS_40.html) in the [HCL Unica Discover product documentation](https://help.hcltechsw.com/UnicaDiscover/12.1.0/en/index.html).

## Tracking HCL DX pages with theme integration to HCL Unica Discover {#section_atv_fjb_ppb .section}

HCL Unica Discover can track both authenticated or unauthenticated pages. By default, Unica Discover does not store CSS, images, and JavaScript files because of the potential storage requirements. These files can be stored, but it is not recommended. Unica Discover pulls those assets at the time of replay, either from the live site or from a configured secondary location through customized replay rules. For more information, see the [HCL Unica Discover product documentation](https://help.hcltechsw.com/UnicaDiscover/12.1.0/en/index.html) or contact [HCL Support](https://support.hcltech.com/csm).

