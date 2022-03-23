# wp.clientProfile 

Provides access to the client profile.

Attributes:

-   **get\(attribute\)**

    Provides access to the defined attributes associated with the client/CCPP profile.

    Example:

    ```
    ${wp.clientProfile['DeviceClass']}
    ```

    The following example shows how to access the device class information for the client profile:

    ```
    <c:set var=deviceClass scope=request value=${wp.clientProfile['DeviceClass']} />
    <c:choose>
    <c:when test=”${deviceClass == 'desktop'}”>
    <jsp:forward page=”/jsp/html/desktop/View.jsp”/>
    </c:when>
    <c:when test=”${deviceClass == 'tablet'}”>
    <jsp:forward page=”/jsp/html/tablet/View.jsp”/>
    </c:when>
    <c:otherwise>
    <jsp:forward page=”/jsp/html/View.jsp”/>
    </c:otherwise>
    </choose>
    ```

    Parameters:

    -   **attribute**

        String; the name of the client attribute you want to retrieve.

    Returns: String; the value of the client profile's attribute name. Can be null.


**Parent topic:**[Expression language beans for accessing programming models ](../dev-theme/themeopt_el_bean.md)

