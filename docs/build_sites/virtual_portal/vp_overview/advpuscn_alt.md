# Alternative concepts for virtual portals on HCL Digital Experience

Besides virtual portals, another possible configuration may be an alternative for you, depending on your business needs. This setup is referred to as true portals.

This setup allows the re-use of a single hardware, with multiple complete portal installations, that is, one dedicated software profile for each portal. Each portal installation requires its own complete WebSphere® Application Server installation. These are the main advantages of true portals:

-   The strong isolation of the configuration data due to separate configuration databases
-   The full isolation of applications, due to a separate JVM for each true portal. This allows better quality of service.

If you want to implement this solution, be aware of the following limitations:

-   You can run only a limited number of true portals on a single hardware machine. This is due to the memory volume required by the JVM.
-   You cannot share applications or data between true portals.

## HCLSoftware U learning materials

For an introduction and a demo on DX deployment, go to [Deployment for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D1479){target="_blank"}. Several deployment options are provided in the course.

To learn how to manage multiple DX sites, go to [Multi-Site Management](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3086){target="_blank"}. In this course, you will learn when and how to create and manage base, true, and virtual portals in which you may run one or more DX sites. You can also try it out using the [Multi-Site Management Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Multi-Site_Management_Lab.pdf){target="_blank"}.