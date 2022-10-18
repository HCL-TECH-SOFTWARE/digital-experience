# Tivoli Federated Identity Manager \(TFIM\) mapping for the Java Authentication and Authorization Service \(JAAS\) login module

By default, the JAAS plug-in reads a user's email address from the VMM attribute with the name mail. The JAAS plug-in sets the mail attribute in the security context. If you change the name of the attribute in the security context, update the following mapping rule accordingly.

```
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:xalan="http://xml.apache.org/xalan"
version="1.0"
xmlns:mapping-ext="com.tivoli.am.fim.trustserver.sts.utilities.IDMappingExtUtils"
extension-element-prefixes="mapping-ext"
xmlns:stsuuser="urn:ibm:names:ITFIM:1.0:stsuuser">
        <xsl:strip-space elements="*" />
        <xsl:output method="xml" version="1.0" encoding="utf-8" indent="yes" />
        <!-- Initially we start with a copy of the document. -->
        <xsl:template match="@* | node()">
            <xsl:copy>
               <xsl:apply-templates select="@* | node()" />
            </xsl:copy>
        </xsl:template>

        <!-- This will replace the principal name with the user's email. -->
        <xsl:template
        match="//stsuuser:Principal/stsuuser:Attribute[@name='name']">
            <stsuuser:Attribute name="name" type="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">
            <stsuuser:Value>
               <xsl:value-of select="//stsuuser:AttributeList/stsuuser:Attribute[@name='mail']/stsuuser:Value"/>
            </stsuuser:Value>
            </stsuuser:Attribute>
        </xsl:template>
</xsl:stylesheet>
```

