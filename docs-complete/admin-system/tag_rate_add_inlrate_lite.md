# Adding the rating widget to your portal content 

By default, the rating widget is available for Web Content Manager article template pages and blogs and wikis. You can also add rating widgets to your portal content as required.

To include a rating widget in a page or a portlet or other content, insert the following HTML snippet into your JSP or other code:

```
<div class="ratingLightWidget" resourceID= "${contentItem.URI}" 
     id="ratingLightWidget_${contentItem.URI}">
    <div id="ratinglight_${contentItem.URI}" class="wpRatingLight">
        <div class="label">
            <div id="ratinglightlabeltext_${contentItem.URI}" class="text"></div>
        </div>
        <div class="menuShow" id="ratinglightmenuDIV_${contentItem.URI}" role="link">
            <a onkeypress="getRatingMenu('${contentItem.URI}')" 
               onclick="getRatingMenu('${contentItem.URI}')" 
               id="ratinglightmenulink_${contentItem.URI}" role="link" tabindex="0">
                <img alt="Rating Menu" src='img_Src' title="Rating Menu" border="0">
            </a>
        </div>
        <div id="ratinglightdivider2_${contentItem.URI}" class="divider2Show"></div>
        <div class="description">
            <div id="ratinglightdescriptionlabel_${contentItem.URI}"></div>
        </div>
        <div id="ratinglightdivider1_${contentItem.URI}" class="divider1Show"></div>
        <div class="stars" resourceid="${contentItem.URI}" 
             id="ratinglightstars_${contentItem.URI}">
            <div style="width: 70px;" id="ratinglightstarsempty_${contentItem.URI}" 
                 class="empty" tabindex="0">
                <div style="width: 0px;" id="ratinglightstarsfull_${contentItem.URI}" 
                     class="full"></div>
            </div>
        </div>
        <div id="ratinglighterrordivider_${contentItem.URI}" class="errorMessagedivider"></div>
        <div class="errorMessageStyle" id="ratinglighterrorDiv_${contentItem.URI}">
            <img alt="Error - check console" src='errorimg_Src' 
                 title="Error - check console" height="16" border="" width="16">
            <label id="ratinglighterrorlabel_${contentItem.URI}" class="errorMessageText"></label>
        </div>
    </div>
</div>

```

Specify the appropriate values for the parameters:

-   **resource\_ID**

    For the resource ID, specify the identifier of the piece of content that you want to show the widget. This identifier needs to be unique. For example, for a portal page, specify the portal object ID of that page.

-   **xxxxx\_src**

    To obtain the values for the `src` attribute for the images, copy them from the `src` attributes for images from the Web Content Manager menu component. For each attribute, use the specific procedure:

    -   **img\_Src**

        For the `img_Src` attribute, proceed as follows:

        1.  In Web Content Manager, go to **Applications** \> **Content** \> **WCM Authoring** \> **Libraries** \> **Web Resources v70** \> **Components**.
        2.  Select the check box for **HTML - Rating Widget Light - Menu**.
        3.  Click **Read** and copy the `src` attribute value that you found here.
        4.  Paste the value into your code for including the rating widget.
    -   **errorimg\_Src**

        For the `errorimg_Src` attribute, proceed as follows:

        1.  In Web Content Manager, go to **Applications** \> **Content** \> **WCM Authoring** \> **Libraries** \> **Web Resources v70** \> **Components**.
        2.  Select the check box for **HTML - Rating Widget Light - Messages**.
        3.  Click **Read** and copy the `src` attribute value that you found here.
        4.  Paste the value into your code for including the rating widget.

These parameters are mandatory. For information about the optional parameters, read the *Rating widget parameter reference*.

**Parent topic:**[The rating widget ](../admin-system/tag_rate_inline_rate_wdgt_lite.md)

**Related information**  


[Tag widget parameter reference ](../admin-system/tag_rate_parm_ref_inl_tag_lite.md)

