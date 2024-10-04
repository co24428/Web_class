# final assignment: RentEase Project

## App name
RentEase

## Goals
- Mutiple Pages
- User Friendly View
- Responsiveness
- Interactive
- Forms With Validation
- Local Store Management

## Evironments
- Browser
- Responsive: Desktop, Tablets and Smartphones

## Technologies: only user interface (except Server side)

- User Interface: HTML, CSS, JavaScript
- Database: localStorage

## Specification

### Entities
- User
    - Email: String
    - Password: String
    - First Name: String
    - Last Name: String
    - Birth Date: String
- Flat
    - City: String
    - Street name: String
    - Street number: Number
    - Area size: Number
    - Has AC: Boolean
    - Year built: Number
    - Rent price: Number
    - Date available: Date

### Validation
- User
    - All fields are required
    - Data type check
    - Email must be in email format
    - Both names (first and last) must be at least 2 characters long
    - The derived age must be in the range of 18-120
    - Password must be at least 6 characters
    - Password must contain: Letters, Numbers, A character that is neither a letter nor a number

- Flat
    - All fields are required
    - Data type check