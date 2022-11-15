# Creating category selection trees

You use category selection trees to allow users to personalize menus.

**Note:**

-   Ensure the `connect.businesslogic.module.ajpecatselect.class` property is defined in the `WCM WCMConfigService` service, using the IBM® WebSphere® Application Server administration console, with a value of `com.aptrix.pluto.CategoryProfileUpdaterModule`.
-   You cannot use category selection trees in a local rendering portlet. Instead, you must render the tree directly. For example:

    ```
    http://host:port/wps/wcm/myconnect/library/sitearea/content 
    ```


## Taxonomy element form

The main function of the taxonomy element is to display a category selection tree that is used to allow a user to select categories for menu personalization.

-   You configure the element by selecting either a taxonomy or a category as a start area.
-   Select a child depth from the start area and a parent level relative to the start area.
-   Select "Include Start" to display the start area. This option has no effect if the start area is a taxonomy.
-   There are two element design options available

    -   One is rendered when the logged in user has selected the category that is to be displayed.
    -   The other is rendered if the user has not selected the category.
    These element designs are rich text elements, and are used in a similar fashion to the navigator and menu elements.


The taxonomy element form example creates a check box input form:

-   The category identity number is assigned to the "value" attribute in the input fields.
-   Check box input fields are created, assigning the "selectedCategories" value to the "name" attribute.
-   Hidden input fields are created, assigning the "visibleCategories" value to the "name" attribute.

## Element designs

The following code examples are used to develop a basic category selection tree:

|Code|Details|
|----|-------|
|```
[PathCmpnt end="/[Library]/[SiteArea]/[Content]?MOD=AJPECatSelect' 
method=post> 
"start="
<FORM action='" type="servlet"]
```

|This code calls the Category Profile Updater Module.|
|```
<input type="hidden" 
value='[PathCmpnt type="servlet"]/[Library]/[SiteArea]/[Content]' 
name="redirectURL">
```

|This code points to the page to go to after the user request has been processed. The element does not render correctly if the path, "\[Site area\]/\[Content\]" is not valid.|
|```
<input type="hidden" 
name="updateSourceProfile" value="true">
```

|This line determines how a user's category profile is updated. The "value" parameter is optional.

-   **True**

Permanently updates the user category profile.

-   **False**

Updates only the user's session profile.

**Updating the user's session profile:**

The user's selected categories are calculated by combining the categories that are in the user's session profile and the categories that are in the permanent user category profile. Therefore, if a category is in the user category profile and is removed from the user's session profile only, it will still be shown as selected.


|

|Code|Details|
|----|-------|
|```
<input type="checkbox" name="selectedCategories"
 value="[Placeholder tag="idnum"]"/>
<IndentCmpnt offset="0" repeat=".."]
[Placeholder tag="name"]
<input type="hidden" name="visibleCategories"
 value="[Placeholder tag="idnum"]"/>
<br>
```

|This is used to display unselected items in the rendered category selection tree.|

|Code|Details|
|----|-------|
|```
<input type="checkbox" checked name="selectedCategories"
 value="[Placeholder tag="idnum"]"/>
[IndentCmpnt offset="0" repeat=".."]
[Placeholder tag="name"]
<input type="hidden" name="visibleCategories"
 value="[Placeholder tag="idnum"]"/>
<br>

```

|This is used to display selected items in the rendered category selection tree.|

|Code|Details|
|----|-------|
|```
<input type="submit" value="Set User Categories"></input>
</form>
```

|The footer contains the submit button.|

**Indent element:**

This example uses the indent element tag. This can be used in the navigator and taxonomy elements. This tag represents an HTML/text string that should be repeated depending on the depth of a tree node being rendered in these elements.

In the taxonomy element example, the indent element is used to render and repeat the "." string dependent on the depth of the node the element design is being applied to. It is possible to offset the repeat value by assigning an integer value to the "offset" attribute of the tag. For example, A current node depth of 5 and an offset value of -2 would render the repeat string three times. If the sum of the offset and the node depth is negative or 0, the repeat string is not rendered.

**element designs:**

The only difference between the unselected element design and the selected element design is that the check box input field in the selected element design has the "checked" attribute set.

**User access:**

If using a taxonomy element, users must be given "Edit" access to their own user item to enable them to update their selected categories.

**Using a URL to update user categories:**

You can use a URL as an alternative to using a category selection tree to update a user's selected categories:

```
http://host:port/wcm/connect/SiteArea/SelectPage?MOD=AJPECatSelect
&redirectURL=/wcm/connect/SiteArea/Content&updateSourceProfile=false
&selectedCategories=categoryID1,categoryID3
&visibleCategories=categoryID1,categoryID2,categoryID3,categoryID4
```

The "selectedCategories" and "visibleCategories" parameters have multiple values which are comma delimited. The categories specified in "selectCategories" should be a subset of "visibleCategories".

This URL could be used on a page in the form of a button to allow users to update their user categories. For example, You could create a button that would add the category "News" to a user's selected categories list.


**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

