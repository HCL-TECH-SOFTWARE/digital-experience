# Configuring SSL

Secure socket layers \(SSL\) encrypt traffic between the client browser and the server to secure information exchanged over the network between the browser and HCL Digital Experience. You will need to configure your environment for SSL to activate this additional security feature.

Perform the following tasks to configure SSL.

- **[Setting up SSL](../configuring_ssl/setup_ssl/index.md)**  
Get an overview of the tasks that are required to configure SSL for HCL Digital Experience. Some of these tasks are completed on the IBM® WebSphere® Application Server and the web server. The steps that refer to the WebSphere® Application Server and the web server are summarized here; refer to the WebSphere® Application Server and the web server documentation for detailed information. Steps that are unique to HCL Portal are described in detail here.
- **[Configuring SSL only for the login process](../configuring_ssl/config_ssl_login.md)**  
You can encrypt only the login process to HCL Digital Experience and then allow subsequent requests through HTTP.
- **[Setting up Client Certificate Authentication](../configuring_ssl/certauth.md)**  
View the steps required to configure HCL Digital Experience for SSL client certificate authentication. The supported scenario is a "client certificate only" setup that switches completely to this authentication method and does not allow form-based login via username and password. Other configuration scenarios are possible, but are neither recommended nor supported.
- **[Cryptographic hardware for SSL acceleration](../configuring_ssl/sec_pw_crypt.md)**  
If your portal environment makes extensive use of SSL, you might choose to use cryptographic hardware to offload encryption and improve performance. HCL Portal tolerates interfacing through WebSphere® Application Server with cryptographic hardware for SSL acceleration. However, the tasks that are involved in setting up and configuring cryptographic hardware are specific to web servers or WebSphere® Application Server and do not necessarily involve configuring HCL Portal.
