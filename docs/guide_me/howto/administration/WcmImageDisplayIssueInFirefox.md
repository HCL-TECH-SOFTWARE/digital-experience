# How to resolve intermittent Portal/WCM image display issues in Firefox

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

When using Firefox web-browser with HCL Digital Experience it might be possible that images are only displayed intermittently. This might be happens, because of a wrong configuration setting in the Firefox Web-Browser. 

## Instructions

In the Firefox web-browser, enter `about:config` in the address field then change:

- network.ftp.idleConnectionTimeout `300` -> `600`

- network.http.keep-alive.timeout `300` -> `600`

This should only be seen for environments where there is a very serious network or server performance delay.  