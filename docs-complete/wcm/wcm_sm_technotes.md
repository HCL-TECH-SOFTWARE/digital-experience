# Known issues with the Social Media Publisher 

These are the current known issues with the Social Media Publisher and their solutions.

## Hung tread message in SystemOut.log when running SMP traffic with 10 Virtual Users

WebSphere® Application Server provides a detection feature that attempts to locate and report on potentially hung threads in the system. Hung threads can be difficult to diagnose. The WebSphere Application Server thread monitor architecture monitors managed threads and is enabled by default. When a thread is suspected to be hung, a notification message is written to Sysprint. False alarms do occur. When a false alarm occurs, a followup notification is sent to Sysprint.

-   **Symptom**

    The following warning from WebSphere® Application Server may be observed in the System log:

    ```
    [7/19/12 13:26:39:031 EDT] 00000033 ThreadMonitor W   WSVR0605W: Thread "WorkManager.wpsDefaultWorkManager : 72" (000000ee) has been active for 682689 milliseconds and may be hung.  There is/are 1 thread(s) in total in the server that may be hung.
        at sun.misc.Unsafe.park(Native Method)
        at java.util.concurrent.locks.LockSupport.parkNanos(LockSupport.java:224)
        at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.awaitNanos(AbstractQueuedSynchronizer.java:2036)
        at java.util.concurrent.LinkedBlockingQueue.poll(LinkedBlockingQueue.java:435)
        at com.ibm.workplace.wcm.messaging.data.JMSTopicContext.getNextMessage(JMSTopicContext.java:232)
    ```

-   **Cause**

    The Social Media Publisher makes use of JMS background threads that are long running by nature. There is no facility for the Social Media Publisher application to pre-warn the HCL Portal server, or the WebSphere® Application Server. As a result of this limitation, false alarms can be observed relating to JMS threads, which are used by Social Media Publisher.

-   **Solution**

    Until this design limitation is corrected, warnings about potential hung threads can be observed, but can be ignored. WebSphere® Application Server reports on falsely alerted threads that resume normally. It is possible, but not necessary, to adjust these intervals and thresholds. Note the following custom properties and refer to the WebSphere® Application Server documentation for more information:

    -   **`com.ibm.websphere.threadmonitor.interval`**

        Defaults to 180 seconds. This is the interval at which the thread pools are polled for hung threads.

    -   **`com.ibm.websphere.threadmonitor.threshold`**

        Defaults to 600 seconds. This is the length of time that a thread can be active before being marked as "potentially hung".

    -   **`com.ibm.websphere.threadmonitor.false.alarm.threshold`**

        Defaults to 100 false alarms. This is the number of false alarms that can occur before automatically increasing the threshold by 50%.


**Parent topic:**[Social Media Publisher ](../wcm/wcm_sm.md)

