# Basic XML command line syntax

The basic command line syntax for the XML configuration interface is as follows.

```

     xmlaccess -user user_ID -password password 
               -url myhost:10039/wps/config 
               -in input_file.xml -out result_file.xml
```

!!!note
     All data, including the user ID and password, are sent to the server unencrypted. Therefore you should only connect to the XML configuration interface from inside a protected intranet where you can be sure that the HTTP connection is not compromised. In all other networks use a secure HTTPS connection to connect to the XML configuration interface.

## Prompting for credentials
You can use the parameter askForCredential and leave out the parameters user and password. The XML configuration interface will then prompt you for the user ID and password. This can be useful in security sensitive environments, as the user credentials are not visible on the console or in the process view. The parameter askForCredential requires no value to be specified. Example:

```
   xmlaccess **-askForCredential** -url myhost:10039/wps/config 
             -in input_file.xml -out result_file.xml

```

## Placing the credentials in a properties file
You can also place the credentials in a properties file and use the option useEncryptedCredentials. This option reads the encrypted or unencrypted credentials from the properties file, and then saves the file back using the encrypted password. If you do not want to write the properties file back with the encrypted credentials, use the **additional** flag noUpdateProperties. In this case you can use the `PropFilePasswordEncoder` utility to encrypt the password in the properties file. This option reads the following properties out of the file:

-   For the user ID: `com.ibm.SOAP.loginUserid = userID`
-   for the password: `com.ibm.SOAP.loginPassword = password`

An example of a command line is as follows

```
xmlaccess -in Export.xml -useEncryptedCredentials myProperties.properties 
                         -url portal.example.com:10039/wps/config
```

## Virtual portals
If you have virtual portals in your configuration, you can access a virtual portal by its host name or its URL mapping context. Example for accessing a virtual portal by its URL mapping context:

```
     xmlaccess -user user_ID -password password 
               -url myhost:10039/wps/config/**URL_mapping_context_of_the_VP** 
               -in input_file.xml -out result_file.xml
```

Example for accessing a virtual portal by its host name:

```
     xmlaccess -user user_ID -password password 
               -url my_VP_host:10039/wps/config
               -in input_file.xml -out result_file.xml 

```



