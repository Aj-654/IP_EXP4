document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Validate message field (limit to 100 characters)
        const messageField = document.getElementById("tagline");
        if (messageField.value.length > 75) {
            alert("Message should not exceed 75 characters.");
            return false;
        }

        // Validate mobile number (exactly 9 digits)
        const mobileNumberField = document.getElementById("number");
        const mobileNumber = mobileNumberField.value.replace(/\s/g, ""); // Remove whitespace
        if (!/^\d{10}$/.test(mobileNumber)) {
            alert("Mobile number must contain exactly 10 digits.");
            return false;
        }

        // Get user inputs
        const color = document.querySelector('input[type="color"]').value;
        const size = document.getElementById("size").value;
        const companyName = document.getElementById("companyname").value;
        const tagline = document.getElementById("tagline").value;
        const quantity = parseInt(document.getElementById("quantity").value);
        const details = document.getElementById("details").value;
        const mobile = mobileNumber;
        const email = document.getElementById("tagline").value;
        const address = document.getElementById("address").value;
        const deliveryDate = document.getElementById("delivery_date").value;

        // Calculate total price based on quantity
        const pricePerTshirt = 25; // Adjust this value based on your pricing
        const totalPrice = pricePerTshirt * quantity;
        const currentdate = new Date();
        const formatteddate = currentdate.toLocaleDateString();

        // Generate the receipt
        const receipt = `
            <p>Date of order: ${formatteddate}</p>
            <p>Color: ${color}</p>
            <p>Size: ${size}</p>
            <p>Company Name: ${companyName}</p>
            <p>Tagline: ${tagline}</p>
            <p>Quantity: ${quantity}</p>
            <p>Details: ${details}</p>
            <p>Mobile Number: ${mobile}</p>
            <p>Email: ${email}</p>
            <p>Shipping Address: ${address}</p>
            <p>Delivery Date: ${deliveryDate}</p>
            <p>Total Price: $${totalPrice}</p>

        `;

        // Display the receipt to the user
        const receiptWindow = window.open("", "_blank");
        if (receiptWindow) {
            receiptWindow.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Receipt</title>
                    <style>
                    body{
                        font-size: 14px;
                        font-family: 'Open Sans', sans-serif; 
                    }
                    h1{
                        font-size: 50px;
                    }
                    </style>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz@6..12&display=swap" rel="stylesheet">
                </head>
                
                <body>
                    <h1>Receipt</h1>
                    <pre>${receipt}</pre>
                </body>
                </html>
            `);
            receiptWindow.document.close();
        }


        // You can also send this receipt to a server or save it to a file as needed

        // Optionally, reset the form after submission
        form.reset();
    });
});