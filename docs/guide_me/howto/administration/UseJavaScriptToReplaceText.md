# How to use java script to find and replace text on a Portal page

## Applies to

> HCL Digital Experience version 8.5 and higher

## Introduction

This article describes detailed sample steps to use java script to find and replace text on Portal pages.

The example is written for HCL Digital Experience version 8.5 Cumulative Fix 10. It describes steps to change text on the default welcome page, which is visible right before login (`http://<host>:<port>/wps/portal`). The page uses the default Portal 8.5 theme. One portlet on the welcome page is titled `BPM and Forms Integration`. The sample demonstrates steps to change the title wording from `BPM` to `RPM`.

## Instructions

To edit the default Portal theme, navigate to the following file path:  
`<PortalServer_root>\theme\wp.theme.themes\default85\installedApps\DefaultTheme85.ear\DefaultTheme85.war\themes\html\Default.jsp`

1. Copy this path as needed when locating the `Default.jsp` file.

2. Add the following script at the bottom of the file:

    ```script
    <script type="text/javascript">
     window.onload = replaceBPM;
     function replaceBPM() {
         document.body.innerHTML = document.body.innerHTML.replace('BPM', 'RPM');
     }
    </script>
    ```  

3. Refresh the welcome page and verify the title.
 It should now display: **RPM and Forms Integration**.

---

### Considerations

The method above is straightforward but has **two major drawbacks**:

1. Using `window.onload` will overwrite any previous `window.onload` assignments that may include critical functionality.
2. The script performs a global find-and-replace on every instance of the string `'BPM'`.  
   This includes text within URLs, links, or script references. As a result, it may break page functionality across all pages using the theme. Always review the page source before applying changes.

### Mitigating Side-Effects

  The two issues mentioned above can be mitigated by using `i$.addOnLoad` instead of `window.onload`. This involves determining the specific element in the page document that requires the update and modifying only that element. An example of this approach is detailed below.

Notice that at the top of the welcome page, there is a link named `Log in to use authoring capabilities`. Let's assume we want to change the word `capabilities` to `skills`. If you right-click on the `Welcome Page` and select  `View page source `, you can identify the ID of the element containing the text in question:

```html
<div id="wpToolbarLogin" class="wpToolbarLogin">
  <div>
    <a href="/wps/myportal/Home/Welcome/!ut/p/blah/">Log in to use authoring capabilities</a>
  </div>
</div>
```

So it is needed to modify the element with id `wpToolbarLogin`. With that it could then be edit the same `Default.jsp` file mentioned above to add this:

```script
    <script>
        i$.addOnLoad(function(){
            var elem = i$.byId("wpToolbarLogin");
            elem.innerHTML = elem.innerHTML.replace('capabilities', 'skills');
        });
    </script>
```

While this is the most direct approach to achieve the desired functionality, the best practice for themes is to use a module to deliver java script of this nature instead of editing `Default.jsp` directly.  

For details, refer to [Writing modules](../../../../build_sites/themes_skins/the_module_framework/writing_module/?h=writing+modules){target="_blank"}  
