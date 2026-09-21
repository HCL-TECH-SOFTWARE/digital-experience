# How to resolve intermittent Portal or WCM image display issues in Firefox

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Intermittent Portal or Web Content Manager (WCM) image display issues can occur when accessing HCL Digital Experience (DX) in Firefox. This typically happens due to an incorrect configuration setting in the browser. This article describes how to resolve intermittent image display issues in Firefox. 

## Instructions

To resolve the image display issues, perform the following steps:

1. Open Firefox and enter `about:config` in the address bar.
2. Search for the `network.ftp.idleConnectionTimeout` preference and change the value from `300` to `600`.
3. Select the checkmark icon.
4. Search for the `network.http.keep-alive.timeout` and change the value from `300` to `600`.
5. Select the checkmark icon.

!!!note
    These adjustments are only required for environments experiencing severe network or server performance delays.