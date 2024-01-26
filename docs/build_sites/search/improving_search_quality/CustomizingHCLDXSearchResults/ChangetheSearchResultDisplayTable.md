# Changing the search result display table

To display the search results in different formats, the following files in the DX Search Center Portlet application are modified.

//Profiles/wp_profile/installedApps/DmgrWPCell/PA_Search_Center.ear/searchCenter.war/js/ibm/portal/search/SearchCenter/xslt/result.xsl

The `result.xsl` file is used to process the search result atom feed. The default results that are presented in standard columns are Relevance, Icon, Title, Person, and Date.

[](../../../../images/Change_the_search_result_display_table.png)

The default `result.xsl` controls the display format. To customize the display to suit your organization needs, the display table section inside the `result.xsl ` must be modified. Use the **Extensible Stylesheet Language** to modify the table section of the `result.xsl`. 

In this example, only two columns are used in the table. The first column displays the file type and the second column displays the title. The snippet of the modified result.xsl is shown. When the result document is coming from the WCM content, the default icon is shown in the first column. When the result is a file, the first column shows the file extension based on the mime type. The titles for those files are from the first part of the summary field and are shown in the second column of the result table.

```yaml
        <td width="2%">
            <xsl:choose>
                <xsl:when test="substring-after(atom:link/@type,'/') = 'html'">
                    <img width="16" height="16" border="0" align="middle">
                        <xsl:attribute name="src">
                            <xsl:value-of select="$serverPath"/><xsl:value-of
select="atom:link[@rel='icon']/@href"/>
                        </xsl:attribute>
                        <xsl:attribute name="title">
                            <xsl:value-of select="atom:category/@label"/>
                        </xsl:attribute>
                        <xsl:attribute name="alt">
                            <xsl:value-of select="atom:category/@label"/>
                        </xsl:attribute>
                    </img>
                </xsl:when>
                <xsl:otherwise>
                     <xsl:choose>
                        <xsl:when test="substring-after(atom:link/@type,'/') =
'pdf'">[PDF]</xsl:when>
                        <xsl:when test="substring-after(atom:link/@type,'/') = 'vnd.msexcel'">[XLS] </xsl:when>
                        <xsl:when test="substring-after(atom:link/@type,'/') =
'vnd.openxmlformats-officedocument.wordprocessingml.document'">[DOCX]</xsl:when>
                        <xsl:when test="substring-after(atom:link/@type,'/') =
'msword'">[DOC] </xsl:when>
                        <xsl:when test="substring-after(atom:link/@type,'/') =
'plain'">[TXT] </xsl:when>
                        <xsl:when test="substring-after(atom:link/@type,'/') =
'txt'">[TXT] </xsl:when>
                        <xsl:when test="substring-after(atom:link/@type,'/') =
'zip'">[ZIP] </xsl:when>
                        <xsl:when test="substring-after(atom:link/@type,'/') =
'csv'">[CSV] </xsl:when>
                        <xsl:otherwise>[FILE]</xsl:otherwise>
                    </xsl:choose>
                </xsl:otherwise>
            </xsl:choose> 
        </td>
        <td width="98%">
            <h4>
                <a class="entryURL" href="{concat($serverPath, atom:link[(@rel='alternate')
or not(@rel)]/@href)}">
                    <xsl:attribute name="type">
                        <xsl:value-of select='atom:link/@type' />
                    </xsl:attribute>
                    <span style="display: none">
                        <span>
                            <xsl:value-of
select="wplc:field[@id='contentSourceType']"/>
                        </span>
                        <span>
                            <xsl:value-of
select="wplc:field[@id='PortletWindowId']"/>
                        </span>
                        <span>
                            <xsl:value-of
select="wplc:field[@id='NavigationNode']"/>
                        </span>
                        <span>
                            <xsl:choose>
                                <xsl:when test="substring-after(atom:link/@type,'/')
= 'html'">
                                    <xsl:value-of select="atom:title" disable-output-escaping="yes" />
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:choose>
                                    <xsl:when test="string-length(substring-after(atom:summary,'/Strong> ')) &gt; 0">
                                        <xsl:choose>
                                            <xsl:when test="string-length(substring-after(atom:summary,'/Strong> ')) &lt; 70">
                                                <xsl:value-of
select="substring(substring-after(atom:summary,'/Strong> '),1,string-length(substringafter(atom:summary,'/Strong> ')))" disable-output-escaping="yes" />...
                                            </xsl:when>
                                            <xsl:otherwise>
                                                <xsl:value-of
select="substring(substring-after(atom:summary,'/Strong> '),1,70)" disable-outputescaping="yes" />...
                                            </xsl:otherwise>
                                        </xsl:choose>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of
select="atom:title"/>
                                            </xsl:otherwise>
                                        </xsl:choose>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </span>
                            <span>
                                <xsl:value-of select="atom:id"/>
                            </span>
                        </span>
                        <xsl:choose>
                            <xsl:when test="substring-after(atom:link/@type,'/') = 'html'">
                                <xsl:value-of select="atom:title" disable-outputescaping="yes" />
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:choose>
                                    <xsl:when test="string-length(substringafter(atom:summary,'/Strong> ')) &gt; 0">
                                        <xsl:choose>
                                            <xsl:when test="string-length(substringafter(atom:summary,'/Strong> ')) &lt; 70">
                                                <xsl:value-of
select="substring(substring-after(atom:summary,'/Strong> '),1,string-length(substringafter(atom:summary,'/Strong> ')))" disable-output-escaping="yes" />...
                                            </xsl:when>
                                            <xsl:otherwise>
                                                <xsl:value-of
select="substring(substring-after(atom:summary,'/Strong> '),1,70)" disable-outputescaping="yes" />...
                                            </xsl:otherwise>
                                        </xsl:choose>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="atom:title"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:otherwise>
                        </xsl:choose>
                    </a>
                </h4>
                <div class="preFormatted lotusDetails"><xsl:value-of select="atom:summary" disable-output-escaping="yes" /></div>
                <div>
                    <a class="tagWidgetLink" href="javascript:;" style="display:
none;"><xsl:value-of select="$editKeywords"/></a>
                    <xsl:if test="wplc:field/@id='tag'">
                        <span class="lotusDivider" style="display: none;">|</span>
                        <span class="lotusTags"><xsl:value-of select="$tags"/>&#160;
                            <xsl:for-each select="wplc:field">
                                <xsl:if test="@id='tag'">
                                    <span class="tagLink"><xsl:value-of
select='text()'/></span>
                                    <xsl:if test="position() != last()"><span>,
</span></xsl:if>
                                </xsl:if>
                            </xsl:for-each>
                        </span>
                        </xsl:if>
                    </div>
                </td>
```