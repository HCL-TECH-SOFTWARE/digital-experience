# XML schema of outbound HTTP connection configuration script

An outbound connection configuration script file needs to conform to the following XML schema.

```
<?xml version="1.0" encoding="UTF-8"?>
<!-- ***************************************************************** -->
<!--                                                                   -->
<!-- Licensed Materials - Property of IBM                              -->
<!--                                                                   -->
<!-- 5724-U69                                                          -->
<!--                                                                   -->
<!-- Copyright HCL Technologies Limited 2013, 2019  All Rights Reserved.                    -->
<!--                                                                   -->
<!-- US Government Users Restricted Rights - Use, duplication or       -->
<!-- disclosure restricted by GSA ADP Schedule Contract with           -->
<!-- IBM Corp.                                                         -->
<!--                                                                   -->
<!-- ***************************************************************** -->

<xs:schema xmlns:proxy="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0" 
           xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified">
    <xs:element name="proxy-rules" type="proxy-rulesType">
        <xs:unique name="mappingID">
            <xs:selector xpath=".//mapping" />
            <xs:field xpath="@name" />
        </xs:unique>
    </xs:element>

    <xs:complexType name="mappingType">
        <xs:choice minOccurs="0" maxOccurs="unbounded">
            <xs:element name="policy" type="policyType" minOccurs="0" maxOccurs="unbounded"/>
            <xs:element name="ipfilter" type="ipfilterType" minOccurs="0" maxOccurs="unbounded"/>
            <xs:element name="meta-data" type="meta-dataType" minOccurs="0" maxOccurs="unbounded"/>
        </xs:choice>
        <xs:attribute name="contextpath" type="xs:string" use="required"/>
        <xs:attribute name="url" use="optional">
            <xs:simpleType>
                <xs:restriction base="xs:anyURI"/>
            </xs:simpleType>
        </xs:attribute>
        <xs:attribute name="name" type="xs:string" />
    </xs:complexType>

    <xs:complexType name="policyType">
        <xs:sequence>
            <xs:element name="actions" type="actionsType" />
            <xs:element name="headers" type="headersType"
                minOccurs="0" />
            <xs:element name="mime-types" type="mime-typesType"
                minOccurs="0" />
            <xs:element name="cookie-rule" type="cookie-ruleType" minOccurs="0" maxOccurs="unbounded"/>
            <xs:element name="filter-chain" type="filter-chainType"
                minOccurs="0" />
            <xs:element name="meta-data" type="meta-dataType"
                minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
        <xs:attribute name="url" type="xs:anyURI" use="required" />
        <xs:attribute name="basic-auth-support" type="xs:boolean"
            use="optional" default="false" />
        <xs:attribute name="active" type="xs:boolean" default="true"/>
        <xs:attribute name="name" type="xs:string"/>
    </xs:complexType>

    <xs:complexType name="ipfilterType">
        <xs:choice minOccurs="0" maxOccurs="unbounded">
            <xs:element name="allow" type="xs:string"/>
            <xs:element name="deny" type="xs:string"/>
        </xs:choice>
    </xs:complexType>

    <xs:complexType name="actionsType">
        <xs:sequence>
            <xs:element name="method" type="methodType" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>

    <xs:simpleType name="methodType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="GET"/>
            <xs:enumeration value="POST"/>
            <xs:enumeration value="PUT"/>
            <xs:enumeration value="HEAD"/>
            <xs:enumeration value="DELETE"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:complexType name="headersType">
        <xs:sequence>
            <xs:element name="header" type="xs:string" minOccurs="0" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>
    
    <xs:complexType name="mime-typesType">
        <xs:sequence>
            <xs:element name="mime-type" type="xs:string" minOccurs="0" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>
     
    <xs:complexType name="meta-dataType">
        <xs:sequence>
            <xs:element name="name" type="xs:string"/>
            <xs:element name="value" type="xs:string"/>
        </xs:sequence>
    </xs:complexType>
    
    <xs:complexType name="proxy-rulesType">
        <xs:choice minOccurs="0" maxOccurs="unbounded">
            <xs:element name="variables" type="varsType" minOccurs="0" maxOccurs="unbounded"/>
            <xs:element name="mapping" type="mappingType" minOccurs="0" maxOccurs="unbounded"/>
            <xs:element name="policy" type="policyType" minOccurs="0" maxOccurs="unbounded"/>
            <xs:element name="ipfilter" type="ipfilterType" minOccurs="0" maxOccurs="unbounded"/>
            <xs:element name="meta-data" type="meta-dataType" minOccurs="0" maxOccurs="unbounded"/>
        </xs:choice>
    </xs:complexType>
    
    <xs:complexType name="filter-chainType">
        <xs:sequence>
            <xs:element name="filter-factory" type="filter-factoryType" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>
    
    <xs:complexType name="filter-factoryType">
        <xs:sequence>
            <xs:element name="classname" type="javaClassName" />
            <xs:element name="meta-data" type="meta-dataType" minOccurs="0" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>
    
    <xs:complexType name="cookie-ruleType">
        <xs:sequence>
            <xs:element name="cookie" type="xs:string" maxOccurs="unbounded"/> 
            <xs:element name="scope" type="cookieScopeType" minOccurs="0" default="user"/>
            <xs:element name="handling" minOccurs="0" type="cookieHandlingType" default="passthru"/>
            <xs:element name="transformation" minOccurs="0" maxOccurs="unbounded" type="filter-factoryType"/>
        </xs:sequence>
        <xs:attribute name="name" type="xs:string"/>
    </xs:complexType>
    
        <xs:complexType name="varsType">
            <xs:sequence>
                <xs:element name="endpoint" type="endpointType" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="dynamic-policy" type="dynamicPolicyType" minOccurs="0" maxOccurs="unbounded"/>
            </xs:sequence>
        </xs:complexType>
        
        <xs:complexType name="endpointType">
            <xs:simpleContent>
                <xs:extension base="xs:string">
                    <xs:attribute name="name" type="nameType" use="required"/>
                
                </xs:extension>
            </xs:simpleContent>
        </xs:complexType>
        
        <xs:complexType name="dynamicPolicyType">
            <xs:sequence>
                <xs:element name="value" type="policyValueType" minOccurs="0" maxOccurs="unbounded"/>
            </xs:sequence>
            <xs:attribute name="name" type="nameType" use="required"/>        
        </xs:complexType>
        
    <xs:simpleType name="javaClassName">
      <xs:restriction base="xs:Name">
        <xs:pattern value="[a-zA-Z0-9\.]+"/>
      </xs:restriction>
    </xs:simpleType>

        <xs:simpleType name="policyValueType">
                <xs:restriction base="xs:string"/>
        </xs:simpleType>
        
        <xs:simpleType name="nameType">
                <xs:restriction base="xs:string"/>
        </xs:simpleType>
        
    <xs:simpleType name="cookieScopeType">
        <xs:restriction base="xs:string">
            <!-- default -->
            <xs:enumeration value="user"/>
            <xs:enumeration value="system"/>
            <xs:enumeration value="application"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="cookieHandlingType">
        <xs:restriction base="xs:string">
            <!-- default -->
            <xs:enumeration value="passthru"/>
            <xs:enumeration value="store-in-session"/>
            <xs:enumeration value="block"/>
            <xs:enumeration value="store-persistent"/>
            <xs:enumeration value="store-in-request"/>
            <xs:enumeration value="wrap"/>
        </xs:restriction>
    </xs:simpleType>
    
</xs:schema>





```


