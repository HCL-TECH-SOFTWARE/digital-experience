# Developing a personalized portlet using Microsoft Visual Studio Code

This section aims to help developers use the Personalization API to fully personalize the experience of DX users with a personalization portlet. It supplements the [PZNDemo](../demo/index.md) with an additional JSP portlet that will be developed in IBM Rational Application Developer to show personalized offerings to users based on defined rules and content spots.  

It is highly recommended to review the detailed steps mentioned in [Developing a personalized portlet using IBM Rational Application Developer](../RAD/index.md) first to get a better understanding of the steps needed to use the Portal personalization API.

Microsoft Visual Studio Code (VSCode) currently does not have a software wizard like the IBM Rational Application Developer that can be used to create HRF files. HRF files are used to perform the data mappings between the rules, Java classes, and backend databases. It also does not contain a feature to automatically create the required resource collection classes for the resource-mappings like IBM Rational Application Developer does.

Refer to the following steps below to import the existing [Pers_Offers](../RAD/index.md) personalization sample into Microsoft Visual Studio Code with all of its source codes. This project can be compiled and packaged with VSCode.

1. **[Prerequisites for the Personalization portlet exercise](./pzn_demoprereq.md)**  
Learn which prerequisites are needed to develop the personalized portlet using VSCode.  
2. **[Installing the Pers_Offers portlet](./install_pers_offers_portlet.md)**  
Learn how to install the Pers_Offers portlet using VSCode.  
3. **[Reviewing the Pers_Offers project](./review_pers_offers_project.md)**  
Learn about the structure of the Pers_Offers project in VSCode.  
4. **[Importing the Personalization rules into Portal](./import_pzn_rules_portal.md)**  
Learn how to import the Personalization rules into Portal.  
5. **[Testing the Pers_Offers portlet](./test_pers_offers_portlet.md)**  
Learn how to test and review the Pers_Offers portlet using different user accounts.  
6. **[Uninstalling the Pers_Offers portlet and the PZNDemo](./uninstall_pers_offers_and_resources.md)**  
Learn how to uninstall the Pers_Offers portlet and PZNDemo.  
