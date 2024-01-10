# Enabling 'AND' as default operator

Add the configuration parameter for the HCL DX search service to change the performance. Apply the parameter and restart the Portal Server and/or remote search service as required.

The configuration parameters are:

- For V8 and V8.0.0.1 and higher releases:

    `DEFAULT_SEARCH_OPERATOR=and`

!!! note
    The change to the search service does not require the search collection to re-build. 