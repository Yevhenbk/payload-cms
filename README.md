# PayloadCMS Content Management System

A modern, enterprise-grade content management system built with PayloadCMS 3, Next.js 15, and MongoDB Atlas. Features atomic design architecture, full TypeScript support, and Tailwind CSS v4.

## Overview

This template provides a complete foundation for building content-driven applications with a powerful admin interface, user authentication, and a flexible content structure. It follows best practices with atomic design patterns, type safety, and optimized performance.

## Technology Stack

**Frontend**
- Next.js 15.4.7 with App Router
- React 19.1.0
- TypeScript 5.7.3
- Tailwind CSS v4
- Class Variance Authority for component variants

**Backend**
- PayloadCMS 3.63.0
- MongoDB Atlas
- Server Actions for secure mutations
- Lexical rich text editor

**Development**
- pnpm for package management
- ESLint for code quality
- Prettier for code formatting

## Key Features

- **Atomic Design Architecture** - Organized component structure from atoms to templates
- **Type-Safe Development** - Full TypeScript coverage with strict mode
- **Authentication System** - Secure user login with role-based access
- **Content Management** - Posts with categories, rich text editing, and relationships
- **Auto-Slug Generation** - Automatic URL-friendly slugs from titles
- **Form Validation** - Client and server-side validation with helpful error messages
- **Responsive Design** - Mobile-first approach with enterprise-quality UI
- **Performance Optimized** - React.memo, code splitting, and optimized rendering
- **Accessibility** - ARIA labels, semantic HTML, and keyboard navigation

## Prerequisites

- Node.js 18 or higher
- pnpm 8 or higher (recommended)
- MongoDB Atlas account or local MongoDB instance
- Git

## Installation

**1. Clone the repository**

```bash
git clone https://github.com/Yevhenbk/payload-cms.git
cd payload-cms
```

**2. Install dependencies**

```bash
pnpm install
```

**3. Configure environment variables**

Create a `.env` file in the root directory:

```env
DATABASE_URI=<your-mongodb-connection-string>
PAYLOAD_SECRET=your-secure-secret-key-minimum-32-characters
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

Important: Never commit the `.env` file to version control.

**4. Start the development server**

```bash
pnpm run dev
```

**5. Access the application**

- Frontend: http://localhost:3000
- Admin Panel: http://localhost:3000/admin

**6. Login with test credentials**

- Email: test@test.com
- Password: test

## Project Structure

```
src/
├── app/
│   ├── (frontend)/              Frontend pages and layouts
│   │   ├── layout.tsx          Root layout with fonts and metadata
│   │   ├── page.tsx            Home page
│   │   └── styles.css          Tailwind CSS configuration
│   └── (payload)/              Admin panel routes
│       └── admin/              PayloadCMS admin interface
├── components/
│   ├── atoms/                  Basic UI elements (Button, Input, etc.)
│   ├── molecules/              Simple combinations (PostCard, UserGreeting)
│   ├── organisms/              Complex components (LoginForm, PostList)
│   └── templates/              Page layouts (HomePage)
├── server/
│   └── actions/                Server-side actions
│       ├── authorizeUser.ts    Authentication logic
│       ├── createPost.ts       Post creation
│       └── logoutUser.ts       Logout functionality
├── collections/                PayloadCMS collections
│   ├── Users.ts               User authentication
│   ├── Posts.ts               Blog posts with relationships
│   ├── Categories.ts          Content categorization
│   └── Media.ts               File uploads
├── utils/                      Utility functions
│   ├── cn.ts                  Tailwind className merger
│   ├── post.ts                Post helpers
│   ├── string.ts              String utilities
│   └── validation.ts          Form validation
└── payload.config.ts           PayloadCMS configuration
```

## Collections

**Users**
- Email and password authentication
- Role-based access control
- Relationship to authored posts

**Posts**
- Title with auto-generated slug
- Rich text content using Lexical editor
- Category relationships
- Owner relationship to users
- Timestamps for creation and updates

**Categories**
- Name and slug fields
- Join field to related posts
- Dynamic post count

**Media**
- File upload capabilities
- Image optimization
- Access control

## Available Commands

```bash
pnpm run dev              # Start development server on port 3000
pnpm run build            # Build for production
pnpm start                # Start production server
pnpm run generate:types   # Generate PayloadCMS TypeScript types
pnpm run lint             # Run ESLint checks
```

## Deployment

**Vercel Deployment**

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables:
   - `DATABASE_URI` - MongoDB Atlas connection string
   - `PAYLOAD_SECRET` - Random secret key (minimum 32 characters)
   - `NEXT_PUBLIC_SERVER_URL` - Your production domain
4. Deploy the application

**Production Environment Variables**

```env
DATABASE_URI=your-mongodb-database-uri
PAYLOAD_SECRET=your-production-secret-key
NEXT_PUBLIC_SERVER_URL=https://your-domain.vercel.app
```

## Docker Setup (Optional)

If you prefer Docker for local development:

1. Follow installation steps 1-2
2. Modify `MONGODB_URI` in `.env` to `mongodb://127.0.0.1/payload-cms`
3. Update the `docker-compose.yml` file accordingly
4. Run `docker-compose up` (add `-d` for background mode)
5. Continue with step 4 from the installation section

## Usage

**Creating Posts**

1. Login with test credentials or create a new user in the admin panel
2. Fill out the post creation form:
   - Enter a title (slug generates automatically)
   - Add rich text content
   - Select categories
3. Submit to create the post
4. View the post in the list below the form

**Managing Content**

Access the admin panel at `/admin` to:
- Create, edit, and delete posts
- Manage categories
- Upload media files
- Manage users and permissions

## Troubleshooting

**Port Already in Use**

Kill the process using port 3000 and restart the server.

**Database Connection Issues**

- Verify MongoDB Atlas IP whitelist includes 0.0.0.0/0 for development
- Check connection string format in `.env`
- Ensure database user has proper read/write permissions

**TypeScript Errors**

Restart the TypeScript server in VS Code:
- Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
- Search for "TypeScript: Restart TS Server"

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This project is licensed under the MIT License. Feel free to use it for learning or production purposes.

## Resources

- [PayloadCMS Documentation](https://payloadcms.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)

## Repository

GitHub: [https://github.com/Yevhenbk/payload-cms](https://github.com/Yevhenbk/payload-cms)

---

Built with modern web technologies by [Yevhenbk](https://github.com/Yevhenbk)
