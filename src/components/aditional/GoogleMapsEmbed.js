import React from 'react';

export const GoogleMapsEmbed = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2865.7563605111536!2d-63.624052236981704!3d-31.331984712515066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432df77a826c065%3A0xf96dc828e036ac8e!2sPueblo%20Caf%C3%A9%20%26%20Pizzas!5e0!3m2!1ses-419!2sar!4v1724097216392!5m2!1ses-419!2sar"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
        ></iframe>
    );
};