# Scheduling LikeMinds events

Use the lps.schedule setting to schedule events to be fired at specific dates and times.

The syntax for using the `lps.schedule` setting is as follows:

```
lps.schedule.<event name> = <schedule><event type><event args>
```

where:

`event name`: Refers to a unique name for the event.

`schedule`: Refers to the scheduling time, in five fields separated by spaces or tabs, and are integer patterns. These fields are:

|Field|Values|
|-----|------|
|minute|0–59|
|hour|0–23|
|day of the week|0-6, with 0 being Sunday|
|day of the month|1–31|
|month of the year|1–12|

To specify all values of a particular field \(for example, to schedule events every day of the week\), use an asterisk \(\*\), in the order listed in this table. For example:

![Times](../images/time1.jpg)

When you do specify actual values, you can enter either the value itself \(such as 1 to schedule an event on Monday\) or a range of values \(for example, 1-2 to schedule events for Monday and Tuesday\). When you want to specify days, you need to include both the day or the week field and the day of the month field. For examples of using these values, see

`event type` and `event args`: Refer to any of the following events and their arguments:

|Event type|Argument|Description|
|----------|--------|-----------|
|`lazyDBWrite`|N/A|Specifies when all the changed information since the last read is written to the database. The default setting is:

 `12,24,36,48,00 **** lazyDBWrite`

|
|`purgeUserCache`|`timeval`|Specifies the time in seconds after permanent users have not been used before purging them from cache. If timeval is not specified, the setting from `db.tune.user_cache_age_time` is used.

|
|`purgeItemCache`|`timeval`|Specifies the time in seconds after items have not been used before purging them from cache. If `timeval` is not specified, the setting from `db.tune.item_cache_age_time` is used.

|
|`syncCache`|`user`

 `item`

 `engine`

|Refreshes all permanent user objects in cache.

 Refreshes all item objects in cache.

 Refreshes all engine cache.

|
|`runBuildstats`|`verbose`|Runs the buildstats utility. If verbose is specified, additional information is printed to the trace log.

|
|`runBuildvisit`|`verbose`|Runs the buildvisit utility. If verbose is specified, additional information is printed to the trace log.

|
|`runAccumulator`|`verbose`|Runs the accumulator utility. If verbose is specified, additional information is printed to the trace log.

|

**Parent topic:**[Configuring LikeMinds](../pzn/pzn_configure_likemind_servers.md)

