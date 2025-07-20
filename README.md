# DiscountifyME 🛍️💰

**Find Local Deals, Save Big!**

A mobile-first responsive web application that connects deal-seeking consumers with local businesses offering discounts. Built with Next.js, TypeScript, and Tailwind CSS.

![DiscountifyME Logo]
![DiscountifyME Logo](https://img.shields.io/badge/Demo-Live-brightgreen)-->https://frolicking-babka-c3b758.netlify.app/

## 🌟 Features

### For Customers
- 🔍 **Smart Deal Discovery** - Find the best deals near you with intelligent search
- 📍 **Location-Based Search** - Discover deals within your preferred radius
- ❤️ **Wishlist Management** - Save favorite deals and track price changes
- 🔔 **Price Drop Alerts** - Get notified when prices drop on wishlist items
- 🏷️ **Category Filtering** - Browse deals by Food, Fashion, Electronics, and more
- ⭐ **Ratings & Reviews** - See what other customers think
- 🌙 **Dark/Light Theme** - Choose your preferred viewing mode

### For Merchants
- 🏪 **Merchant Dashboard** - Easy-to-use interface for posting deals
- 📊 **Analytics & Insights** - Track deal performance and customer engagement
- 🎯 **Targeted Marketing** - Reach customers based on location and interests
- 💬 **Customer Engagement** - Connect with customers through reviews and messaging

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel-ready

## 📱 Screenshots

### Homepage
Clean, modern interface with hero section and deal discovery

### Deal Cards
Beautiful card design with discount badges, ratings, and wishlist functionality

### Mobile Responsive
Optimized for all screen sizes with mobile-first approach

## 🛠️ Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/discountifyme.git
   cd discountifyme
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
discountifyme/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── admin/             # Admin login
│   ├── contact/           # Contact page
│   ├── login/             # User login
│   ├── register/          # User registration
│   ├── services/          # Services page
│   ├── wishlist/          # Wishlist page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── deal-card.tsx     # Deal card component
│   ├── footer.tsx        # Footer component
│   ├── logo.tsx          # Logo component
│   ├── navigation.tsx    # Navigation component
│   └── theme-*.tsx       # Theme components
├── lib/                  # Utilities and data
│   └── mock-data.ts      # Mock data for development
└── hooks/                # Custom React hooks
\`\`\`

## 🎨 Design System

### Colors
- **Primary**: Emerald (Green) - #10B981
- **Secondary**: Blue - #3B82F6
- **Accent**: Purple - #8B5CF6
- **Success**: Green - #22C55E
- **Warning**: Orange - #F59E0B
- **Error**: Red - #EF4444

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, various sizes
- **Body**: Regular, 16px base

### Components
Built with shadcn/ui for consistency:
- Buttons with rounded corners
- Cards with subtle shadows
- Form inputs with proper focus states
- Responsive navigation
- Toast notifications

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

\`\`\`env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing
- Custom border radius
- Dark mode support

## 📊 Features Roadmap

### Phase 1 (Current)
- [x] Basic UI/UX with responsive design
- [x] Deal discovery and filtering
- [x] Wishlist functionality
- [x] User authentication UI
- [x] Admin login interface
- [x] Dark/Light theme toggle

### Phase 2 (Planned)
- [ ] Real authentication with JWT
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Payment gateway integration
- [ ] Push notifications
- [ ] Merchant dashboard
- [ ] Real-time deal updates

### Phase 3 (Future)
- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] AI-powered deal recommendations
- [ ] Social features and sharing
- [ ] Multi-language support

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Donala Madhukar Reddy**
- Founder & CEO, DiscountifyME
- Email: hello@discountifyme.com
- Location: Hyderabad, Telangana, India

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or need help:

- 📧 Email: hello@discountifyme.com
- 🌐 Website: [DiscountifyME](https://discountifyme.com)
- 📍 Location: Hyderabad, Telangana, India

---

**Made with ❤️ by Donala Madhukar Reddy**

*"Why should people miss out on local deals just because they don't know they exist?"*
