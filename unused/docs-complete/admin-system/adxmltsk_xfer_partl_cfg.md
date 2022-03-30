# Exporting and transferring parts of a portal configuration

You can also export partial configurations.

To complete this step, you specify the XML hierarchy down to the specific portal resource that you want to export. For the portal resource element itself, you specify an export action; for its parents, you specify a locate action.

The sample XML request file ExportPage.xml provided with the portal exports a page with the unique name ibm.portal.ssa.SamplePage. This exported page does not exist in a newly installed portal. You can create it by running the DeployPortlet.xml sample file, which is covered in the next section.

Normally, you specify the resources that you want to export by their object ID or by their unique name. You can use the Custom Unique Names administration portlet to look up object IDs and unique names of portal resources. Some resources also support lookup by other attributes; see the XML reference documentation for detailed information.

Running the ExportPage.xml example request file that is mentioned earlier results in an XML file similar to ExportPageResult.xml. You can use this file to update the page to the exported state, if it still exists in the portal. You can also use this file to re-create the page, in case you delete it later.

When you look at the file, you notice that it includes not only the page itself but also other configuration elements that are referred to by the page, for example the portlet that is placed on the page. These other elements have a locate action. The export does not include their full configuration data, but enough information to look them up in the portal, assuming they exist. Note how the configuration of the page makes references to the objectid attributes of other resources, for example in the portletref attribute of the portletinstance elements.

All those references are described by object IDs. Therefore, if the object IDs are correct, the referenced resources can be looked up in the portal even if they were not included in the export. Locating resources before they are referenced is only necessary if you do not know their actual object IDs so that you must find the resources by some other identifying attribute. For more information, see the XML reference documentation. That way, for example a portlet can be identified by its name and by the uid attributes of its parents, and the referencing still works, even if the object ID is not available for looking up the portlet.

Exporting resource configurations normally creates update actions for all exported elements. This means that if the portal resource exists on the importing system, the settings are modified, and if it does not yet exist, it is created. This in turn means that if you reimport the page into the portal that you exported it from, nothing changes.

You can import the XML file into another portal to create a copy of the page, this importation requires that the referenced resources \(such as the portlet and the content parents\) also exist on the target portal and can be found by an identifying attribute. In that case, the page and all contained resources take their object IDs with them so that they have the same object IDs on the source and target system - the resources retain their identity. You can avoid that by using the ID generating mode. For more information, see the XML reference documentation. When you use the ID generating mode, the object IDs in the input are not taken literally, but during the import process the resources obtain new object IDs when they are created on the target system. You apply ID generating mode by adding the following attribute to the main request tag:

```

   <request . . . create-oids="true" . . . >  

```

You can create a duplicate of the page in the portal from where you exported it by using the ID generating mode and changing the unique name of the page in the XML script. This way, the page, and its changed name, cannot be found for updating by either its object ID or its unique name, therefore a new page with the same settings is created. Change the page title so that you can distinguish between the two pages. The CopyPage.xml sample shows how this script would look.

When you are exporting resources to XML scripts, it is possible and often useful to export several resources by using one request. The ExportPortletAndPage.xml example extends the ExportPage.xml example by including also the portlet that is contained on the page. The resulting XML file contains the complete configuration data of the portlet and the page.

The ExportSubTree.xml example shows how you export subtrees of the portal content hierarchy. It exports part of the predefined administration page hierarchy that was created during the portal installation.

Using wildcard characters:

When you export portal resources, you can specify the asterisk \(\*\) as a wildcard character for tag attributes. Be aware of the following limitations:

1.  The asterisk wildcard character is supported for attributes of top-level tags only, that is, subtags of the `portal` tag.
2.  Specify the asterisk wild character for the object ID attribute of tags as follows: `objectid='*'`, except for `policy-node` tags, where you can specify it for the `path` attribute.
3.  Specify only the asterisk alone: `**"\*"**`. The asterisk does not work in combination with partial strings that precede or follow it. For example, you cannot specify `"abc*"` or `"*xyz"`.
4.  If you specify the asterisk as a wildcard character, all other attributes of that tag are ignored, except for the following tags, where the listed attributes are interpreted as filters:
    -   The tag `content-node`, attribute `create-type`
    -   The tag `tag`, attribute `locale`.

The ExportAllPortlets.xml example shows the use of the asterisk character \(\*\) as a wildcard to export all resources of a given type. This example exports all the web modules that were installed in the portal and their contained portlets.

**Parent topic:**[Transferring portal configuration data by using the XML configuration interface](../admin-system/adxmltsk_use.md)

**Related information**  


[XML configuration reference ](../admin-system/adxmlref.md)

[Sample XML configuration files ](../admin-system/admxmsmp.md)

