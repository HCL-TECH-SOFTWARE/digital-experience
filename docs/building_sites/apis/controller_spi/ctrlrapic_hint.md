# Hints and tips for using the Controller SPI

These are some hints and tips for using the Controller SPI.

-   Reusing unique names: If you use a controller to directly or indirectly remove a portal resource that has a unique name assigned to it and if you want to reuse that unique name for another resource later, you need to use a new controller to do so, unless you used the same controller for creating the resource and removing it again.
-   Reusing an existing object ID is limited: A resource that reuses an object ID must be of the same type as the resource that used this object ID previously.

**Parent topic:**[Controller SPI](../dev/ctrlrapic_ovu.md)

