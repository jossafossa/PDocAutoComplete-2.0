# PDok Api Wrapper

PDok Api Wrapper is a TypeScript library designed to interact with PDOK (Publieke Dienstverlening Op de Kaart) geocoding and location services. It provides a modular, type-safe interface for accessing PDOK endpoints and working with geospatial data in modern web applications.

See [PDOK API Documentation](https://api.pdok.nl/bzk/locatieserver/search/v3_1/ui/#/Locatieserver/free) for more details.

## Features

- **Type-safe API wrappers** for PDOK endpoints (free, lookup, reverse geocoder, suggest)
- **Caching** support for efficient data retrieval

## Getting Started

### Installation

```bash
pnpm install pdok-api-wrapper
# or
npm install pdok-api-wrapper
# or
yarn add pdok-api-wrapper
```

### Usage

Import the desired modules from `pdok-api-wrapper` in your TypeScript or JavaScript project:

```typescript
import { lookup, suggest, reverse, free } from 'pdok-api-wrapper';

// Example: Lookup address
const result = await lookup({ id: 'adr-48e52dd1c34a056d3dccf14e62fda443' });

// Example: Get suggestions
const suggestions = await suggest({ q: 'Amsterdam' });

// Example: Reverse geocoding
const address = await reverse({ lat: 52.370216, lon: 4.895168 });

// Example: Free geocoding
const freeResult = await free({ q: 'Amsterdam' });
```

### TypeScript Support

All endpoints and utilities are fully typed for safe and productive development.

### Demo

A demo React app is available in the `demo/` directory. To run the demo:

```bash
cd demo
pnpm install
pnpm run dev
```

## Project Structure

- `src/pdok/` – Core PDOK API modules and types
- `src/pdok/utils/` – Utility functions (caching, data transformation, etc.)
- `src/pdok/endpoints/` – Individual PDOK endpoint implementations
- `src/pdok/types` – Type definitions for PDOK responses
- `demo/` – React demo application

### Scripts

- `pnpm run build` – Build the library
- `pnpm run dev` – Start the demo app
- `pnpm run release` – Publish the package

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License

MIT License
