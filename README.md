Here is your **professional README.md** for the AdaptNXT Simple E-commerce API assignment:

---

````markdown
# 🛒 Simple E-commerce API

A scalable E-commerce REST API built with **Node.js, Express, and MongoDB** for AdaptNXT Backend Developer Intern assignment.

---

## 🚀 **Features**

- **User Authentication**
  - Register and Login with JWT
  - Roles: Customer and Admin

- **Product Management**
  - Customers can view products
  - Admins can add, update, and delete products

- **Cart Management**
  - Add items to cart
  - Update item quantity
  - Remove items from cart
  - View cart

- **Order Creation**
  - Place orders from cart

- **Security**
  - Password hashing with bcryptjs
  - Role-based access control
  - JWT secured routes

- **Optional Enhancements**
  - Product search by name or category
  - Pagination (can be extended)
  - Basic frontend (optional integration)

---

## 🛠 **Tech Stack**

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Auth:** JWT, bcryptjs
- **Testing:** Postman (tested), Jest & Supertest (optional)

---

## 🔧 **Setup Instructions**

### 1. **Clone Repository**

```bash
git clone https://github.com/aliabrar21/AdaptNXT-Assignment.git
cd ecommerce-api
````

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Environment Variables**

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. **Run Server**

```bash
npm run dev
```

Server runs on [http://localhost:5000](http://localhost:5000)

---

## 🗃 **Seed Initial Products**

To add sample products for testing:

```bash
node seed.js
```

---

## 🔑 **API Endpoints Summary**

### **Auth**

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| POST   | /api/auth/register | Register user          |
| POST   | /api/auth/login    | Login user & get token |

---

### **Products**

| Method | Endpoint           | Description      | Access |
| ------ | ------------------ | ---------------- | ------ |
| GET    | /api/products      | Get all products | Public |
| POST   | /api/products      | Add product      | Admin  |
| PUT    | /api/products/\:id | Update product   | Admin  |
| DELETE | /api/products/\:id | Delete product   | Admin  |

---

### **Cart**

| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| GET    | /api/cart          | View cart                 |
| POST   | /api/cart          | Add to cart               |
| PUT    | /api/cart/\:itemId | Update cart item quantity |
| DELETE | /api/cart/\:itemId | Remove item from cart     |

---

### **Orders**

| Method | Endpoint    | Description            |
| ------ | ----------- | ---------------------- |
| POST   | /api/orders | Create order from cart |

---

## 🔐 **Authentication**

* Pass **JWT token** in headers:

```
Authorization: Bearer <token>
```

---

## 🧪 **Testing**

* Tested endpoints using **Postman**
* Included optional `tests/` directory for Jest unit tests (if implemented)

---

## 🤝 **Contributing**

1. Fork the repository
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Added YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Open Pull Request

---

## ✨ **Author**

* **Name:** Your Name
* **Email:** sonuabrar1999@gmail.com

---

## 📜 **License**

This project is licensed under the MIT License.

---

> **Note:** Replace placeholders (`your-username`, `your-api-link.com`, `your.email@example.com`, etc.) with your actual details before submission.

```

---

Let me know if you also want:

- **Postman collection export template**
- **Basic frontend HTML + fetch integration**
- **Jest unit test sample for each route**

to finalise your submission systematically today.
```
