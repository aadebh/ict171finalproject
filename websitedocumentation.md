📝 Website Documentation: Men's Watch Online Store

🌐 Project Overview

The online men's watch store operated by static e-commerce runs on Amazon EC2 with an Amazon Linux 2 platform. The main objective of the work centered around gaining practical experience through these measures:

Static website deployment on the cloud
The process of establishing Apache HTTP Server along with its necessary configurations
Using GitHub for version control
Understanding domain management with GoDaddy
The website achieves a lightweight delivery because it uses HTML CSS and JavaScript to build an interface that combines modern styles with easy usability.

🛍️ About the Project

The Men’s Watch Online Store presents premium yet stylish watches for men within its catalogue. Through the navigation menu users can effortlessly browse watches which are properly organized into categories. Using open-source tools alongside cloud services small business operators and individual entrepreneurs can launch an online product store that operates without dependency on complicated backend infrastructure.


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
🌐 http://51.21.227.95
domain name-https://waqt.publicvm.com/



<img width="1467" alt="image" src="https://github.com/user-attachments/assets/1eb440a5-0c38-493b-ab58-317ac273f366" />
<img width="1458" alt="image" src="https://github.com/user-attachments/assets/720a4bf8-301d-4cd9-b454-6bb0b9b4bb61" />
<img width="1469" alt="image" src="https://github.com/user-attachments/assets/0a7eb5ab-9fb4-4c64-a086-da57f8451f49" />






