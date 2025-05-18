# alu_regex-data-extraction-acele-happy

The core of this application is a simple JavaScript program (`index.js`) that uses regular expressions to scan a text input and extract specific patterns. The app simulates text data and searches for matching patterns.


## What This App Does

The program reads a block of text and uses regex patterns to extract:

- **Email addresses**  
  Formats like `user@example.com`, `name.lastname@domain.co.uk`

- **URLs**  
  E.g., `https://www.example.com`, `https://sub.example.org/page`

- **Phone Numbers**  
  Supports formats:
  - `(123) 456-7890`
  - `123-456-7890`
  - `123.456.7890`

- **Credit Card Numbers**  
  Supports:
  - `1234 5678 9012 3456`
  - `1234-5678-9012-3456`

- **Time Formats**  
  Supports both:
  - `14:30` (24-hour)
  - `2:30 PM` or `12:00 am` (12-hour)

---

### How It Works

1. A block of sample text is defined in the `sampleText` variable.
2. Four different regex patterns are defined for each data type.
3. JavaScript’s `String.match()` method is used to apply these patterns to the text.
4. The extracted data is printed to the console in a readable format.

## How to Run
Make sure you have Node.js installed.

```bash
node index.js