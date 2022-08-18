# Example 2: plugin.xml file

You can use this sample plugin.xml file to register the sample filter.

```
<?xml version="1.0" encoding="UTF-8"?>
<?eclipse version="3.0"?>
<plugin id="com.ibm.workplace.wcm.api.samples.plugin" name="My content URL plug-in" 
        version="1.0.0" provider-name="IBM">
     <extension point="com.ibm.workplace.wcm.api.ContentUrlGenerationFilter" 
                id="MyFriendlyUrlGenerationFilter">
        <factory class="com.ibm.workplace.wcm.api.samples.FriendlyUrlGenerationFilterFactory"
                 weight="4"/>
    	</extension>
</plugin>
```

**Parent topic:**[Example 2: Generate a friendly URL for web content](../wcm/wcm_dev_api_urlgen_xmp2.md)

