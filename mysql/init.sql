CREATE TABLE IF NOT EXISTS vehicles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO vehicles (make, model, year, price, image_url) VALUES
('Ford', 'Mustang', 2025, 38000.00, 'https://via.placeholder.com/800x400?text=2025+Ford+Mustang'),
('Honda', 'Civic', 2025, 28000.00, 'https://shopkunes.com/blog/2025-honda-civic-hybrid'),
('Toyota', 'RAV4', 2025, 35000.00, 'https://via.placeholder.com/800x400?text=2025+Toyota+RAV4'),
('Chevrolet', 'Silverado', 2025, 45000.00, 'https://via.placeholder.com/800x400?text=2025+Chevrolet+Silverado');