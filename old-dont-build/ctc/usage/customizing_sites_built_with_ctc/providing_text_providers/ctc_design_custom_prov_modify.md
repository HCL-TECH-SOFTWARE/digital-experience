# Modifying text providers

The CTC Text Provider is located within the CTC Enterprise Application Repository \(EAR\) that is installed with Content Template Catalog. The Text Provider is typically at WebSphere Install Root/wp\_profile/installedApps/node/ctc.ear/ctc.war/WEBINF/ lib/ctc-textprovider.jar.

Before you modify the text provider, back up the existing file so that the file can be restored if any problems arise during editing. Also, back up the modified text provider before you upgrade Content Template. The installation overwrites any modifications that you have made and you must restore your modified text provider after you upgrade.

The ctc-textprovider.jar file can be opened and edited with any compressed file utility. Inside this JAR file is the CTCBundle.properties file that has an entry for each unique item in the CTC Design, CTC Content, and CTC Process libraries. The following format is used for the entries:

`Content Type.Title``.title` for item titles

`Content Type.Title``.description` for item descriptions

For example, a site area with the name "News" would be referenced in the bundle as: `SiteArea.News.title="News"`

If you change the value "News" to "My News" and save the archive, users editing and modifying content see the title "My News" when they author content.


