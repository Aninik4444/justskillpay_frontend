# JustSkillPay Frontend

A modern React + TailwindCSS web app for learners, job seekers, and employers.  
This frontend powers the public company profile pages, job listings, testimonials, and more for the JustSkillPay platform.

---

## 🚀 Features

- **Company Public Profile Page**  
  `/company/:id` — View detailed employer profiles, hiring stats, jobs, testimonials, CSR, and contact forms.

- **Home Page**  
  `/` — Landing page for the platform.

- **Admin Panel**  
  `/admin` — Admin dashboard (restricted).

- **Reusable Components**  
  All profile sections (Hero, About, Jobs, Testimonials, CSR, Contact, Similar Employers) are modular and located in `src/components/companyProfile/`.

- **Responsive Design**  
  Built with TailwindCSS for a clean, mobile-friendly UI.

---

## 🗂️ Project Structure

```
src/
  components/
    companyProfile/
      HeroSection.jsx
      AboutSection.jsx
      JobsSection.jsx
      TestimonialsSection.jsx
      HiringSnapshotSection.jsx
      CSRSection.jsx
      ContactSection.jsx
      SimilarEmployersSection.jsx
    ...
  pages/
    CompanyProfile.jsx
    HomePage.jsx
    AdminPanel.jsx
  api/
    employerApi.js
  App.js
```

---

## 🛠️ Setup & Scripts

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Run tests**
   ```bash
   npm test
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## ✨ Main Components

- **HeroSection**: Company logo, name, industry, badges, website & social links.
- **AboutSection**: About us, location, year established, hiring category.
- **JobsSection**: Recent job openings, skills, location, apply button.
- **TestimonialsSection**: Carousel of learner testimonials.
- **HiringSnapshotSection**: Stats on jobs posted, learners hired, interview time, skills.
- **CSRSection**: CSR projects, sponsored courses, mentors.
- **ContactSection**: Form to contact employer.
- **SimilarEmployersSection**: Related companies by industry/hiring category.

---

## 🖌️ Styling

- Uses [TailwindCSS](https://tailwindcss.com/) for utility-first styling.
- Responsive layouts for desktop and mobile.
- Card-based sections for clarity and separation.

---

## 📦 API Integration

All data is fetched via the API methods in `src/api/employerApi.js`.  
Update these methods to connect to your backend.

---

## 🧩 Extending

- Add new sections by creating a new component in `src/components/companyProfile/`.
- Update `CompanyProfile.jsx` to include your new section.
- All components are designed to be reusable and composable.

---

## 📄 License

MIT

---

## 🤝 Contributing

Pull requests and suggestions are welcome!  
Please open an issue for bugs or feature requests.

---

## 📚 Learn More

- [React Documentation](https://reactjs.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
