# Student Activity: Introduction to React Router

## Objective:
This activity is designed to help beginners understand key concepts of React Router, such as why routing is necessary in React applications, setup and installation procedures, and basic usage of `<BrowserRouter>`, `<Route>`, `<Link>`, and `<NavLink>`. You’ll practice by implementing these concepts through hands-on examples.

### **1. Why Do We Need Routing?**

**Example 1: Single Page vs Multi-Page Applications**
- **Task**: Describe the difference between traditional multi-page applications and single-page applications (SPA) in terms of user navigation.
- **Activity**: Create a simple HTML page with navigation links. Discuss how the entire page reloads on link click in a traditional app compared to how SPAs work.

**Example 2: Component-Based Routing**
- **Task**: Explain how component-based routing allows for rendering only the necessary parts of an application.
- **Activity**: Write a brief description of how routing can make applications faster by only loading the parts users need, reducing server load and bandwidth usage.

**Example 3: URL Control**
- **Task**: Demonstrate how routing helps in URL management and state preservation.
- **Activity**: Create a small concept app in React that illustrates navigating between components without losing the application state.

### **2. React Router Setup & Installation**

**Task 1: Installing React Router**
- **Task**: Set up a basic React application and install React Router DOM.
- **Activity**: Use the terminal to run the following commands:
  ```bash
  npm install react-router-dom
  ```
  Validate installation by checking `package.json`. \
  **NOTE**: check the command give over there before you proceed.

**Task 2: Basic App Structure**
- **Task**: Set up a basic file structure in your `src` folder with `Home.jsx`, `About.jsx`, and `Contact.jsx` as components.
- **Activity**: Create these components with minimal JSX inside, e.g.,:
  ```jsx
  function Home() {
    ...
  }
  export default Home;
  ```

**Task 3: Initial Router Configuration**
- **Task**: Integrate React Router into the application.


### **3. Using `<BrowserRouter>` and `<Route>`**

**TAsk 1: Basic Routing Integration**
- **Task**: Use `<Route>` to render components based on the URL path.
- **Activity**: In `App.jsx`, set up routes for accessing Home, About, and Contact.
  ```jsx
    .....

  function App() {
    return (
      ....
    );
  }

  export default App;
  ```

**Task 2: Default Route**
- **Task**: Set a default landing page for the application.
- **Activity**: Modify the `App.jsx` component to redirect any unknown route to Home using the '*' wildcard.


**Task 3: Nested Routes**
- **Task**: Implement a nested route structure.
- **Activity**: Create a new SubPage component. Update `App.jsx` or `Home.jsx` to include nested routing.
  ```jsx
  <Route path="/about/subpage" element={<SubPage />} />
  ```

### **4. Navigation Using `<Link>` and `<NavLink>`**

**Task 1: Basic Navigation**
- **Task**: Implement basic navigation using `<Link>`.
- **Activity**: Create a navigation bar in `App.jsx` or a separate component.
  ```jsx
  import { Link } from "react-router-dom";

  function NavBar() {
    return (
      <nav>
        ...
      </nav>
    );
  }
  ```

**Task 2: Active Links with `<NavLink>`**
- **Task**: Customize active link styles for better user experience.
- **Activity**: Replace `<Link>` with `<NavLink>` and add styling.
  ```jsx
  ....

  function NavBar() {
    return (
      <nav>
        ....
      </nav>
    );
  }
  ```

**Example 3: Highlight Active Route**
- **Task**: Use `<NavLink>` to visually differentiate the active route.
- **Activity**: Style the active link using CSS.
  ```css
  .active-link {
    font-weight: bold;
    color: red;
  }
  ```

## Conclusion:
Each step you completed forms a building block for a fully functional React application. With these exercises, you should now have a basic grasp of how routing functions in a React app and be capable of implementing it in your projects.