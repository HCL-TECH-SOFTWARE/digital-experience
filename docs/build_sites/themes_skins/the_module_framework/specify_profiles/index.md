# Specify profiles

You can specify the profiles that you want to use two different ways depending on whether you are an administrator or a user. Profiles help define which modules are used to render a page.

Specify the profile with a module if you have administration access. Otherwise, use the user interface.

Profiles define a set of modules to be loaded by the theme optimization framework during page rendering. An administrator can use the admin portlets or XML access to set a profile. A content author can also set a profile.

You can set dependencies on features in portlets and profiles. The features are automatically loaded onto the page in an aggregated way. Your profile does not need to contain more modules than are required by the theme. Modules that are only required by a certain portlet can be loaded by that portlet.

-   **[Included profiles](themeopt_mod_oob_profile.md)**  
Portal includes profiles that contain modules that change how your portal site is rendered.
-   **[Specify profiles with metadata](themeopt_define_module.md)**  
If you are an administrator, you can define which modules are used to render a page. Profiles specify which modules are loaded on a page or whether they are deferred to after a page loads.
-   **[Specifying profiles with the user interface](themeopt_define_mod_ui.md)**  
You can change which sets of modules are used to render a page quickly through the user interface.
-   **[Changing the theme default profile](themeopt_cust_changepro_default.md)**  
You can change the profile for the theme or a specific page to define the modules loaded. 


