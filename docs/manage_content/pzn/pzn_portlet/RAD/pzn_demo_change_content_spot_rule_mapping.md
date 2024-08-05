# 16. Changing content spot rule mapping

Change the default rule mapping to the new binding rule that you created for different customer types who will use the Personalized Offers portlet. Test the portlet for use by all customer types. Verify that the portlet displays the personalized content that is specified by the business rule for each user profile.

Before you begin this procedure, ensure you have properly created additional advanced rules.

1. In the Personalization Navigator, select the content spot **Pzn_offersSpot**, located in the **Workspace Root**.

2. In the Personalization Editor portlet, click **Edit**.

3. Change the default rule mapping to the new binding rule and click **Save**.

   ![Show all Customertype binding rule](./images/new_binding_rule.png)

4. Log in to the Portal as Scott, with password pzndemo, a Gold customer.

5. Run the enhanced Personalized portlet

6. Log out, then log in as Marge, with password pzndemo, a Platinum customer.

7. Run the portlet.

!!!note
    If you run the portlet as wpsadmin, it fails because wpsadmin does not exist in the user resource database.

Congratulations! You have finished building a Personalized portlet.

The next topic, **Personalized list portlet**, shows how to use this portlet instead of coding the Rational Application Developer portlet.
