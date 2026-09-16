# How to exclude portlets or pages when building with Portal seedlists?

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

In certain situations, you may wish to exclude some portlets or pages from a Search Collection. This document provide steps that need to be done to exclude the portlets and pages.  

## Instructions

To exclude portlets from Portal seedlist, configure the portlet in Portal Administration `Administration > Applications > Portlets` and add a parameter:

Parameter name: INCLUDE_IN_SEARCH_INDEX
Parameter value: false

All portlets on a page must have this parameter configured for the page to be excluded by the Portal seedlist. 

!!!Note
    This change required fix [PI65690](https://www.ibm.com/support/pages/apar/PI65690){target="_blank"} to be installed for the parameter to be honored. This fix was shipped in CF22 and is included in current versions of Portal.
