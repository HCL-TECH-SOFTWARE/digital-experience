# How to access the WAS admin console after installing the remote search service

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Running search indexing and query workloads in HCL Digital Experience (DX) requires managing the remote search service through the IBM Integrated Solutions Console (WAS admin console). This article explains how to access the WAS admin console after installing the remote search service.

## Prerequisites

For installation prerequisites, refer to [Installing remote search service by using IBM Installation Manager](../../../build_sites/search/remotesearch/installrssim.md).

## Instructions

To access the WAS admin console after installing the remote search service, perform the following steps:

1. Open a terminal and locate the profile directory:

    ```bash
    /opt/HCL/AppServer/profiles/prs_profile
    ```

2. Navigate to the `bin` directory:

    ```bash
    /opt/HCL/AppServer/profiles/prs_profile/bin
    ```

3. Restart the server by executing the `stop` and `start` scripts:

    ```bash
    ./stopServer.sh server1
    ```

    ```bash
    ./startServer.sh server1
    ```

4. Open a browser and access the WAS admin console using a URL similar to the following:

    ```URL
    https://myclientserver.yourco.com:9043/ibm/console
    ```
