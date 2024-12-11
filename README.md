# **Artisans Avenue**

*An artisan-themed website celebrating handcrafted goods, creativity, and tradition.*

Artisans Avenue is designed to showcase and sell unique, handcrafted products made by skilled artisans. This README provides detailed information about variables, salient features, usage, and hardware/software requirements for the project.

---

## **Salient Features**

- **Hero Section**:  
  A visually appealing introduction that highlights the mission and purpose of Artisans Avenue.  

- **Product Showcase**:  
  Displays eight artisan-crafted products, each with a brief description and an "Add to Cart" button.  

- **Search and Filter**:  
  A user-friendly search bar and category filter allow users to browse products effortlessly.  

- **Responsive Design**:  
  The website is optimized for all devices, including desktops, tablets, and mobiles.  

- **Easy Navigation**:  
  Intuitive navigation bar with links to Home, About Us, Products, and Contact Us pages.  

---

## **Variables Used in the Code**

### **HTML File**
- `class="heading"`: Used for the main heading in the hero section.  
- `class="detail"`: For descriptive content across sections.  
- `id="searchBar"`: Identifies the search bar for product filtering.  
- `id="category-filter"`: Dropdown menu for filtering products by category.  
- `class="product-detail"`: Displays short descriptions of products.  

### **CSS File**
- `.hero`: Styles the hero section background, heading, and text.  
- `.product-card`: Defines the layout and appearance of individual product cards.  
- `.add-to-cart`: Specifies the design of the "Add to Cart" button.  

### **JavaScript File**
- `const searchBar`: Targets the search bar for filtering products dynamically.  
- `const categoryFilter`: Retrieves the selected category for filtering products.  
- `addEventListener('click')`: Handles interactivity, such as adding items to the cart.  

---

## **Usage Procedure**

1. **Compiling and Running**  
   - No compilation is required as this is a web-based project.  
   - Open the `index.html` file in any modern browser to view the website.  

2. **Modifications**  
   - Update product details in the `index.html` file under `<div class="product-card">`.  
   - Modify the styles in `styles.css` for a customized look.  
   - Add interactivity by editing `script.js`.  

3. **Adding Backend Support** *(optional)*  
   - Use Node.js, Flask, or PHP for backend functionality.  
   - Configure a database (MySQL or MongoDB) for storing product details and user interactions.  

---

## **Hardware/Software Requirements**

### **Hardware**
- A PC or laptop with at least 2 GB of RAM.  
- A screen resolution of 1280x720 or higher for optimal viewing.  

### **Software**
- **Browser**: Any modern browser (Chrome, Firefox, Edge, etc.).  
- **Code Editor**: Visual Studio Code or any text editor of your choice.  
- **Optional**:  
  - Node.js for backend development.  
  - Database software like MySQL or MongoDB.  

---

## **Public Domain Software/Resources**

The following public domain resources are used in this project:  
1. **Bootstrap CSS** *(Optional)*:  
   Source: [https://getbootstrap.com/](https://getbootstrap.com/)  
   Module Name: Grid System, Buttons  

2. **Google Fonts**:  
   Source: [https://fonts.google.com/](https://fonts.google.com/)  
   Module Name: Font Styling (e.g., Open Sans, Roboto)  

3. **Unsplash**:  
   Source: [https://unsplash.com/](https://unsplash.com/)  
   Module Name: High-quality product images  

4. **Font Awesome Icons** *(Optional)*:  
   Source: [https://fontawesome.com/](https://fontawesome.com/)  
   Module Name: Icons for buttons and navigation  

---
