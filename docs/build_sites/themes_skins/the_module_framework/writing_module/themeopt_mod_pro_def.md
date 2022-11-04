# Profile schema definition

You can write a profile schema with valid JSON.

## Components of a profile file

The JSON schema definition is available in WebDAV Theme/themes/Portal8.5/profiles/schema.

The profile definition has five main components.

-   **non-deferred modules**

    The set of modules that load with the initial page rendering.

-   **deferred modules**

    The set of modules that render after the initial page rendering.

-   **title \(optional\)**

    The title of the profile.

-   **description \(optional\)**

    The description of the profile.

-   **metadata \(optional\)**

    Here you can define whether this profile is hidden or not.


You can see the properties in the following example.

```
{
 "moduleIDs" : ["moduleID_1", "moduleID_2", "moduleID_3"],
 "deferredModuleIDs" : ["moduleID_4", "moduleID_5", "moduleID_6"],
 "titles": [{ "lang": "en", "value": "title_en" },
               { "lang": "de", "value": "title_de" }],
 "descriptions": [{ "lang": "en", "value": "desc_en" },
                     { "lang": "de", "value": "desc_de" }],
    "metadata":{
 "com.ibm.portal.Hidden": "true"
 }
}
```


???+ info "Related information:"
    - [Configuring a page with lists of social objects for Tag Cloud support](../../../social_rendering/working_with_social_objects/config_page_social_objects_tag_cloud.md)

