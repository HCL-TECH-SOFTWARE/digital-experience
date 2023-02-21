# Payload description

The actual data that is processed by the remote REST service for PUMA that is the attributes and their values, user or group profiles, and membership lists, is described by an XML schema document. This schema is normative for all kinds of input and output formats. Therefore, for representations that are not based on XML, such as JSON, you need to apply an appropriate transformation.

For the complete schema document, refer to the topic that contains the PUMA REST Service XML schema document.

The following sections describe the particular parts of the XML schema in detail.

## Attributes and attribute values

The `attribute` element is used to represent either an attribute definition when it is used alone, or an instance of the attribute that includes one or more values when it is used inside a user or group profile. The attribute is identified by the mandatory `name` attribute and can optionally define its type and a flag that specifies whether multiple values are allowed. By convention, the values for the type attribute must be those data types that are defined in the XSD data types specification. For more information, see the section about data types. The attribute values are represented as separate elements called `attributeValue` that can contain arbitrary character data.

```
<xs:element name="attribute">
      <xs:complexType>
         <xs:sequence>
            <xs:element ref="attributeValue" minOccurs="0" maxOccurs="unbounded"/> 
         </xs:sequence>
            <xs:attribute name="name" type="xs:string" use="required"/>
            <xs:attribute name="type" type="xs:string" use="optional"/>
            <xs:attribute name="multiValued" type="xs:boolean" use="optional" default="false"/>
      </xs:complexType>
   </xs:element>
<xs:element name="attributeValue" type="xs:string">

```

The following is an example of a stand-alone attribute definition that is represented in plain XML:

```
<um:attribute xmlns:um="um" name="ibm-hobby" type="xs:string" multiValued="true"/> 
```

The usage of the `attribute` element for representing attribute values is shown in the next section.

## Profile data

Profiles are represented in a `profile` element that needs to define the type of the profile as restricted to the values `user` or `group` in an attribute. Wrapped inside the `profile` element there can be a sequence of arbitrary length of `attribute` elements. In this case, these `attribute` elements must contain attribute value elements.

```
<xs:element name="profile">
    <xs:complexType>
        <xs:sequence>
            <xs:element ref="attribute" maxOccurs="unbounded"/>
        </xs:sequence>
        <xs:attribute name="type" type="profileType" use="required"/>
        <xs:attribute name="identifier" type="xs:string" use="optional"/>
    </xs:complexType>
</xs:element>
<xs:simpleType name="profileType">
    <xs:restriction base="xs:string">
        <xs:enumeration value="user"/>
        <xs:enumeration value="group"/>
    </xs:restriction>
</xs:simpleType>

```

The following is an example of a user profile according to this schema:

```
<um:profile type="user" identifier="uid=bob,o=defaultWIMFileBasedRealm">
    <um:attribute name="uid" type="xs:string" multiValued="false">
        <um:attributeValue>bob</um:attributeValue>
    </um:attribute>
    <um:attribute name="cn" type="xs:string" multiValued="false">
        <um:attributeValue>Bob</um:attributeValue>
    </um:attribute>
    <um:attribute name="ibm-hobby" type="xs:string" multiValued="true">
        <um:attributeValue>Running</um:attributeValue>
        <um:attributeValue>Baseball</um:attributeValue>
    </um:attribute>
</um:profile>

```

## Group membership list

The groups membership list lists all groups of which a particular user or group is a member. The representation of the group membership list uses a special element `profileRef` that is used to represent a reference to a profile. This element contains a reference to the resource that is described by the profile; it can optionally also contain the complete profile element itself. This action is done by the mandatory `uri` attribute, which must contain the URL path of the profile, for example `/um/secure/groups/profiles/myGroupId`. The profile reference elements are then aggregated to a list within the `groupMembershipList` element. The list points to those groups of which the user or group that is defined by the resource URL is a member.

```
<xs:element name="profileRef">
    <xs:complexType>
        <xs:sequence>
            <xs:element ref="profile" minOccurs="0∾" maxOccurs="1"/>
        </xs:sequence>
        <xs:attribute name="uri" type="xs:string" use="required"/>
    </xs:complexType>
</xs:element>
<xs:element name="groupMembershipList">
    <xs:complexType>
        <xs:sequence>
            <xs:element ref="profileRef" maxOccurs="unbounded" minOccurs="0"/>
        </xs:sequence>
    </xs:complexType>
</xs:element>

```

The following listing shows an example of a group membership list XML representation that is based on the schema:

```
<um:groupMembershipList>
    <um:profileRef uri="/wps/um/secure/groups/profiles/8eAeK . . . . . BQIMK5D1"/>
    <um:profileRef uri="/wps/um/secure/groups/profiles/8eAeK . . . . . FADFJABC"/>
</um:groupMembershipList>

```


???+ info "Related information"
    - [XMLSchema-datatypes](https://www.w3.org/2001/XMLSchema-datatypes)

