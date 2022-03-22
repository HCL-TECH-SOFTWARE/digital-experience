# XML Access

This topic provides information about the xmlaccess command that is used to export or import portlet configurations.

## XML Access

The `xmlaccess` command is used to export or import pages or portlet configurations from a target HCL DX 9.5 CF19 or later server using the input XMLAccess file.

**Required file**

XMLAccess file : This XML file must contain the configuration update or export operation for the web application.

**Command**

```
dxclient xmlaccess -xmlFile <path>
```

**Help command**

This command shows the help information for `xmlaccess` command usage:

```
dxclient xmlaccess -h
```

**Command options**

Use this attribute to specify the protocol with which to connect to the DX server \(wp\_profile\):

```
-dxProtocol <value>
```

Use this attribute to specify the hostname of the target DX server:

```
-hostname <value>
```

Use this attribute to specify the port on which to connect to the DX server \(`wp_profile`\):

```
-dxPort <value>
```

Use this attribute to specify the path to DX configuration endpoint \(e.g. /wps/config\):

```
-xmlConfigPath <value>
```

Use this attribute to specify the username to authenticate with the DX server \(`wp_profile`\):

```
-dxUsername <value>
```

Use this attribute to specify the password for the user in the `dxUsername` attribute:

```
-dxPassword <value>
```

Use this attribute to specify the local path to the XMLAccess file:

```
-xmlFile <Absolute or relative path to xmlaccess input file>
```

Command options passed through the command line overrides values set in the config.json file.

Log files from command execution can be found in the logs directory of the DXClient installation.

**Example:**

```
dxclient xmlaccess -xmlFile <xml-file-with-path>
```

**Parent topic:**[DXClient Artifact Types](../containerization/dxclientartifacts.md)

