Certificate Images Instructions:

1. Place your certificate images in this folder
2. For the Excel certificate, name it: excel-certificate.jpg (or .png)
3. Supported formats: JPG, PNG, PDF (for display, use JPG or PNG)

Recommended image specifications:
- Format: JPG or PNG
- Size: 800x600px or larger (maintain aspect ratio)
- Quality: High resolution for clear display

To add more certificates:
1. Add the certificate image to this folder
2. Copy the certificate-card structure in index.html
3. Update the image path and certificate details

Example certificate card structure:
<div class="certificate-card">
    <div class="certificate-image">
        <img src="images/certificates/your-certificate.jpg" alt="Certificate Name">
        <div class="certificate-overlay">
            <a href="images/certificates/your-certificate.jpg" target="_blank" class="certificate-link">
                <i class="fas fa-expand"></i>
            </a>
            <a href="images/certificates/your-certificate.jpg" download class="certificate-download">
                <i class="fas fa-download"></i>
            </a>
        </div>
    </div>
    <div class="certificate-content">
        <h3>Certificate Name</h3>
        <p>Certificate Description</p>
        <div class="certificate-date">
            <i class="fas fa-calendar"></i>
            <span>Date</span>
        </div>
    </div>
</div>

