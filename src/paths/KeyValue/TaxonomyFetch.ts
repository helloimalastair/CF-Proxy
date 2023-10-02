import { DateOnly, OpenAPIRoute, Path, Str, Num, DateTime, OpenAPIRouter, withParams, Int } from '@cloudflare/itty-router-openapi'

const Taxonomy = {
    "categories": [
      {
        "id": 1,
        "label": "Arts & Entertainment",
        "top": true,
        "children": [
          {
            "id": 1.001,
            "label": "Books & Literature"
          },
          {
            "id": 1.002,
            "label": "Celebrity Fan/Gossip"
          },
          {
            "id": 1.003,
            "label": "Fine Art"
          },
          {
            "id": 1.004,
            "label": "Humor"
          },
          {
            "id": 1.005,
            "label": "Movies"
          },
          {
            "id": 1.006,
            "label": "Music"
          },
          {
            "id": 1.007,
            "label": "Television"
          }
        ]
      },
      {
        "id": 2,
        "label": "Automotive",
        "top": true,
        "children": [
          {
            "id": 2.001,
            "label": "Auto Parts"
          },
          {
            "id": 2.002,
            "label": "Auto Repair"
          },
          {
            "id": 2.003,
            "label": "Buying/Selling Cars"
          },
          {
            "id": 2.004,
            "label": "Car Culture"
          },
          {
            "id": 2.005,
            "label": "Certified Pre-Owned"
          },
          {
            "id": 2.006,
            "label": "Convertible"
          },
          {
            "id": 2.007,
            "label": "Coupe"
          },
          {
            "id": 2.008,
            "label": "Crossover"
          },
          {
            "id": 2.009,
            "label": "Diesel"
          },
          {
            "id": 2.01,
            "label": "Electric Vehicle"
          },
          {
            "id": 2.011,
            "label": "Hatchback"
          },
          {
            "id": 2.012,
            "label": "Hybrid"
          },
          {
            "id": 2.013,
            "label": "Luxury"
          },
          {
            "id": 2.014,
            "label": "Minivan"
          },
          {
            "id": 2.015,
            "label": "Motocycles"
          },
          {
            "id": 2.016,
            "label": "Off-Road Vehicles"
          },
          {
            "id": 2.017,
            "label": "Performance Vehicles"
          },
          {
            "id": 2.018,
            "label": "Pickup"
          },
          {
            "id": 2.019,
            "label": "Road-Side Assistance"
          },
          {
            "id": 2.02,
            "label": "Sedan"
          },
          {
            "id": 2.021,
            "label": "Trucks & Accessories"
          },
          {
            "id": 2.022,
            "label": "Vinatage Cars"
          },
          {
            "id": 2.023,
            "label": "Wagon"
          }
        ]
      },
      {
        "id": 3,
        "label": "Business",
        "top": true,
        "children": [
          {
            "id": 3.001,
            "label": "Advertising"
          },
          {
            "id": 3.002,
            "label": "Agriculture"
          },
          {
            "id": 3.003,
            "label": "Biotech/Biomedical"
          },
          {
            "id": 3.004,
            "label": "Business Software"
          },
          {
            "id": 3.005,
            "label": "Construction"
          },
          {
            "id": 3.006,
            "label": "Forestry"
          },
          {
            "id": 3.007,
            "label": "Government"
          },
          {
            "id": 3.008,
            "label": "Green Solutions"
          },
          {
            "id": 3.009,
            "label": "Human Resources"
          },
          {
            "id": 3.01,
            "label": "Logistics"
          },
          {
            "id": 3.011,
            "label": "Marketing"
          },
          {
            "id": 3.012,
            "label": "Metals"
          }
        ]
      },
      {
        "id": 4,
        "label": "Career",
        "top": true,
        "children": [
          {
            "id": 4.001,
            "label": "Career Planning"
          },
          {
            "id": 4.002,
            "label": "College"
          },
          {
            "id": 4.003,
            "label": "Financial Aid"
          },
          {
            "id": 4.004,
            "label": "Job Fairs"
          },
          {
            "id": 4.005,
            "label": "Job Search"
          },
          {
            "id": 4.006,
            "label": "Resume Writing/Advice"
          },
          {
            "id": 4.007,
            "label": "Nursing"
          },
          {
            "id": 4.008,
            "label": "Scholarships"
          },
          {
            "id": 4.009,
            "label": "Telecommuting"
          },
          {
            "id": 4.01,
            "label": "U.S. Military"
          },
          {
            "id": 4.011,
            "label": "Career Advice"
          }
        ]
      },
      {
        "id": 5,
        "label": "Eduction",
        "top": true,
        "children": [
          {
            "id": 5.001,
            "label": "7-12 Education"
          },
          {
            "id": 5.002,
            "label": "Adult Education"
          },
          {
            "id": 5.003,
            "label": "Art History"
          },
          {
            "id": 5.004,
            "label": "Colledge Administration"
          },
          {
            "id": 5.005,
            "label": "College Life"
          },
          {
            "id": 5.006,
            "label": "Distance Learning"
          },
          {
            "id": 5.007,
            "label": "English as a 2nd Language"
          },
          {
            "id": 5.008,
            "label": "Language Learning"
          },
          {
            "id": 5.009,
            "label": "Graduate School"
          },
          {
            "id": 5.01,
            "label": "Homeschooling"
          },
          {
            "id": 5.011,
            "label": "Homework/Study Tips"
          },
          {
            "id": 5.012,
            "label": "K-6 Educators"
          },
          {
            "id": 5.013,
            "label": "Private School"
          },
          {
            "id": 5.014,
            "label": "Special Education"
          },
          {
            "id": 5.015,
            "label": "Studying Business"
          }
        ]
      },
      {
        "id": 6,
        "label": "Family & Parenting",
        "top": true,
        "children": [
          {
            "id": 6.001,
            "label": "Adoption"
          },
          {
            "id": 6.002,
            "label": "Babies & Toddlers"
          },
          {
            "id": 6.003,
            "label": "Daycare/Pre School"
          },
          {
            "id": 6.004,
            "label": "Family Internet"
          },
          {
            "id": 6.005,
            "label": "Parenting - K-6 Kids"
          },
          {
            "id": 6.006,
            "label": "Parenting teens"
          },
          {
            "id": 6.007,
            "label": "Pregnancy"
          },
          {
            "id": 6.008,
            "label": "Special Needs Kids"
          },
          {
            "id": 6.009,
            "label": "Eldercare"
          }
        ]
      },
      {
        "id": 7,
        "label": "Health & Fitness",
        "top": true,
        "categories": [
          {
            "id": 7.001,
            "label": "Exercise"
          },
          {
            "id": 7.002,
            "label": "Attention Deficit"
          },
          {
            "id": 7.003,
            "label": "AIDS/HIV"
          },
          {
            "id": 7.004,
            "label": "Allergies"
          },
          {
            "id": 7.005,
            "label": "Alternative Medicine"
          },
          {
            "id": 7.006,
            "label": "Arthritis"
          },
          {
            "id": 7.007,
            "label": "Asthma"
          },
          {
            "id": 7.008,
            "label": "Autism/PDD"
          },
          {
            "id": 7.009,
            "label": "Bipolar Disorder"
          },
          {
            "id": 7.01,
            "label": "Brain Tumor"
          },
          {
            "id": 7.011,
            "label": "Cancer"
          },
          {
            "id": 7.012,
            "label": "Cholesterol"
          },
          {
            "id": 7.013,
            "label": "Chronic Fatigue Syndrome"
          },
          {
            "id": 7.014,
            "label": "Chronic Pain"
          },
          {
            "id": 7.015,
            "label": "Cold & Flu"
          },
          {
            "id": 7.016,
            "label": "Deafness"
          },
          {
            "id": 7.017,
            "label": "Dental Care"
          },
          {
            "id": 7.018,
            "label": "Depression"
          },
          {
            "id": 7.019,
            "label": "Dermatology"
          },
          {
            "id": 7.02,
            "label": "Diabetes"
          },
          {
            "id": 7.021,
            "label": "Epilepsy"
          },
          {
            "id": 7.022,
            "label": "GERD/Acid Reflux"
          },
          {
            "id": 7.023,
            "label": "Headaches/Migraines"
          },
          {
            "id": 7.024,
            "label": "Heart Disease"
          },
          {
            "id": 7.025,
            "label": "Herbs for Health"
          },
          {
            "id": 7.026,
            "label": "Holistic Healing"
          },
          {
            "id": 7.027,
            "label": "IBS/Crohn's Disease"
          },
          {
            "id": 7.028,
            "label": "Incest/Abuse Support"
          },
          {
            "id": 7.029,
            "label": "Incontinence"
          },
          {
            "id": 7.03,
            "label": "Infertility"
          },
          {
            "id": 7.031,
            "label": "Men's Health"
          },
          {
            "id": 7.032,
            "label": "Nutrition"
          },
          {
            "id": 7.033,
            "label": "Orthopedics"
          },
          {
            "id": 7.034,
            "label": "Panic/Anxiety Disorders"
          },
          {
            "id": 7.035,
            "label": "Pediatrics"
          },
          {
            "id": 7.036,
            "label": "Physical Therapy"
          },
          {
            "id": 7.037,
            "label": "Psychology/Psychiatry"
          },
          {
            "id": 7.038,
            "label": "Senor Health"
          },
          {
            "id": 7.039,
            "label": "Sexuality"
          },
          {
            "id": 7.04,
            "label": "Sleep Disorders"
          },
          {
            "id": 7.041,
            "label": "Smoking Cessation"
          },
          {
            "id": 7.042,
            "label": "Substance Abuse"
          },
          {
            "id": 7.043,
            "label": "Thyroid Disease"
          },
          {
            "id": 7.043,
            "label": "Weight Loss"
          },
          {
            "id": 7.044,
            "label": "Women's Health"
          }
        ]
      },
      {
        "id": 8,
        "label": "Food & Drink",
        "top": true,
        "categories": [
          {
            "id": 8.001,
            "label": "American Cuisine"
          },
          {
            "id": 8.002,
            "label": "Barbecues & Grilling"
          },
          {
            "id": 8.003,
            "label": "Cajun/Creole"
          },
          {
            "id": 8.004,
            "label": "Chinese Cuisine"
          },
          {
            "id": 8.005,
            "label": "Cocktails/Beer"
          },
          {
            "id": 8.006,
            "label": "Coffee/Tea"
          },
          {
            "id": 8.007,
            "label": "Cuisine-Specific"
          },
          {
            "id": 8.008,
            "label": "Desserts & Baking"
          },
          {
            "id": 8.009,
            "label": "Dining Out"
          },
          {
            "id": 8.01,
            "label": "Food Allergies"
          },
          {
            "id": 8.011,
            "label": "French Cuisine"
          },
          {
            "id": 8.012,
            "label": "Health/Lowfat Cooking"
          },
          {
            "id": 8.013,
            "label": "Italian Cuisine"
          },
          {
            "id": 8.014,
            "label": "Japanese Cuisine"
          },
          {
            "id": 8.015,
            "label": "Mexican Cuisine"
          },
          {
            "id": 8.016,
            "label": "Vegan"
          },
          {
            "id": 8.017,
            "label": "Vegetarian"
          },
          {
            "id": 8.018,
            "label": "Wine"
          }
        ]
      },
      {
        "id": 9,
        "label": "Hobbies & Interest",
        "top": true,
        "categories": [
          {
            "id": 9.001,
            "label": "Art/Technology"
          },
          {
            "id": 9.002,
            "label": "Arts & Crafts"
          },
          {
            "id": 9.003,
            "label": "Beadwork"
          },
          {
            "id": 9.004,
            "label": "Birdwatching"
          },
          {
            "id": 9.005,
            "label": "Board Games/Puzzles"
          },
          {
            "id": 9.006,
            "label": "Candle & Soap Making"
          },
          {
            "id": 9.007,
            "label": "Card Games"
          },
          {
            "id": 9.008,
            "label": "Chess"
          },
          {
            "id": 9.009,
            "label": "Cigars"
          },
          {
            "id": 9.01,
            "label": "Collecting"
          },
          {
            "id": 9.011,
            "label": "Comic Books"
          },
          {
            "id": 9.012,
            "label": "Drawing/Sketching"
          },
          {
            "id": 9.013,
            "label": "Freelance Writing"
          },
          {
            "id": 9.014,
            "label": "Genealogy"
          },
          {
            "id": 9.015,
            "label": "Getting Published"
          },
          {
            "id": 9.016,
            "label": "Guitar"
          },
          {
            "id": 9.017,
            "label": "Home Recording"
          },
          {
            "id": 9.018,
            "label": "Investors & Patents"
          },
          {
            "id": 9.019,
            "label": "Jewelry Making"
          },
          {
            "id": 9.02,
            "label": "Magic & Illusion"
          },
          {
            "id": 9.021,
            "label": "Needlework"
          },
          {
            "id": 9.022,
            "label": "Painting"
          },
          {
            "id": 9.023,
            "label": "Photography"
          },
          {
            "id": 9.024,
            "label": "Radio"
          },
          {
            "id": 9.025,
            "label": "Roleplaying Games"
          },
          {
            "id": 9.026,
            "label": "Sci-Fi & Fantasy"
          },
          {
            "id": 9.027,
            "label": "Scrapbooking"
          },
          {
            "id": 9.028,
            "label": "Screenwriting"
          },
          {
            "id": 9.029,
            "label": "Stamps & Coins"
          },
          {
            "id": 9.03,
            "label": "Video & Computer Games"
          },
          {
            "id": 9.031,
            "label": "Woodworking"
          }
        ]
      },
      {
        "id": 10,
        "label": "Home & Garden",
        "top": true,
        "categories": [
          {
            "id": 10.001,
            "label": "Appliances"
          },
          {
            "id": 10.002,
            "label": "Entertaining"
          },
          {
            "id": 10.003,
            "label": "Environmental Safety"
          },
          {
            "id": 10.004,
            "label": "Gardening"
          },
          {
            "id": 10.005,
            "label": "Home Repair"
          },
          {
            "id": 10.006,
            "label": "Home Theater"
          },
          {
            "id": 10.007,
            "label": "Interior Decorating"
          },
          {
            "id": 10.008,
            "label": "Landscaping"
          },
          {
            "id": 10.009,
            "label": "Remodeling & Construction"
          }
        ]
      },
      {
        "id": 11,
        "label": "Law, Gov't & Politics",
        "top": true,
        "categories": [
          {
            "id": 11.001,
            "label": "Immigration"
          },
          {
            "id": 11.002,
            "label": "Legal Issues"
          },
          {
            "id": 11.003,
            "label": "U.S. Government Resources"
          },
          {
            "id": 11.004,
            "label": "Politics"
          },
          {
            "id": 11.005,
            "label": "Commentary"
          }
        ]
      },
      {
        "id": 12,
        "label": "News",
        "top": true,
        "categories": [
          {
            "id": 12.001,
            "label": "International News"
          },
          {
            "id": 12.002,
            "label": "National News"
          },
          {
            "id": 12.003,
            "label": "International News"
          },
          {
            "id": 12.004,
            "label": "Local News"
          }
        ]
      },
      {
        "id": 13,
        "label": "Personal Finance",
        "top": true,
        "categories": [
          {
            "id": 13.001,
            "label": "Beginning Investing"
          },
          {
            "id": 13.002,
            "label": "Credit/Debt & Loans"
          },
          {
            "id": 13.003,
            "label": "Financial News"
          },
          {
            "id": 13.004,
            "label": "Financial Planning"
          },
          {
            "id": 13.005,
            "label": "Hedge Fund"
          },
          {
            "id": 13.006,
            "label": "Insurance"
          },
          {
            "id": 13.007,
            "label": "Investing"
          },
          {
            "id": 13.008,
            "label": "Mutual Funds"
          },
          {
            "id": 13.009,
            "label": "Options"
          },
          {
            "id": 13.01,
            "label": "Retirement Planning"
          },
          {
            "id": 13.011,
            "label": "Stocks"
          },
          {
            "id": 13.012,
            "label": "Tax Planning"
          }
        ]
      },
      {
        "id": 14,
        "label": "Society",
        "top": true,
        "categories": [
          {
            "id": 14.001,
            "label": "Dating"
          },
          {
            "id": 14.002,
            "label": "Divorce Support"
          },
          {
            "id": 14.003,
            "label": "Gay Life"
          },
          {
            "id": 14.004,
            "label": "Marriage"
          },
          {
            "id": 14.005,
            "label": "Senior Living"
          },
          {
            "id": 14.006,
            "label": "Teens"
          },
          {
            "id": 14.007,
            "label": "Weddings"
          },
          {
            "id": 14.008,
            "label": "Ethnic Specific"
          }
        ]
      },
      {
        "id": 15,
        "label": "Science",
        "top": true,
        "categories": [
          {
            "id": 15.001,
            "label": "Astrology"
          },
          {
            "id": 15.002,
            "label": "Biology"
          },
          {
            "id": 15.003,
            "label": "Chemistry"
          },
          {
            "id": 15.004,
            "label": "Geology"
          },
          {
            "id": 15.005,
            "label": "Paranormal Phenomena"
          },
          {
            "id": 15.006,
            "label": "Physics"
          },
          {
            "id": 15.007,
            "label": "Space/Astronomy"
          },
          {
            "id": 15.008,
            "label": "Geography"
          },
          {
            "id": 15.009,
            "label": "Botany"
          },
          {
            "id": 15.01,
            "label": "Weather"
          }
        ]
      },
      {
        "id": 16,
        "label": "Pets",
        "top": true,
        "categories": [
          {
            "id": 16.001,
            "label": "Aquariums"
          },
          {
            "id": 16.002,
            "label": "Birds"
          },
          {
            "id": 16.003,
            "label": "Cats"
          },
          {
            "id": 16.004,
            "label": "Dogs"
          },
          {
            "id": 16.005,
            "label": "Large Animals"
          },
          {
            "id": 16.006,
            "label": "Reptiles"
          },
          {
            "id": 16.007,
            "label": "Veterinary Medicine"
          }
        ]
      },
      {
        "id": 17,
        "label": "Sport",
        "top": true,
        "categories": [
          {
            "id": 17.001,
            "label": "Auto Racing"
          },
          {
            "id": 17.002,
            "label": "Baseball"
          },
          {
            "id": 17.003,
            "label": "Bicycling"
          },
          {
            "id": 17.004,
            "label": "Bodybuilding"
          },
          {
            "id": 17.005,
            "label": "Boxing"
          },
          {
            "id": 17.006,
            "label": "Canoeing/Kayaking"
          },
          {
            "id": 17.007,
            "label": "Cheerleading"
          },
          {
            "id": 17.008,
            "label": "Climbing"
          },
          {
            "id": 17.009,
            "label": "Cricket"
          },
          {
            "id": 17.01,
            "label": "Figure Skating"
          },
          {
            "id": 17.011,
            "label": "Fly Fishing"
          },
          {
            "id": 17.012,
            "label": "Football"
          },
          {
            "id": 17.013,
            "label": "Freshwater Fishing"
          },
          {
            "id": 17.014,
            "label": "Game & Fish"
          },
          {
            "id": 17.015,
            "label": "Golf"
          },
          {
            "id": 17.016,
            "label": "Horse Racing"
          },
          {
            "id": 17.017,
            "label": "Horses"
          },
          {
            "id": 17.018,
            "label": "Hunting/Shooting"
          },
          {
            "id": 17.019,
            "label": "Inline Skating"
          },
          {
            "id": 17.02,
            "label": "Martial Arts"
          },
          {
            "id": 17.021,
            "label": "Mountain Biking"
          },
          {
            "id": 17.022,
            "label": "NASCAR Racing"
          },
          {
            "id": 17.023,
            "label": "Olympics"
          },
          {
            "id": 17.024,
            "label": "Paintball"
          },
          {
            "id": 17.025,
            "label": "Power & Motorcycles"
          },
          {
            "id": 17.026,
            "label": "Pro Basketball"
          },
          {
            "id": 17.027,
            "label": "Pro Ice Hockey"
          },
          {
            "id": 17.028,
            "label": "Rodeo"
          },
          {
            "id": 17.029,
            "label": "Rugby"
          },
          {
            "id": 17.03,
            "label": "Running/Jogging"
          },
          {
            "id": 17.031,
            "label": "Sailing"
          },
          {
            "id": 17.032,
            "label": "Saltwater Fishing"
          },
          {
            "id": 17.033,
            "label": "Scuba Diving"
          },
          {
            "id": 17.034,
            "label": "Skateboarding"
          },
          {
            "id": 17.035,
            "label": "Skiing"
          },
          {
            "id": 17.036,
            "label": "Snowboarding"
          },
          {
            "id": 17.037,
            "label": "Surfing/Bodyboarding"
          },
          {
            "id": 17.038,
            "label": "Swimming"
          },
          {
            "id": 17.039,
            "label": "Table Tennis/Ping-Pong"
          },
          {
            "id": 17.04,
            "label": "Tennis"
          },
          {
            "id": 17.041,
            "label": "Volleyball"
          },
          {
            "id": 17.042,
            "label": "Walking"
          },
          {
            "id": 17.043,
            "label": "Waterski/Wakeboard"
          },
          {
            "id": 17.044,
            "label": "World Soccer"
          }
        ]
      },
      {
        "id": 18,
        "label": "Style & Fashion",
        "top": true,
        "categories": [
          {
            "id": 18.001,
            "label": "Beauty"
          },
          {
            "id": 18.002,
            "label": "Body Art"
          },
          {
            "id": 18.003,
            "label": "Fashion"
          },
          {
            "id": 18.004,
            "label": "Jewelry"
          },
          {
            "id": 18.005,
            "label": "Clothing"
          },
          {
            "id": 18.006,
            "label": "Accessories"
          }
        ]
      },
      {
        "id": 19,
        "label": "Technology & Computing",
        "top": true,
        "categories": [
          {
            "id": 19.001,
            "label": "3-D Graphics"
          },
          {
            "id": 19.002,
            "label": "Animation"
          },
          {
            "id": 19.003,
            "label": "Antivirus Software"
          },
          {
            "id": 19.004,
            "label": "C/C++"
          },
          {
            "id": 19.005,
            "label": "Cameras & Camcorders"
          },
          {
            "id": 19.006,
            "label": "Cell Phones"
          },
          {
            "id": 19.007,
            "label": "Computer Certification"
          },
          {
            "id": 19.008,
            "label": "Computer Networking"
          },
          {
            "id": 19.009,
            "label": "Computer Peripherals"
          },
          {
            "id": 19.01,
            "label": "Computer Reviews"
          },
          {
            "id": 19.011,
            "label": "Data Centers"
          },
          {
            "id": 19.012,
            "label": "Databases"
          },
          {
            "id": 19.013,
            "label": "Desktop Publishing"
          },
          {
            "id": 19.014,
            "label": "Desktop Video"
          },
          {
            "id": 19.015,
            "label": "Email"
          },
          {
            "id": 19.016,
            "label": "Graphics Software"
          },
          {
            "id": 19.071,
            "label": "Home Video/DVD"
          },
          {
            "id": 19.018,
            "label": "Internet Technology"
          },
          {
            "id": 19.019,
            "label": "Java"
          },
          {
            "id": 19.02,
            "label": "JavaScript"
          },
          {
            "id": 19.021,
            "label": "Mac Support"
          },
          {
            "id": 19.022,
            "label": "MP3/MIDI"
          },
          {
            "id": 19.023,
            "label": "Net Conferencing"
          },
          {
            "id": 19.024,
            "label": "Net for Beginners"
          },
          {
            "id": 19.025,
            "label": "Network Security"
          },
          {
            "id": 19.026,
            "label": "Palmtops/PDAs"
          },
          {
            "id": 19.027,
            "label": "PC Support"
          },
          {
            "id": 19.028,
            "label": "Portable"
          },
          {
            "id": 19.029,
            "label": "Entertainment"
          },
          {
            "id": 19.03,
            "label": "Shareware/Freeware"
          },
          {
            "id": 19.031,
            "label": "Unix"
          },
          {
            "id": 19.032,
            "label": "Visual Basic"
          },
          {
            "id": 19.033,
            "label": "Web Clip Art"
          },
          {
            "id": 19.034,
            "label": "Web Design/HTML"
          },
          {
            "id": 19.035,
            "label": "Web Search"
          },
          {
            "id": 19.036,
            "label": "Windows"
          }
        ]
      },
      {
        "id": 20,
        "label": "Travel",
        "top": true,
        "categories": [
          {
            "id": 20.001,
            "label": "Adventure Travel"
          },
          {
            "id": 20.002,
            "label": "Africa"
          },
          {
            "id": 20.003,
            "label": "Air Travel"
          },
          {
            "id": 20.004,
            "label": "Australia & New Zealand"
          },
          {
            "id": 20.005,
            "label": "Bed & Breakfasts"
          },
          {
            "id": 20.006,
            "label": "Budget Travel"
          },
          {
            "id": 20.007,
            "label": "Business Travel"
          },
          {
            "id": 20.008,
            "label": "By US Locale"
          },
          {
            "id": 20.009,
            "label": "Camping"
          },
          {
            "id": 20.01,
            "label": "Canada"
          },
          {
            "id": 20.011,
            "label": "Caribbean"
          },
          {
            "id": 20.012,
            "label": "Cruises"
          },
          {
            "id": 20.013,
            "label": "Eastern Europe"
          },
          {
            "id": 20.014,
            "label": "Europe"
          },
          {
            "id": 20.015,
            "label": "France"
          },
          {
            "id": 20.016,
            "label": "Greece"
          },
          {
            "id": 20.017,
            "label": "Honeymoons/Getaways"
          },
          {
            "id": 20.018,
            "label": "Hotels"
          },
          {
            "id": 20.019,
            "label": "Italy"
          },
          {
            "id": 20.02,
            "label": "Japan"
          },
          {
            "id": 20.021,
            "label": "Mexico & Central America"
          },
          {
            "id": 20.022,
            "label": "National Parks"
          },
          {
            "id": 20.023,
            "label": "South America"
          },
          {
            "id": 20.024,
            "label": "Spas"
          },
          {
            "id": 20.025,
            "label": "Theme Parks"
          },
          {
            "id": 20.026,
            "label": "Traveling with Kids"
          },
          {
            "id": 20.027,
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": 21,
        "label": "Real Estate",
        "top": true,
        "categories": [
          {
            "id": 21.001,
            "label": "Apartments"
          },
          {
            "id": 21.002,
            "label": "Architects"
          },
          {
            "id": 21.003,
            "label": "Buying/Selling Homes"
          }
        ]
      },
      {
        "id": 22,
        "label": "Shopping",
        "top": true,
        "categories": [
          {
            "id": 22.001,
            "label": "Contests & Freebies"
          },
          {
            "id": 22.002,
            "label": "Couponing"
          },
          {
            "id": 22.003,
            "label": "Comparison"
          },
          {
            "id": 22.004,
            "label": "Engines"
          }
        ]
      },
      {
        "id": 23,
        "label": "Religion & Spirit",
        "top": true,
        "categories": [
          {
            "id": 23.001,
            "label": "Alternative Religions"
          },
          {
            "id": 23.002,
            "label": "Atheism/Agnosticism"
          },
          {
            "id": 23.003,
            "label": "Buddhism"
          },
          {
            "id": 23.004,
            "label": "Catholicism"
          },
          {
            "id": 23.005,
            "label": "Christianity"
          },
          {
            "id": 23.006,
            "label": "Hinduism"
          },
          {
            "id": 23.007,
            "label": "Islam"
          },
          {
            "id": 23.008,
            "label": "Judaism"
          },
          {
            "id": 23.009,
            "label": "Latter-Day Saints"
          },
          {
            "id": 23.01,
            "label": "Pagan/Wiccan"
          }
        ]
      },
      {
        "id": 24,
        "label": "Crypto Currency",
        "top": true,
        "categories": [
          {
            "id": 24.001,
            "label": "Algorand"
          },
          {
            "id": 24.002,
            "label": "Bitcoin"
          },
          {
            "id": 24.003,
            "label": "Ethereum"
          },
          {
            "id": 24.004,
            "label": "Exchanges"
          },
          {
            "id": 24.005,
            "label": "NFTs"
          },
          {
            "id": 24.01,
            "label": "Shit/Meme Coins"
          }
        ]
      },
      {
        "id": 25,
        "label": "Cannabis",
        "top": true,
        "categories": [
          {
            "id": 25.001,
            "label": "Growth"
          },
          {
            "id": 25.002,
            "label": "Sales"
          },
          {
            "id": 25.003,
            "label": "Artwork"
          },
          {
            "id": 25.004,
            "label": "Collateral"
          }
        ]
      }
    ]
  }

export default class TaxonomyFetch extends OpenAPIRoute {
    static schema = {
      tags: ['Config'],
      summary: 'Get a list of items by their taxonomy and id',
      parameters: {
      },
      responses: {
        '200': {
          schema: {
            brand: {Taxonomy}
          },
        },
      },
    }
  
    async handle(request: Request, env: any, context: any, data: any ) {
      const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
      };
      
      if (request.method === "OPTIONS") {
        return new Response("OK", {
          headers: corsHeaders
        });
      }
      
      //fetch a task using the brandSlug
      let id=env.CONFIG.get("taxonomy", { type: "text" })
  
      return new Response( await id, {
        headers: {
          'Content-type': 'application/json',
          ...corsHeaders //uses the spread operator to include the CORS headers.
        }
      } );
    }
  }