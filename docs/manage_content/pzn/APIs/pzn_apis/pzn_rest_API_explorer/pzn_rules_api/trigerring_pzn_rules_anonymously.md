# Triggering Personalization rules anonymously

The Personalization rules REST APIs can be triggered anonymously.

## Procedure

To allow the rule to be triggered by unauthenticated users, go to the **Personalization Navigator** and grant the user role via **Edit Access**:

![PZN grant access](../images/PZN-grant-access.png) ![]()

The rule can then be triggered via *Invoke \(POST\) the Personalization ID rule* call.

-   **Example:**

    A visibility rule is leveraged via HTML and JavaScript to show or hide a `div` tag via a button.

    HTML:

    ```
    <div id='pzn'>Hello World</div>
    
    <button type="button" id="myBtn">Check Visibility</button>
    ```

    JavaScript:

    ```
    document.getElementById("myBtn").onclick = () => {
            fetch("http://localhost:10039/wps/contenthandler/pzn-rest/rules/d0487383-8f4c-4831-912a-86ff5d981fdb/invoke", {
            method: 'post',
            body: '{}',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                },
            })
              .then((data) => {
                return data.json();
              }).then((res) => {
                if(res.result==='hide')
                    document.getElementById("pzn").style.visibility = "hidden";
                else
                    document.getElementById("pzn").style.visibility = "show";                  
              }).catch(err=>{
              // log errors
              console.log(err);
            })
          };
    ```

-   **Result:**

    Output of the sample is displayed as follows:

    ![Anonymous PZN executuon](../images/anonymous-pzn-execution.png)



