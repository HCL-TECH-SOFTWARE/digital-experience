# Personalization-Unica Integration

Personalization helps us to recognize a specific site visitor or also determine characteristics of a user based on previous purchases, products or pages viewed, or other attributes based on user profile. Personalization then selects content that is appropriate for that profile.

Unica Campaign is a web-based solution that enables you to design, run, and analyze direct marketing campaigns. Users can create segments in [Unica Campaigns](https://help.hcltechsw.com/unica/Campaign/en/12.1.4/Campaign/Campaigns/Creating_and_managing_campaigns.html) and now also from [Segment Central](https://help.hcltechsw.com/unica/SegmentCentral/en/12.1.4/SegmentCentral/Admin%20Guide/creating_strategic_segments.html) with the latest release.

Unica provides an ability to access Campaign segments with the help of [Unica Campaign APIs](https://help.hcltechsw.com/unica/Campaign/en/12.1.4/Campaign/REST_API/RESTAPI_parent.html) that provides segment details based on the **partitionName** and **audienceName** created under the Segments of Campaigns.

The Unica Campaign API explorer can be reached via **/Campaign/api/campaign/rest/v3/swagger-ui.html**. For example: https://unicasample.hcl.com/Campaign/api/campaign/rest/v3/swagger-ui.html
![unica-campaign-segments](../../../images/unica-campaign-segments.png)

Personalization-Unica Integration here helps the customers integrate [HCL Unica Campaign Segments](https://help.hcltechsw.com/unica/Campaign/en/12.1.4/Campaign/Sessions/About_strategic_segments.html) in DX Personalization.
With the integration, you can leverage segment lists from Unica Campaign in DX Personalization Rules for decisions on Content Visibility or Content Selection.

Users can leverage segments from Unica Campaigns in Personalization with different options as described below:

-  [Sample for leveraging Unica segments in PZN Rules](../pzn_unica_integration/sample_code_method.md)  
The Sample code approach allows the user to create Custom Application Object with parameters that allow the user to access Unica Campaign APIs to use segments in DX Personalization for content selection or visibility. Users can create multiple application objects as per the requirement to handle customer needs. Creating your own plugin with the sample is the most flexible way to integrate with Unica but requires java coding. See the link for more information.
-  [Out-of-box application object for shipping Unica with PZN](../pzn_unica_integration/out_of_box_method.md)  
The Out-of-box application object method allows you to create a Default Application Object with default attributes by running a ConfigEngine task with some parameters required to connect with Unica Campaign APIs. It does not require custom coding but limits the way the user is identified for the selection in Unica. See the link for more information.

These application objects can then be used in Personalization Rules by validating the segments against the conditions for providing better Content visibility or Content Selection.
