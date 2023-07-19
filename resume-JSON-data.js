 //  2. Create your own resume data in JSON format
 
 //                             RESUME IN JSON format
 
 let myResume = {
    "personalDetails": [{
        "name": "Namrata Desai",
        "email": "namrata57desai@gmail.com",
        "contactNumber": 9082159156,
        "location": [{
            "address": "G-5/Dharti Puja Apartment",
            "postalCode": 401107,
            "city": "Mumbai",
            "state": "Maharashtra",
            "country": "India"
        }],
        "qualification": [{
            "degree": "Bachelor's in Accounting and Finance",
            "institute": "K.E.S SHROFF COLLEGE - Mumbai University",
            "department": "Account and Finance",
            "passingYear": "2019",
            "CGPA": 7.92
        }],
        "work": [{
            "companyName": "Concentrix",
            "position": "Customer Service Representative",
            "startDate": "22-06-2021",
            "endDate": "01-12-2022",
            "summary": "I worked as an advisor level for Flipkart process at Concentrix. I was responsible for the customer service team."
        }],
        "certificate": [{
            "name": "Certificate in Business Management",
            "year" : "2020",
            "issuer": "NMIMS Global (Deemed-to-be-university)",
            "url": "https://studentzone-ngasce.nmims.edu/Marksheets/Certificates/Certificate_Self_22-Feb-2021_T8kCM.pdf"
        }],
        "skills": [{
            "programLanguage": "HTML, CSS, BOOTSTRAP, JAVASCRIPT",
            "level": "beginner"
        }],
        "profile": [{
            "linkedIn": "www.linkedin.com/in/namrata-desai-744a92195",
            "github": "https://github.com/Namrata-57"
        }],
        "interest": [{
            "dance": "Choreographer",
            "teaching": "Personal Tutor for school students",
            "handmadeCrafts": [{
                "name": "ShreejiHandmade",
                "url": "https://instagram.com/shreejihandmade?igshid=ZDdkNTZiNTM=",
                "description": "ShreejiHandmade is a social startup business that provides handmade crafts and many handmade accessories"
            }]
        }],
        "languages": [{
            "language": "English, Gujrati, Hindi, Marathi"
        }] 
    }]
 }

console.log(myResume);