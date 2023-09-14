// export default function RootLayout({ children }) {
//     return (
//       <html lang="en">
//         <body>{children}</body>
//       </html>
//     )
//   }

// components/Layout.js

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
