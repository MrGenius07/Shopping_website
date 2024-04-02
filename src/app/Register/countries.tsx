// src/data/Countries.ts

export interface Country {
    name: string;
    code: string;
  }

  // Function to map JSON data to an array of Country objects
  export function mapCountriesData(): Country[] {
    const countriesData = require('../../data/countries.json'); // Directly require the JSON file

    // Map through the JSON data and transform it into the desired format
    const countries: Country[] = countriesData.map((country: any) => ({
      name: country.name,
      code: country.code,
    }));

    return countries;
  }
  