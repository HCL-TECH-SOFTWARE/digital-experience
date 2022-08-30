# Connecting to HCL Volt MX Foundry through Digital Data Connector (DDC)

This section provides the steps on using DDC for HCL Portal framework to integrate data from HCL Volt MX Foundry (integrated external data sources) on your portal pages by using HCL Web Content Manager presentation components.

## Prerequisite

Ensure that the your Volt MX Foundry application is configured correctly according to [this guide](./configuring_voltmx_foundry_to_connect_to_ddc.md).
## Create a mapping for the DDC plug-in for the List-rendering profile
This section describes how to define the set of attributes available in the beans that are contained in bean lists that a DDC plug-in generates in List-rendering profile.

!!!note
    Refer to [Technical concepts | HCL Digital Experience](https://help.hcltechsw.com/digital-experience/9.5/social/plrf_tech_concepts.html)

- Following API end point and response are used to create this sample document.
    
    ![](../../../../assets/Volt_MX_Sample_Endpoint.png "VOLTMX Sample API Endpoint.")

### Steps to create the list rendering profile are as follows:

1. Log in to the WAS console.
 
    ![](../../../../assets/WAS_Console_Login_Screen.png "Log in to WAS Console")

2. Click **Resources** from side navigation. Then, click **Resource Environment**, then **Resource environment providers**.

    ![](../../../../assets/WAS_Resource-Environment_Screen.png "Select Resource environment providers")

3. From the list of resources, find **WP ListRenderingProfileService** and click.

    ![](../../../../assets/WAS_List_Rendering_Profile_Service.png "Select List Rendering Profile Service")

4. Click **Custom properties** From the **Additional Properties** on right side.

    ![](../../../../assets/WAS_Profile_Custom_Properties.png "Select custom properties")

5. Click on **New** and add your unique profile (e.g. ddcDemo) and it's properties by entering name-value pairs like in the sample below. Click **Apply** then **OK**

    ![](../../../../assets/WAS_Add_Custom_Property.png "Add custom properties")

    | Name                            | Value                    | Type       | Description|
    | ------------------------------- | ------------------------ | ---------- |------------|
    | ddcDemo.Name                    | ddcDemo.profile.json     | String     | The unique name of the list-rendering profile |
    | ddcDemo.BeanListProviderID      | ibm.portal.ddc.json      | String     | The name of the used DDC plugin |
    | ddcDemo.ItemAttribute.id        | id                       | Integer    | This should be mapped to a unique identifier per record |
    | ddcDemo.ItemAttribute.fullname  | name                     | String     | Mapping the name provided by the datasource to fullname in the list-rendering profile |
    | ddcDemo.ItemAttribute.email     | email                    | String     | Mapping a simple field |
    | ddcDemo.ItemAttribute.username  | username                 | String     | Mapping a simple field |
    | ddcDemo.ListItemSelection       | .                        | String     | Provides the root node of the JSON response |
    | ddcDemo.Type                    | BasicJSONSelection       | String     | Specifies that dot notation is being used by the plugin to access the fields |

    !!!note
        Instead of using the generic DDC json plugin you can create and deploy your [own DDC plugin](https://help.hcltechsw.com/digital-experience/9.5/social/plrf_crt_dply_cust_beanlst_prvdr.html) best suited for your business needs. 

    !!!note
        `{profile}.ItemAttribute.id` is always required but it could point to any attribute from the external data source. In the sample above, the HCL Volt MX account API used is having an ID for every account. So you're using the ID attribute in the ID. 
        If your API does not provide any unique field, you might want to use the function `{profile}.ComputedItemAttribute.{any}`.

6. Review and save the changes in the master configuration.

    ![](../../../../assets/WAS_Save_In_Master_Configuration.png "Save all the changes in master configuration")

## WCM presentation components

You may create your components under a new library with default items such as site area and workflow. Once the library is ready (new or existing), you will have to create WCM artifacts under 4 folders: Content, Components, Authoring Templates and Presentation Templates.

!!!note
    Refer to [Creating web content libraries](https://help.hcltechsw.com/digital-experience/9.5/panel_help/wcm_config_wcmlibraries.html)

### Create List Appearance

1. Go to the Library Explorer, here you will see default items `Content`, `Categories`, `Components`, `Authoring Templates`, `Presentation Templates`,`Workflow Items` and `Segments`

    ![](../../../../assets/WCM_Library_Component.png "WCM Library default components")

2. Create an Appearances folder under Components. This is only so that your personalization components that uses the DDC selection rule Select pluggable resources can be found easily in one place.

    ![](../../../../assets/WCM_Appearance.png "WCM Appearance")

3. Under Appearances folder, create a new Personalization component.
    - Click on `New` button. Then, click `Component`, then `Personalization` component

        ![](../../../../assets/WCM_Personalization_Component.png "WCM Personalization Component")

    - Enter the name and title. Suggested name: `DDC Volt MX List Appearances`

        ![](../../../../assets/WCM_Personalization_Title.png "WCM Personalization Title")

    - Under `Personalization Element`, click `New`. As a `New Rule`, instead of `Select Web Content`, click on the `Web Content` phrase and select `Pluggable Resources` instead and click `Save`.

        ![](../../../../assets/WCM_Personalization_Rule.png "Create a rule for New Personalization Element")
 
    - In the List Presentation Markup, add the following:
        - Header: `<ul>`
        - Body:
              ```
              <li>[AttributeResource attributeName="fullname" separator=","]
              <li>[AttributeResource attributeName="username" separator=","]
              <li>[AttributeResource attributeName="email" separator=","]
              ```
        - Footer: `<\ul>`

        ![](../../../../assets/WCM_List_Markup.png "Use HTML to define how list results are presented to your site visitors, including a header, footer, and separator.")

    - Click `Save and Close`.

### Create Reload Profiles under Components:

This is a convenient way to ensure the List Rendering Profile custom properties you have added or may have updated since are reflected without restarting the server. Although, if all else fails, restart server is always there as an option.

1. Under Components, click on `New` button. Then, click `Component`, then `HTML` component.

    ![](../../../../assets/WCM_Create_HTML_Component.png "Create HTML Content.")

2. Enter the name `Reload Profiles`and in the markup, add the following: `[Plugin:ListRenderingContext key="id" action="reloadProfiles"]`

    ![](../../../../assets/WCM_Reload_Profiles.png "Create Reload Profiles mark up content.")

3. Click `Save and Close`.

4. Preview.
!!!note
    This preview rendering step triggers the reload of the profiles

### Create a Presentation Template

Set the context of the DDC content.

Steps to create Presentation Template are as follows:

1. Create a new presentation template with suggested name `Volt MX data presentation template` and under presentation template options, add the following:
    ```
    [Plugin:ListRenderingContext action="set" attribute="source=[Element context='current' type='content' key='sourceuri']" profile="[Element context='current' type='content' key='profile']" extension-id="[Element context='current' type='content' key='provider']"]
    [Component name="ddc foundry/appearances/ddc volt mx list appearances" compute="always"]
    ```

    ![](../../../../assets/WCM_Presentation_Template.png "Create Presentation Template.")
 
    - Under `attribute`, define the data `source` endpoint. The content field set in this example is `sourceuri`, where you saved the **endpoint** in the content item.
    - `profile` refers to the List-Rendering Profile which was saved earlier in the WAS console. The content field that is set in this example is also `profile`, which is saved in the content item with the `ddcDemo.profile.json` value.
    - `extension-id` refers to the DDC plugin ID. The content field set in this example is `provider`, which is saved in the content item with value `ibm.portal.ddc.json`.
2. Save and close.

###  Create a Content Template
Under Authoring Templates, create a Content Template.

1. Click on `New` button. Then, click `Authoring Template`, then `Content Template` component

    ![](../../../../assets/WCM_Create_HTML_Component.png "Add Content Template.")
 
2. Add `Name`, `Display title` and `Description` with suggested name `Volt MX Content Template`. Then select the presentation template that was created earlier as the default presentation template `Volt MX data presentation template`.

    ![](../../../../assets/WCM_Create_Content_Template.png "Create Content Template and select it's attribute.")

3. Click on `Manage Element` and add the following elements to the content template as follows.

    | Element type                   | Name                                       | Display title              |
    | ------------------------------ | ------------------------------------------ | ---------------------------|
    | Component Reference            | appearance                                 | Appearance                 |
    | Short Text                     | sourceuri                                  | Data Source URI            |
    | Short Text                     | profile                                    | List Rendering Profile     |
    | Short Text                     | provider                                   | DDC Plugin                 |

    ![](../../../../assets/WCM_Manage_Element.png "Create Content Template and select it's attribute.")


4. Click on `Default Content Properties` and add `Express workflow`.

    ![](../../../../assets/WCM_Add_Workflow.png "Select Express workflow.")

5. Save and close.

### Create a Content item.

1. Under your libraries, click `Content`, then click `Articles`, and create a new **Content** from the Content Template that you created earlier.

    ![](../../../../assets/WCM_Create_Main_Content.png "Create Main Content.")

2. Add `Name`, `Display title`, and `Description` with suggested name `Volt MX Main Content`, and in the content fields / elements, provide the following inputs:

    | Content field title            | Value                                                        |
    | ------------------------------ | ------------------------------------------                   |
    | Appearance                     | appearance                                                   |
    | Data Source URI                | https://hcl-dx-dev.hclvoltmx.net/services/account/id?id=1    |
    | List Rendering Profile         | ddcDemo.profle.json                                          |
    | DDC Plugin                     | ibm.portal.ddc.json                                          |

    ![](../../../../assets/WCM_Input_Content_Element.png "Input Main Content.")
 
3. Save and close.

## Use in Portal Page

Now you can use all the WCM artefacts that you created on a portal page.

1. Under `Administration` > `Site Management` > `Manage Pages`, create a new page under `Content Root` (e.g. `Volt MX DDC` page).

2. Go to the page `Volt MX DDC`, and enable `Edit mode`.

    ![](../../../../assets/WCM_Enable_Edit_Mode.png "Enable Edit mode.")

3. Choose the `layout` and `style` of the page.

    ![](../../../../assets/WCM_Choose_Layout_Style.png "Choose Layout and style of the page.")

4. Click on `plus` icon in left navigation panel. Then click on `Applications` and add a `Web Content Viewer` on the page.

    ![](../../../../assets/WCM_Add_Content_Viewer.png "Choose Layout and style of the page.")

5. Inside the `Web Content Viewer`, click on the upper right dropdown button and select `Edit Shared Settings`.

    ![](../../../../assets/WCM_Edit_Shared_Setting.png "Select Edit Shared Settings.")

6. Under Content, change the mapped content to the Content Item you created above.

    ![](../../../../assets/WCM_Set_Page_Content.png "Select Edit Shared Settings.")

7. Click `OK`, and the following output page will be displayed.

    ![](../../../../assets/WCM_Output_Page.png "Result output.")