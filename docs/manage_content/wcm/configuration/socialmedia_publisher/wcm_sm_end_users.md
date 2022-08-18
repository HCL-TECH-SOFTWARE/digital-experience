# Social media for users

While the current version for the Social Media Publisher focuses on functions for you and your company as website owners, you might also consider adding social features to your rendered website for use by your users.

To enable this feature:

1.  Review the documentation for each social network for the markup they require to be added to a page to integrate their social network badges:
    -   **Facebook:**

        [http://developers.facebook.com/docs/guides/web/](http://developers.facebook.com/docs/guides/web/)

    -   **Twitter:**

        [https://dev.twitter.com/web/overview](https://dev.twitter.com/web/overview)

2.  When you specify the content url to use as an input to the Social badges, use the following tag: `http://YOUR_DOMAIN[URLCmpnt context="current" type="content" mode="static"]`, where `YOUR_DOMAIN` is the production domain of your website.

    For example: `http://www.ibm.com[URLCmpnt context="current" type="content" mode="static"]`

    The domain that is specified in the URL must be the same as the domain specified in the facebook.endUser.statistics.domain and twitter.endUser.statistics.domain global settings.

3.  Enable the tracking of user's social activity within the Social Media Publisher by setting the global settings `Facebook.endUser.statistics.enabled` and `Twitter.endUser.statistics.enabled` to true. See [Global configuration settings](wcm_sm_config_doc_global.md) for details.

**Parent topic:**[Social Media Publisher](../wcm/wcm_sm.md)

