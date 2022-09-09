import React from "react";
// import Footer from "./Footer";
// import ScrollToTop from "./ScrollToTop";

export default function Home() {
  return (
    <div className="text-bg-secondary p-4">
    
    <form id="home">
      <div className="background text-center img-fluid">
        <img src="https://media.istockphoto.com/photos/enjoying-lunch-with-friends-picture-id1171787426?k=20&m=1171787426&s=612x612&w=0&h=ERlzVsPHF__UhPobUaC2fIfSTEuXLF6aUyfuqrUMNJQ=" alt="food" />
      </div>
      
      <section className="content">
        <div className="title text-center">
          <h1>We are Foodies</h1>
          <p>
        
          </p>
        </div>
       </section>
      
    </form>
    <p>
        Signup here <a href="/signup">➔</a>
      </p>
    {/* <ScrollToTop /> */}
    </div>
  
  );
}