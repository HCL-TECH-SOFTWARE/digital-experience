# Adding the social information table to an authoring template \| HCL Web Content Manager

If the Automatically add social information element setting on a social network configuration document is disabled, you must manually add the social information element to any authoring template you want to use the social media publisher on.

1.  Open the authoring template that you want to add the social information element to in edit mode.

2.  Add a text element named **SocialNetworkInformation**.

3.  Set the **Custom JSP** property of the element to:

    ```
    readMode=/wps/wcmsocial;/jsp/html/ItemField.jsp,editMode=/wps/wcmsocial;/jsp/html/ItemField.jsp
    ```

4.  Save and close the authoring template.


To apply the element to all existing content that uses a specific authoring template, open the authoring template in read mode and click **Apply Authoring Template**, ensuring that the **Add new elements** option is selected.


