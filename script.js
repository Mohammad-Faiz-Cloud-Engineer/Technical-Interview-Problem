// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Companies Data - Complete List
    const companies = [
        { name: 'Accenture', sector: 'consulting' },
        { name: 'Accolite', sector: 'tech' },
        { name: 'Acko', sector: 'finance' },
        { name: 'Activision', sector: 'tech' },
        { name: 'Adobe', sector: 'tech' },
        { name: 'Affirm', sector: 'finance' },
        { name: 'Agoda', sector: 'tech' },
        { name: 'Airbnb', sector: 'tech' },
        { name: 'Airbus SE', sector: 'tech' },
        { name: 'Airtel', sector: 'tech' },
        { name: 'Airwallex', sector: 'finance' },
        { name: 'Akamai', sector: 'tech' },
        { name: 'Akuna Capital', sector: 'finance' },
        { name: 'Alibaba', sector: 'tech' },
        { name: 'Altimetrik', sector: 'consulting' },
        { name: 'Amadeus', sector: 'tech' },
        { name: 'Amazon', sector: 'tech' },
        { name: 'AMD', sector: 'tech' },
        { name: 'Amdocs', sector: 'enterprise' },
        { name: 'American Express', sector: 'finance' },
        { name: 'Analytics quotient', sector: 'consulting' },
        { name: 'Anduril', sector: 'tech' },
        { name: 'Aon', sector: 'consulting' },
        { name: 'Apollo.io', sector: 'tech' },
        { name: 'AppDynamics', sector: 'enterprise' },
        { name: 'AppFolio', sector: 'enterprise' },
        { name: 'Apple', sector: 'tech' },
        { name: 'Applied Intuition', sector: 'tech' },
        { name: 'AQR Capital Management', sector: 'finance' },
        { name: 'Arcesium', sector: 'finance' },
        { name: 'Arista Networks', sector: 'tech' },
        { name: 'Asana', sector: 'tech' },
        { name: 'athenahealth', sector: 'tech' },
        { name: 'Atlassian', sector: 'tech' },
        { name: 'Attentive', sector: 'tech' },
        { name: 'Audible', sector: 'tech' },
        { name: 'Aurora', sector: 'tech' },
        { name: 'Autodesk', sector: 'tech' },
        { name: 'Avalara', sector: 'tech' },
        { name: 'Avito', sector: 'tech' },
        { name: 'Axon', sector: 'tech' },
        { name: 'Baidu', sector: 'tech' },
        { name: 'Bank of America', sector: 'finance' },
        { name: 'Barclays', sector: 'finance' },
        { name: 'Bentley Systems', sector: 'tech' },
        { name: 'BharatPe', sector: 'finance' },
        { name: 'BILL Holdings', sector: 'finance' },
        { name: 'BitGo', sector: 'finance' },
        { name: 'BlackRock', sector: 'finance' },
        { name: 'BlackStone', sector: 'finance' },
        { name: 'blinkit', sector: 'tech' },
        { name: 'Blizzard', sector: 'tech' },
        { name: 'Block', sector: 'finance' },
        { name: 'Bloomberg', sector: 'finance' },
        { name: 'BNY Mellon', sector: 'finance' },
        { name: 'Bolt', sector: 'tech' },
        { name: 'Booking.com', sector: 'tech' },
        { name: 'Bosch', sector: 'tech' },
        { name: 'Box', sector: 'tech' },
        { name: 'BP', sector: 'tech' },
        { name: 'Braze', sector: 'tech' },
        { name: 'Brex', sector: 'finance' },
        { name: 'Bridgewater Associates', sector: 'finance' },
        { name: 'ByteDance', sector: 'tech' },
        { name: 'Cadence', sector: 'tech' },
        { name: 'Canonical', sector: 'tech' },
        { name: 'Capgemini', sector: 'consulting' },
        { name: 'Capital One', sector: 'finance' },
        { name: 'Careem', sector: 'tech' },
        { name: 'CARS24', sector: 'tech' },
        { name: 'carwale', sector: 'tech' },
        { name: 'Cashfree', sector: 'finance' },
        { name: 'CEDCOSS', sector: 'tech' },
        { name: 'Celigo', sector: 'tech' },
        { name: 'Chewy', sector: 'tech' },
        { name: 'Chime', sector: 'finance' },
        { name: 'ciena', sector: 'tech' },
        { name: 'Circle', sector: 'finance' },
        { name: 'Cisco', sector: 'tech' },
        { name: 'Citadel', sector: 'finance' },
        { name: 'Citigroup', sector: 'finance' },
        { name: 'Citrix', sector: 'tech' },
        { name: 'Clari', sector: 'tech' },
        { name: 'Cleartrip', sector: 'tech' },
        { name: 'Cloudera', sector: 'tech' },
        { name: 'Cloudflare', sector: 'tech' },
        { name: 'CME Group', sector: 'finance' },
        { name: 'Coforge', sector: 'consulting' },
        { name: 'Cognizant', sector: 'consulting' },
        { name: 'Cohesity', sector: 'tech' },
        { name: 'Coinbase', sector: 'finance' },
        { name: 'Comcast', sector: 'tech' },
        { name: 'Commvault', sector: 'tech' },
        { name: 'Compass', sector: 'tech' },
        { name: 'Confluent', sector: 'tech' },
        { name: 'ConsultAdd', sector: 'consulting' },
        { name: 'Coupang', sector: 'tech' },
        { name: 'Coursera', sector: 'tech' },
        { name: 'Coveo', sector: 'tech' },
        { name: 'CRED', sector: 'finance' },
        { name: 'Credit Karma', sector: 'finance' },
        { name: 'Criteo', sector: 'tech' },
        { name: 'CrowdStrike', sector: 'tech' },
        { name: 'Cruise', sector: 'tech' },
        { name: 'CTC', sector: 'tech' },
        { name: 'CureFit', sector: 'tech' },
        { name: 'CVENT', sector: 'tech' },
        { name: 'Darwinbox', sector: 'tech' },
        { name: 'Databricks', sector: 'tech' },
        { name: 'Datadog', sector: 'tech' },
        { name: 'Dataminr', sector: 'tech' },
        { name: 'Delhivery', sector: 'tech' },
        { name: 'Deliveroo', sector: 'tech' },
        { name: 'Dell', sector: 'tech' },
        { name: 'Deloitte', sector: 'consulting' },
        { name: 'DeltaX', sector: 'tech' },
        { name: 'DE Shaw', sector: 'finance' },
        { name: 'Deutsche Bank', sector: 'finance' },
        { name: 'DevRev', sector: 'tech' },
        { name: 'Devsinc', sector: 'tech' },
        { name: 'Devtron', sector: 'tech' },
        { name: 'Directi', sector: 'tech' },
        { name: 'Disney', sector: 'tech' },
        { name: 'Docusign', sector: 'tech' },
        { name: 'DoorDash', sector: 'tech' },
        { name: 'DP world', sector: 'tech' },
        { name: 'Dream11', sector: 'tech' },
        { name: 'Dropbox', sector: 'tech' },
        { name: 'Druva', sector: 'tech' },
        { name: 'DRW', sector: 'finance' },
        { name: 'Dunzo', sector: 'tech' },
        { name: 'Duolingo', sector: 'tech' },
        { name: 'DXC Technology', sector: 'consulting' },
        { name: 'EarnIn', sector: 'finance' },
        { name: 'eBay', sector: 'tech' },
        { name: 'Edelweiss Group', sector: 'finance' },
        { name: 'Electronic Arts', sector: 'tech' },
        { name: 'EPAM Systems', sector: 'consulting' },
        { name: 'Epic Systems', sector: 'tech' },
        { name: 'Expedia', sector: 'tech' },
        { name: 'EY', sector: 'consulting' },
        { name: 'FactSet', sector: 'finance' },
        { name: 'Faire', sector: 'tech' },
        { name: 'Fastenal', sector: 'tech' },
        { name: 'Fidelity', sector: 'finance' },
        { name: 'Fiverr', sector: 'tech' },
        { name: 'Flexera', sector: 'tech' },
        { name: 'Flexport', sector: 'tech' },
        { name: 'Flipkart', sector: 'tech' },
        { name: 'Fortinet', sector: 'tech' },
        { name: 'fourkites', sector: 'tech' },
        { name: 'FPT', sector: 'tech' },
        { name: 'Freecharge', sector: 'finance' },
        { name: 'FreshWorks', sector: 'tech' },
        { name: 'Gameskraft', sector: 'tech' },
        { name: 'Garmin', sector: 'tech' },
        { name: 'GE Digital', sector: 'tech' },
        { name: 'GE Healthcare', sector: 'tech' },
        { name: 'Geico', sector: 'finance' },
        { name: 'General Motors', sector: 'tech' },
        { name: 'Genpact', sector: 'consulting' },
        { name: 'GoDaddy', sector: 'tech' },
        { name: 'Gojek', sector: 'tech' },
        { name: 'Goldman Sachs', sector: 'finance' },
        { name: 'Google', sector: 'tech' },
        { name: 'Grab', sector: 'tech' },
        { name: 'Grammarly', sector: 'tech' },
        { name: 'Graviton', sector: 'tech' },
        { name: 'Groupon', sector: 'tech' },
        { name: 'Groww', sector: 'finance' },
        { name: 'Grubhub', sector: 'tech' },
        { name: 'GSA Capital', sector: 'finance' },
        { name: 'GSN Games', sector: 'tech' },
        { name: 'Guidewire', sector: 'tech' },
        { name: 'Gusto', sector: 'finance' },
        { name: 'Harness', sector: 'tech' },
        { name: 'HashedIn', sector: 'tech' },
        { name: 'HCL', sector: 'consulting' },
        { name: 'Hertz', sector: 'tech' },
        { name: 'Highspot', sector: 'tech' },
        { name: 'HiLabs', sector: 'tech' },
        { name: 'Hive', sector: 'tech' },
        { name: 'Hiver', sector: 'tech' },
        { name: 'Honeywell', sector: 'tech' },
        { name: 'Hotstar', sector: 'tech' },
        { name: 'Houzz', sector: 'tech' },
        { name: 'HP', sector: 'tech' },
        { name: 'HPE', sector: 'tech' },
        { name: 'HSBC', sector: 'finance' },
        { name: 'Huawei', sector: 'tech' },
        { name: 'Hubspot', sector: 'tech' },
        { name: 'Hudson River Trading', sector: 'finance' },
        { name: 'Hulu', sector: 'tech' },
        { name: 'IBM', sector: 'tech' },
        { name: 'IIT Bombay', sector: 'tech' },
        { name: 'IMC', sector: 'finance' },
        { name: 'Indeed', sector: 'tech' },
        { name: 'INDmoney', sector: 'finance' },
        { name: 'Info Edge', sector: 'tech' },
        { name: 'Informatica', sector: 'tech' },
        { name: 'Infosys', sector: 'consulting' },
        { name: 'InMobi', sector: 'tech' },
        { name: 'instabase', sector: 'tech' },
        { name: 'Instacart', sector: 'tech' },
        { name: 'Intel', sector: 'tech' },
        { name: 'Intuit', sector: 'tech' },
        { name: 'IVP', sector: 'finance' },
        { name: 'IXL', sector: 'tech' },
        { name: 'Jane Street', sector: 'finance' },
        { name: 'jio', sector: 'tech' },
        { name: 'josh technology', sector: 'tech' },
        { name: 'J.P. Morgan', sector: 'finance' },
        { name: 'Jump Trading', sector: 'finance' },
        { name: 'Juniper Networks', sector: 'tech' },
        { name: 'Juspay', sector: 'finance' },
        { name: 'Kakao', sector: 'tech' },
        { name: 'Karat', sector: 'tech' },
        { name: 'KLA', sector: 'tech' },
        { name: 'Komprise', sector: 'tech' },
        { name: 'Larsen & Toubro', sector: 'tech' },
        { name: 'Lendingkart Technologies', sector: 'finance' },
        { name: 'Lenskart', sector: 'tech' },
        { name: 'Licious', sector: 'tech' },
        { name: 'Liftoff', sector: 'tech' },
        { name: 'LINE', sector: 'tech' },
        { name: 'LinkedIn', sector: 'tech' },
        { name: 'LiveRamp', sector: 'tech' },
        { name: "Lowe's", sector: 'tech' },
        { name: 'LTI', sector: 'consulting' },
        { name: 'Lucid', sector: 'tech' },
        { name: 'Luxoft', sector: 'consulting' },
        { name: 'Lyft', sector: 'tech' },
        { name: 'Machine Zone', sector: 'tech' },
        { name: 'MakeMyTrip', sector: 'tech' },
        { name: 'Mapbox', sector: 'tech' },
        { name: 'MAQ Software', sector: 'tech' },
        { name: 'Mastercard', sector: 'finance' },
        { name: 'MathWorks', sector: 'tech' },
        { name: 'McKinsey', sector: 'consulting' },
        { name: 'Media.net', sector: 'tech' },
        { name: 'Meesho', sector: 'tech' },
        { name: 'Mercari', sector: 'tech' },
        { name: 'Meta', sector: 'tech' },
        { name: 'Microsoft', sector: 'tech' },
        { name: 'Microstrategy', sector: 'tech' },
        { name: 'Millennium', sector: 'finance' },
        { name: 'Mindtickle', sector: 'tech' },
        { name: 'MindTree', sector: 'consulting' },
        { name: 'Miro', sector: 'tech' },
        { name: 'Mitsogo', sector: 'tech' },
        { name: 'Mixpanel', sector: 'tech' },
        { name: 'Mobileye', sector: 'tech' },
        { name: 'Moengage', sector: 'tech' },
        { name: 'Moloco', sector: 'tech' },
        { name: 'MongoDB', sector: 'tech' },
        { name: 'Morgan Stanley', sector: 'finance' },
        { name: 'Mountblue', sector: 'tech' },
        { name: 'Moveworks', sector: 'tech' },
        { name: 'MSCI', sector: 'finance' },
        { name: 'Myntra', sector: 'tech' },
        { name: 'Nagarro', sector: 'consulting' },
        { name: 'National Instruments', sector: 'tech' },
        { name: 'National Payments Corporation of India', sector: 'finance' },
        { name: 'Navan', sector: 'tech' },
        { name: 'Navi', sector: 'finance' },
        { name: 'NCR', sector: 'tech' },
        { name: 'NetApp', sector: 'tech' },
        { name: 'NetEase', sector: 'tech' },
        { name: 'Netflix', sector: 'tech' },
        { name: 'Netskope', sector: 'tech' },
        { name: 'Netsuite', sector: 'enterprise' },
        { name: 'Nextdoor', sector: 'tech' },
        { name: 'Niantic', sector: 'tech' },
        { name: 'Nielsen', sector: 'tech' },
        { name: 'Nike', sector: 'tech' },
        { name: 'NinjaCart', sector: 'tech' },
        { name: 'Nokia', sector: 'tech' },
        { name: 'Nordstrom', sector: 'tech' },
        { name: 'Notion', sector: 'tech' },
        { name: 'Nuro', sector: 'tech' },
        { name: 'Nutanix', sector: 'tech' },
        { name: 'Nvidia', sector: 'tech' },
        { name: 'Nykaa', sector: 'tech' },
        { name: 'Odoo', sector: 'enterprise' },
        { name: 'Okta', sector: 'tech' },
        { name: 'OKX', sector: 'finance' },
        { name: 'Ola Cabs', sector: 'tech' },
        { name: 'OpenAI', sector: 'tech' },
        { name: 'Opendoor', sector: 'tech' },
        { name: 'opentext', sector: 'enterprise' },
        { name: 'Optiver', sector: 'finance' },
        { name: 'Optum', sector: 'tech' },
        { name: 'Oracle', sector: 'enterprise' },
        { name: 'Otter.ai', sector: 'tech' },
        { name: 'oyo', sector: 'tech' },
        { name: 'Ozon', sector: 'tech' },
        { name: 'Palantir Technologies', sector: 'tech' },
        { name: 'Palo Alto Networks', sector: 'tech' },
        { name: 'Patreon', sector: 'tech' },
        { name: 'Paycom', sector: 'finance' },
        { name: 'PayPal', sector: 'finance' },
        { name: 'PayPay', sector: 'finance' },
        { name: 'Paytm', sector: 'finance' },
        { name: 'PayU', sector: 'finance' },
        { name: 'peak6', sector: 'finance' },
        { name: 'Peloton', sector: 'tech' },
        { name: 'persistent systems', sector: 'consulting' },
        { name: 'PhonePe', sector: 'finance' },
        { name: 'Pinterest', sector: 'tech' },
        { name: 'Pocket Gems', sector: 'tech' },
        { name: 'Point72', sector: 'finance' },
        { name: 'Pony.ai', sector: 'tech' },
        { name: 'PornHub', sector: 'tech' },
        { name: 'Poshmark', sector: 'tech' },
        { name: 'Postmates', sector: 'tech' },
        { name: 'Publicis Sapient', sector: 'consulting' },
        { name: 'PubMatic', sector: 'tech' },
        { name: 'Pure Storage', sector: 'tech' },
        { name: 'Pwc', sector: 'consulting' },
        { name: 'QBurst', sector: 'tech' },
        { name: 'Qualcomm', sector: 'tech' },
        { name: 'Qualtrics', sector: 'tech' },
        { name: 'Quora', sector: 'tech' },
        { name: 'Rakuten', sector: 'tech' },
        { name: 'razorpay', sector: 'finance' },
        { name: 'RBC', sector: 'finance' },
        { name: 'redbus', sector: 'tech' },
        { name: 'Reddit', sector: 'tech' },
        { name: 'Remitly', sector: 'finance' },
        { name: 'Revolut', sector: 'finance' },
        { name: 'Riot Games', sector: 'tech' },
        { name: 'Ripple', sector: 'finance' },
        { name: 'Rippling', sector: 'tech' },
        { name: 'Rivian', sector: 'tech' },
        { name: 'Robinhood', sector: 'finance' },
        { name: 'Roblox', sector: 'tech' },
        { name: 'Roche', sector: 'tech' },
        { name: 'Rokt', sector: 'tech' },
        { name: 'Roku', sector: 'tech' },
        { name: 'Rubrik', sector: 'tech' },
        { name: 'Salesforce', sector: 'enterprise' },
        { name: 'Samsara', sector: 'tech' },
        { name: 'Samsung', sector: 'tech' },
        { name: 'SAP', sector: 'enterprise' },
        { name: 'Scale AI', sector: 'tech' },
        { name: 'Sentry', sector: 'tech' },
        { name: 'ServiceNow', sector: 'enterprise' },
        { name: 'ShareChat', sector: 'tech' },
        { name: 'Shopee', sector: 'tech' },
        { name: 'Shopify', sector: 'tech' },
        { name: 'Siemens', sector: 'tech' },
        { name: 'SIG', sector: 'finance' },
        { name: 'Sigmoid', sector: 'tech' },
        { name: 'Slice', sector: 'finance' },
        { name: 'smartnews', sector: 'tech' },
        { name: 'Smartsheet', sector: 'tech' },
        { name: 'Snap', sector: 'tech' },
        { name: 'Snapdeal', sector: 'tech' },
        { name: 'Snowflake', sector: 'tech' },
        { name: 'Societe Generale', sector: 'finance' },
        { name: 'SoFi', sector: 'finance' },
        { name: 'Softwire', sector: 'tech' },
        { name: 'Sony', sector: 'tech' },
        { name: 'SOTI', sector: 'tech' },
        { name: 'SoundHound', sector: 'tech' },
        { name: 'Splunk', sector: 'tech' },
        { name: 'Spotify', sector: 'tech' },
        { name: 'Sprinklr', sector: 'tech' },
        { name: 'Squarepoint Capital', sector: 'finance' },
        { name: 'Squarespace', sector: 'tech' },
        { name: 'StackAdapt', sector: 'tech' },
        { name: 'Stackline', sector: 'tech' },
        { name: 'Stripe', sector: 'finance' },
        { name: 'Sumo Logic', sector: 'tech' },
        { name: 'Swiggy', sector: 'tech' },
        { name: 'Synopsys', sector: 'tech' },
        { name: 'Tanium', sector: 'tech' },
        { name: 'Target', sector: 'tech' },
        { name: 'tcs', sector: 'consulting' },
        { name: 'Tech Mahindra', sector: 'consulting' },
        { name: 'Tejas Networks', sector: 'tech' },
        { name: 'Tekion', sector: 'tech' },
        { name: 'Tencent', sector: 'tech' },
        { name: 'Teradata', sector: 'enterprise' },
        { name: 'Tesco', sector: 'tech' },
        { name: 'Tesla', sector: 'tech' },
        { name: 'Texas Instruments', sector: 'tech' },
        { name: 'The Trade Desk', sector: 'tech' },
        { name: 'Thomson Reuters', sector: 'tech' },
        { name: 'thoughtspot', sector: 'tech' },
        { name: 'ThoughtWorks', sector: 'consulting' },
        { name: 'ThousandEyes', sector: 'tech' },
        { name: 'Tiger Analytics', sector: 'consulting' },
        { name: 'TikTok', sector: 'tech' },
        { name: 'Tinder', sector: 'tech' },
        { name: 'Tinkoff', sector: 'finance' },
        { name: 'Toast', sector: 'tech' },
        { name: 'Toptal', sector: 'tech' },
        { name: 'Tower Research Capital', sector: 'finance' },
        { name: 'Trexquant', sector: 'finance' },
        { name: 'Trilogy', sector: 'tech' },
        { name: 'Tripadvisor', sector: 'tech' },
        { name: 'Turing', sector: 'tech' },
        { name: 'Turo', sector: 'tech' },
        { name: 'Turvo', sector: 'tech' },
        { name: 'TuSimple', sector: 'tech' },
        { name: 'Twilio', sector: 'tech' },
        { name: 'Twitch', sector: 'tech' },
        { name: 'Two Sigma', sector: 'finance' },
        { name: 'Uber', sector: 'tech' },
        { name: 'UBS', sector: 'finance' },
        { name: 'UiPath', sector: 'tech' },
        { name: 'UKG', sector: 'enterprise' },
        { name: 'Unity', sector: 'tech' },
        { name: 'Upstart', sector: 'finance' },
        { name: 'Urban Company', sector: 'tech' },
        { name: 'USAA', sector: 'finance' },
        { name: 'Valve', sector: 'tech' },
        { name: 'Vanguard', sector: 'finance' },
        { name: 'Veeva Systems', sector: 'tech' },
        { name: 'Verily', sector: 'tech' },
        { name: 'Veritas', sector: 'tech' },
        { name: 'Verkada', sector: 'tech' },
        { name: 'Vimeo', sector: 'tech' },
        { name: 'Virtu Financial', sector: 'finance' },
        { name: 'Virtusa', sector: 'consulting' },
        { name: 'Visa', sector: 'finance' },
        { name: 'VK', sector: 'tech' },
        { name: 'VMware', sector: 'tech' },
        { name: 'Walmart Labs', sector: 'tech' },
        { name: 'Warnermedia', sector: 'tech' },
        { name: 'WatchGuard', sector: 'tech' },
        { name: 'Wayfair', sector: 'tech' },
        { name: 'Waymo', sector: 'tech' },
        { name: 'Wealthfront', sector: 'finance' },
        { name: 'Wells Fargo', sector: 'finance' },
        { name: 'WeRide', sector: 'tech' },
        { name: 'Western Digital', sector: 'tech' },
        { name: 'Whatnot', sector: 'tech' },
        { name: 'WinZO', sector: 'tech' },
        { name: 'Wipro', sector: 'consulting' },
        { name: 'Wise', sector: 'finance' },
        { name: 'Wish', sector: 'tech' },
        { name: 'Wissen Technology', sector: 'tech' },
        { name: 'Wix', sector: 'tech' },
        { name: 'Workday', sector: 'enterprise' },
        { name: 'Works Applications', sector: 'tech' },
        { name: 'WorldQuant', sector: 'finance' },
        { name: 'X', sector: 'tech' },
        { name: 'Yahoo', sector: 'tech' },
        { name: 'Yandex', sector: 'tech' },
        { name: 'Yelp', sector: 'tech' },
        { name: 'Yext', sector: 'tech' },
        { name: 'Zalando', sector: 'tech' },
        { name: 'Zendesk', sector: 'tech' },
        { name: 'Zenefits', sector: 'tech' },
        { name: 'Zepto', sector: 'tech' },
        { name: 'Zeta', sector: 'finance' },
        { name: 'zeta suite', sector: 'tech' },
        { name: 'Zillow', sector: 'tech' },
        { name: 'ZipRecruiter', sector: 'tech' },
        { name: 'Zluri', sector: 'tech' },
        { name: 'Zoho', sector: 'tech' },
        { name: 'Zomato', sector: 'tech' },
        { name: 'Zoom', sector: 'tech' },
        { name: 'Zoox', sector: 'tech' },
        { name: 'Zopsmart', sector: 'tech' },
        { name: 'ZS Associates', sector: 'consulting' },
        { name: 'ZScaler', sector: 'tech' },
        { name: 'Zynga', sector: 'tech' }
    ];

    const sectorLabels = {
        'tech': 'Technology',
        'finance': 'Financial Services',
        'enterprise': 'Enterprise Software',
        'consulting': 'Consulting'
    };

    // Load Companies
    const companiesGrid = document.getElementById('companiesGrid');
    if (companiesGrid) {
        function renderCompanies(filteredCompanies) {
            companiesGrid.innerHTML = '';
            
            if (filteredCompanies.length === 0) {
                companiesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 2rem;">No companies found matching your criteria.</p>';
                return;
            }

            filteredCompanies.forEach(company => {
                const card = document.createElement('div');
                card.className = 'company-card';
                card.innerHTML = `
                    <h3 class="company-name">${company.name}</h3>
                    <span class="company-sector">${sectorLabels[company.sector]}</span>
                    <ul class="company-files">
                        <li>30 Days Problem Set</li>
                        <li>3 Months Problem Set</li>
                        <li>6 Months Problem Set</li>
                        <li>Historical Problem Set</li>
                        <li>Complete Problem Set</li>
                    </ul>
                `;
                
                card.addEventListener('click', function() {
                    window.open(`https://github.com/Mohammad-Faiz-Cloud-Engineer/Technical-Interview-Problem/tree/main/${encodeURIComponent(company.name)}`, '_blank');
                });
                
                companiesGrid.appendChild(card);
            });
        }

        // Initial render
        renderCompanies(companies);

        // Search functionality
        const searchInput = document.getElementById('companySearch');
        const sectorFilter = document.getElementById('sectorFilter');

        function filterCompanies() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedSector = sectorFilter.value;

            const filtered = companies.filter(company => {
                const matchesSearch = company.name.toLowerCase().includes(searchTerm);
                const matchesSector = selectedSector === 'all' || company.sector === selectedSector;
                return matchesSearch && matchesSector;
            });

            renderCompanies(filtered);
        }

        if (searchInput) {
            searchInput.addEventListener('input', filterCompanies);
        }

        if (sectorFilter) {
            sectorFilter.addEventListener('change', filterCompanies);
        }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Unobserve after animation to prevent unnecessary checks
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .process-step, .company-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add active state to current page in navigation
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const normalizedPath = currentPath === '' ? 'index.html' : currentPath;
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === normalizedPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
