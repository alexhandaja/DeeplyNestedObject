const GWK = {
    
    fullName: 'Garuda Wisnu Kencana',
    location: 'Bali, Indonesia',
    color: 'emerald and copper green',
   isTourist: true,
    funFacts:[
        'dedicated to the Hindu God of Vishnu and his mount, the mythical bird',
        'was completed in August 2018',
        'The landmark of Bali',
        'Taller than the statue of liberty',
        'Was a result of the hardwork of 200 artists',
        'Made up of 3,000 tons of copper and bronze pieces',
        'Just a tourist destination',
        'Is big!',
        'I just wanted to take some cool pictures',
    ],

    features: {
        type: 'National park',
        address: 'PT Garuda Adhimatra Indonesia Jl. Raya Uluwatu, Ungasan, Kuta Selatan Badung 80364, Bali-Indonesia',
        phone: '+62 (361) 700 808',
        email: 'info@gwkbali.com',
        sights: ['statue','ponds','limestone wall','dance shows','city lights',],
    },

    time: {
        opening: '9am-8pm',
        culturalShow: '10am-6:30pm',
        movie: '11am-6pm',
    },

    entranceFee: [
        {
            typeOfVisitor: 'International',
            adult: "IDR 125k",
            child: "IDR 100K",
            under110: "free",

        },

        {
            typeOfVisitor: 'Indonesian',
            adult: "IDR 85K",
            child: "IDR 85k",
            under110: "free",
        },

        {
            typeOfVisitor: 'Local',
            adult: "IDR 60k",
            child: "IDR 60k",
            under110: "free",
        },

        ],

        parkingFee: [
            {
                typeOfVehicle: 'Motorcycle',
                price: "IDR 5K"
    
            },

            {
                typeOfVehicle: 'Motorcycle',
                price: "IDR 10K"
            },

            {
                typeOfVehicle: 'Motorcycle',
                price: "IDR 20K"
            },
    
            ],


        visit: function (visit){
            let freeDays = ['monday','wednesday','thursday'];
            let busyDays = ['friday','saturday','sunday'];

            if (visit == freeDays ) {
                console.log("go home");
        return;
            }
            console.log(visit + "is the perfect day!");
        },


        takePictures: function(foreigner) {
            if (!foreigner) {
                console.log('leave them alone');
            }
            console.log(foreigner+'can I please have picture?');
        },
    }
        const tourist =function(visit_gwk) {
            console.log('why is it so cheap here?');
        
    }

      
