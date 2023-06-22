# People Service

When assigning user and group permissions for WCM resources through the People Picker portlet, the
People Service is used. While we did not use this tuning for our own benchmarks, in some cases the
selection of users and groups may be slow and can be improved by reducing the default search attributes
used by the service. In an example, note that People Picker expects 4 attributes. To improve search
performance it’s possible to configure the same attribute 4 times since only one is needed.

    Attribute: pickerPeopleSearchAttribute
    Value: cn,cn,cn,cn

More information about defining Search attributes in HCL DX can be found here:
https://help.hcltechsw.com/digital-experience/9.5/admin-system/search_ptlt_rep.html