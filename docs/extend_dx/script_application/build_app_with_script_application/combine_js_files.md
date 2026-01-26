---
title: Combine local JavaScript files
---

# Combine local JavaScript files when you import applications

You can import Script Applications with multiple JavaScript files.

To refer to any files that are part of the multi-file Script Application, you can use the `Plugin:ScriptPortletElementURL` tag in your `index.html` file. It has the element parameter that points to the relative file path of the resources that are referred to. In the following example, you can see the tag being used to insert the `pnp_retrieve.css` file, which is in the root of your Script Application, as a URL in the `<link>` element.

![Plugin ScripPortletElementURL tag](../assets/scpt_multifiles.jpg)

JavaScript developers often minify and combine JavaScript files before publishing them. If you cannot or are not ready to combine your application JavaScript files before you push or import the application to your portal, you can use the following directive attribute to combine them at render time.

To proceed, you must ensure that the importer or push service can find a set of local script references that are siblings of each other. There must be nothing between them but white space.

## Enabling the combiner

Choose one of the following options to enable combining of sibling local script references when the application is pushed or imported.

- To enable resource combining for one application only, add a `data-scriptportlet-combine-urls="true"` directive attribute on the `<html>` element of the main page before you push or import the application to the server.
- To enable resource combining for all pushed and imported applications, you can set the Script Application configuration property `scriptportlet.import.combine.urls=true` to `true`. For details about how to do this, read [Custom configuration properties for Script Applications](../script_application_security/import_export_config.md).

## HCLSoftware U learning materials

To learn about Script Applications, go to [Script Application](https://hclsoftwareu.hcl-software.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3655){target="_blank"}. You can try it out using the [Script Application Lab](https://hclsoftwareu.hcl-software.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application.pdf){target="_blank"} and corresponding [Script Application Lab Resources](https://hclsoftwareu.hcl-software.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application_Lab_Resources.zip){target="_blank"}.
