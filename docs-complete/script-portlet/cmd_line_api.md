# JavaScript API for spHelper 

This API reference can help you customize an instance of your Script Application further.

## Namespace `spHelper`

The `spHelper` provides the functions and variables that are related to a specific instance of the Script Application. To reference `spHelper`, you must precede it with the application unique name space tag, for example, `[Plugin:Portlet key="namespace" compute="once"]`. To make it easier to use this object, you can create your own uniquely named variable, for example, `var myspHelper = [Plugin:Portlet key="namespace" compute="once"]spHelper;`.

## spHelper field summary

-   **`spHelper.renderingLocale`**

    Get the rendering locale.

-   **`spHelper.userCn`**

    Get the user's common name from LDAP.

-   **`spHelper.userId`**

    Get the user's ID from LDAP.

-   **`spHelper.userLanguage`**

    Get the user's preferred language from LDAP.

-   **`spHelper.userName`**

    Get the user's name from LDAP based on the Theme `user.displaynameattribute`.

-   **`spHelper.userSn`**

    Get the user's surname from LDAP.


## Method summary

-   **`spHelper.getScriptPortletPreference()`**

    Retrieves the values for the portlet preference that is used for Script Applications.

    ```
    // Sample using the Promise object calling the then function for the promise object
     // adding functions as parameters to the then function to handle success and error 
     function sampleRetrievePreference() {
      myspHelper.getScriptPortletPreference().then(function(prefData) {
          // for this script application the preferences are an array of strings
      			var prefs = prefData;  
                 // if the first preference value is false then hide the field
                 if (prefs[0] == "false"){
                   $('#pref1').css('display','none');
                 }
                 // if the second preference value is equal to 09982 then hide the field
                 if (prefs[1] == "09982"){
                   $('#nameHeader2').css('display','none');
                 }
           },
            function(error){
              // you might want to exclude the error 
              // "ERR001:Preference data is not available in this context"
              // you will get this when in the the code is called when in preview
              // or the theme doesn't include wp_client_ext capability.
              if (error.message.toString().indexOf("ERR0001:") != 0)
    			alert(error.name + "\n" + error.message);
        	  });
     };
    ```

    -   **Returns**

        `{Promise}` A promise that resolves to \{preferenceData: Object\} on success and \{error: Error\} on error. The preferenceData is any JavaScript object that contains your preference values and can be serialized to a string value that represents the object. For example, you can define a JSON object that has a list of holidays where the portlet behaves differently.

        ```
        {"holidays":[ {"Month":"January","Date":"1"}, 
        {"Month":"June","Date":"22"}, {"Month":"July","Date":"5"} ]}
        ```

        Or, you can define an ordered string array where the values control a fields visibility.

        ```
        ["true", "true", "true", "true", "true", "true", "true", "true"]
        ```

        The error is an Error object that contains the information about the Error. For example, the error ERR0001:Preference data is not available in this context results when the code is run in the preview view or the dependency on the `wp_client_ext` is missing.

-   **`spHelper.setScriptPortletPreference(preferenceData)`**

    Sets the values for the portlet preference that is used for Script Applications.

    ```
    // Sample using the Promise object calling the then function for the promise object
     // adding functions as parameters to the then function to handle success and error 
     function sampleSetPreference() {
     // for this script application the preferences are an array of strings
      preferences =
      ["" + $('#pref1').prop('checked'),
       "" + $('#pref2').val()];
      myspHelper.setScriptPortletPreference(preferences).then(function(prefData){
           // on success close the preference dialog
          $('#prefDialog').dialog('close');
          }, err: function(errorText){
              // you might want to exclude the error 
              // "ERR001:Preference data is not available in this context"
              // you will get this when in the the code is called when in preview
              // or the theme doesn't include wp_client_ext capability.
    		if (error.message.toString().indexOf("ERR0001:") != 0)
    			alert(error.name + "\n" + error.message);
         });
     };
    ```

    -   **Parameters**

        `{Object}preferenceDatacan` can be null or any JavaScript object that contains your preference values and can be serialized to a string value that represents the object. Setting the value to null removes all preference values. Or, you can specify an array of any size of preference values that you want for this instance of the portlet. You can use these preference values to customize the portlet. For example, you can define a JSON object that has a list of holidays where the portlet behaves differently.

        ```
        {"holidays":[ {"Month":"January","Date":"1"}, 
        {"Month":"June","Date":"22"}, {"Month":"July","Date":"5"} ]}
        ```

        Or, you can define an ordered string array where the values control a fields visibility when the data is stored the previous data is replaced with the new data.

        ```
        ["true", "true", "true", "true", "true", "true", "true", "true"]
        ```

    -   **Returns**

        `{Promise}` A promise that resolves to `{preferenceData: Object}` on success and `{error: Error}` on error. The `preferenceData` is the same data that was passed into this function. The errorText is a string that contains the information about the Error. For example, the error "ERR0001:Preference data is not available in this context" results when the code is run in the preview view or the dependency on the `'wp_client_ext'` is missing.


**Parent topic:**[Build applications with the Script Application](../script-portlet/build_apps.md)

**Related information**  


[Generating a URL Map from local application paths to runtime Web Content Manager URLs ](../script-portlet/gen_url_map.md)

[Reference documents](../dev/reference_docs.md)

