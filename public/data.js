class Seat {
    constructor(seatInfo) {
        this.seatNo = seatInfo.seatNo
        this.birth = seatInfo.birth
        this.occupied = false
    }
}

class Coach {
    constructor(coachInfo) {
        this.class = coachInfo.class
        this.seats = []
        if (coachInfo.class === 'Sleeper') this.noSeats = 72
        else if (coachInfo.class === 'AC-1') this.noSeats = 18
        else if (coachInfo.class === 'AC-2') this.noSeats = 48
        else if (coachInfo.class === 'AC-3') this.noSeats = 72
        else if (coachInfo.class === 'General') this.noSeats = 90
        this.availableSeats = this.noSeats
    }
}

class Train {
    constructor(trainInfo) {
        this.startLocation = trainInfo.startLocation
        this.endLocation = trainInfo.endLocation
        this.startTime = trainInfo.startTime
        this.endTime = trainInfo.endTime
        this.trainId = trainInfo.id
        this.noCoaches = trainInfo.noCoaches
        this.ac_1Prc = trainInfo.ac_1Prc
        this.ac_2Prc = trainInfo.ac_2Prc
        this.ac_3Prc = trainInfo.ac_3Prc
        this.slPrc = trainInfo.slPrc
        this.genPrc = trainInfo.genPrc
        this.AC_1Coaches = []
        this.AC_2Coaches = []
        this.AC_3Coaches = []
        this.SLCoaches = []
        this.GENCoaches = []
    }
}

let trains = []
let stations = ['Mumbai', 'Delhi', 'Lucknow', 'Ujjain', 'Pune', 'Bhilai', 'Bangalore', 'Chandigarh', 'Jaipur']

let map = [
    [null, 'Mumbai', 'Delhi', 'Kolkata', 'Chennai', 'Bhopal', 'Hyderabad', 'Jaipur', 'Gandhinagar', 'Lucknow'],
    ['Mumbai',
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'Tejas Raj SPL',
            st: '17:00 PM',
            et: '8:32 AM',
            A_1: 4820,
            A_2: 3870,
            A_3: 2825,
            SL: 0,
            GEN: 0
        },
        {
            edge: 1,
            name: 'Gitangali SPL',
            st: '6:00 AM',
            et: '12:32 PM',
            A_1: 0,
            A_2: 2655,
            A_3: 1840,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'LTS MAS EXP',
            st: '18:45 PM',
            et: '16:30 PM',
            A_1: 0,
            A_2: 1990,
            A_3: 1395,
            SL: 535,
            GEN: 0
        },
        {
            edge: 1,
            name: 'NZM Rajdhani',
            st: '16:00 PM',
            et: '1:55 AM',
            A_1: 3355,
            A_2: 2700,
            A_3: 1990,
            SL: 0,
            GEN: 0
        },
        {
            edge: 1,
            name: 'KONARK EXPRESS',
            st: '14:00 PM',
            et: '3:20 AM',
            A_1: 0,
            A_2: 1454,
            A_3: 1010,
            SL: 375,
            GEN: 0
        },
        {
            edge: 1,
            name: 'MMCT JAIPUR SF',
            st: '19:05 PM',
            et: '00:00 AM',
            A_1: 3545,
            A_2: 2100,
            A_3: 1470,
            SL: 560,
            GEN: 335
        },
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'PUSHPAK EXPRESS',
            st: '8:25 AM',
            et: '19:10 PM',
            A_1: 3655,
            A_2: 2155,
            A_3: 2825,
            SL: 575,
            GEN: 335
        }
    ],
    ['Delhi',
        {
            edge: 0
        },
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'NETAJI EXPRESS',
            st: '4:44 AM',
            et: '8:05 AM',
            A_1: 0,
            A_2: 0,
            A_3: 2085,
            SL: 575,
            GEN: 335
        },
        {
            edge: 1,
            name: 'GRAND TRUNK EXP',
            st: '16:10 PM',
            et: '4:30 AM',
            A_1: 4820,
            A_2: 3870,
            A_3: 2825,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'BHOPAL SHITABDI',
            st: '6:00 AM',
            et: '2:07 AM',
            A_1: 3355,
            A_2: 2700,
            A_3: 1990,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'SBC RAJDHANI',
            st: '19:50 PM',
            et: '17:10 PM',
            A_1: 0,
            A_2: 4690,
            A_3: 3635,
            SL: 1840,
            GEN: 745
        },
        {
            edge: 1,
            name: 'SAINIK EXP',
            st: '23:30 PM',
            et: '8:00 AM',
            A_1: 0,
            A_2: 0,
            A_3: 680,
            SL: 250,
            GEN: 0
        },
        {
            edge: 1,
            name: 'DLPC SBIB EXP',
            st: '23:52 PM',
            et: '15:15 PM',
            A_1: 3545,
            A_2: 2100,
            A_3: 155,
            SL: 405,
            GEN: 0
        },
        {
            edge: 1,
            name: 'KUSHINAGAR EXP',
            st: '00:32 AM',
            et: '2:11 AM',
            A_1: 0,
            A_2: 3870,
            A_3: 2085,
            SL: 810,
            GEN: 0
        }
    ],
    ['Kolkata',
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'NETAJI EXPRESS',
            st: '4:44 AM',
            et: '8:05 AM',
            A_1: 0,
            A_2: 0,
            A_3: 2085,
            SL: 575,
            GEN: 335
        },
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'GRAND TRUNK EXP',
            st: '16:10 PM',
            et: '4:30 AM',
            A_1: 4820,
            A_2: 3870,
            A_3: 2825,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'BHOPAL SHITABDI',
            st: '6:00 AM',
            et: '2:07 AM',
            A_1: 3355,
            A_2: 2700,
            A_3: 1990,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'SBC RAJDHANI',
            st: '19:50 PM',
            et: '17:10 PM',
            A_1: 0,
            A_2: 4690,
            A_3: 3635,
            SL: 1840,
            GEN: 745
        },
        {
            edge: 1,
            name: 'SAINIK EXP',
            st: '23:30 PM',
            et: '8:00 AM',
            A_1: 0,
            A_2: 0,
            A_3: 680,
            SL: 250,
            GEN: 0
        },
        {
            edge: 1,
            name: 'DLPC SBIB EXP',
            st: '23:52 PM',
            et: '15:15 PM',
            A_1: 3545,
            A_2: 2100,
            A_3: 155,
            SL: 405,
            GEN: 0
        },
        {
            edge: 1,
            name: 'KUSHINAGAR EXP',
            st: '00:32 AM',
            et: '2:11 AM',
            A_1: 0,
            A_2: 3870,
            A_3: 2085,
            SL: 810,
            GEN: 0
        }
    ],
    ['Chennai',
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'NETAJI EXPRESS',
            st: '4:44 AM',
            et: '8:05 AM',
            A_1: 0,
            A_2: 0,
            A_3: 2085,
            SL: 575,
            GEN: 335
        },
        {
            edge: 1,
            name: 'GRAND TRUNK EXP',
            st: '16:10 PM',
            et: '4:30 AM',
            A_1: 4820,
            A_2: 3870,
            A_3: 2825,
            SL: 705,
            GEN: 475
        },
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'BHOPAL SHITABDI',
            st: '6:00 AM',
            et: '2:07 AM',
            A_1: 3355,
            A_2: 2700,
            A_3: 1990,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'SBC RAJDHANI',
            st: '19:50 PM',
            et: '17:10 PM',
            A_1: 0,
            A_2: 4690,
            A_3: 3635,
            SL: 1840,
            GEN: 745
        },
        {
            edge: 1,
            name: 'SAINIK EXP',
            st: '23:30 PM',
            et: '8:00 AM',
            A_1: 0,
            A_2: 0,
            A_3: 680,
            SL: 250,
            GEN: 0
        },
        {
            edge: 1,
            name: 'DLPC SBIB EXP',
            st: '23:52 PM',
            et: '15:15 PM',
            A_1: 3545,
            A_2: 2100,
            A_3: 155,
            SL: 405,
            GEN: 0
        },
        {
            edge: 1,
            name: 'KUSHINAGAR EXP',
            st: '00:32 AM',
            et: '2:11 AM',
            A_1: 0,
            A_2: 3870,
            A_3: 2085,
            SL: 810,
            GEN: 0
        }
    ],
    ['Bhopal',
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'NETAJI EXPRESS',
            st: '4:44 AM',
            et: '8:05 AM',
            A_1: 0,
            A_2: 0,
            A_3: 2085,
            SL: 575,
            GEN: 335
        },
        {
            edge: 1,
            name: 'GRAND TRUNK EXP',
            st: '16:10 PM',
            et: '4:30 AM',
            A_1: 4820,
            A_2: 3870,
            A_3: 2825,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'BHOPAL SHITABDI',
            st: '6:00 AM',
            et: '2:07 AM',
            A_1: 3355,
            A_2: 2700,
            A_3: 1990,
            SL: 705,
            GEN: 475
        },
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'SBC RAJDHANI',
            st: '19:50 PM',
            et: '17:10 PM',
            A_1: 0,
            A_2: 4690,
            A_3: 3635,
            SL: 1840,
            GEN: 745
        },
        {
            edge: 1,
            name: 'SAINIK EXP',
            st: '23:30 PM',
            et: '8:00 AM',
            A_1: 0,
            A_2: 0,
            A_3: 680,
            SL: 250,
            GEN: 0
        },
        {
            edge: 1,
            name: 'DLPC SBIB EXP',
            st: '23:52 PM',
            et: '15:15 PM',
            A_1: 3545,
            A_2: 2100,
            A_3: 155,
            SL: 405,
            GEN: 0
        },
        {
            edge: 1,
            name: 'KUSHINAGAR EXP',
            st: '00:32 AM',
            et: '2:11 AM',
            A_1: 0,
            A_2: 3870,
            A_3: 2085,
            SL: 810,
            GEN: 0
        }
    ],
    ['Hyderabad',
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'NETAJI EXPRESS',
            st: '4:44 AM',
            et: '8:05 AM',
            A_1: 0,
            A_2: 0,
            A_3: 2085,
            SL: 575,
            GEN: 335
        },
        {
            edge: 1,
            name: 'GRAND TRUNK EXP',
            st: '16:10 PM',
            et: '4:30 AM',
            A_1: 4820,
            A_2: 3870,
            A_3: 2825,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'BHOPAL SHITABDI',
            st: '6:00 AM',
            et: '2:07 AM',
            A_1: 3355,
            A_2: 2700,
            A_3: 1990,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'SBC RAJDHANI',
            st: '19:50 PM',
            et: '17:10 PM',
            A_1: 0,
            A_2: 4690,
            A_3: 3635,
            SL: 1840,
            GEN: 745
        },
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'SAINIK EXP',
            st: '23:30 PM',
            et: '8:00 AM',
            A_1: 0,
            A_2: 0,
            A_3: 680,
            SL: 250,
            GEN: 0
        },
        {
            edge: 1,
            name: 'DLPC SBIB EXP',
            st: '23:52 PM',
            et: '15:15 PM',
            A_1: 3545,
            A_2: 2100,
            A_3: 155,
            SL: 405,
            GEN: 0
        },
        {
            edge: 1,
            name: 'KUSHINAGAR EXP',
            st: '00:32 AM',
            et: '2:11 AM',
            A_1: 0,
            A_2: 3870,
            A_3: 2085,
            SL: 810,
            GEN: 0
        }
    ],
    ['Jaipur',
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'NETAJI EXPRESS',
            st: '4:44 AM',
            et: '8:05 AM',
            A_1: 0,
            A_2: 0,
            A_3: 2085,
            SL: 575,
            GEN: 335
        },
        {
            edge: 1,
            name: 'GRAND TRUNK EXP',
            st: '16:10 PM',
            et: '4:30 AM',
            A_1: 4820,
            A_2: 3870,
            A_3: 2825,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'BHOPAL SHITABDI',
            st: '6:00 AM',
            et: '2:07 AM',
            A_1: 3355,
            A_2: 2700,
            A_3: 1990,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'SBC RAJDHANI',
            st: '19:50 PM',
            et: '17:10 PM',
            A_1: 0,
            A_2: 4690,
            A_3: 3635,
            SL: 1840,
            GEN: 745
        },
        {
            edge: 1,
            name: 'SAINIK EXP',
            st: '23:30 PM',
            et: '8:00 AM',
            A_1: 0,
            A_2: 0,
            A_3: 680,
            SL: 250,
            GEN: 0
        },
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'DLPC SBIB EXP',
            st: '23:52 PM',
            et: '15:15 PM',
            A_1: 3545,
            A_2: 2100,
            A_3: 155,
            SL: 405,
            GEN: 0
        },
        {
            edge: 1,
            name: 'KUSHINAGAR EXP',
            st: '00:32 AM',
            et: '2:11 AM',
            A_1: 0,
            A_2: 3870,
            A_3: 2085,
            SL: 810,
            GEN: 0
        }
    ],
    ['Gandhinagar',
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'NETAJI EXPRESS',
            st: '4:44 AM',
            et: '8:05 AM',
            A_1: 0,
            A_2: 0,
            A_3: 2085,
            SL: 575,
            GEN: 335
        },
        {
            edge: 1,
            name: 'GRAND TRUNK EXP',
            st: '16:10 PM',
            et: '4:30 AM',
            A_1: 4820,
            A_2: 3870,
            A_3: 2825,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'BHOPAL SHITABDI',
            st: '6:00 AM',
            et: '2:07 AM',
            A_1: 3355,
            A_2: 2700,
            A_3: 1990,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'SBC RAJDHANI',
            st: '19:50 PM',
            et: '17:10 PM',
            A_1: 0,
            A_2: 4690,
            A_3: 3635,
            SL: 1840,
            GEN: 745
        },
        {
            edge: 1,
            name: 'SAINIK EXP',
            st: '23:30 PM',
            et: '8:00 AM',
            A_1: 0,
            A_2: 0,
            A_3: 680,
            SL: 250,
            GEN: 0
        },
        {
            edge: 1,
            name: 'DLPC SBIB EXP',
            st: '23:52 PM',
            et: '15:15 PM',
            A_1: 3545,
            A_2: 2100,
            A_3: 155,
            SL: 405,
            GEN: 0
        },
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'KUSHINAGAR EXP',
            st: '00:32 AM',
            et: '2:11 AM',
            A_1: 0,
            A_2: 3870,
            A_3: 2085,
            SL: 810,
            GEN: 0
        }
    ],
    ['Lucknow',
        {
            edge: 0
        },
        {
            edge: 1,
            name: 'NETAJI EXPRESS',
            st: '4:44 AM',
            et: '8:05 AM',
            A_1: 0,
            A_2: 0,
            A_3: 2085,
            SL: 575,
            GEN: 335
        },
        {
            edge: 1,
            name: 'GRAND TRUNK EXP',
            st: '16:10 PM',
            et: '4:30 AM',
            A_1: 4820,
            A_2: 3870,
            A_3: 2825,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'BHOPAL SHITABDI',
            st: '6:00 AM',
            et: '2:07 AM',
            A_1: 3355,
            A_2: 2700,
            A_3: 1990,
            SL: 705,
            GEN: 475
        },
        {
            edge: 1,
            name: 'SBC RAJDHANI',
            st: '19:50 PM',
            et: '17:10 PM',
            A_1: 0,
            A_2: 4690,
            A_3: 3635,
            SL: 1840,
            GEN: 745
        },
        {
            edge: 1,
            name: 'SAINIK EXP',
            st: '23:30 PM',
            et: '8:00 AM',
            A_1: 0,
            A_2: 0,
            A_3: 680,
            SL: 250,
            GEN: 0
        },
        {
            edge: 1,
            name: 'DLPC SBIB EXP',
            st: '23:52 PM',
            et: '15:15 PM',
            A_1: 3545,
            A_2: 2100,
            A_3: 155,
            SL: 405,
            GEN: 0
        },
        {
            edge: 1,
            name: 'KUSHINAGAR EXP',
            st: '00:32 AM',
            et: '2:11 AM',
            A_1: 0,
            A_2: 3870,
            A_3: 2085,
            SL: 810,
            GEN: 0
        },
        {
            edge: 0
        }
    ]
]

for (let i = 1; i < map.length; i++) {
    for (let j = 1; j < map.length; j++) {
        if (map[i][j].edge === 1) {
            trains.push(new Train({
                startLocation: map[i][0],
                endLocation: map[0][j],
                startTime: map[i][j].st,
                endTime: map[i][j].et,
                id: map[i][j].name,
                ac_1Prc: map[i][j].A_1,
                ac_2Prc: map[i][j].A_2,
                ac_3Prc: map[i][j].A_3,
                slPrc: map[i][j].SL,
                genPrc: map[i][j].GEN,
                noCoaches: 12
            }))
        }
    }
}

let classes = ['AC-1', 'AC-1', 'AC-2', 'AC-2', 'AC-3', 'AC-3', 'Sleeper', 'Sleeper', 'Sleeper', 'Sleeper', 'General', 'General']
let coach


//Inserting train data

trains.forEach((train) => {
    classes.forEach((cls) => {
        switch (cls) {
            case 'AC-1':
                if (train.ac_1Prc !== 0) {
                    train.AC_1Coaches.push(new Coach({
                        class: cls
                    }))
                    coach = train.AC_1Coaches[train.AC_1Coaches.length - 1]

                    for (let i = 0; i < coach.noSeats; i++) {
                        if (i % 2 === 0) {
                            coach.seats.push(new Seat({
                                seatNo: i + 1,
                                birth: 'Lower'
                            }))
                        } else {
                            coach.seats.push(new Seat({
                                seatNo: i + 1,
                                birth: 'Upper'
                            }))
                        }
                    }
                }
                break
            case 'AC-2':
                if (train.ac_2Prc !== 0) {
                    train.AC_2Coaches.push(new Coach({
                        class: cls
                    }))

                    coach = train.AC_2Coaches[train.AC_2Coaches.length - 1]

                    for (let i = 0; i < coach.noSeats; i++) {
                        if (i % 2 === 0) {
                            coach.seats.push(new Seat({
                                seatNo: i + 1,
                                birth: 'Lower'
                            }))
                        } else {
                            coach.seats.push(new Seat({
                                seatNo: i + 1,
                                birth: 'Upper'
                            }))
                        }
                    }
                }
                break
            case 'AC-3':
                if (train.ac_3Prc !== 0) {
                    train.AC_3Coaches.push(new Coach({
                        class: cls
                    }))

                    coach = train.AC_3Coaches[train.AC_3Coaches.length - 1]

                    for (let i = 0; i < coach.noSeats; i++) {
                        if (i % 2 === 0) {
                            coach.seats.push(new Seat({
                                seatNo: i + 1,
                                birth: 'Lower'
                            }))
                        } else {
                            coach.seats.push(new Seat({
                                seatNo: i + 1,
                                birth: 'Upper'
                            }))
                        }
                    }
                }
                break
            case 'General':
                if (train.genPrc !== 0) {
                    train.GENCoaches.push(new Coach({
                        class: cls
                    }))

                    coach = train.GENCoaches[train.GENCoaches.length - 1]

                    for (let i = 0; i < coach.noSeats; i++) {
                        if (i % 2 === 0) {
                            coach.seats.push(new Seat({
                                seatNo: i + 1,
                                birth: 'Lower'
                            }))
                        } else {
                            coach.seats.push(new Seat({
                                seatNo: i + 1,
                                birth: 'Upper'
                            }))
                        }
                    }
                }
                break

            case 'Sleeper':
                if (train.slPrc !== 0) {
                    train.SLCoaches.push(new Coach({
                        class: cls
                    }))

                    coach = train.SLCoaches[train.SLCoaches.length - 1]

                    for (let i = 0; i < coach.noSeats; i++) {
                        if (i % 2 === 0) {
                            coach.seats.push(new Seat({
                                seatNo: i + 1,
                                birth: 'Lower'
                            }))
                        } else {
                            coach.seats.push(new Seat({
                                seatNo: i + 1,
                                birth: 'Upper'
                            }))
                        }
                    }
                }
                break
        }
    })
})

module.exports = {trains}


// localStorage.setItem("trains", jsonTrn)

// console.log(JSON.parse(localStorage.getItem("trains")))

const checkForTrain = (sLoc, eLoc) => {
    const n = trains.length

    for (let i = 0; i < n; i++) {

        let train = trains[i]
        if (train.startLocation.toString().toLowerCase() === sLoc.toString().toLowerCase() &&
            train.endLocation.toString().toLowerCase() === eLoc.toString().toLowerCase()) {
            let avlac_1 = 0, avlac_2 = 0, avlac_3 = 0, avlsl = 0, avlgen = 0
            if (train.ac_1Prc !== 0) avlac_1 = train.AC_1Coaches[0].availableSeats + train.AC_1Coaches[1].availableSeats
            if (train.ac_2Prc !== 0) avlac_2 = train.AC_2Coaches[0].availableSeats + train.AC_2Coaches[1].availableSeats
            if (train.ac_3Prc !== 0) avlac_3 = train.AC_3Coaches[0].availableSeats + train.AC_3Coaches[1].availableSeats
            if (train.slPrc !== 0) avlsl = train.SLCoaches[0].availableSeats + train.SLCoaches[1].availableSeats +
                train.SLCoaches[2].availableSeats + train.SLCoaches[3].availableSeats
            if (train.genPrc !== 0) avlgen = train.GENCoaches[0].availableSeats + train.GENCoaches[1].availableSeats

            return {
                found: true,
                name: train.id,
                stLoc: train.startLocation,
                etLoc: train.endLocation,
                depTime: train.startTime,
                reaTime: train.endTime,
                AVLAC_1: avlac_1,
                AVLAC_2: avlac_2,
                AVLAC_3: avlac_3,
                AVLSL: avlsl,
                AVLGEN: avlgen,
                ac_1prc: train.ac_1Prc,
                ac_2prc: train.ac_2Prc,
                ac_3prc: train.ac_3Prc,
                slprc: train.slPrc,
                genprc: train.genPrc
            }
        }
    }
    return {
        found: false
    }
}

const {readFile, writeFileSync} = require('fs')
const fs = require('fs')
const path = require("path");
// writeFileSync('public/trainInfo.txt', '')

//Updating txt
const updateDB = () => {
    trains.forEach((train, i) => {
        writeFileSync('public/trainInfo.txt', (i + 1).toString() + "\n" + train.trainId + "\n" +
            train.startLocation + "\n" + train.endLocation + "\n" + train.startTime + "\n" +
            train.endTime + "\n" + train.noCoaches + "\n", {flag: 'a'})

        // console.log(train.trainId)

        train.AC_1Coaches.forEach((coach, i) => {
            writeFileSync('public/trainInfo.txt', (i + 1).toString() + "\n" + coach.class + "\n" +
                coach.noSeats + "\n" + coach.availableSeats + "\n", {flag: 'a'})

            // console.log(coach.class + "   " + coach.seats.length)

            coach.seats.forEach((seat) => {
                writeFileSync('public/trainInfo.txt', seat.seatNo + "\n" + seat.birth + "\n" +
                    seat.occupied + "\n", {flag: "a"})
            })
        })

        train.AC_2Coaches.forEach((coach, i) => {
            writeFileSync('public/trainInfo.txt', (i + 1).toString() + "\n" + coach.class + "\n" +
                coach.noSeats + "\n" + coach.availableSeats + "\n", {flag: 'a'})

            // console.log(coach.class + "   " + coach.seats.length)

            coach.seats.forEach((seat, i) => {
                writeFileSync('public/trainInfo.txt', seat.seatNo + "\n" + seat.birth + "\n" +
                    seat.occupied + "\n", {flag: "a"})
            })
        })

        train.AC_3Coaches.forEach((coach, i) => {
            writeFileSync('public/trainInfo.txt', (i + 1).toString() + "\n" + coach.class + "\n" +
                coach.noSeats + "\n" + coach.availableSeats + "\n", {flag: 'a'})

            // console.log(coach.class + "   " + coach.seats.length)

            coach.seats.forEach((seat, i) => {
                writeFileSync('public/trainInfo.txt', seat.seatNo + "\n" + seat.birth + "\n" +
                    seat.occupied + "\n", {flag: "a"})
            })
        })

        train.SLCoaches.forEach((coach, i) => {
            writeFileSync('public/trainInfo.txt', (i + 1).toString() + "\n" + coach.class + "\n" +
                coach.noSeats + "\n" + coach.availableSeats + "\n", {flag: 'a'})

            // console.log(coach.class + "   " + coach.seats.length)

            coach.seats.forEach((seat, i) => {
                writeFileSync('public/trainInfo.txt', seat.seatNo + "\n" + seat.birth + "\n" +
                    seat.occupied + "\n", {flag: "a"})
            })
        })

        train.GENCoaches.forEach((coach, i) => {
            writeFileSync('public/trainInfo.txt', (i + 1).toString() + "\n" + coach.class + "\n" +
                coach.noSeats + "\n" + coach.availableSeats + "\n", {flag: 'a'})

            // console.log(coach.class + "   " + coach.seats.length)

            coach.seats.forEach((seat, i) => {
                writeFileSync('public/trainInfo.txt', seat.seatNo + "\n" + seat.birth + "\n" +
                    seat.occupied + "\n", {flag: "a"})
            })
        })
    })

}

// trains.forEach((train) => {
//     const jsonTrn = JSON.stringify(train)
//     fs.writeFileSync('TrainData.json', jsonTrn, {flag: 'a'})
// })


const jsonTrn = JSON.stringify(trains)
// console.table(jsonTrn)
fs.writeFile('TrainData.json', jsonTrn, err => {
    if (err) {
        console.log('error')
    } else {
        console.log('success')
    }
})
// trains.forEach((train) => {
//
// })

module.exports = {checkForTrain, updateDB}
// module.exports = trains