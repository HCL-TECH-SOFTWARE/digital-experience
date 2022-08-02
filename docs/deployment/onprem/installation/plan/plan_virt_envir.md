# Virtual environment overview

Use virtualized environments to meet your business needs like production server consolidation, centralized management, or dynamic test environments.

There are special considerations to be made when running HCL Portal in a virtual environment. Virtual machines work best when used to consolidate test and development servers, where multiple virtual machines can share physical machine resources, and even "over commit" those resources, under the assumption that at any given time not all of the system's resources are needed. This does not mean that virtual machines cannot be used for production delivery, except that special care must be taken to not overcommit vital resources. Also, because of the extra processing layer, the physical system's memory and CPU that handles the context switching and memory management for the virtual machines, performance can start to degrade under heavy use as compared to native installations. Careful testing needs to be done to understand HCL Portal's performance in your virtualized environment and to know how far to scale HCL Portal to compensate for any degradations.

For virtualized test and development environments, you can overcommit the physical resources of the machine. For production environments, ensure that there is sufficient physical CPU and memory to service each virtual machine. A good rule for memory requirement is to double the HCL Portal instance's maximum heap size and use that as the virtual machine memory configuration. Memory paging, both within the virtual machine and in the hypervisor should be strictly avoided as that can lead to performance degradation.

**Parent topic:**[Planning to install HCL Digital Experience](../plan/plan_installation.md)

