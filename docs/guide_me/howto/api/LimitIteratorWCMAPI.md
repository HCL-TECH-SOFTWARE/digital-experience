# How to limit the number returned for an iterator when using WCM API

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

The WCM "Workspace Interface" provides several methods to find WCM items and the items returned are stored in an iterator object. You can increase or decrease the value of the WCM Configuration property "iterator.pagesize" to control the maximum number of items returned by the iterator at once.

## Instructions

To define the custom property, access the IBM Integrated Solutions Console (WebSphere Application Server Administrative Console). Then go to Resources > Resource Environment > Resource environment providers > WCM WCMConfigService > Custom properties and add the custom property iterator.pagesize and assign the desired value.

A Portal restart is required for the setting to go into effect.
