---
id: wcm_dev_search_form_query_parameters
title: Search parameters
---
import useBaseUrl from '@docusaurus/useBaseUrl';



The following parameters can be used in a search query in this format.

```
<input name="search_parameter" />
```

|Parameter|Details|
|---------|-------|
|`search_query`|Used to search the content of any elements that are stored in a content item.|
|`search_authoringtemplate`|Used to search the authoring template, if available, that was used to create the content item.|
|`search_authors`|Used to search the name or names of the authors for the content item, if any are defined. **Searching for LDAP users:**

When you search for LDAP users, the full distinguished name must be submitted. Users are unaware of what the actual distinguished name of a user is. It is recommended that if planning to allow users to search for authors, you should create a predefined list or dropdown to allow users to select a known author. That way the user names can be displayed in a user-friendly manner, but the parameters submitted by the form can be the distinguished name for the selected user.

|
|`search_author`|This is similar to search\_authors except that search\_author only searches the first author name for each content item, whereas search\_authors searches against all the authors for each content item.|
|`search_categories`|Used to search the categories of the content item if any are defined.|
|`search_contentpath`|Used to search for text in the path of a content item such as the library name, folder name, or site area name.|
|`search_description`|Used to search the description of the content item.|
|`search_effectivedate`|Used to search the effective date of the content item. **Note:** Search by date only works with the format MMM dd yyyy HH:mm:ss z. For example, Sep 20 2006 10:23:30 GMT. To change the format, you will need to edit the `SearchService.DateFormatString` parameter in the `SearchService.properties` file.

|
|`search_expirationdate`|Used to search the expiration date of the content item. **Note:** Search by date only works with the format MMM dd yyyy HH:mm:ss z. For example, Sep 20 2006 10:23:30 GMT. To change the format, you will need to edit the `SearchService.DateFormatString` parameter in the `SearchService.properties` file.

|
|`search_keywords`|Used to search the keywords of the content item if any are defined.|
|`search_lastmodifieddate`|Used to search the last modified date of the content item. **Note:** Search by date only works with the format MMM dd yyyy HH:mm:ss z. For example, Sep 20 2006 10:23:30 GMT. To change the format, you need to edit the `SearchService.DateFormatString` parameter in the `SearchService.properties` file.

|
|`search_modifier`|Used to search the name of the last person to modify the content item.|
|`search_name`|Used to search the name of the content item.|
|`search_owners`|Used to search the name or names of the owners of the content item, if any are defined. **Searching for LDAP users:**

When searching for LDAP users, the full distinguished name must be submitted. Users are unaware of what the actual distinguished name of a user will be. It is recommended that if planning to allow users to search for authors, you should create a predefined list or dropdown to allow users to select a known author. That way the user names can be displayed in a user-friendly manner, but the parameters that are submitted by the form can be the distinguished name for the selected user.

|
|`search_title`|Used to search the title of the content item.|

