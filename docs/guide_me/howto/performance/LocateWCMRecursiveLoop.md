# How to locate a recursive loop in WCM

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Broad trace strings in HCL Digital Experience (DX) Web Content Manager (WCM) generate high log volumes that increase analysis time when troubleshooting high CPU usage or JVM hangs. Standard WCM troubleshooting typically uses the following trace string:

```text
com.ibm.workplace.wcm.*=all:com.aptrix.*=all:com.presence.connect.*=all:com.ibm.wps.engine.Servlet=all
```

This broad trace string can result in log files containing thousands of repetitive entries, such as:

```log
BaseReference > com.aptrix.pluto.cmpnt.BaseReferenceCmpnt retrieveCmpnt
ENTRY RenderContext [PlutoRequestContext
[hasDelegatedContentMappings=false, m_webAppUrl=WebAppURL
[m_url=https://myserver.mycompany.com/wps/wcm/connect/mySite/home/mySiteArea1/mySiteArea2/myContent,
```

Targeted component tracing provides a faster method to isolate specific WCM items caught in a recursive loop without generating excessive log data. This article describes how to isolate WCM items involved in recursive loops causing high CPU usage or JVM hangs using targeted component tracing.

## Instructions

To locate a recursive loop caused by a WCM item, perform the following steps:

1. Enable targeted tracing using the following trace string:

    ```text
    com.aptrix.pluto.cmpnt.*=all
    ```

    For detailed instructions on setting trace levels in the WebSphere Application Server (WAS) administration console, refer to [HCL Web Content Manager Tracing](../../../deployment/manage/troubleshooting/logging_and_tracing/wcm_logs.md).

2. Parse `trace.log` for `retrieveCmpnt` entries using one of the following commands:

    - Monitor log output in real time:

        ```bash
        tail -f trace.log | grep -i retrieveCmpnt
        ```

    - Search across multiple trace log files for component retrievals and item paths:

        ```bash
        grep -e retrieveCmpnt -e itemPath trace*.log
        ```

3. Review the command output for WCM items that recur disproportionately compared to other items to identify items involved in the recursive loop.
4. Search backward through trace files for `getByUUID Getting object with UUID` messages to locate recurring objects.
