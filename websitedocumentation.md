📄 Website Documentation
The website exists as a basic e-commerce platform which runs on an Amazon EC2 with Amazon Linux 2 operating system. I developed this project to understand static website hosting in the cloud and acquire practical skills in web hosting together with Apache server setup and GitHub connection.
The website operates through a cloned application sourced from GitHub which uses the Apache HTTP server for delivery.

🛍️ About the Project
The website I created serves as an online store to display products while offering a product display system with navigation capabilities and responsive format options. The website operates as a static platform built from HTML/CSS/JS for delivering a clean professional interface to users. The project shows that any individual or small business can build their online product store through free open-source software.

🧰 Tools & Technologies Used
Cloud hosting takes place through Amazon EC2 (Amazon Linux 2).
GitHub – for source code version control and collaboration.
The web service relies on Apache HTTP Server (httpd) to deliver web pages.
The SSH & Terminal services provide necessary access to servers as well as command execution functionalities.
Godaddy for Domain name

🚀 Steps to Launch Website on EC2
Created an EC2 instance using Amazon Linux 2.
#Installed necessary packages using:
sudo yum install git httpd -y

#Cloned the website code from my GitHub repository:
git clone https://github.com/username/repository-name.git

#Moved website files to Apache's root directory:
sudo cp -r repository-name/* /var/www/html/

#Started the Apache web server and enabled it to run on boot:
sudo systemctl start httpd
sudo systemctl enable httpd

🔗 Current Website Access
The store website is now live and can be accessed via the EC2 public IP address:
🌐 http://44.204.48.146


