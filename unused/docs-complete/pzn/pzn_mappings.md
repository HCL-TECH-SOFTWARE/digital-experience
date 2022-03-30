# Rule spot mappings 

For a rule to be used on your Web site, it must be mapped to an existing content spot.

A rule spot mapping is merely an association between a content spot and a rule. Changing the rule that is executed in the run-time environment is as easy as mapping a different rule to a content spot.

You create rule spot mappings within the Personalization workspace. There are two views for rule mappings: **Rule Mappings by Campaign** and **Rule Mappings by Content Spot**. The **Rule Mappings by Campaign** view shows all the rule mappings under a selected campaign from a drop-down menu, and their mapped content spots and rules. This view includes the Default Mappings option which simply shows all the default mappings of each content spot. The **Rule Mappings by Content Spot** view shows all the rule mappings under a particular content spot, including the default mapping and any mappings under campaigns. You can change the personalization behavior of your Web site by mapping a different rule to a given content spot.

Although only one rule is executed when a content spot bean is invoked, you can have multiple rules simultaneously mapped to a content spot by using campaigns. When you create a campaign, you can create a separate set of rule spot mappings for any or all of the content spots in your project.

When multiple campaigns are simultaneously active, campaign priorities and splits are used to determine the rule to execute. When multiple active campaigns have the same priority, the splits are used to calculate a percentage chance that one mapping will be used instead of the others.

Splits can be changed for each rule spot mapping.

Rule spot mappings can be duplicated and moved from one campaign to another. The start and end date of the rule spot mapping may both be modified if they fall outside the range of dates for the campaign to which the spot mapping is moved. Multiple mappings can be added to the same spot within a campaign.

**Parent topic:**[Personalization terms ](../pzn/pzn_concepts.md)

**Previous topic:**[Content spots ](../pzn/pzn_content_spots.md)

**Next topic:**[Campaigns ](../pzn/pzn_campaigns.md)

**Parent topic:**[Personalization terms ](../pzn/pzn_concepts.md)

**Previous topic:**[Content spots ](../pzn/pzn_content_spots.md)

**Next topic:**[Campaigns ](../pzn/pzn_campaigns.md)

