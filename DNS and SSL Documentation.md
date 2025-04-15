🌐 DNS Configuration (Completed)
The website became accessible through a custom domain name after I successfully set up DNS configuration with a GoDaddy purchased domain. I established a connection between the domain and my EC2 instance public IP address (51.21.227.95) through an A record.

✅ A Record Setup:

My EC2 public IP received the added @ (root) record which pointed directly to the domain.
The domain required setup to enable user redirection toward my web hosting location. DNS propagation delays normally ranging from a few minutes to 48 hours caused the domain to become operational only after an initial significant time period.

I analyzed two possible setup delays which included DNS propagation time for the internet and GoDaddy DNS cache refresh durations.

DNS propagation time across the internet.
The GoDaddy system maintains DNS cache storage along with various refresh restrictions.
The domain link-up process was fully established for the project timeline despite known delays from public IP propagation.

🌍 Alternative Considered (Freenom)
In addition to choosing GoDaddy I tested Freenom because this free domain provider enables users to acquire domain extensions such as .tk, .ml and .ga. However, I observed:

Slower and less reliable DNS propagation.
Occasional service disruptions.
Limited control and customization options for DNS settings.
I selected GoDaddy instead of Freenom because I wanted a domain setup with higher stability and professionalism.

🔒 SSL/TLS Setup (Completed)
I secured the website by implementing a free SSL certificate through the combination of Certbot with Let’s Encrypt. Installation of an SSL/TLS setup made the website more credible by ensuring data encryption throughout the transmission process.

✅ SSL Installation Process:

The Amazon Linux EC2 instance required me to implement the following process sequence:

# Installed EPEL repository
sudo yum install epel-release -y

# Installed Certbot and Apache plugin
sudo yum install certbot python2-certbot-apache -y

# Executed Certbot to auto-configure SSL for Apache
sudo certbot --apache
This process:

The successful SSL certificate generation together with installation to the server took place.
The Apache server otomatically received updates for its HTTPS configuration support.
The system enabled automatic SSL certificate renewal to maintain continuous security for an extended period.
Certbot successfully installed SSL because the domain had an appropriate link with the EC2 server.
