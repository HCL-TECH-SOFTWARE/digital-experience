# Review the Pers_Offers project

When opening the project with Microsoft Visual Studio code, the following directory structure should be shown up. The white marked number-items will be described below.

![Pers_Offers MVC project overview](./images/Pers_offers_project_overview.png)  

1. The **rules** folder already include all the required rules that are needed to run the Pers_Offer example. This rules can be imported into Portal.  

2. The **Pers_OffersPortlet.java** file is the JCR 268 Java Portlet class  

3. All classes in the **src/main/java/pers_offers** folder are classes that are needed for implementing the personalization.  
   The source-code is based on the instructions mentioned in [Developing a personalized portlet using Rational Application Developer](../RAD/index.md)  

4. The specific Java Server Page (JSP) file for the JCR 268 Portlet can be found in directory  **\src\main\webapp\_Pers_Offers\jsp\html\Pers_OffersPortletView.jsp**  

5. When using IBM Rational Application Developer, there is a wizard available that helps to create the java classes mentioned on topic three above. The same wizard also creates hrf files that specifies the mapping between the rules, java-classes and backend databases. Such a wizard is currently missing in Microsoft Visual Studio Code. 
   But the provided sample may help to create own classes and rules.  

   Sample hrf-files can be found in folder **\src\main\webapp\WEB-INF\pzn-resourceCollections\pers_offers**  

    For example:

    ![HRF File descriptions](./images/hrf_file_descriptions.png)  

    1. The specification/registration of the Java-Resource classes mentioned on topic three above.
    2. The resource collection definition on which a content spot, tables, column-values and db-domains can be specified.  
