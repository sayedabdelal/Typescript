/*
  Class
  - Implement Interface
*/

// Define the Settings interface
interface Config {
    darkMode: boolean;
    typography: string;
    store(): void;
  }
  
  // Implement the Config interface in the UserSettings class
  class UserSettings implements Config {
    constructor(public userId: string, public darkMode: boolean, public typography: string) {}
  
    store(): void {
      console.log(`Configuration Stored`);
    }
  
    modify(): void {
      console.log(`Configuration Modified`);
    }
  }
  
  // Create a new instance of UserSettings
  let settingsOne = new UserSettings("User123", true, "Roboto");
  
  // Access the properties and methods
  console.log(settingsOne.userId); // Output: User123
  console.log(settingsOne.typography); // Output: Roboto
  
  settingsOne.store();  // Output: Configuration Stored
  settingsOne.modify(); // Output: Configuration Modified
  