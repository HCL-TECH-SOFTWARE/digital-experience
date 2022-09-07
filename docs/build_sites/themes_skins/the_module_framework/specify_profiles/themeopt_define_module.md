# Specify profiles with metadata

If you are an administrator, you can define which modules are used to render a page. Profiles specify which modules are loaded on a page or whether they are deferred to after a page loads.

The list of modules is determined by:

-   If a profile path exists, it is obtained from the resourceaggregation.profile page metadata.
-   If no profile is set on the page, or the theme does not determine the profile, then the default profile is defined by the resourceaggregation.profiles.default theme metadata.

The list of available profiles within a theme is determined by loading all files in the folder defined by the resourceaggregation.profiles.default theme metadata. If that metadata is not defined, the profiles/ default folder is scanned for profiles.

**Important:** Only profile.json files are allowed in these folders.

## The profile format

The profile files must be valid JSON files. The following sample shows the properties:

```
{
		 "moduleIDs" : ["moduleID_1", "moduleID_2", "moduleID_3"],
		 "titles": [{
		 		   "value": "title_en",
		 		   "lang": "en"
		           },
		          {
		 		   "value": "title_de",
		 		   "lang": "de"
		           }],

		 "descriptions": [{
		 		   "value": "desc_en",
		 		   "lang": "en"
		           },
		          {
		 		   "value": "desc_de",
		 		   "lang": "de"
		           }]
}
```


???+ info "Related information:"
	- [Adding jQuery to a theme](../../customizing_theme/add_jquery_to_theme/index.md)

