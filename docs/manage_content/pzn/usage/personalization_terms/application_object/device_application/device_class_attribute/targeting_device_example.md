# Create a segment by device class

Learn more about the Device application object through an example.

In this example, you are creating two segments by using a profiler rule: Smartphone User and Tablet User. Each segment views content through different devices.

1.  Click **Applications** \> **Personalization** \> **Business Rules**.

2.  From the Personalization Navigator, click **New** \> **Rule**.

3.  For Rule Type, select **Profiler**. The profiler rule groups a user into one or more segments. Segments are profiles.

4.  The numbered screen capture, along with the corresponding table, provides the values and selections that are used in this example. Use these example values and selections to guide you in creating a profiler rule by using the device class attribute.

    ![Screen capture of a profiler rule in the Personalization Editor](../images/segment_profiler2.jpg)

    |Numbered item in screen capture|Description|
    |-------------------------------|-----------|
    |1|Type User by device as the name for your rule.|
    |2|By Located in, use the default folder to store your rule for this example.|
    |3|For Rule Type, select **Profiler**. A segment is another word for profile in the profiler rule.|
    |4|Click **Profile**, and enter Smartphone User as the name for your segment. Click **Submit**.|
    |5|In this example, you are defining a segment that is based on device class used. Define attributes and values for the Smartphone User segment. Click **attribute**, and select **Device** \> **Device Class**. The attribute label changes to current Device.Device Class.|
    |6|In this example, continue to use **is** as the comparison operator.|
    |7|Click **value**, and select **smartphone** as the value for the condition.|
    |8|In this example, you are not setting up another condition for the Smartphone User. Skip to add Profile.|
    |9|Click **add Profile** to add another segment to the profiler rule. Enter Tablet User as the name for your segment. Click **Submit**.|
    |Not shown in screen capture|Define attributes and values for the Tablet User segment. Click **attribute**, and select **Device** \> **Device Class**. The attribute label changes to current Device.Device Class.|
    |Not shown in screen capture|In this example, continue to use **is** as the comparison operator.|
    |Not shown in screen capture|Click **value**, and select **tablet** as the value for the condition.|

5.  Click **Save**.


The segments in this saved profiler rule appear in the Add Segment view when you create targeting rules. You can add these segments to content in a targeting rule or use these segments in other types of rules.


