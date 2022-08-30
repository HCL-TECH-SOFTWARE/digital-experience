# Adding static content to theme.html

You can add static content to the file theme.html in three ways: directly, from WebDAV, or by adding relative URLs.

## Adding content directly

You can add static content, such as HTML markup and images, directly to theme.html. Because theme.html is the basis of your theme, it can be useful to add or remove features directly by adding or removing modules. The file also contains markup for the alternative navigation and footer options, which are commented out.

## Adding content from WebDAV

You can add content that is in WebDAV relative to theme.html with a relative URL reference. For example, your CSS and JavaScript files are usually external to the theme.html file. You can implement them as contributions to a module by referencing the external files in a JSON file in the contributions directory, or you can implement them as simple modules. Go to [Modules and profiles](themeopt_themedev_modules_profiles.md#) to learn more about modules.

## Adding content by relative URLs

You can use relative URLs to reference static content in the WebDAV file store in the /common-resources/ folder. If the relative path does not successfully resolve to a file that is within the theme folder, the portal uses the folder /common-resources/ as a default location to locate the resource. By using the folder /common-resources/ as a default location, the theme can reference common resources and still override a file in that folder with a resource of the same name in the theme folder. This method is useful when you are sharing resources between multiple themes.


