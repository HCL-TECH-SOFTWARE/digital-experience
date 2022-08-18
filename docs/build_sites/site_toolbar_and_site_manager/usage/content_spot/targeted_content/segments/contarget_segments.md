---
id: contarget_segments
title: Creating segments with personalization
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Learn more about creating segments with personalization through an example.

Before you create segments, ensure that your system administrator has set up the proper access control permissions. Go to the *Access permissions for Business Rules* table in [Access permissions](../admin-system/sec_acc_rights.md) for information.

In this example, your goal is to create two segments: Smartphone User and Tablet User. Each segment views content through different devices.

**Note:** If you do not see the segment that you are seeking after you click **Add Segment**, close Configure Spot and navigate to the Personalization page of the site to create a segment. In this area, segments are referred to as profiles in profiler rules.

1.  Click **Applications** \> **Personalization** \> **Business Rules**.

2.  From the Personalization Navigator, click **New** \> **Rule**.

3.  For Rule Type, select **Profiler**. The profiler rule divides users into one or more segments. Segments are profiles.

4.  Use these example values and selections to guide you in creating a profiler rule by using the device class attribute.

    1.  Type User by device as the name for your rule.
    2.  By Located in, use the default folder to store your rule for this example.
    3.  For Rule Type, select **Profiler**. A segment is another word for profile in the profiler rule.
    4.  Click **Profile**, and enter Smartphone User as the name for your segment. Click **Submit**.
    5.  In this example, you are defining a segment that is based on device class used. Define attributes and values for the Smartphone User segment. Click **attribute**, and select **Device** \> **Device Class**. The attribute label changes to current Device.Device Class.
    6.  Use **is** as the comparison operator.
    7.  Click **value**, and select **smartphone** as the value for the condition.
    8.  Skip to add Profile. You are not setting up another condition for the Smartphone User.
    9.  Click **add Profile** to add another segment to the profiler rule. Enter Tablet User as the name for your segment. Click **Submit**.
    10. Define attributes and values for the Tablet User segment. Click **attribute**, and select **Device** \> **Device Class**. The attribute label changes to current Device.Device Class.
    11. Continue to use **is** as the comparison operator.
    12. Click **value**, and select **tablet** as the value for the condition.
5.  Click **Save**.


The segments in this saved profiler rule appear in the Add Segment view. You can add these segments to content in a targeting rule or use these segments in other types of rules.

**Note:** If you do not want to see segments that are created with Personalization in the Add Segments view, your developer can disable the segments. Learn more about enabling and disabling segmentsat [Enabling and disabling segments in the Add Segments view](contarget_enable_disable_segments.md#).

