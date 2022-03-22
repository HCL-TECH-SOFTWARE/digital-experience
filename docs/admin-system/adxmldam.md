# Using XML Access to export and import Digital Asset Management assets

Using XML Access with HCL DX CF19 and higher, to manage staging scenarios, administrators can import, export, and control Digital Asset Management access control data.

This enables a Digital Asset Management staging scenario in which an administrator can copy the persistent volumes as deployed in Kubernetes or OpenShift platforms for Digital Asset Management, and the persistence layer from the source deployment system. The XML Access script will also export the Digital Asset Management assets access control information, and then import all artifacts it to the target deployment system.

**Note:** This staging scenario presents some constraints:

-   All Digital Asset Management access control assets will be copied from the source deployment \(staging\) to the target deployment system.
-   The assets on the target system will be replaced.
-   Access Control is matched between environments, though it is possible to manipulate the access control data after completing the export.

![](../images/admin-system-digital-asset-management-access-control-using-xml-access.png "Digital Asset Management access control staging to production scenario using XML
          Access")

## Export Digital Asset Management Access Control Assets - Sample XML Access script

```
<?xml version="1.0" encoding="UTF-8"?>
<!--
 =================================================================
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corp. 2003, 2006.  All rights reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM
 * Corp.
 *
 * DISCLAIMER OF WARRANTIES.  The following [enclosed] code is
 * sample code created by IBM Corporation.  This sample code is
 * not part of any standard or IBM product and is provided to you
 * solely for the purpose of assisting you in the development of
 * your applications.  The code is provided "AS IS", without
 * warranty of any kind.  IBM shall not be liable for any damages
 * arising out of your use of the sample code, even if they have
 * been advised of the possibility of such damages.
 *
 =================================================================
-->

<request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd"
    type="export" dam-collections="true">
    
    <!-- Example for using the * wildcard to export all resources of a given type. This script exports all
         Web modules (and their contained portlets) that are defined in the portal. -->
    <portal action="locate">
        <dam-collection objectid="*" action="export"/>
    </portal>
</request>

```

## Import Digital Asset Management Access Control Assets - Sample XML Access script

```
<?xml version="1.0" encoding="UTF-8"?>
<request type="update" version="8.5.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
<portal action="locate">
<dam-collection action="update" domain="rel" objectid="Z1UGeAeKBP67Q1">
<access-control externalized="false" owner="undefined" private="false">
<role actionset="Administrator" update="set">
<mapping subjectid="uid=wpsadmin,o=defaultWIMFileBasedRealm" subjecttype="user" update="set"/>
</role>
<role actionset="Security Administrator" update="set">
<mapping subjectid="uid=wpsadmin,o=defaultWIMFileBasedRealm" subjecttype="user" update="set"/>
</role>
</access-control>
</dam-collection>
</portal>
<status element="all" result="ok"/>
</request>

```

## Delete Digital Asset Management Access Control Assets - Sample XML Access script

```
?xml version="1.0" encoding="UTF-8"?>
<request type="update" version="8.5.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
<portal action="locate">
<dam-collection action="delete" domain="rel" objectid="Z1UGeAeKBP67Q1">
</dam-collection>
</portal>
<status element="all" result="ok"/>
</request>

```

