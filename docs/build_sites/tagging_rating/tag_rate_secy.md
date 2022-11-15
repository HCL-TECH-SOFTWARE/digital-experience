# Security for tagging and rating

For administering which users can tag and rate content, the portal provides virtual resources for tagging and rating and roles on these virtual resources.

The portal provides the following virtual resources: TAGS and RATINGS. These resources allow you to determine user rights that related to tagging and rating. The following list explains which roles users require to perform tagging and rating operations. The user actions correspond to the normal portal roles. Privileges are inherited.

In a default portal installation, the group All Authenticated Portal Users has the CONTRIBUTOR role. There is no role assigned to the anonymous user. Please note that anonymous users need at least the CONTRIBUTOR role to be able to apply tags and ratings as they can only apply public tags or ratings, not private ones.

-   **USER**

    Can view community tags and community ratings that other users have applied and all personal tags, both personal private and personal public.

-   **PRIVILEGED USER**

    Includes USER actions.

    Can view community tags and community ratings that other users have applied.

    Can create and delete personal private tags and ratings.

-   **CONTRIBUTOR**

    Includes USER actions.

    Can view community tags and community ratings that other users have applied.

    Can create and delete personal public tags and ratings, but cannot create or delete personal private tags and ratings.

-   **MANAGER**

    Includes USER and CONTRIBUTOR actions.

    Can view community tags and community ratings that other users have applied.

    Can create and delete personal public tags and ratings.

    Can delete community tags regardless of ownership.


**Note:**

-   In a default portal installation, the group All authenticated users has CONTRIBUTOR and privileged USER access to tags and rating under virtual resources. If you want to test what an authenticated user with the default role assignments in the portal can do with tags and ratings, remove these permissions first.
-   In a default portal installation, anonymous users have no role assigned. For anonymous users to create and delete personal public tags and ratings, assign them the CONTRIBUTOR role.


**Related information**  


[Tagging and rating](../admin-system/tag_rate_mngadmin.md)

[Access permissions](../admin-system/sec_acc_rights.md)

[The tag and rating widgets](../admin-system/tag_rate_ui_alt.md)

[How public and private tags and ratings work in the portal](../admin-system/tag_rate_adm_publc_privt.md)

