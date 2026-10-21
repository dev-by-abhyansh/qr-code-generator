# QR Code Generator

A simple command-line QR Code Generator built with **Node.js**. It takes a URL as user input, generates a QR code image, and saves the URL to a text file.

## Features

- Takes a URL as input using Inquirer.
- Generates a QR code in SVG format.
- Saves the entered URL in `URL.txt`.

## Prerequisites

Install **Node.js** and npm on your system.

Check your installation:

```bash
node -v
npm -v
```

## Installation and Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/qr-code-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd qr-code-generator
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   node index.js
   ```

5. Enter a URL when prompted. The program will generate `qr_img.svg` and save the entered URL in `URL.txt`.

## Technologies Used

- Node.js
- Inquirer
- qr-image
- File System (`fs`) module

## Generated Files

- `qr_img.svg` — the generated QR code image.
- `URL.txt` — the URL entered by the user.

## License

This project is open source and available for learning and educational purposes.