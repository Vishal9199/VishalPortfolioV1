import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO = ({ 
    title = "Vishal Kumar Mahatha | Enterprise Solution Architect & Full-Stack Developer", 
    description = "Portfolio of Vishal Kumar Mahatha, specializing in Oracle VBCS, OIC, Process Cloud, and Full-Stack Engineering. Exploring enterprise automation and IoT.",
    image = "/assets/portfolio-preview.png",
    url = "https://vishal9199.github.io/"
}) => {
    return (
        <HelmetProvider>
            <Helmet>
                {/* Standard metadata tags */}
                <title>{title}</title>
                <meta name='description' content={description} />
                
                {/* Facebook / Open Graph tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                
                {/* Twitter tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={url} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Helmet>
        </HelmetProvider>
    );
};

export default SEO;
