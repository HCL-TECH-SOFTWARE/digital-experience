# Creating list-rendering profiles

When you create a list-rendering profile, you can either create a completely new profile or create a derived profile by extending an existing profile. A derived profile includes the item attribute and list property declarations of other list-rendering profiles by referencing these profiles.

When you create a new or derived list-rendering profile, make sure to define an item attribute that is named `id` and to define a name for your profile.

To define a derived profile, use the `Extends` key.

When you model your derived profile from an existing profile, you reference the other profile by specifying its profile name. When you reference another profile, the plug-in imports all `ItemAttribute`, `AssociatedItemAttribute`, `ConstructedItemAttribute`, `ComputedItemAttribute`, and `ListProperty` and XML namespace declarations into the current profile. To include multiple profiles, specify a comma-separated list of profile names. You can overwrite individual imported properties in the profiles. When you create a derived profile, you modify existing item attributes or list property declarations of the existing profile or add more item attribute or list property declarations. To do so, you can extend your profile from the existing profile and add or overwrite the item attribute and list property declarations of that profile as required. The following conditions apply:

-   All changes to profiles from which the extended profile is derived are effective on the extended profile if the extended profile does not explicitly overwrite these declarations.
-   Your profile can extend from any other profile, independent of how you deployed the individual profiles. But make sure that you do not create any dependency cycles.
-   The profiles override each other in the order in which they occur in the comma-separated list. A profile that occurs earlier in the sequence overrides subsequent ones.

    Example: To include the item attribute and list property declarations of profiles that are named `yourCo.Atom` and `yourCo.Base`, specify `xyz.Extends=yourCo.Atom,yourCo.Base`.

    **Note:** If your `yourCo.Atom` and `yourCo.Base` define the same attribute, the definition in the `yourCo.Atom` profile overrides the definition that is given in the `yourCo.Base` profile.


**Parent topic:**[Working with list-rendering profiles](../social/plrf_work_lr_profiles.md)

**Related information**  


[The action URL plug-in](../panel_help/plrf_rendr_plugin_actionurl.md)

[XPath list-rendering profile keys](../social/plrf_lr_profl_keys.md)

[BasicJSONSelection list-rendering profile keys](../social/plrf_lr_profl_keys_json.md)

