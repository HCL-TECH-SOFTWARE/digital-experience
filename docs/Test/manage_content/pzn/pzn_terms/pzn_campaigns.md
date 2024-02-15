# Campaigns

Campaigns are a means of organizing and implementing sets of personalization behavior.

A useful analogy for a campaign is an advertising campaign, which targets specific audiences with high-priority information for a specified period of time. Campaigns achieve this by allowing you to preferentially display campaign-related content in the content spots of a Web site. To accomplish such a goal, a campaign contains a set of rule-to-content spot mappings, start dates, and stop dates.

Users can create and manage campaigns through the Personalization Authoring Portlet. Campaigns are live as soon as their start date is reached and they may be published to other servers together with rules. To create a campaign, select **New > Campaign**. To add rule mappings to a campaign, select the campaign, and select **New > Rule Mapping**.

When a campaign is active in the run-time environment, the rule mappings take precedence over the default rule mappings for content spots the campaign references. For example, a seasonal campaign might contain certain rule mappings that result in the display of special offers to a Web site visitor. A campaign can contain rule mappings for some or all of the content spots on a site.

It is possible to have multiple campaigns active simultaneously. When this happens, the priority settings of the active campaigns dictate which campaign's rule mapping will be used. The campaign with the highest priority 'wins' and its rule mappings are used. In the event that multiple active campaigns have the same priority setting, the rule mapping used for a given content spot is determined randomly according to the relative split ratios.




