# Use of Cookies

## Overview

### What You Will Learn In This Tutorial
 - How to add Cookies Library
 - How to use Cookies

---

## Web Cookie

A cookie is a piece of data from a website that is stored within a web browser that the script can retrieve at a later time. 

To achieve this we use the JSCookie library as an example.
!!!tip "Get JSCookie on NPM [https://www.npmjs.com/package/js-cookie](https://www.npmjs.com/package/js-cookie)."

---

## How to add Cookies Library

!!! warning "Note before continuing"

    If you are using a single Script App you may import JS-Cookie library directly.  For multiple Script Apps, the recommended approach is to bundle dependencies via a [Dx Module](/digital-experience/guide_me/tutorials/scriptapps/how_to/02_dependencies_as_module/)

Assuming we have a DX Module setup from the How-To guides above. We can easily add JS-Cookie and/or other js library by navigating to the dependency submodule folder of your scriptapp (i.e: `../DxModule/SubModuleReact/`) and add the npm package by running the `npm install` command.

```bash
$ cd ~/my-project-path/DxModule/SubModuleReact
$ npm install js-cookie --save
```

Once finished installing you can make it available to your scriptapps by exporting it. You can do this in the submodule's `modules-index.js`. <br> (i.e: `../DxModule/SubModuleReact/modules-index.js`)

```js
export { default as Cookies } from 'js-cookie';
```

And redeploy your DX Module after installing and exporting the library.

---

## How to use Cookies

Now we have successfully added JS-Cookie on DX Module. Let use it on our Script App.

We can use the JS-Cookie easily by [adding DX Module as a dependency](/digital-experience/guide_me/tutorials/scriptapps/how_to/03_apps_excluding_dependencies/) on your `package.json` file and importing it from DX Module on your Script App components. 

```
"dependencies": {
  "dxmodule": "file:../DxModule/SubModuleReact"
},
```

```js
import { Cookie } from 'dxmodule';
```

### Set

```js
Cookies.set('<variable-name>', '<value>');
```

### Get

```js
Cookies.get('<variable-name>');
```

### Remove

```js
Cookies.remove('<variable-name>');
```

### Example

Below is a sample code of a script app using JS-Cookie with React via DX Module.

=== "Login.js"

    On the login page we simply set the cookie to true on successful authentication.
    ```js
    import { ReactV18, Cookies } from 'dxmodule';
    
    const { React } = ReactV18;
    
    function Dashboard() {
      function validateAndAuthenticate(email, password) {
        // here we process the actual authentication
        return 1;
      }
      
      function handleSubmit(event) {
        // removes any existing `wbi_authenticated` cookies first
        Cookies.remove('wbi_authenticated');
        
        // validate and authenticate credentials
        const authenticated = validateAndAuthenticate(
          event.target.elements.email.value,
          event.target.elements.password.value
        );
    
        // check if authenticated is true
        // set wbi_authenticated cookie to true then redirect to login page
        if (authenticated) {
          Cookies.set('wbi_authenticated', true);
          window.location.href = "dashboard";
        } else {
          console.log("Error on authentication. Please check Credentials")
        }
      }
      
      return (
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" />
          <input type="password" name="password" />
          <input type="submit" />
        </form>
      )
    }
    
    export default Dashboard;
    ```

     - First we need to import Cookies from DX Module along with the react.
    ```js
    import { ReactV18, Cookies } from 'dxmodule';
    ```

     - A validation and authentication function that process the checking of the users credentials. but for this tutorial we just returned it `true`.
    ```js
    function validateAndAuthenticate(email, password) {
      // here we process the actual authentication
      return 1;
    }
    ```

     - on the `handleSubmit` function. This is where we set cookies but first we need to remove existing cookies. Then we call the `validateAndAuthenticate` function to check if the user inputted a correct credentials then create a cookie when after authentication.
    ```js
    function handleSubmit(event) {
      // removes any existing `wbi_authenticated` cookies first
      Cookies.remove('wbi_authenticated');
    
      // validate and authenticate credentials
      const authenticated = validateAndAuthenticate(
        event.target.elements.email.value,
        event.target.elements.password.value
      );
    
      // check if authenticated is true
      // set wbi_authenticated cookie to true then redirect to login page
      if (authenticated) {
        Cookies.set('wbi_authenticated', true);
        window.location.href = "dashboard";
      } else {
        console.log("Error on authentication. Please check Credentials")
      }
    }
    ```

=== "Dashboard.js"

    On the dashboard page. We simply load the dashboard component that checks and redirect to login page if the there is no `wbi_authenticated` or it was set to `false` onload. Also we have a logout button that removes and redirect to login page once the logout button is clicked.

    ```js
    import { ReactV18, Cookies } from 'dxmodule';
    
    const { React } = ReactV18;
    const { useEffect } = React;
    
    function Dashboard() {
      function handleLogout(event) {
        Cookies.remove('wbi_authenticated');
        event.preventDefault();
        window.location.href = '/login'
      }

      useEffect(() => {
        const authenticated = Cookies.get('wbi_authenticated');
        if (authenticated !== 'true') {
          window.location.href = '/login'
        }
      }, []);
    
      return (
        <div>
          <h1>Dashboard</h1>
          <button type="button" onClick={handleLogout}>Logout</button>
        </div>
      )
    }
    
    export default Dashboard;
    ```

     - First we need to import Cookies from DX Module along with the react. We also need `useEffect` on this component so we need to destructure it from ReactV18
    ```js
    import { ReactV18, Cookies } from 'dxmodule';
    const { useEffect } = React;
    ```

     - Then on a `useEffect` hook we get the cookie to check the authenticated. If it is set to false or the cookie is not existing we redirect it to login page.
    ```js
    useEffect(() => {
      const authenticated = Cookies.get('wbi_authenticated');
      if (authenticated !== 'true') {
        window.location.href = '/login'
      }
    }, []);
    ```

     - Finally on the logout button. We create a `handleLogout` handler to remove the cookies then redirect it to login page when the logout button is clicked.
    ```js
    function handleLogout(event) {
      Cookies.remove('wbi_authenticated');
      event.preventDefault();
      window.location.href = '/login'
    }
    ```
