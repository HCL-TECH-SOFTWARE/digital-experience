# Create a content spot

Use the Personalization Editor to create a placeholder for the rule that renders the selected content on a Web page. This placeholder is the content spot. Specify which rule to place in the content spot; this is called mapping the rule to the content spot or creating a rule mapping. In this example, the content is a resource collection.

Before you begin this procedure, ensure you have created the simple content rule Show Gold Offers for the Personalized Offers resource collection.

!!!note
    You must use the same name as the original content spot's display name. Do not place the new content spots into a folder, unless your display name already includes slashes. Place them directly into the root Workspace.

1.  Return to the root directory in the Personalization Navigator.

2.  Click **New > Content Spot** to display the Personalization Editor.

3.  Type Pzn_offersSpot in the title field of the content spot.

4.  Select **Pzn_offers** from the **Output Type** drop-down list.

5.  Click the button in the **Default Mapping** section.

6.  Expand the **Pers Offers** folder in the tree, select **Show Gold Offers** and click **OK**.

7.  Click **Save**.

8.  Test the content spot with the Personalization Editor portlet by selecting it in the Personalization Navigator and clicking the **Preview** tab in the Personalization Editor.

    !!!note
        If the previous values appear on the Preview tab, the rule and content spot work.

9.  View the page with your Pers_Offers portlet.


You can now edit the JSP file to contain dynamic code.




