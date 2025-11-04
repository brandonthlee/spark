# Employee Records - Oracle JET Application

A NetSuite-style employee record management page built with Oracle JET (Oracle JavaScript Extension Toolkit).

## Features

- Clean, professional UI similar to NetSuite's employee records
- Comprehensive employee information forms including:
  - Basic Information (ID, Name, Email, Phone, Department, etc.)
  - Employment Details (Hire Date, Manager, Location, etc.)
  - Contact Information (Address, City, State, Country)
- Form validation
- Responsive design
- Oracle JET components for consistent UI

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:8080`

## Build

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Serve Production Build

To serve the production build:
```bash
npm run serve
```

## Project Structure

```
spark/
├── src/
│   ├── index.html       # Main HTML file
│   └── js/
│       └── main.js      # Main JavaScript application logic
├── dist/                # Built files (generated)
├── package.json         # Dependencies and scripts
├── webpack.config.js    # Webpack configuration
└── README.md           # This file
```

## Technologies Used

- **Oracle JET** - UI component library
- **Knockout.js** - MVVM framework (included with Oracle JET)
- **Webpack** - Module bundler
- **HTML5/CSS3** - Styling

## Notes

- This is a demo application showing employee record management
- Form data is currently logged to console (you can integrate with your backend API)
- Oracle JET components provide accessibility and theming out of the box
