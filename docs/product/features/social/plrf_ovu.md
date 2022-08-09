# Digital Data Connector \(DDC\) for HCL Portal

You can use the Digital Data Connector \(DDC\) for HCL Portal framework to integrate data from external data sources on your portal pages by using HCL Web Content Manager presentation components. External data means that the data does not need to be stored directly in HCL Web Content Manager. For example, you can use DDC to render social data that you have on your HCL Connections server or on other social platforms in the context of your portal pages. Other possible data sources include news feeds, task lists, product catalog information, to name just a few.

With Digital Data Connector, your website designers can use Web Content Manager presentation components to generate the web page markup for your external data. They can use all the Web Content Manager data management facilities for managing your external data visualizations. These facilities include content syndication, version handling, workflow, and targeting. They can manage the design components in the same way as your other Web Content Manager content and design components. The major benefits of this approach include the following:

-   Your Web Content Manager designers can fully control the visual appearance of the integrated data.
-   They can visualize the external data in the same way in which they visualize data that is stored in Web Content Manager.
-   As a result, they can visualize the external data in a way that is consistent with the corporate design of your overall website by reusing existing Web Content Manager components.
-   To quickly adjust existing visualizations of your data or create new visualizations for new kinds of external data, you no longer need the help of software developers or the IT department. Your website designers can start working on the presentation templates directly from your portal pages that show the data. They use the inline editing capabilities of Web Content Manager.
-   Your website designers make updates to the Web Content Manager design components in project scope. This way, they can keep updates in draft stage until all updates to the project are completed, approved, and finally published.

You can use Digital Data Connector in the following ways:

-   You can code a Java plug-in, a so-called DDC plug-in, that hooks into the DDC. The plug-in loads the external data and transforms it into a generic DDC data structure, so-called bean lists. You can then have the bean lists rendered on your portal pages by using standard Web Content Manager rendering methods.
-   You can use the generic XML DDC plug-in that is built into Digital Data Connector. You can use this plug-in to integrate remote XML data without writing or deploying extra Java code. It supports various parameters that you can use to specify from where the plug-in obtains the XML data and how it transforms the data. The transformation turns a specific XML document format into the generic DDC bean list data structure. With DDC, you can define these transformations in a declarative way so that you can use arbitrary XML formats without having to write transformation code.
-   You can also use a combination of the two approaches.

-   **[Technical concepts](../social/plrf_tech_concepts.md)**  
Before you use the Digital Data Connector \(DDC\) for HCL Portal framework, you can familiarize yourself with its main technical concepts and building blocks.
-   **[The rendering flow](../social/plrf_render_flow.md)**  
Read about the rendering flow of Digital Data Connector \(DDC\) for HCL Portal.
-   **[Implementing user interactions](../social/plrf_impl_user_interactns.md)**  
With Digital Data Connector \(DDC\) for HCL Portal, you can use HCL Web Content Manager presentation components for visualizing external data. As a further benefit, you can also add user interfaces for creating, modifying, and deleting external data to your DDC list appearance components. This way, your users can use these features to create, modify, or delete external data items from your lists.
-   **[Working with list-rendering profiles](../social/plrf_work_lr_profiles.md)**  
You can create new or derived list-rendering profiles. After you create a list-rendering profile, you deploy it.
-   **[Integrating remote XML data](../social/plrf_intgrt_rmt_xml.md)**  
The Digital Data Connector \(DDC\) for HCL Portal framework provides a generic XML DDC plug-in that is ready to use for integrating external XML data of your choice. You can use this plug-in to render external XML data on your portal pages without having to write custom Java code.
-   **[Integrating remote JSON data](../social/plrf_intgrt_rmt_json.md)**  
The Digital Data Connector \(DDC\) for HCL Portal framework provides a generic JSON DDC plug-in that is ready to use for integrating external JSON data of your choice. You can use this plug-in to render external JSON data on your portal pages without having to write custom Java code.
-   **[Creating and deploying custom Digital Data Connector plug-ins](../social/plrf_crt_dply_cust_beanlst_prvdr.md)**  
You can deploy custom Digital Data Connector \(DDC\) for HCL Portal plug-ins as plug-ins into the HCL Portal application extension registry.
-   **[Creating and deploying custom attribute value processor plug-ins](../social/crt_dply_cstm_attval_pro_plgin.md)**  
You can deploy custom attribute value processor plug-ins for DDC into the HCL Portal application extension registry. Attribute value processor plug-ins can be used to process the value of an item attribute after the value is determined by the list rendering profile.
-   **[Digital Data Connector cache tuning](../social/plrf_cach_tune.md)**  
To improve performance, you can tune the caches for the Digital Data Connector \(DDC\) for HCL Portal framework.
-   **[Hints and tips for Digital Data Connector](../social/plrf_hint_tip.md)**  
Learn about things that are useful to know when you work with the social rendering integration with Digital Data Connector \(DDC\) for HCL Portal.

**Parent topic:**[Developing](../dev/developing_parent.md)

**Related information**  


[Social rendering](../social/soc_rendr_ovu.md)

[Concept of the lists of social objects provided with the social rendering feature](../social/soc_rendr_undrstd.md)

[Extending social lists by using the digital data connector](../social/soc_rendr_xtnd_sl_by_plrf.md)

[The list-rendering context](../panel_help/plrf_list_render_context.md)

[The action URL plug-in](../panel_help/plrf_rendr_plugin_actionurl.md)

[The render parameter plug-in](../panel_help/plrf_rendr_plugin_render_parm.md)

[The render URL plug-in](../panel_help/plrf_rendr_plugin_render_url.md)

[The request attribute plug-in](../panel_help/plrf_rendr_plugin_request_attrbt.md)

[The session attribute plug-in](../panel_help/plrf_rendr_plugin_session_attrbt.md)

[The resource URL plug-in](../panel_help/plrf_rendr_plugin_resrc_url.md)

