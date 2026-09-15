# How to access the WAS Admin Console after successfully installing the Remote Search Server

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

The Portal Remote Search Server has been installed successfully following the procedure below:

[Installing remote search service by using IBM Installation Manager](https://help.hcl-software.com/digital-experience/9.0/admin-system/installrssim.html){target="_blank"}

This document explains how to access the WAS Admin Console to manage the Remote Search Service after a successful install.

## Instructions

The profile is most likely installed to this location:

`/opt/HCL/AppServer/profiles/prs_profile`

and can be stopped and started from:

`/opt/HCL/AppServer/profiles/prs_profile/bin`

After the profile is started, you can access the WAS Admin Console via this URL:

```URL
https://myclientserver.yourco.com:9043/ibm/console
```