# Adding the tag widget to your portal content

By default, the tag widget is available for Web Content Manager article template pages and blogs and wikis. You can also add tag widgets to your portal content as required.

To include a tag widget in a portal page, a portlet or other portal content, insert the following HTML snippet into your JSP or other code:

```
<div id="tagginglight_${resource\_ID}" class="wpTaggingLight">
    <div class="label">
        <label class="text" id="tagginglightlabeltext_${resource_ID}"></label>
    </div>
    <div class="menu" >
        <a id="tagginglightmenulink_${resource\_ID}" role="link" tabIndex="0">
            <img src='img_Src' border="0"  title="" /> 
        </a>
    </div> 
    <div class="divider1" id="tagginglightdivider1_${resource\_ID}"></div>
    <span id="tagginglighttagslist_${resource\_ID}" class="tags" resource\_ID="my_ID"></span>
    <div class="divider2" id="tagginglightdivider2_${resource\_ID}">
    </div>
    <div class="moretags" id="moretagslink_${resource\_ID}">
        <a id="tagginglightmoretagslink_${resource\_ID}" href="javascript:;" 
           onclick='getMoreTags("${resource\_ID}");'>
        </a>
    </div>
    <div class="divider3" id="tagginglightdivider3_${resource\_ID}"></div>
    <div class="addtag">
        <a id="tagginglightAddTaglink_${resource\_ID}">
            <img src='img_Src' border="" width="12" height="12"  title="" />
        </a>
    </div>
    <span id="tagginglightinput_${resource\_ID}" class="addtag">
        <input id="tagginglightinputField_${resource\_ID}" type="text" name="text">
    </span>
    <div id="tagginglighterrordivider_${resource\_ID}"  class="errorMessagedivider"></div>
    <div class="errorMessageStyle" id="tagginglighterrorDiv_${resource\_ID}">
        <img src="" border="" width="16" height="16"  title="" />
        <label id="tagginglighterrorlabel_${resource\_ID}"  class="errorMessageText" ></label>
    </div>
</div>
```

-   **resource\_ID**

    For the resource ID, specify the identifier of the piece of content that shows the widget. This identifier needs to be unique. For example, for a portal page, specify the portal object ID of that page.

-   **src**

    Specify the appropriate values for the `src` attribute for the images. To obtain these values, copy them from the `src` attributes for images from the Web Content Manager HTML - Tag Widget Light - Menu component. Proceed as follows:

    1.  In Web Content Manager, go to **Applications** \> **Content** \> **WCM Authoring** \> **Libraries** \> **Web Resources v70** \> **Components**.
    2.  Select the check box for **HTML - Tag Widget Light - Menu**.
    3.  Click **Read** and copy the `src` attribute value that you found here.
    4.  Paste the value into your code for including the tag widget.

These parameters are mandatory. For information about the optional parameters, read the *Tag widget parameter reference*.


