import React from 'react';

const Footer:React.FC = () => {

    const currentFullYear = new Date().getFullYear() + 1;
  return (
    <>
      <footer className="footer">
        <div className="container mx-auto">
            <p>&copy; copyright {currentFullYear}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
