✨ Script Usefulness / Creativeness

I programmed an automation script to implement deployment for my static website onto Amazon EC2 instances while making the operation more efficient. 
The script enables anyone without technical experience to create a website deployment due to its automated setup capabilities and live-making features.

🔍 Key Benefits:
A deployment process can complete in less time because it removes manual setup requirements.
Each execution produces identical server configuration results because the automation runs in an identical manner.
This script serves multiple purposes as a reusable program that functions for all static website projects through URL modification of the GitHub repository.

📜 Script Documentation
#!/bin/bash
# Step 1: Update all system packages
sudo yum update -y

# Step 2: Install Apache Web Server
sudo yum install httpd -y

# Step 3: Start Apache and enable it to auto-start on boot
sudo systemctl start httpd
sudo systemctl enable httpd

# Step 4: Install Git and clone my website repository
sudo yum install git -y
git clone https://github.com/yourusername/yourrepo.git

# Step 5: Move website files to Apache's root directory
sudo cp -r yourrepo/* /var/www/html/

# Step 6: Set appropriate file permissions
sudo chmod -R 755 /var/www/html

✅ Script Verifiable Output

After running the script:

The Apache HTTP server was running.
The GitHub repo was cloned, and files were served from /var/www/html/.
The website was live on my EC2 public IP:
http://51.21.227.95
Domain Integration:
To provide a professional domain for the website, I purchased a domain from GoDaddy and pointed it to my EC2 instance's public IP using A record DNS configuration.

🎯 Script Fit and Purpose
This script was built specifically to:

Deploy a static website quickly and reliably.
Showcase real-world cloud deployment using Amazon EC2.
Demonstrate the integration of version control (GitHub), server automation (Bash), and domain management (GoDaddy).

Technologies Used:
Amazon EC2 (Amazon Linux 2) – to host the server and provide the public IP.
GitHub – to store and manage website source code.
Apache – to serve the website over HTTP.
GoDaddy – for domain name registration and DNS management.
Bash Script – to automate the entire process.


