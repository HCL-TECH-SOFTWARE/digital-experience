# How to prevent "cacheId" from appending to WCM URLs?

## Applies to

> HCL Digital Experience version 9.5 and higher  

## Introduction

This document explains the steps needed to prevent "cacheId" from appending to WCM URLs.

## Instructions
1. Open the IBM Integrated Solutions Console (WAS Admin Console)
2. Goto Resources > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom properties
3. Create or edit the following custom property to set the value to true: `cmpnt.htmlEncodeURLs = true`
