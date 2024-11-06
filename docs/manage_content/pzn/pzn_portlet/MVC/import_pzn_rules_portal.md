# Import the pzn-rules into Portal  

The Pers_Offers sample portlet contains a folder named **rules**, which contains all rules that that will be created, when you follow the steps of section [Developing a personalized portlet using IBM Rational Application Developer](../RAD/index.md). This rules can be simple imported into Portal by using the following steps.  

1. Extract the **Portal_rules_PznOffers.zip** file located in the rules directory to any folder
2. Login to the Portal Administration page as potal admin user.
3. Navigate to **Personalization** > **Business Rules**
4. Click to **New** > **folder** to create a new folder with name **Pers Offers**.
5. Click the **Import** button and import the following rules into the **Pers Offers** folder.

    1. Per_Offers_User.nodes
    2. Pzn_offers.nodes
    3. Show+Gold+Offers.nodes
    4. Show+Platinum+Offers.nodes
    5. Show+Titanium+Offers.nodes
    6. Show+Offers+by+Customer+Type.nodes
    7. Pers+Offers+User+Profiler.nodes

6. Click the **Import** button and select the following rule to be imported into the **main (workspace)** folder.

    1. Pzn_offers+spot.nodes

!!!note "Tip"
       The name of the Content Spot rule need to match the displayName of the Content Spot used in the hrf-file!

## Result

Rules in the Workspace:

![Workspace Rules](./images/pers_offers_import_rules1.png)

Rules in the Pers Offers folder:

![Pers Offers folder rules](./images/pers_offers_import_rules2.png)  
