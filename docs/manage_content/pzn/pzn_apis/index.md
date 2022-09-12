# Personalization APIs

Application of Personalization in Digital Experience solutions can support the ability to recognize a specific site visitor or also determine characteristics of a user based on previous purchases, products or pages viewed, or other attributes based on a user profile. Personalization then selects content that is appropriate for that profile.

For example, if a visitor belongs to a particular geographic region, targeted content specific to that region can be personalized to the visitor. If a person has a high salary range, region code, or other information, Personalization can be configured to retrieve information about a commercial website premium product. The page is assembled with the personalized information, and the visitor sees a personalized page.

Visit the following Help Center documentation to learn more: [Personalization](https://help.hcltechsw.com/digital-experience/8.5/pzn/pzn_overview.html)

As of HCL Digital Experience CF204, the following types of rules or artifacts are enabled via REST:

-   [Rules](https://opensource.hcltechsw.com/experience-api-documentation/pzn-api/#tag/Rules)
    -   Visibility Rules
    -   Profiler Rules \(updated with CF204\)
    -   Selection Rules \(updated with CF204\)
    -   [Embedded WCM Selection Rules](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/#tag/Component) \(new with 204\)
    -   Binding Rules (new with CF205)
-   [Folders](https://opensource.hcltechsw.com/experience-api-documentation/pzn-api/#tag/Folders)
-   [Dynamic Properties](https://opensource.hcltechsw.com/experience-api-documentation/pzn-api/#tag/Dynamic-Properties)

All of the `GET`, `GET all`, `UPDATE`, `CREATE` and `DELETE` operations are enabled via the APIs.

!!! note 
    APIs are in beta stage at this time - changes are possible until finalized.

With HCL Digital Experience CF204, the PZN Java API was extended to return the evaluated page when using a custom application object.

The method signature is: `Interface com.ibm.websphere.personalization.PznPortletRequestObjectInterface`.

Example:

```
   /* 
     * Return the serialize ObjectID of the evaluated page
     */
    public String getEvaluatedPage();
```
