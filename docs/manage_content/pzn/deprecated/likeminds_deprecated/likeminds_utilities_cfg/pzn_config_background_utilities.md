# Configuring LikeMinds utilities

Learn what and how to configure LikeMinds utilities in HCL Digital Experience.

You can configure the following settings for the `buildstats` and `buildvisit` background utilities:

-   Ratability parameters
-   Repeated items in the visit list

You can use the `buildstats` utility for all of the Recommendation engines except for the Item Affinity Engine. The `buildvisit` utility is only used for the Preference Engine.

-   **[Configuring the sifter for mentor selection](../pzn/pzn_configure_sifter_mentor_selection.md)**  
Learn how to configure the sifter to find mentors for your LikeMinds server engines.
-   **[Ratability parameters](../pzn/pzn_ratability_parameters.md)**  
The buildvisit background utility computes a ratability value for each item in the database. It is only used for the Preference Engine.
-   **[Repeated items in visit list](../pzn/pzn_repeated_items_visit_list.md)**  
To specify whether the buildvisit utility should repeat an item in the visit list to be shown to a user, set db.visitlist.ratability.duplication\_threshold. Items with ratability values greater than this threshold may be repeated.
-   **[Configuring the sifter for mentor selection](../pzn/pzn_configure_sifter_mentor_selection.md)**  
Learn how to configure the sifter to find mentors for your LikeMinds server engines.
-   **[Ratability parameters](../pzn/pzn_ratability_parameters.md)**  
The buildvisit background utility computes a ratability value for each item in the database. It is only used for the Preference Engine.
-   **[Repeated items in visit list](../pzn/pzn_repeated_items_visit_list.md)**  
To specify whether the buildvisit utility should repeat an item in the visit list to be shown to a user, set db.visitlist.ratability.duplication\_threshold. Items with ratability values greater than this threshold may be repeated.

**Parent topic:**[Configuring the LikeMinds engines](../pzn/pzn_configure_likeminds_engines.md)

