# Author Content Items

This section provides the steps on how to author a web content item using HCL Content Composer.

## Prerequisite {#prerequisite}

Content Composer should be installed and configured to HCL Digital Experience 9.5 container release update CF181 or higher. See instructions to install to supported container environments in the [Install HCL Digital Experience 9.5 Components](../../installation/install_config_cc_dam.md) topic.

Content Composer is accessible from the Practitioner Studio interface (after image configuration to your HCL Digital Experience 9.5 CF181 and higher deployment).

For instructions on how to use the AI-assistance features, see [Web Content Manager REST V2 APIs for AI content analysis](../../../../../manage_content/wcm_development/wcm_rest_v2_ai_analysis/index.md). 

Before you can use AI-assistance features for sentimental analysis of content, keyword extraction from content, and auto summarization of content element in Content Composer, refer to the following steps to enable AI Analysis:

    - [Web content AI analysis in Kubernetes Deployment](../../../../../get_started/plan_deployment/container_deployment/wcm_content_ai_analysis.md) for Kubernetes deployment
    - [Web content AI analysis in on-premise deployment](../../../../../get_started/plan_deployment/traditional_deployment/wcm_env/wcm_ai_analysis.md) for DX on-premise deployment

## Creating new content with Content Composer

Follow the steps below to create new content with the HCL Digital Experience 9.5 Content Composer from the Practitioner Studio:

1.  Log in to your HCL Digital Experience 9.5 platform, and select **Web Content** from the Practitioner Studio navigator.

    ![Log in to HCL Digital Experience 9.5](../../../../../assets/HCL_DX_95_Practitioner_Studio_interface.png)

2.  Select **Web Content** menu option to access the HCL Digital Experience 9.5 Content Composer features. Then, click **Create New Content**.

    ![Create new content from Content Composer interface](../../../../../assets/Create_new_content_with_HCL_Content_Composer.png)

3.  Complete the fields in the content template. Add a **Name**, **Display Title**, and (optional) **Description** for your content.

4.  In **Select Template**, select the template to use to model the content by either typing in a specific keyword or by clicking the drop-down arrow to access all templates in the Web Content library. The type-ahead feature in the **Select Template** field assists content authors to find, identify and select the template of choice for the new content.

    In this example, the **Web Content Templates 3.0 / Image** template is selected.

    ![Select template for the new content item](../../../../../assets/Complete_new_content_fields_HCL_Content_Composer.png)

5.  In **Select Location**, select the site location to present the content when completed and ready for publication. Using the same new content example, the **Web Content / Articles** location is selected.

    ![Select location for new content](../../../../../assets/Select_location_new_content_HCL_Content_Composer.png)

6.  If adding an image file, select **Upload using file browser** or **HCL DAM** in the **Elements** section. Then, you can also drag and drop preferred image file from your local repository.

    ![Upload image for Image Element using file browser or HCL](../../../../../assets/Upload_image_file_browser_or_HCL_DAM.png)

7.  In the **Workflow** located on the right side of the interface, select the workflow to use by either typing in a specific keyword or by clicking the drop-down arrow and selecting **See All Workflows**. The type-ahead feature in the **Current Workflow** field assists content authors to find, identify and select the workflow of choice for the new content. In this example, the **Web Content Templates / Three Stage Workflow** is selected.

    ![Select Current Workflow for new content](../../../../../assets/Select_Content_Template_Workflow_HCL_Content_Composer.png)

    You can keep it as is or enter a date for the **Publish Date** and **Expire Date** fields, as shown below.

    ![Select Publish Date for new content](../../../../../assets/Set_publish_date_new_content_HCL_Content_Composer.png)

8.  When done, select **Save** to save your settings and create your new content. You can also select **Save and Close** to create your new content with the saved settings and keywords. The **Save and Close** option redirects you to the new content's location in the Content Composer dashboard.

## Creating new content from a content template in Search Results view

Users can also create new content via the Search Results view.

1.  From the HCL Digital Experience 9.5 Content Composer user interface, enter a search term in the search box located in the upper right corner as shown in the example below:

    ![Search content in Content Composer](../../../../../assets/Search_content_HCL_Content_Composer.png)

2.  Click to select the content template to create new content from. Click **Create Content** to proceed.

    ![](../../../../../assets/Create_content_from_Search_template_HCL_Content_Composer_dashboard.png)

3.  See *Creating new content with Content Composer* above for next steps.

## Creating new content with auto-populate location

Follow the steps to create a new content template with auto-populated location from the Dashboard view:

1.  From the HCL Digital Experience 9.5 Content Composer Dashboard, select a Site Area.
2.  Click **Create** then select **Content**.

    ![](../../../../../assets/HCL_Content_Composer_create_content_auto_locate.png)

3.  The location will auto-populate to the selected Site Area as shown below.

    ![](../../../../../assets/HCL_Content_Composer_auto_locate_new_content.png)

4.  Complete the fields on the **Content** tab, of which the content author will be directed to by default.
5.  When done, select **Save** to save your settings and create your new content. You can also select **Save and Close** to create your new content with the saved settings and keywords. The **Save and Close** option redirects you to the new content's location in the Content Composer dashboard.

## Content authoring actions in Search Results view

The **Search Results** view allows users to perform content authoring actions.

1.  Selecting the search result row will enable display of **Edit** and **Delete** options from the Content Composer search results view.

    Ticking the checkbox (beside **Title**) for the content item presented in the **Search Results** will also enable context-specific **Edit** and **Delete** options for the content item to optionally proceed to the content item's details in **Edit mode**.

    ![Search results view in Content Composer](../../../../../assets/Content_authoring_actions_in%20Search_Results_view.png)

2.  Column item results can also be sorted by clicking **Title**, **Date Created** or **Date Modified**. The **Status** column shows whether the content item is *Published* or *Draft*. Search Result columns can also be resized for convenience. 

## Content authoring actions in Dashboard view

The **Dashboard** view allows users to perform the following content authoring actions:

- Ticking the checkbox (beside the **Content Title**) presented in the **Content Collections** column also enables context-specific **Edit**, **Delete**, **Move**, **Copy**, and **Duplicate** options for the content item.
    ![Authoring actions on HCL Content Composer Dashboard](../../../../../assets/Authoring_actions_single_select_via_HCL_CC_Dashboard.png)

- Starting in CF211, while hovering over the content item, an overflow menu button is displayed on the right of the content item's title. Clicking on that button opens a menu which displays the **Edit**, **Overview**, **Move**, **Copy**, **Duplicate**, and **Delete** options.
    ![Authoring actions on HCL Content Composer Dashboard Overflow Menu](../../../../../assets/Content_authoring_actions_in_dashboard_overflow_menu.png)

## Creating new content and adding/removing keywords

Follow the steps to create a new content and add keywords from the Dashboard view:

1.  From the HCL Digital Experience 9.5 Content Composer Dashboard, locate your content template, hover to the icon to display checkbox then click it.

    ![](../../../../../assets/HCL_Content_Composer_Sample_Template.png)

2.  Click **Create Content** in the actions bar.

    ![](../../../../../assets/HCL_Content_Composer_Sample_Template_Create_Content.png)

3.  Click the **Properties** icon, which is on the right side as shown below.

    ![](../../../../../assets/HCL_Content_Composer_Properties_Tab.png)

4.  Add a keyword by inputting in the Keywords Field shown below. You can also add multiple keywords by adding a delimeter (,) in between the keywords.

    ![](../../../../../assets/HCL_Content_Composer_Content_Add_Keywords.png)

    You can automatically extract keywords from the content item using AI-assisted keyword generation. Click the **Generate** button. The extracted keywords are based on the content provided in the content item. The AI-generated keywords will not overwrite the existing keywords but will append to it.

    !!! note "Using AI-assisted keyword extraction"
        Refer to the [Prerequisite](#prerequisite) section for instructions on configuring AI-assistance features.

    ![](../../../../../assets/HCL_Content_Composer_Content_Generate_Keywords.png)

5. If you want to remove a keyword, just click the **x** button of the keyword you want to delete.

    ![](../../../../../assets/HCL_Content_Composer_Content_Remove_Keyword.png)

6.  Complete the fields on the **Content** tab, of which the content author will be directed to by default.
7.  When done, select **Save** to save your settings and create your new content. You can also select **Save and Close** to create your new content with the saved settings and keywords. The **Save and Close** option redirects you to the new content's location in the Content Composer dashboard.


## Creating new content with default keywords

Follow the steps to create a new content with auto-populated keywords from the Dashboard view:

1.  From the HCL Digital Experience 9.5 Content Composer Dashboard, locate your content template with Default Content Keywords, hover to the icon to display checkbox then click it.
   
    ![](../../../../../assets/HCL_Content_Composer_DefaultKeyword_Checkbox.png)

2.  Click **Create Content** in the actions bar.

    ![](../../../../../assets/HCL_Content_Composer_DefaultKeyword_ActionBar.png)

3.  The Content Template and Keywords in Properties will be auto populated as shown below.

    ![](../../../../../assets/HCL_Content_Composer_DefaultKeyword.png)

4.  Complete the fields on the **Content** tab, of which the content author will be directed to by default.
5.  When done, select **Save** to save your settings and create your new content. You can also select **Save and Close** to create your new content with the saved settings and keywords. The **Save and Close** option redirects you to the new content's location in the Content Composer dashboard.

## Creating new content and adding AI-assisted summarization of content element

!!! note "Using AI-assisted summarization of content element"
    Refer to the [Prerequisite](#prerequisite) section for instructions on configuring AI-assistance features.

Follow the steps to create new content and add an AI-assisted and generated description from the Dashboard view:

1.  From the HCL Digital Experience 9.5 Content Composer Dashboard, locate your content template, hover to the icon to display checkbox then click it.

    ![](../../../../../assets/HCL_Content_Composer_Content_GenerateDescription_Checkbox.png)

2.  Click **Create Content** in the actions bar.

    ![](../../../../../assets/HCL_Content_Composer_Content_GenerateDescription_Actionbar.png)

3.  Complete the fields on the **Content** tab, of which the content author will be directed to by default.

    ![](../../../../../assets/HCL_Content_Composer_Content_GenerateDescription_CompleteContent.png)

4.  Click the **Generate** button in the Description field. The generated description is based on the content provided in the content element. The generated description replaces any existing description, if present.

    ![](../../../../../assets/HCL_Content_Composer_Content_GenerateDescription_ClickGenerate.png)
    ![](../../../../../assets/HCL_Content_Composer_Content_GenerateDescription_GeneratedDescription.png)

5.  When done, select **Save** to save your settings and create your new content. You can also select **Save and Close** to create your new content with the saved settings and keywords. The **Save and Close** option redirects you to the new content's location in the Content Composer dashboard.

## Creating new content and getting AI-assisted sentiment analysis of text elements

!!! note "Using AI-assisted sentiment analysis of content"
    Refer to the [Prerequisite](#prerequisite) section for instructions on configuring AI-assistance features.

Follow the steps to create a new content and get AI-assisted sentiment analysis on text elements from the Dashboard view:

1.  From the HCL Digital Experience 9.5 Content Composer Dashboard, locate your content template, hover to the icon to display checkbox then click it.

    ![](../../../../../assets/HCL_Content_Composer_Content_SentimentAnalysis_Checkbox.png)

2.  Click **Create Content** in the actions bar.

    ![](../../../../../assets/HCL_Content_Composer_Content_SentimentAnalysis_ActionBar.png)

3.  Complete the text field/s (Short Text, Text, and Rich Text) on the **Content** tab, of which the content author will be directed to by default.

    ![](../../../../../assets/HCL_Content_Composer_Content_SentimentAnalysis_CompleteContent.png)

4.  Click the **Analyze Sentiment** icon located in the lower right corner of the text element. A sentiment analysis result is returned based on the analysis of the content of the text element. The sentiment analysis result is represented by an icon on the **Body** field.

    ![](../../../../../assets/HCL_Content_Composer_Content_SentimentAnalysis_AnalyzeSentiment.png)
    ![](../../../../../assets/HCL_Content_Composer_Content_SentimentAnalysis_SentimentResult.png)

5.  Click the sentiment result icon to see more details about the result.

    ![](../../../../../assets/HCL_Content_Composer_Content_SentimentAnalysis_SentimentPopover.png)

5.  When done, select **Save** to save your settings and create your new content. You can also select **Save and Close** to create your new content with the saved settings and keywords. The **Save and Close** option redirects you to the new content's location in the Content Composer dashboard.


<!--

## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1){:target="_blank"}. -->


