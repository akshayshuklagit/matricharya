# Matricharya - Ayurvedic Women's Wellness Clinic

A modern, responsive website for Matricharya, an Ayurvedic women's health and wellness clinic specializing in holistic treatments for PCOS, fertility, pregnancy care, and comprehensive women's health.

## 🌸 Features

- **Modern Design**: Beautiful, feminine UI with glass morphism effects and gradient backgrounds
- **Responsive**: Fully responsive design optimized for all devices
- **SEO Optimized**: Complete SEO implementation with meta tags, schema markup, and sitemap
- **Interactive**: Smooth animations using Framer Motion
- **Appointment System**: Integrated booking system with Google Sheets backend
- **Multi-page Structure**: Separate pages for services, doctors, about, and appointments
- **Accessibility**: WCAG compliant with proper alt texts and semantic HTML

## 🚀 Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS + Material-UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Forms**: Google Apps Script integration
- **Deployment**: Ready for Vercel/Netlify

## 📱 Pages

- **Home**: Hero section, services overview, doctor profiles, testimonials
- **Diseases**: Women's health conditions with detailed information
- **Doctors**: Expert Vaidya profiles and qualifications
- **About**: Clinic philosophy, approach, and meaning of Matricharya
- **Appointment**: Booking form with time slots and consultation types

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd matricharya-clinic
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Add your Google Apps Script URLs to `.env`:
```env
VITE_APPOINTMENT_API=your_appointment_script_url
VITE_CALLBACK_API=your_callback_script_url
```

5. Start development server:
```bash
npm run dev
```

## 🌐 Deployment

1. Build for production:
```bash
npm run build
```

2. Preview production build:
```bash
npm run preview
```

## 📋 Environment Variables

- `VITE_APPOINTMENT_API`: Google Apps Script URL for appointment bookings
- `VITE_CALLBACK_API`: Google Apps Script URL for callback requests

## 🎨 Design System

- **Colors**: Pink/Rose gradients with green accents
- **Typography**: Poppins font family
- **Components**: Glass morphism with backdrop blur
- **Animations**: Smooth transitions and hover effects

## 📞 Contact Integration

- **Phone**: Direct calling functionality
- **WhatsApp**: Integrated WhatsApp messaging
- **Forms**: Google Sheets integration for data collection
- **Floating Buttons**: Quick access to booking and contact

## 🔧 Development

- **Code Style**: ESLint + Prettier configuration
- **Components**: Modular, reusable React components
- **Routing**: React Router for navigation
- **State Management**: React hooks for local state

## 📈 SEO Features

- Meta tags for all pages
- Open Graph and Twitter cards
- Schema.org markup for medical clinic
- Sitemap and robots.txt
- Canonical URLs

## 🤝 Contributing

This is a client project for Matricharya Ayurvedic Clinic. For any modifications or updates, please contact the development team.

## 📄 License

This project is proprietary and confidential. All rights reserved by Matricharya Clinic.

---

**Developed by**: 1techVeda  
**Contact**: 1techVeda@gmail.com  
**Website**: https://1techVeda.com
