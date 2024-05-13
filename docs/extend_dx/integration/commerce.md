# Integrating HCL Commerce with HCL Digital Experience

[HCL Commerce](https://help.hcltechsw.com/commerce/9.1.0/landing/wc_welcome.html) is a customizable e-commerce platform. It provides tools for business users to centrally manage a cross-channel strategy. With HCL Commerce, business users can create and manage marketing campaigns, promotions, catalog, and merchandising across all sales channels. 

## Integration patterns

There are three patterns you can use when integrating HCL Commerce with HCL DX. 

### Side-by-side deployment of HCL DX and HCL Commerce

In this deployment pattern, HCL DX is used for displaying information, providing transactions, storing data up to ordering, and then redirecting to HCL Commerce using a single sign-on and letting the user check out in HCL Commerce. In a side-by-side deployment, both solutions are focused on their main functions but require some styling to make the overall solution seamless and looking consistent.

### Headless Commerce with HCL DX providing the user interface and consuming HCL Commerce APIs

You can also use HCL Commerce as a headless commerce solution and integrate this solution into DX sites using REST APIs, namely [HCL Commerce REST API](https://help.hcltechsw.com/commerce/9.1.0/restapi/refs/restview_openapi3.html) and [Storefront REST API](https://help.hcltechsw.com/commerce/9.1.0/restapi/concepts/cwvrestapi_store.html). With this integration, business users (for example, Marketing Managers) can manage sites and landing pages easily with DX's What You See Is What You Get (WYSIWYG) editing. Users can also add commerce capabilities to DX sites using drag and drop, accessible on all devices. DDC (Digital Data Connector) is an HCL DX solution that you can use to customize the user interface as a business user in HCL DX while consuming the HCL Commerce REST APIs.

### Headless content with HCL Commerce providing the user interface and consuming DAM and WCM APIs

With the [HCL Commerce integration with HCL Digital Experience (DX)](https://help.hcltechsw.com/commerce/9.1.0/integration/concepts/dx_introduction.html), you can utilize content and digital assets managed within HCL DX at any store. The integration provides the following HCL Commerce UI capabilities:

- Product Managers can work within the context of their merchandising tasks and are able to select digital assets for their products or categories.
- Marketing Managers can select content or images from HCL DX for use in Marketing Spots as part of their marketing rules.

The HCL Commerce integration provides a Reference Store application that retrieves specific content from HCL DX and renders presentation in the form of static and video ad e-Marketing Spots.

For more information, see the following topics:

- [Integration architecture overview](https://help.hcltechsw.com/commerce/9.1.0/integration/concepts/dx_architecture.html)
- [Deploying HCL DX with HCL Commerce](https://help.hcltechsw.com/commerce/9.1.0/integration/refs/dx_installtop.html)
- [Managing content in HCL DX](https://help.hcltechsw.com/commerce/9.1.0/integration/concepts/dx_usingdxcontent.html)
- [Managing digital assets in HCL DX](https://help.hcltechsw.com/commerce/9.1.0/integration/concepts/dx_managingassets.html)
- [Push to Live](https://help.hcltechsw.com/commerce/9.1.0/integration/refs/dx_pushtolive.html)


## HCLSoftware U learning materials

For courses on how to integrate HCL Commerce with HCL DX as a business user, developer, and administrator, go to [HCL Commerce Cloud Integration with HCL DX](https://hclsoftwareu.hcltechsw.com/courses/course/hce-int-hdx-hcl-commerce-cloud-integration-with-hcl-digital-experience).

For an introduction and a demo on integrating HCL Commerce with HCL DX, go to [DX Integration with HCL Commerce](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D955). To try it out yourself, refer to [Integrate HCL Commerce in DX Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Introduction/Woodburn_Stores_Demo_Lab.pdf) and corresponding [Integrate HCL Commerce in DX Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Introduction/Woodburn_Stores_Demo_Lab_Resources.zip).


