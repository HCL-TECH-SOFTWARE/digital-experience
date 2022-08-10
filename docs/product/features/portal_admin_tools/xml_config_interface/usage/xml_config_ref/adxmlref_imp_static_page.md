# Importing static page content from archive or compressed files

You can import the content of static pages from an external archive or compressed file by using the XML configuration interface.

The following example imports static page content from the file index1.zip:

```
<content-node action="update" active="true" allportletsallowed="true" 
              content-parentref="homepage" create-type="explicit" 
              domain="rel" ordinal="1500" themeref="ibm.theme"
              type="staticpage" uniquename="samplestaticpage1">
          ...
          <pagecontents markup="html" display-option="inline">
               <url>file:///$server_root$/doc/xml-samples/index1.zip</url>
          </pagecontents>
          ?
</content-node>
```

The referenced archive or compressed files must be accessible to the portal when the XML request is processed. For details about the administration of static pages with the XML configuration interface refer to the topics about *Using the XML configuration interface to work with static pages*.

**Parent topic:**[XML configuration reference](../admin-system/adxmlref.md)

