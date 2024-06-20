# Integrate HCL Discover with HCL DX

This section includes information to set up integration of Digital Experience (DX) 9.5 Container Update CF192 and later sites with HCL Discover to access deep insight analytics and session replay services to assess the effectiveness of your DX site pages with end user audiences.

[HCL Discover](https://www.hcltechsw.com/products/unica/offerings/discover) provides insights to the online user journeys, enabling DX site managers and marketers to deliver optimized experiences. HCL Discover records what your customers are seeing on your Digital Experience web pages and how they interact with those pages.

By integrating with HCL Discover you can:

-   Detect and address user struggles in real time.
-   Improve user experience, by capturing and analyzing behavioral data.
-   Obtain visibility into business impact and opportunities.

For more information, see the [HCL Discover product documentation](https://help.hcltechsw.com/UnicaDiscover/12.1.11/en/index.html).

See the following to integrate HCL Discover services to HCL Digital Experience platform pages and uncover opportunities to generate positive experiences for users that make them want to visit your DX sites again.

## How does the integration work?

When a user opens a Digital Experience page in the browser, the Digital Experience theme module includes an HCL Discover javascript file, which handles the data capturing on the DX site. The file also handles sending the information to the Discover Server to enable collection of user data.

## Setting up the integration

Before you can set up the integration, HCL Discover must be installed and configured. HCL Discover entitlements are acquired separately. For more information, see the [HCL Discover product documentation](https://help.hcltechsw.com/UnicaDiscover/12.1.11/en/index.html).

## Managing privacy rules in HCL Discover

For information about managing sensitive customer data, see [Editing Privacy through Manage Services](https://help.hcltechsw.com/UnicaDiscover/12.1.0/en/DC/InitDCCfg/EditingPrivacyThroughMS_40.html) in the [HCL Discover product documentation](https://help.hcltechsw.com/UnicaDiscover/12.1.11/en/index.html).

## Tracking HCL DX pages with theme integration to HCL Discover

HCL Discover can track both authenticated or unauthenticated pages. By default, Discover does not store CSS, images, and JavaScript files because of the potential storage requirements. These files can be stored, but it is not recommended. Discover pulls those assets at the time of replay, either from the live site or from a configured secondary location through customized replay rules. For more information, see the [HCL Discover product documentation](https://help.hcltechsw.com/UnicaDiscover/12.1.0/en/index.html) or contact [HCL Support](https://support.hcltech.com/csm).

<!---
-   **[Installing the Unica Discover module for Digital Experience integration](../install/installing_the_unica_discover_module.md)**  
 Learn how to install the Unica Discover module for HCL Digital Experience integration. --->

## HCLSoftware U learning materials

For an introduction and a demo on how HCL DX and HCL Discover work together, go to [HCL DX and HCL Discover for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D956). To try it out yourself, refer to [HCL DX and HCL Discover for Business Users Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Integration/HDX-INT-BU_DX_Integration_with_HCL_Discover_for_Business_Users.pdf).

For an introduction and a demo on how to set up the integration between HCL DX and HCL Discover, go to [HCL DX and HCL Discover for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D1228). To try it out yourself, refer to [HCL DX and HCL Discover for Administrators Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Integration/HDX-INT-ADM_DX_Integration_with_HCL_Discover_for_Administrators.pdf).


