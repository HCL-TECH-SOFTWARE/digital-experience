# Unica Segment Picker for leveraging segments in PZN Rules
In this document, we outline the usage of the new Unica segment picker with steps to pick Unica segments while creating PZN rules.

## Prerequisites
The prerequisite for using the Unica segment picker in PZN rules is to configure [Out-of-box application object for shipping Unica with PZN](../pzn_unica_integration/out_of_box_method.md) using the ConfigEngine task.

## Unica Segment Picker
The Unica Segment Picker helps customers to retrieve the Unica segments directly in PZN UI so that the customers do not need to remember the exact name of the segments as the UI shows the available segments.

## Leveraging the Unica segment picker while creating rules
1. Create a Rule and add the attribute of the Application Object created in the previous step. It shows the variable added in the loaded Application Object.
![create-rule-with-oob-application-object](../../../images/create-rule-with-oob-application-object.png)

2. Once the property is selected on the left hand side of the rule condition, the value selector gives the option to use the picker to select the Unica segment.
![picker-option-for-unica-segment](../../../images/picker-option-for-unica-segment.png)

3. Selected Unica segment will redirect you to a view that provides a list of Unica Campaign segments retrieved from Unica, to provide the user with ease to select the segment without a need to remember the segment name.

![unica-segment-list-view](../../../images/unica-segment-list-view.png)

4. Select the Unica segment value to add against the condition in the rule and click **OK**.
![unica-segment-selected](../../../images/unica-segment-selected.png)

5. Once the segment is selected, the value is returned to the **Personalization Editor**.
![unica-segment-selected-using-picker](../../../images/unica-segment-selected-using-picker.png)

6. Save the rule created.
![unica-picker-save-rule](../../../images/unica-picker-save-rule.png)

7. Preview the result in the **Preview** Tab of the navigator for the rule created.
![unica-picker-rule-preview](../../../images/unica-picker-rule-preview.png)
