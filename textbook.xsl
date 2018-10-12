<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>My CD Collection</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th style="text-align:left">Title</th>
                        <th style="text-align:left">Author: First name</th>
                        <th style="text-align:left">Author: Last name</th>
                        <th style="text-align:left">Publisher: Name</th>
                        <th style="text-align:left">Publisher: Website</th>
                        <th style="text-align:left">Year</th>
                        <th style="text-align:left">ISBN</th>
                        <th style="text-align:left">Edition</th>
                        <th style="text-align:left">Cover Type</th>
                    </tr>
                    <xsl:for-each select="catalog/cd">
                        <tr>
                            <td><xsl:value-of select="catalog/cd/title"/></td>
                            <td><xsl:value-of select="catalog/cd/authors/firstName"/></td>
                            <td><xsl:value-of select="catalog/cd/authors/lastName"/></td>
                            <td><xsl:value-of select="catalog/cd/publisher/name"/></td>
                            <td><xsl:value-of select="catalog/cd/publisher/website"/></td>
                            <td><xsl:value-of select="catalog/cd/Year-of-Publication"/></td>
                            <td><xsl:value-of select="catalog/cd/ISBN"/></td>
                            <td><xsl:value-of select="catalog/cd/edition"/></td>
                            <td><xsl:value-of select="catalog/cd/cover-type"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
