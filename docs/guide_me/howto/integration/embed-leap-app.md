# How to Embed a Leap application into a DX page

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

These steps will enable you to embed a Leap application onto a DX site using Leap's [Embedding API](https://opensource.hcltechsw.com/leap-doc/latest/ref_embedding_api.html?h=embedding). It is recommended that you have basic knowledge of DX to properly implement this; the following HCL Software U lessons may help: [HDX-INTRO](https://hclsoftwareu.hcltechsw.com/courses/course/hcl-digital-experience-introduction), [HDX-BU-100 HCL Digital Experience for Business Users (Beginners)](https://hclsoftwareu.hcltechsw.com/component/splms/course/hdx-bu-100-dx-business-user-beginner) and [HDX-DEV-100 HCL Digital Experience for Developers (Beginners)](https://hclsoftwareu.hcltechsw.com/component/splms/course/hdx-dev-100-dx-developer-beginner). This HCL Software U [lesson](https://hclsoftwareu.hcltechsw.com/component/splms/lesson/?id=1821) introduces how to make Leap applications. 

## Instructions: 

1\. Create the Leap application that you plan to integrate, if you haven't done so. 

2\. Ensure that you can [access Leap and DX from the same domain name](./how-to-integrate-leap.md) and that [single sign-on is enabled](./enable-sso-leap-dx.md).

3\. **Create a library** in DX and edit the shared settings of Authoring so that your new library is visible.
<!-- To create a new library, go to Practitioner Studio > Web Content > Web Content Libraries > Create New Library. Enable viewing it in Authoring by going to Web Content > Authoring > Preferences > Edit Shared Settings > Library Selection. Add your new library to the Selected Libraries box then press OK. -->

4\. **Create a new Presentation template** in the new Library. Enter the following in the field labeled "Presentation Template Options": `[Element context="current" type="content" key="html"]`

5\. **Create an authoring template/content template**. <!-- and give it the name `Simple HTML - CT`.  --> Under Manage Elements, add an HTML element. Set the content template's default presentation template to the presentation template you made in the previous step:
  
<img src="../../../../assets/dx-leap-integration-html-ct.png" alt="default presentation template" width="600" height="1000">

6\. **Create a site area** using the default template. <!--(you can use the default template and use any name for the site area, eg Leap Applications) --> Under the Properties tab > Profile > Keywords, add `ibm.portal.toolbar.NewContent`. This will make your site area visible under your DX site's Edit Mode.

<img src="../../../../assets/dx-leap-integration-siteareakeyword.png" alt="keyword property" width="400" height="800">

7\. Inside the Site Area you created, create the Content based on your content template. <!--If you do not want to use a workflow, select "Remove Workflow".--> For the HTML value, use the script below, replacing `{appId}` and `{formId}` with the appropriate values, depending on your app. The Launch link of your Leap app should have the details you need; refer to the pattern `sample-hostname.com/.../app/<appId>/launch/index.html?form=<formId>`, that is, your appId should come after the word "app" in your link, whereas the formId should come after "form=".
```
<div id="[Plugin:ScriptPortletNamespace]leapDiv" style="width: 100%"></div>

<script src="/apps/api/leap.js" data-leap-config="{overwriteExistingDojoConfig: true}"></script>

<script>
Leap.onReady = function() {
    let prefSecMod =  'anon';

    [Plugin:NotEquals text1="[Plugin:EvaluateEL value="${wp.user.uid}"]" text2=""]
    prefSecMod =  'secure';
    [/Plugin:NotEquals]

    let launchParams =  {
        'appId': '{appId}',
        'formId': '{formId}',
        'locale': navigator.language,
        'targetId': '[Plugin:ScriptPortletNamespace]leapDiv',
        'prefSecMode': prefSecMod
    };

    console.log('### launchParams:', launchParams);

    Leap.launch(launchParams);
};
</script> 
```
<img src="../../../../assets/dx-leap-integration-content.png" alt="appId and formId" width="600" height="1000">

8\. Go to your DX site. Upon enabling Edit Mode, you should now be able to see the Site Area you created, and within that, the Content you created. Add that Content to the page to **embed your Leap app**. 

<!-- by doing the following. Open Edit Mode. While on the page you want to embed to, click the Add page components and applications button (<img src="../../../../assets/dx-leap-integration-addicon.png" alt="add icon" width="25" style="vertical-align: middle;">), then pick the Site Area you created. 

<img src="../../../../assets/dx-leap-integration-edit.png" alt="embed leap app" width="800" height="400">

9\. Click on the content you created, then click Add To Page.

10\. Your app should now be embedded on the page. Check that the app works by turning off Edit Mode, submitting the form, and checking via the Leap admin board whether the data got submitted. -->