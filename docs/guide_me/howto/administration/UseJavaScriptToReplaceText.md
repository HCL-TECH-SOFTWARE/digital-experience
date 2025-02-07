# Sample steps to use Java Script to find and replace text on Portal Page

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This technote describe detailed sample steps to use Java Script to find and replace text on Portal Pages.

## Instructions

**Please notice:**

The example was written for Digital Experience version 8.5 Cumulative Fix 10. It will describe steps to change some text on the default Welcome Page that can be noticed right before login `(http://host:port/wps/portal)`. The page is using the default Portal 8.5 Theme. One portlet on the Welcome Page has this title: "BPM and Forms Integration". The sample shows up steps to change that title wording from "BPM" to "RPM".

**Detailed steps:**  

1) Backup then edit the Default.jsp for the default Portal theme. The file is located in directory:

    <PortalServer_root>\theme\wp.theme.themes\default85\installedApps\DefaultTheme85.ear\DefaultTheme85.war\themes\html\Default.jsp

2) Add the following at the bottom of the file:

    script type="text/javascript"> window.onload = replaceBPM;
    function replaceBPM() { document.body.innerHTML = document.body.innerHTML.replace('BPM', 'RPM');}

3) Refresh the Welcome Page and verify the title. Now it should display "RPM and Forms Integration".

The method above is the most straightforward approach but has two major drawbacks.

- When using window.onload it will over-write any previous invocations of window.onload that may contain critical updates.

- It is need to review the page source to determine the impact of the find/replace operation. All instances of the string will be replaced on the page on all pages that use the theme. This includes any occurrences of the string within URLs. That could break a lot of page function.

**Mitigating the side-effects:**

It is possible to mitigate the two issues mentioned above by using "i$.addOnLoad" instead of "window.onload" and determining the individual element in the page document that requires the update and modify that element only. An example of this approach is detailed below:

Notice at that top of the welcome page there is a link with name: "Log in to use authoring capabilities". Let's assume we want to change the word "capabilities" to "skills". If a right mouse click will be done on the Welcome Page and view the page source will be selected, it is possible to identify the id of the element that contains the text in question:

`<div id="wpToolbarLogin" class="wpToolbarLogin">`

`<div><a href='/wps/myportal/Home/Welcome/!ut/p/blah/' >Log in to use authoring capabilities</a>`

`</div>`

So it is needed to modify the element with id "wpToolbarLogin". With that it could then be edit the same Default.jsp file mentioned above to add this:

```text
<script>
i$.addOnLoad(function(){
var elem = i$.byId("wpToolbarLogin");
elem.innerHTML = elem.innerHTML.replace('capabilities', 'skills');
});
```

Even though this is the most direct approach to implement the desired function, theme best practice is to use a module to deliver javascript of this nature instead of editing Default.jsp directly. For details, please check:

[Writing modules | HCL Digital Experience](https://help.hcl-software.com/digital-experience/8.5/dev-theme/themeopt_mod_plugin_xml.html)
