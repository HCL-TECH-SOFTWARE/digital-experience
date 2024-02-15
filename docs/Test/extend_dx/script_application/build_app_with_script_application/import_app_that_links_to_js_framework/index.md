# Import applications that include links to JavaScript frameworks

To use a JavaScript framework or library from an application, use portal theme modules to load the shared JavaScript. Do not load them from the application.

However, application developers must load those JavaScript frameworks for testing locally, before they push them to the server. Not all JavaScript frameworks are available in the portal theme profiles and modules by default. For more information on loading JavaScript into portal pages with theme modules, read [Third-party JavaScript libraries](./js_libraries.md).

When you develop a Script Application that includes a JavaScript framework reference locally, add a directive HTML attribute to the script reference. Comment out the local reference when you push it with the command line application or import it.

Add the attribute `data-scriptportlet-theme-capability` to a script element. You can add a value if the attribute is specified, which is the name of the capability that is provided by the theme.

For example, to include a script reference to jQuery directly from the local application, take the following example.

```
<script src="http://some.cdn/jquery-1.11.1.min.js"></script>
```

To indicate that the reference is commented out on import, add the `data-scriptportlet-theme-capability` attribute to the script reference.

```
<script src="http://some.cdn/jquery-1.11.2.min.js" 
        data-scriptportlet-theme-capability="jquery"></script>
```

When you import or push the application, the application no longer includes its own reference to load jQuery. Instead, it relies on the jQuery module that you configured the portal theme profile to load.

In the Script Application Editor, the script reference remains, but it is commented out and it is not included in the rendered markup. For example:

```
[Plugin:Comment]<script src="http://code.jquery.com/jquery-1.11.2.min.js"
data-scriptportlet-theme-capability="jquery"></script> [/Plugin:Comment]
```

When you export an application, the original script reference is re-enabled so that your application runs properly as a stand-alone application in a test environment.

-   **[Third-party JavaScript libraries](./js_libraries.md)**  
 You can easily use third-party JavaScript libraries from a Script Application.


