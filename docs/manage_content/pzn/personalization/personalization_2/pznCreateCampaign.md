---
id: pznCreateCampaign
title: Creating and editing personalization campaigns
---




Campaigns are a means of organizing and implementing sets of personalization behavior within websites or as part of email promotions. A useful analogy is an advertising campaign that targets specific audiences with high priority information for a specified time. Use campaigns to preferentially display campaign-related content in the Content spots of a website, sending directed email with campaign-specific information to a group of email recipients, or both. To accomplish such a goal, a campaign contains a set of rule-to-content spot mappings, start dates, and stop dates, and optionally, email promotions.

When a campaign is active in the runtime environment, its rule mappings take precedence over mappings in the Normal View. A campaign can contain rule mappings for some or all of the content spots on a site.

It is possible to have multiple campaigns active simultaneously. The priority settings of the active campaigns dictate which campaign rule mapping is used. The campaign with the highest priority 'wins', and its rule mappings are used. If multiple active campaigns have the same priority setting, the rule mapping that is used for a content spot is determined randomly according to the relative split ratios.

1.  From the Personalization Navigator, click **New Campaign**.

2.  Type a name for the campaign and select the folder where the content spot is located.

3.  Campaigns are typically time-based. Select a start and end date for the campaign.

4.  Select a priority for this campaign. If you select 1, this campaign takes precedence over other campaigns that are active at the same time.

5.  Use a split to calculate the percentage chance this mapping is used instead of other mappings with the same priority ranking. So 100 is 100 percent; 50 is 50 percent; and so forth.


To edit the campaign later, select the campaign in the personalization navigator and click **Edit**.

