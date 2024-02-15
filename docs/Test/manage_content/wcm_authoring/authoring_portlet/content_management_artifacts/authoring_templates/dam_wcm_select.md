---
id: dam_wcm_select
title: Selecting the digital asset source for image and file elements
---
# Selecting the digital asset source for image and file elements

When you add a resource to an authoring template, you can define how the resource is selected when a content item is created.

First, install HCL Digital Experience Version 9.0. Then, integrate Watson Content Hub and configure Watson Content Hub as a Digital Asset Management service.

-   Documentation resource: [Installing version 9.0](https://help.hcltechsw.com/digital-experience/9.0/install/installing_parent2.html)
-   Documentation resource: [Integrating with Watson Content Hub](https://help.hcltechsw.com/digital-experience/8.5/integrate/int_dch.html)
-   Documentation resource: [Configuring the HCL Digital Experience Web Content Manager plug-in for Watson Content Hub](https://help.hcltechsw.com/digital-experience/8.5/integrate/cfg_dch_dam.html)

You can choose the file selector from the browser or the Watson Content Hub selector. This setting is specified in the template in the field properties for the resource.

-   For file and image elements, you can set the selector that is used to select the file or image in the content item.

1.  In the authoring portlet, edit the authoring template that contains the element or where you want to add an element.

2.  Click **Default Content**.

3.  Add the element to the template.

4.  Edit the properties for the element by clicking the properties icon (![Properties icon](../../../../../images/propIcon.jpg)).

5.  Specify the selector with the **Digital asset source** field.

    The following options are available:

    -   ****Digital Asset Manager****

        Uses the Watson Content Hub resource selector to select an asset from the digital asset manager.

    -   ****Select using file browser****

        Uses the standard file selector to select a resource from a local file system.


