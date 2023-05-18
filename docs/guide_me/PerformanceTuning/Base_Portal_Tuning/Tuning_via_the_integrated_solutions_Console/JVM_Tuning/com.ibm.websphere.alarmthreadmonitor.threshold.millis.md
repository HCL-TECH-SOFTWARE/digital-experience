# com.ibm.websphere.alarmthreadmonitor.threshold.millis

The Portal log may contain the following warnings after a long period of heavy usage:

- 000000f3 AlarmThreadMo W UTLS0008W: The return of alarm thread "Non-deferrable Alarm.
- 2" (0000003b) to the alarm thread pool has been delayed for 32480 milliseconds. This may be preventing normal alarm function within the application server.

These messages are spurious and can be disabled by setting a JVM argument. 
See for more information [Configuring the hang detection policy](http://www-01.ibm.com/support/knowledgecenter/SS7K4U_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/ttrb_confighangdet.html?cp=SSAW57_8.5.5).

## How to Set

Add the following to the Generic JVM arguments:

- Dcom.ibm.websphere.alarmthreadmonitor.threshold.millis=xxxxx where xxxxx is greater than the number of milliseconds mentioned in the error message. We used as much as 40,000 in our runs.