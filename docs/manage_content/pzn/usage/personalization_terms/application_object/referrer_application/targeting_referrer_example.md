# Create a visibility rule that uses referral attributes

Learn how to create the Referrer application object by using a visibility rule for your HCL Digital Experience portal website.

In this example, you are creating a visibility rule that uses the referral host and search attributes. These attributes are only used in rules to display ski related vacation information for users that search on ski trips in Google.

This rule prevents other types of information, such as beach or mountain vacation information, from displaying when users search on ski trips.

1.  Click **Applications** \> **Personalization** \> **Business Rules**.

2.  From the Personalization Navigator, click **New** \> **Rule**.

3.  For Rule Type, select **Visibility Rule**.

4.  The numbered screen capture, along with the corresponding table, provides the values and selections that are used in this example. Use these example values and selections to guide you in creating a visibility rule that uses the referral host and search attributes.

    ![Screen capture of a visibility rule in the Personalization Editor](../images/visibility_example.jpg)

    |Numbered item in screen capture|Description|
    |-------------------------------|-----------|
    |1|Type Ski vacation information as the name for your rule.|
    |2|By Located in, use the default folder to store your rule for this example.|
    |3|For Rule Type, select **Visibility Rule**.|
    |4|Continue to use **Show** in this example to show a page or portlet that is based on the conditions that you define in this rule.|
    |5|Click **attribute** \> **Referrer** \> **Referral Host**. The attribute label changes to current Referrer. Referral Host. **Note:** The Referral URL attribute is another attribute available to you with the Referrer application object. Use the Referral URL attribute when a user is referred to your site from a search engine other than the supported search engines. Use the Referral Host attribute, as shown in this example, when a user is referred to your site from the supported search engines.

|
    |6|In this example, continue to use **is** as the comparison operator.|
    |7|Click **value \*** to enter www.google.com as the value for the condition. Click **Submit**.|
    |8|Click **add Condition** \> **Referrer** \> **Search Keywords**. The attribute label changes to current Referrer. Search Keywords. **Note:** You can provide a value for the Referrer. Search Keywords only when a user is arriving to your site from one of the supported search engines.

|
    |Not shown in screen capture|Click **value \*** to enter skiing as the value for the condition. Click **Submit**.|

5.  Click **Save**.

6.  You successfully created your visibility rule. You can add your rule to a page or portlet from the Manage Pages area of your site.

    **Note:** Visibility rules do not hide pages or portlets for anonymous users.

7.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

8.  Click **Content Root**.

9.  Go to the page that you want to use your rule.

    For example, you might have a page that is named Ski Vacations in the Home area of your site. To locate the Travel page, click **Home** \> **Ski Vacations**

10. After you locate your Travel page, follow the instructions for adding your rule to a page or for adding your rule to a specific portlet.

        |**Instructions for adding your rule to a page**|    1.  Click **Edit Page Properties**.
    2.  Expand **Advanced options**.
    3.  Click the arrow by Show or Hide page rule, and click **Select Rule**.
    4.  Select the check box by a rule you want to add to your page. Click **OK**.
    5.  Click **Done**
|
    |**Instructions for adding your rule to a portlet**|    1.  Click **Edit Page Layout**.
    2.  Make sure that Show portlet rule mapping is enabled. When this option is enabled, you see a Hide Portlet Rule Mappings link.
    3.  Click the arrow by **No rule mapped** for a portlet on this page, and click **Select Rule**.
    4.  Select the check box by a rule you want to add to your portlet. Click **OK**.
    5.  Click **Done**.
|



