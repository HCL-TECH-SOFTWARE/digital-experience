# How to use JavaScript to find and replace text on a Portal page

## Applies to

> HCL Digital Experience version 8.5 and higher

## Introduction

This article describes detailed sample steps to use JavaScript to find and replace text on Portal pages.

The example is written for HCL Digital Experience (DX) version 8.5 Cumulative Fix (CF) 10. It describes steps to change text on the default welcome page, which is visible right before login (`http://<host>:<port>/wps/portal`). The page uses the default Portal 8.5 theme. One portlet on the welcome page is titled `BPM and Forms Integration`. The sample demonstrates steps to change the title wording from `BPM` to `RPM`.

## Instructions

To replace text on Portal pages, refer to the following steps:

1. Navigate to the following file path:  
`<PortalServer_root>\theme\wp.theme.themes\default85\installedApps\DefaultTheme85.ear\DefaultTheme85.war\themes\html\Default.jsp`. Copy this path as needed when locating the `Default.jsp` file.

2. Add the following script at the bottom of the file:

    ```script
    <script type="text/javascript">
     window.onload = replaceBPM;
     function replaceBPM() {
         document.body.innerHTML = document.body.innerHTML.replace('BPM', 'RPM');
     }
    </script>
    ```  

3. Refresh the welcome page and verify the title. It should now display "RPM and Forms Integration".

### Considerations

The method provided has two major drawbacks:

1. Using `window.onload` will overwrite any previous `window.onload` assignments that may include critical functionality.
2. The script performs a global find-and-replace on every instance of the string `'BPM'`. This includes text within URLs, links, or script references. As a result, it may break page functionality across all pages using the theme. Always review the page source before applying changes.

The two issues mentioned above can be mitigated by using `i$.addOnLoad` instead of `window.onload`. This involves determining the specific element in the page document that requires the update and modifying only that element. For example:

Notice that at the top of the welcome page, there is a link named `Log in to use authoring capabilities`. As an example, you can change the word `capabilities` to `skills`. If you right-click on the `Welcome Page` and select  `View page source`, you can identify the ID of the element containing the text in question:

    ```html
    <div id="wpToolbarLogin" class="wpToolbarLogin">
    <div>
        <a href="/wps/myportal/Home/Welcome/!ut/p/blah/">Log in to use authoring capabilities</a>
    </div>
    </div>
    ```

Based on the code, you need to modify the `wpToolbarLogin` element. Edit the `Default.jsp` file mentioned in step 1 to include the following:

    ```script
        <script>
            i$.addOnLoad(function(){
                var elem = i$.byId("wpToolbarLogin");
                elem.innerHTML = elem.innerHTML.replace('capabilities', 'skills');
            });
        </script>
    ```

While this is the most direct approach to achieve the desired functionality, the best practice for themes is to use a module to deliver JavaScript of this nature instead of editing `Default.jsp` directly.  

For more information, refer to [Writing modules](../../../build_sites/themes_skins/the_module_framework/writing_module/index.md).
