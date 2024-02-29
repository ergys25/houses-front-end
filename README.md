# Project: use client

This project contains a React component named `MyComponent` that takes `data` as a prop and renders a list of houses. Each house is displayed with its name, associated animal, house colors gradient, and founder.

## How to Use

1. Import the `MyComponent` component into your React application.
2. Pass the `data` prop to `MyComponent` with an array of house objects.
3. Each house object should have the following properties:
   - `name`: Name of the house.
   - `animal`: Associated animal of the house.
   - `houseColours`: String representing the colors of the house gradient in the format `"color1 and color2"`.
   - `founder`: Founder of the house.

Example usage:

```jsx
import React from "react";
import MyComponent from "./MyComponent";

function App() {
  const data = [
    {
      name: "House Stark",
      animal: "Direwolf",
      houseColours: "grey and white",
      founder: "Brandon Stark"
    },
    {
      name: "House Lannister",
      animal: "Lion",
      houseColours: "crimson and gold",
      founder: "Lann the Clever"
    },
    // Add more house objects as needed
  ];

  return (
    <div>
      <MyComponent data={data} />
    </div>
  );
}

export default App;
