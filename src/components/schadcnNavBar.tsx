// MyComponent.tsx
import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


// Functional Component
const schadcnNavBar: React.FC = () => {

  return (
    <div className='navbar' >
      <h1>Cavan Gary</h1>
      <p>Cavan Gary</p>
      <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        <NavigationMenuContent>Item One Content</NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
        <NavigationMenuContent>Item Two Content</NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
        <NavigationMenuContent>Item Three Content</NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
    </div>
    
  );
};

export default schadcnNavBar;
