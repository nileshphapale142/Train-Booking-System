const express = require('express')
const path = require('path')
const fs = require('fs')
const jsdom = require('jsdom')
const bodyParser = require('body-parser')

const app = express()
const {JSDOM} = jsdom

const {initializeApp} = require('firebase/app')
const {getAnalytics} = require('firebase/analytics')
const {getDatabase, ref, child, get, push, update, set} = require('firebase/database')

const firebaseConfig = {
    apiKey: "AIzaSyBWHi2WGD2s8BMnwd-MIZ26KO5VKza6vGc",
    authDomain: "cs201-project-37332.firebaseapp.com",
    databaseURL: "https://cs201-project-37332-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cs201-project-37332",
    storageBucket: "cs201-project-37332.appspot.com",
    messagingSenderId: "775897317678",
    appId: "1:775897317678:web:ae5a05765ba81072b4fabf",
    measurementId: "G-16JEYRXS76"
};

// Initialize Firebase
const appdb = initializeApp(firebaseConfig);
const database = getDatabase(appdb)
// const analytics = getAnalytics(appdb);


const db = getDatabase()
const dbRef = ref(getDatabase())

app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'public')))

const {checkForTrain, updateDB} = require(path.resolve(__dirname, './public/data'))
// const firebase = require("firebase/compat");

let trainStartLocation = null, trainEndLocation = null, trainCoach = null, trainNo = null,
    trainCoachNo = null, trainSeatNo = null, trainClass = null, trainPrice = null, trainBirth = null,
    trainName = null

// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, './public/home.html'))
// })
app.use(express.urlencoded());

/** Show page with a form */
app.get('/', (req, res, next) => {
    res.send(`<form method="POST" action="/">
  <input type="text" name="username" placeholder="username">
  <input type="submit">
</form>`);
});

/** Process POST request */
app.post('/', function (req, res, next) {
    res.send(JSON.stringify(req.body));
});


app.get('/train/query', (req, res) => {

    const {sLoc, eLoc} = req.query

    async function getTrain() {
        get(child(dbRef, '/')).then((snapshot) => {
            if (snapshot.exists()) {
                const n = snapshot.size
                let trainFound = false

                for (let i = 0; i < n; i++) {
                    let train = snapshot.child('/' + i.toString()).val()

                    if (train.startLocation.toString().toLowerCase() === sLoc.toString().toLowerCase()
                        && train.endLocation.toString().toLowerCase() === eLoc.toString().toLowerCase()) {

                        trainNo = i
                        trainStartLocation = train.startLocation.toString()
                        trainEndLocation = train.endLocation.toString()

                        let avlac_1 = 0, avlac_2 = 0, avlac_3 = 0, avlsl = 0, avlgen = 0

                        if (train.ac_1Prc !== 0) avlac_1 = train.AC_1Coaches[0].availableSeats + train.AC_1Coaches[1].availableSeats
                        if (train.ac_2Prc !== 0) avlac_2 = train.AC_2Coaches[0].availableSeats + train.AC_2Coaches[1].availableSeats
                        if (train.ac_3Prc !== 0) avlac_3 = train.AC_3Coaches[0].availableSeats + train.AC_3Coaches[1].availableSeats
                        if (train.slPrc !== 0) avlsl = train.SLCoaches[0].availableSeats + train.SLCoaches[1].availableSeats +
                            train.SLCoaches[2].availableSeats + train.SLCoaches[3].availableSeats
                        if (train.genPrc !== 0) avlgen = train.GENCoaches[0].availableSeats + train.GENCoaches[1].availableSeats
                        trainFound = true

                        res.status(200).render('display', {
                            startLoc: "Start Location: " + train.startLocation,
                            startTime: "Departure Time: " + train.startTime,
                            endLoc: "Destination: " + train.endLocation,
                            endTime: "Reaching Time : " + train.endTime,
                            priceAC_1: "Rs. " + train.ac_1Prc + "/-",
                            avlSeatsAC_1: "Available seats : " + avlac_1,
                            priceAC_2: "Rs. " + train.ac_2Prc + "/-",
                            avlSeatsAC_2: "Available seats : " + avlac_2,
                            priceAC_3: "Rs. " + train.ac_3Prc + "/-",
                            avlSeatsAC_3: "Available seats : " + avlac_3,
                            priceSL: "Rs. " + train.slPrc + "/-",
                            avlSeatsSL: "Available seats : " + avlsl,
                            priceGEN: "Rs. " + train.genPrc + "/-",
                            avlSeatsGEN: "Available seats : " + avlgen
                        })
                        break
                    }
                }
                if (!trainFound) {
                    res.status(200).send('<h1>Train not found</h1>')
                }
            }
        })
        return 1
    }

    const temp = getTrain()

})

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/about.html'))
})

app.get('/train/confirm/query', (req, res) => {
    const {coach} = req.query
    trainCoach = coach
    res.status(200).sendFile(path.resolve(__dirname, './public/bookingpage.html'))
})

app.get('/train/public/bootsytles.css', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/bootsytles.css'))
})

app.get('/train/public/public/Images/pexels-pixabay-163580.jpg', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/Images/pexels-pixabay-163580.jpg'))
})

app.get('/train/confirm/message', (req, res) => {
    async function updateFirebase() {
        let dbCoach, prc
        switch (trainCoach) {
            case "ac_1":
                dbCoach = 'AC_1Coaches'
                trainClass = '1A'
                prc = 'ac_1Prc'
                break
            case "ac_2":
                dbCoach = 'AC_2Coaches'
                trainClass = '2A'
                prc = 'ac_2Prc'
                break
            case "ac_3":
                dbCoach = 'AC_3Coaches'
                trainClass = '3A'
                prc = 'ac_3Prc'
                break
            case "sl":
                dbCoach = 'SLCoaches'
                trainClass = 'Sleeper'
                prc = 'slPrc'
                break
            case "gen":
                dbCoach = 'GENCoaches'
                trainClass = 'General'
                prc = 'genPrc'
                break
        }

        return get(child(dbRef, '/' + trainNo.toString())).then(async (snapshot) => {
            if (snapshot.exists()) {
                let coaches = snapshot.child('/' + dbCoach)
                let coachUpdate = false

                for (let i = 0; i < coaches.size; i++) {

                    const coach = coaches.child('/' + i.toString())
                    const avlSts = coach.child('/availableSeats').val()

                    if (!coachUpdate) {
                        if (avlSts !== 0) {
                            trainCoachNo = i + 1
                            trainName = snapshot.child('/trainId').val()
                            trainPrice = snapshot.child('/' + prc).val()
                            trainBirth = coach.child('/seats/' + (coach.child('/noSeats').val() - avlSts).toString() + '/birth').val()
                            trainSeatNo = coach.child('/seats/' + (coach.child('/noSeats').val() - avlSts).toString() + '/seatNo').val()


                            await set(ref(db, '/' + trainNo.toString() + '/' + dbCoach + '/' + i.toString() + '/'), {
                                availableSeats: avlSts - 1,
                                class: coach.child('/class').val(),
                                noSeats: coach.child('/noSeats').val(),
                                seats: coach.child('/seats').val()
                            });

                            await set(ref(db, '/' + trainNo.toString() + '/' + dbCoach + '/' + i.toString() + '/seats' + '/' + (coach.child('/noSeats').val() - avlSts).toString() + '/'), {
                                birth: coach.child('/seats/' + (coach.child('/noSeats').val() - avlSts).toString() + '/birth').val(),
                                occupied: true,
                                seatNo: coach.child('/seats/' + (coach.child('/noSeats').val() - avlSts).toString() + '/seatNo').val()
                            });

                            const {name, age, aadhar, mobile, mail} = req.query

                            res.status(200).render('confirmationPage', {
                                pName: name.toString(),
                                pAge: age.toString(),
                                pAadhar: aadhar.toString(),
                                pMobile: mobile.toString(),
                                pMail: mail.toString()
                            })

                            return 1
                        }
                    }
                }
                res.status(200).send('<h1>Failed to book train</h1>' +
                    '<form method="get" action="http://localhost:3000/">' +
                    '<button >Goto Home</button>' +
                    '</form>')
                return 0
            }
        })
    }

    let temp = updateFirebase()

})

app.get('/train/confirm/bootsytles.css', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/bootsytles.css'))
})

app.get('/train/confirm/public/Images/NFR-Train.webp', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/Images/NFR-Train.webp'))
})

app.get('/train/confirm/Images/confirmed-text-on-green-vintage-grungy-round-rubber-stamp-2H9Y06T.jpg', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/Images/confirmed-text-on-green-vintage-grungy-round-rubber-stamp-2H9Y06T.jpg'))
})

app.get('/games', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/pacman.html'))
})

app.get('*', (req, res) => {
    res.status(200).send('<h1>Resource not found</h1>')
})

app.listen(3000, () => {
    console.log('App running on port 3000')
})