# Imported Archive Security

There are constraints on the size and content of uploaded archives to add a layer of security when you import archives.

If one of the following conditions applies, the archive is rejected and removed from the system:

-   The imported archive cannot be larger than 100 MB.
-   The total uncompressed size cannot exceed 500 MB.
-   There cannot be more than 10,000 individual files in the archive.

The import feature applies content filtering to ignore files of unsupported types. The importer accepts files of the following types:

-   .htm
-   .html
-   .js
-   .css
-   .jpg
-   .jpeg
-   .gif
-   .png
-   .json

You can override the configuration for some of these constraints. For more information, read *Setting custom configuration properties for the Script Application*.


