<p align="center">
  <img src="Logo.png" alt="PH Tube Logo" />
</p>

<p align="center">
  <strong>PH Tube</strong> is a web-based video streaming application where users can browse and watch videos sorted by categories such as music, comedy, and tutorials.
</p>

---

## 📡 REST API

### GET: Categories
**Endpoint:**  
[https://openapi.programming-hero.com/api/phero-tube/categories](https://openapi.programming-hero.com/api/phero-tube/categories)

---

### GET: Videos
**Endpoint:**  
[https://openapi.programming-hero.com/api/phero-tube/videos](https://openapi.programming-hero.com/api/phero-tube/videos)

---

### GET: Video based on Category (params)
**Endpoint:**  
`https://openapi.programming-hero.com/api/phero-tube/category/categoryId`  

**Example:**  
[https://openapi.programming-hero.com/api/phero-tube/category/1001](https://openapi.programming-hero.com/api/phero-tube/category/1001)

---

### GET: Video based on Title (query)
**Endpoint:**  
`https://openapi.programming-hero.com/api/phero-tube/videos?title=videoTitle`  

**Example:**  
[https://openapi.programming-hero.com/api/phero-tube/videos?title=shape](https://openapi.programming-hero.com/api/phero-tube/videos?title=shape)

---

### GET: Video Details by video_id (query)
**Endpoint:**  
`https://openapi.programming-hero.com/api/phero-tube/video/video_id`  

**Example:**  
[https://openapi.programming-hero.com/api/phero-tube/video/aaac](https://openapi.programming-hero.com/api/phero-tube/video/aaac)

---

## 📋 Requirements

### 🔹 Responsive Navbar
- Logo of PH-Tube at Left  
- A Search Box with Search Button at Center  
- A Sort Button at the Right  
- Add a border at the bottom of the Navbar  

### 🔹 Dynamic Category Section
- Load all category buttons from API and show them centered  
- On click, load specific category data  
- Active button functionality for better UX  

### 🔹 Dynamic Video Sections
- Load all videos from API  
- Use the card layout from design  
- Show verified badge (if verified)  
- On click, show video details with author info in a modal  
- Show “No Video” icon if a category has no videos  

### 🔹 Additional Features
#### Search Functionality
- Integrate search functionality  
- On input change, deactivate active button and show only matched videos  

---

## 🎨 Design Ideas

### Basic Layout
![Basic Layout](design/Frame%201.png)

---

### Error Layout
![Error Layout](design/Frame%203.png)
