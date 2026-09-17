# How to exclude portlets or pages from a search collection?

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

In certain situations, you may wish to exclude some portlets or pages from a search collection. This document provide steps that need to be done to exclude the portlets and pages.  

## Instructions

To exclude portlets from a search collection (seedlist), configure the portlet in Portal Administration ()`Administration > Applications > Portlets`) and add a parameter (preference):  

Parameter name: `INCLUDE_IN_SEARCH_INDEX`  
Parameter value: `false`  

## Detailed steps

1. Login into the HCL DX as portal administrator
2. In the menu bar click to the **home icon** (open application menu) and click to the **Administration** menu item.  
3. In the left side menu expand the **Applications** menu entry and click to **Portlets**.
4. Search for the portlet that you want to exclude from the search collection.  
5. In the portlet list, click to the **Configure Portlet** icon of the portlet and add the parameter (preference) mentioned above.  

!!!Note
    All portlets on a page must have this parameter configured for the page to be excluded by the search collection.
    This change required fix [PI65690](https://www.ibm.com/support/pages/apar/PI65690){target="_blank"} to be installed for the parameter to be honored. This fix was shipped in CF22 and is included in current versions of HCL DX.
