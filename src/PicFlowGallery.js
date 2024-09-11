import React, { useEffect } from 'react';

const PicflowGallery = () => {
  useEffect(() => {
    // Function to load the Picflow script
    const loadPicflowScript = () => {
      if (!window.picflow) {
        window.picflow = true;
        const script = document.createElement('script');
        script.src = 'https://picflow.com/embed/main.js';
        script.type = 'module';
        script.defer = true;
        script.onload = () => {
          // You can initialize or manipulate the custom element here if needed
        };
        document.head.appendChild(script);
      }
    };
    loadPicflowScript();
  }, []);

  return (
    <div>
      <picflow-gallery 
        id="gal_1YhJycVFionBn1Z3"
        lightbox="#000000E6"
      ></picflow-gallery>
    </div>
  );
};

export default PicflowGallery;
