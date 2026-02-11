# JavaScript API for spHelper

This API reference can help you customize an instance of your Script Application further.

## Namespace `spHelper`

The `spHelper` provides the functions and variables that are related to a specific instance of the Script Application. To reference the `spHelper`, you must precede it with the application unique name space tag. For example:

```
[Plugin:ScriptPortletNamespace]
```

To make it easier to use this object in multiple places in your code, you can create your own uniquely named variable. For example: 

```
var myspHelper = [Plugin:ScriptPortletNamespace]spHelper;
```

To create a Script Application that can be deployed multiple times to the same page, make all the variables and methods unique by using the Script Application namespace once more. For example:

```
var [Plugin:ScriptPortletNamespace]myspHelper = [Plugin:ScriptPortletNamespace]spHelper;
```

!!! important
    - When developing locally, you may use the `__SPNS__` placeholder for the namespace. In that case, your variable may be set using `var myspHelper = __SPNS__spHelper;` or as a unique variable `var __SPNS__myspHelper = __SPNS__spHelper;`. The placeholder is automatically translated when you import or push to the DX server to `[Plugin:ScriptPortletNamespace]`. For more information, refer to [Add tokens to generate the unique namespace IDs when applications are pushed or imported to a Script Application](../../../extend_dx/script_application/build_app_with_script_application/cmd_line_push_cmd_patt_rep.md).  
    - You can also reference the namespace with the `[Plugin:Portlet key="namespace" compute="once"]` tag. For more information, see [Portlet plugin tag](../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/tags/creating_plugin_tag/portlet_plugins/plugin_portlet_portlet.md).

## `spHelper` fields

- **`spHelper.renderingLocale`**: Get the rendering locale.
- **`spHelper.userCn`**: Get the user's common name from LDAP.
- **`spHelper.userId`**: Get the user's ID from LDAP.
- **`spHelper.userLanguage`**: Get the user's preferred language from LDAP.
- **`spHelper.userName`**: Get the user's name from LDAP based on the `user.displaynameattribute` theme.
- **`spHelper.userSn`**: Get the user's surname from LDAP.

## `spHelper` methods

- **`spHelper.getPortletPreferences()`**

    Retrieves the values for the portlet preference that is used for the Script Applications.

    ```
    // Sample using the Promise object calling the then function for the promise object
    // adding functions as parameters to the then function to handle success and error
    // and using the sample variable myspHelper created above
    
    function sampleRetrievePreferences() {
        myspHelper.getPortletPreferences().then(function(prefData) {
        
            // For this Script Application the preferences are an array of strings
      	    var prefs = prefData;
     
            // If the first preference value is false then hide the field
            if (prefs[0] == "false"){
                $('#pref1').css('display','none');
            }
    
            // If the second preference value is equal to 09982 then hide the field
            if (prefs[1] == "09982"){
                $('#nameHeader2').css('display','none');
            }
        },
        function(error){
    
        // You might want to exclude the error 
        // "ERR001:Preference data is not available in this context"
        // You will get this when the code is called when in preview
        // or the theme doesn't include wp_client_ext capability.
        if (error.message.toString().indexOf("ERR0001:") != 0)
    	    alert(error.name + "\n" + error.message);
        });
     };
    ```

    - **Returns**

        `{Promise}` A promise that resolves to \{preferenceData: Object\} on success and \{error: Error\} on error. The preferenceData is any JavaScript object that contains your preference values and can be serialized to a string value that represents the object. For example, you can define a JSON object that has a list of holidays where the Script Application behaves differently.

        ```
        {"holidays":[ {"Month":"January","Date":"1"}, 
        {"Month":"June","Date":"22"}, {"Month":"July","Date":"5"} ]}
        ```

        Or, you can define an ordered string array where the values control a fields visibility.

        ```
        ["true", "true", "true", "true", "true", "true", "true", "true"]
        ```

        The error is an Error object that contains the information about the Error. For example, the error ERR0001:Preference data is not available in this context results when the code is run in the preview view or the dependency on the `wp_client_ext` is missing.

- **`spHelper.setPortletPreferences(preferenceData)`**

    Sets the values for the portlet preference that is used for Script Applications.

    ```
    // Sample using the Promise object calling the then function for the promise object
    // adding functions as parameters to the then function to handle success and error
    // and using the sample variable myspHelper created above
    
     function sampleSetPreferences() {
    
          // For this script application the preferences are an array of strings
          preferences = 
              ["" + $('#pref1').prop('checked'),
               "" + $('#pref2').val()];
          myspHelper.setPortletPreferences(preferences).then(function(prefData){
    
              // On success close the preference dialog
              $('#prefDialog').dialog('close');
          }, err: function(errorText){
    
              // You might want to exclude the error 
              // "ERR001:Preference data is not available in this context"
              // You will get this when in the the code is called when in preview
              // or the theme doesn't include wp_client_ext capability.
              if (error.message.toString().indexOf("ERR0001:") != 0)
                  alert(error.name + "\n" + error.message);
          });
      };
    ```

    - **Parameters**

        `{Object}preferenceDatacan` can be null or any JavaScript object that contains your preference values and can be serialized to a string value that represents the object. Setting the value to null removes all preference values. Or, you can specify an array of any size of preference values that you want for this instance of the Script Application. You can use these preference values to customize the Script Application and make the reusable. For example, you can define a JSON object that has a list of holidays where the Script Application behaves differently.

        ```
        {"holidays":[ {"Month":"January","Date":"1"}, 
        {"Month":"June","Date":"22"}, {"Month":"July","Date":"5"} ]}
        ```

        Or, you can define an ordered string array where the values control a fields visibility when the data is stored the previous data is replaced with the new data.

        ```
        ["true", "true", "true", "true", "true", "true", "true", "true"]
        ```

    - **Returns**

        `{Promise}` A promise that resolves to `{preferenceData: Object}` on success and `{error: Error}` on error. The `preferenceData` is the same data that was passed into this function. The errorText is a string that contains the information about the Error. For example, the error "ERR0001:Preference data is not available in this context" results when the code is run in the preview view or the dependency on the `'wp_client_ext'` is missing.

!!!note
    To see a working sample that uses `spHelper`, go to [dx-portlet-preferences-script-application-sample](https://github.com/HCL-TECH-SOFTWARE/dx-portlet-preferences-script-application-sample){target="_blank"}.

## HCLSoftware U learning materials

To learn about Script Applications, go to [Script Application](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3655){target="_blank"}. You can try it out using the [Script Application Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application.pdf){target="_blank"} and corresponding [Script Application Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application_Lab_Resources.zip){target="_blank"}.

To learn more about Script Applications, go to [Script Application](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3655){target="_blank"}. You can try it out using the [Script Application Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application.pdf){target="_blank"} and corresponding [Script Application Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application_Lab_Resources.zip){target="_blank"}.
