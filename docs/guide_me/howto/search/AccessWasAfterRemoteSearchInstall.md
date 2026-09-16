# How to access the Remote Search Server Integrated Solutions Console (on-premise)

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

The HCL DX Remote Search Server has been installed successfully following the procedure mentioned at [Installing remote search service by using IBM Installation Manager](../../../build_sites/search/remotesearch/installrssim.md){target="_blank"}

This document explains how to access the IBM Integrated Solutions Console (WAS Admin Console) to manage the Remote Search Service after a successful install.

## Instructions

The profile is most likely installed on location:

`/opt/HCL/AppServer/profiles/prs_profile`

and can be stopped and started from:

`/opt/HCL/AppServer/profiles/prs_profile/bin`

using the following commands:  

```bash
./stopServer.sh server1
```

```bash
./startServer.sh server1
```

After the profile is started, you can access the IBM Integrated Solutions Console by default via the following URL:

```URL
https://myclientserver.yourco.com:9043/ibm/console
```
