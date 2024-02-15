# Analytics tags

You can obtain specific analytics information from your portal by using analytics tags for your portal resources. You might want to know which types of users visit your portal site most frequently, for example by age group or other characteristics. If you want to address mostly young professionals, you can create an analytics tag targetAudience:youngProfessionals ; you can then associate the tag with all resources that contain content for this target user group. By looking at the visits on these pages you can determine whether the main user group of your portal site is young and new in their job.

An analytics tag in the portal consists of a name-value pair that you can associate with portal or Web Content Manager resources. When you add a resource to an analytics tag, a microformat is injected into the markup of the resource. Analytics provider applications can read this microformat and track which resources associated with the analytics tag users visited.

The association of a resource to an analytics tag is called an analytics tag mapping. Resources that can be associated to an analytics tag include portal pages, portlets, and Web Content Manager content items. The relation between a resource and an analytics tag is as follows:

-   One resource can be added to several general analytics tags, but it can be added only once to each analytics tag.
-   One analytics tag can contain several resources but only one of each resource.

To associate a resource with an analytics tag, you add the tag name and value to the resource. For example, the tag name can be season promotion , and values can be christmas or easter . This way you can use the analytics tags to group your portal resources by purpose and then analyze which user groups visit these resources most frequently.

The portal stores analytics tags as regular portal tagging and rating tags, but with the following specific naming convention for analytics tags only:

```
name#value

```

where the tagging and rating tag is made up by a combination of the `name` and `value` of the analytics tag, separated by a hash sign character \( `#` \). Tags that are encoded like this show in the Tag Center under the tab **Analytics**.

-   **[Working with analytics tags](sa_asa_anal_tags_work.md)**  
To work with analytics tags, the portal provides a dialog. You can create new analytics tag mappings and view and delete existing ones.


