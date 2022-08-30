# Installing and configuring the HCL Web Content Manager Multilingual Solution

HCL Web Content Manager Multilingual Solution needs to be on the server for the translation field to appear on Content Template templates, and for you to start implementing multilingual support for your sites.

You should read the Web Content Manager Multilingual Solution documentation before attempting to install and use the Multilingual Solution with CTC.

1.  Install Multilingual Solution on your HCL Digital Experience servers to install the Multilingual Solution application and the Multilingual Solution library.

2.  Verify that the authoring templates in the **CTC Design** library include a section that is called **MultiLingual Solution** on the **Default Content** tab. These are used for managing the multilingual support for content items.

3.  Use the **Multi Locale Solution Library Copy** portlet to copy the Demo Site Library to each locale and region in your multilingual solution.

4.  Create the local owners group or user.

5.  Create new configuration documents by creating new content items:

    1.  Use the **LocalizedConfigurationFileAT** content template from the **ML Configuration** library for localized sites.

    2.  Use the **RegionalizedConfigurationFileAT** content template from the **ML Configuration** library for regionalized sites.

    3.  Add the base library and content library names.

    4.  Under **General Settings** change storeOriginalWorkflow=true

6.  Create a link component directly under the Components folder that references the multilingual configuration file:

    1.  Localized libraries are linked to the LocalizedConfigurationFileAT file.

    2.  Regionalized libraries are linked to the RegionalizedConfigurationFileAT file.

    3.  Libraries that are localized that also have regionalizations require a link to both configuration files


Now that Multilingual Solution is installed, Content Template contains multilingual forms and you have what you need to create a multilingual site.


