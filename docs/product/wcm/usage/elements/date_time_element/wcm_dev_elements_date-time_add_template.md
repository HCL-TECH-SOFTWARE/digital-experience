---
id: wcm_dev_elements_date-time_add_template
title: Adding a date and time element to a template
---
import useBaseUrl from '@docusaurus/useBaseUrl';



You add a date and time element to an authoring template when you want the date and time element to be used by a set of items that use the same authoring template.

1.  Open or create an authoring template.

2.  Click **Manage Elements**.

3.  Select **Date and Time** as the element type.

4.  Enter a name. Do not use double-byte and non-ASCII characters.

5.  Enter a display title to use as the title of the element displayed indexes and forms.

6.  If you create a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different display title for each language it is configured for. The text that is entered in the **Display Title** field is only used if an appropriate display title is not available from the selected text provider, or if the text provider is not available.

7.  Click **Add**. The date and time element is added to your form.

8.  Go to the **Default Content** tab.

9.  Go to the date and time element you added. Select a date and time, or do nothing if you want your content creators to select a date and time:

    1.  Click ![date](../images/date.jpg) to select a date.

    2.  Click ![time](../images/time.jpg) to enter a time. Only the integers "0123456789" can be used when times are entered.

10. Click ![properties](../images/propIcon.jpg) to open the display properties of the element. This section is where you define how the element is displayed on the item form.

    1.  To display the element as a required field select **Identify this as a required field**.

    2.  To hide a field on the content form from all users select **Hide field**. You must specify a default value if the field is a required field.

        **Note:** Administrators and managers can choose to display hidden fields and elements in an item by clicking **Show hidden fields**.

    3.  You can select to display both the date and time selection fields, or just date or just time.

    4.  You can restrict the range of dates and times that users can select in date and time fields by selecting a start and end date or time. You either select a specific date, or select the number of days, hours, or minutes after the creation date to begin the range, or the number of days, hours, or minutes after the start date to end the range.

    5.  Select the users or groups you want to grant exclusive edit access to a field or element by clicking **Add Editors**.

    6.  Select the users or groups you want to grant exclusive view access to a field or element by clicking **Add Viewers**.

    7.  Type field-specific help into **Field help** text. This text displays with the element in the content form.

        If you create a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different help text for each language it is configured for. The text that is entered in the **Field help** field is only used if an appropriate help text is not available from the selected text provider, or if the text provider is not available.

11. Save the authoring template.


