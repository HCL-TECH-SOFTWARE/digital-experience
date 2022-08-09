# PUMA REST service XML schema document

The data processed by the remote REST service for PUMA is described by an XML schema document. View the XML schema for the PUMA REST service XML schema document.

```
<?xml version="1.0" encoding="UTF-8"?>
<!-- 
 * HCL Confidential
 * 
 * OCO Source Materials
 * 
 * (C) Copyright HCL Technologies Limited 2002, 2006,  2019
 * 
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has been
 * deposited with the U.S. Copyright Office.
 * 
-->
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" 
           targetNamespace="http://www.ibm.com/xmlns/prod/websphere/um.xsd" 
           xmlns="http://www.ibm.com/xmlns/prod/websphere/um.xsd" 
           elementFormDefault="qualified">
  <xs:element name="attribute">
    <xs:annotation>
      <xs:documentation>The element that represents an attribute definition.</xs:documentation>
    </xs:annotation>
    <xs:complexType>
      <xs:sequence>
        <xs:element ref="attributeValue" minOccurs="0" maxOccurs="unbounded">
        <xs:annotation>
          <xs:documentation>This element represents one value for the wrapping attribute. 
              It can	be sequenced in arbitrary length for multi-valued attributes. 
              If the attribute element is only used to describe the attribute definition that is not 
              part of a profile, there is no attributeValue element wrapped inside.</xs:documentation>
        </xs:annotation>
        </xs:element>
      </xs:sequence>
      <xs:attribute name="name" type="xs:string" use="required">
        <xs:annotation>
          <xs:documentation>This XML attribute is used to specify the name that identifies the attribute.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="type" type="xs:string" use="optional">
        <xs:annotation>
          <xs:documentation>This XML attribute is used to describe the type of the attribute. 
              The values	correspond to the data types specified by the XML Schema data type definitions 
              described by	http://www.w3.org/2001/XMLSchema-datatypes. 
              The actual attribute types are part of the server	configuration and can not be changed by using 
              this XML attribute, but are only used for	description purposes.</xs:documentation>
        </xs:annotation>
      </xs:attribute>				
      <xs:attribute name="multiValued" type="xs:boolean" use="optional" default="false">
        <xs:annotation>
          <xs:documentation>This XML attribute specifies whether the attribute can have 
              multiple values or can have only one value.</xs:documentation>
        </xs:annotation>
      </xs:attribute>				
    </xs:complexType>
  </xs:element>
  <xs:element name="attributeValue" type="xs:string">
  <xs:annotation>
    <xs:documentation>This element wraps a single attribute value. The value itself is represented 
        by all character data inside the element, using the corresponding string representation, 
        depending on the attribute type.</xs:documentation>
  </xs:annotation>
  </xs:element>
  <xs:element name="profile">
  <xs:annotation>
    <xs:documentation>This element represents a user or group profile.</xs:documentation>
  </xs:annotation>
    <xs:complexType>
      <xs:sequence>
        <xs:element ref="attribute" maxOccurs="unbounded">
          <xs:annotation>
            <xs:documentation>The profile can contain an arbitrary number of attributes
                and wrapped attribute value elements.</xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:sequence>
      <xs:attribute name="type" type="profileType" use="required">
        <xs:annotation>
          <xs:documentation>Denotes whether the profile represents a user or group profile.</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="identifier" type="xs:string" use="optional">
        <xs:annotation>
          <xs:documentation>Denotes the unique identifier of the principal, e.g. the DN</xs:documentation>
        </xs:annotation>
      </xs:attribute>			
    </xs:complexType>
  </xs:element>
  <xs:simpleType name="profileType">
    <xs:annotation>
      <xs:documentation>Specifies the list of values that can be used to define the type of a profile.
			   Currently, user and group profiles are distinguished.</xs:documentation>
      </xs:annotation>		
    <xs:restriction base="xs:string">
      <xs:enumeration value="user"/>
      <xs:enumeration value="group"/>
    </xs:restriction>
  </xs:simpleType>
  <xs:element name="profileRef">
    <xs:annotation>
      <xs:documentation>This element represents a reference to a profile.</xs:documentation>
    </xs:annotation>
    <xs:complexType>
      <xs:sequence>
        <xs:element ref="profile" minOccurs="0">
          <xs:annotation>
            <xs:documentation>The profile reference can contain a full representation of the profile itself.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:sequence>
      <xs:attribute name="uri" type="xs:string" use="required">
        <xs:annotation>
          <xs:documentation>The relative URI that points to the resource that represente the profile.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  </xs:element>
  <xs:element name="groupMembershipList">
    <xs:annotation>
      <xs:documentation>This element represents a list of profile references to all groups
          of which a particular user or group is member.</xs:documentation>
    </xs:annotation>
    <xs:complexType>
      <xs:sequence>
        <xs:element ref="profileRef" maxOccurs="unbounded" minOccurs="0">
          <xs:annotation>
            <xs:documentation>The groupMembershipList can contain an arbitrary number
                of references to group profiles.</xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>

```

**Parent topic:**[Structure of the remote REST service for PUMA](../dev/uprof_rest_gen.md)

