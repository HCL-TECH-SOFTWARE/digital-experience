# Create a segment using State attribute

Learn more about the Device application object through an example that uses a location attribute \(state\).

In this example, you are creating two segments by using a profiler rule: North Carolina and California. Each segment views content that is based on the location of the device.

1.  Click **Applications** \> **Personalization** \> **Business Rules**.

2.  From the Personalization Navigator, click **New** \> **Rule**.

3.  For Rule Type, select **Profiler**. The profiler rule groups a user into one or more segments. Segments are profiles.

4.  The numbered screen capture, along with the corresponding table, provides the values and selections that are used in this example. Use these example values and selections to guide you in creating a profiler rule that uses the device class attribute.

    ![Screen capture of a profiler rule in the Personalization Editor](../images/segment_profiler2.jpg)

    |Numbered item in screen capture|Description|
    |-------------------------------|-----------|
    |1|Type Device segments by state as the name for your rule.|
    |2|By Located in, use the default folder to store your rule for this example.|
    |3|For Rule Type, select **Profiler**. A segment is another word for profile in the profiler rule.|
    |4|Click **Profile**, and enter North Carolina as the name for your segment. Click **Submit**.|
    |5|In this example, you are defining a segment that is based on the state the device is located in. Define attributes and values for the North Carolina segment. Click **attribute**, and select **Device** \> **State**. The attribute label changes to current Device.State.**Note:**

    -   You can also create other segments that are based on location by selecting Country, Latitude, or Longitude.
|
    |6|In this example, continue to use **is** as the comparison operator.|
    |7|Click **value** to enter North Carolina as the value for the condition. Click **Submit**.|
    |8|In this example, you are not setting up another condition for the North Carolina segment. Skip to add Profile.|
    |9|Click **add Profile** to add another segment to the profiler rule. Enter California as the name for your segment. Click **Submit**.|
    |Not shown in screen capture|Define attributes and values for the California segment. Click **attribute**, and select **Device** \> **State**. The attribute label changes to current Device.State.|
    |Not shown in screen capture|In this example, continue to use **is** as the comparison operator.|
    |Not shown in screen capture|Click **value** to enter California as the value for the condition. Click **Submit**.|

5.  Click **Save**.


The segments in this saved profiler rule appear in the Add Segment view when you create targeting rules. You can add these segments to content in a targeting rule or use these segments in other types of rules.


