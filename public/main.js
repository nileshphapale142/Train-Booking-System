//---------> index.html
let dateId = document.querySelector('#dateID')
let endPos = document.querySelector('#endLocation')
let startPos = document.querySelector('#startLocation')
let searchBtn = document.querySelector('#searchBtn')

dateId.min = new Date().toLocaleDateString('en-ca')

searchBtn.onclick = () => {
    // alert(startPos.value)
    window.location.replace('http://localhost:3000/train/query?sLoc=' + startPos.value + "&eLoc=" + endPos.value)
}

//
// class Seat {
//     constructor(seatInfo) {
//         this.seatNo = seatInfo.seatNo
//         this.birth = seatInfo.birth
//         this.occupied = false
//     }
// }
//
// class Coach {
//     constructor(coachInfo) {
//         this.class = coachInfo.class
//         this.seats = []
//         if (coachInfo.class === 'Sleeper') this.noSeats = 72
//         else if (coachInfo.class === 'AC-1') this.noSeats = 18
//         else if (coachInfo.class === 'AC-2') this.noSeats = 48
//         else if (coachInfo.class === 'AC-3') this.noSeats = 72
//         else if (coachInfo.class === 'General') this.noSeats = 90
//         this.availableSeats = this.noSeats
//     }
// }
//
// class Train {
//     constructor(trainInfo) {
//         this.startLocation = trainInfo.startLocation
//         this.endLocation = trainInfo.endLocation
//         this.startTime = trainInfo.startTime
//         this.endTime = trainInfo.endTime
//         this.trainId = trainInfo.id
//         this.noCoaches = trainInfo.noCoaches
//         this.Coaches = 1
//         this.AC_1Coaches = []
//         this.AC_2Coaches = []
//         this.AC_3Coaches = []
//         this.SLCoaches = []
//         this.GENCoaches = []
//     }
//
//     showInfo() {
//         window.alert('From ' + this.startLocation + ' to ' + this.endLocation + ' from the time ' + this.startTime + ' until ' + this.endTime
//             + ' with th id ' + this.trainId + ' and have coaches ' + this.noCoaches)
//     }
// }
//
// let trains = []
// let stations = ['Mumbai', 'Delhi', 'Lucknow', 'Ujjain', 'Pune', 'Bhilai', 'Bangalore', 'Chandigarh', 'Jaipur']
//
// let map = [
//     [null ,     'Mumbai',                                      'Delhi',                           'Lucknow',                             'Ujjain',                             'Pune',                                'Bhilai',                               'Bangalore',                                 'Jaipur'],
//     ['Mumbai',  {edge:0},                              {edge: 1, st:'17:00', et:'8,32'},     {edge: 1, st:'22:50', et:'4:15'},      {edge: 1, st:'5:10', et:'16:45'},     {edge: 0},                               {edge: 1, st:'22:00', et:'18:30'},     {edge: 1, st:'8:10', et:'6:00'},       {edge: 1, st:'12:00', et:'6:00'}],
//     ['Delhi',   {edge:0},                              {edge:0},                             {edge: 1, st:'15:40', et:'22:05'},     {edge: 1, st:'13:50', et:'4:00'},     {edge: 1, st:'11:30', et:'15:55'},       {edge: 1, st:'4:25', et:'12:50'},      {edge: 1, st:'20:20', et:'12:00'},     {edge: 1, st:'4:15', et:'9:35'}],
//     ['Lucknow', {edge: 1, st:'15:40', et:'22:05'},     {edge: 1, st:'15:40', et:'22:05'},    {edge:0},                              {edge:0},                             {edge:0},                                {edge:0},                              {edge:0},                              {edge:0}],
//     ['Ujjain',  {edge: 1, st:'15:40', et:'22:05'},     {edge:0},                             {edge:0},                              {edge:0},                             {edge: 1, st:'15:40', et:'22:05'},       {edge:0},                              {edge:0},                              {edge: 1, st:'15:40', et:'22:05'}],
//     ['Pune',    {edge: 1, st:'15:40', et:'22:05'},     {edge:0},                             {edge:0},                              {edge: 1, st:'15:40', et:'22:05'},    {edge:0},                                {edge: 1, st:'15:40', et:'22:05'},     {edge: 1, st:'15:40', et:'22:05'},     {edge:0}],
//     ['Bhilai',  {edge: 1, st:'15:40', et:'22:05'},     {edge:0},                             {edge:0},                              {edge:0},                             {edge: 1, st:'15:40', et:'22:05'},       {edge:0},                              {edge:0},                              {edge:0}],
//     ['Bangalore',{edge: 1, st:'15:40', et:'22:05'},    {edge: 1, st:'15:40', et:'22:05'},    {edge:0},                              {edge:0},                             {edge: 1, st:'15:40', et:'22:05'},       {edge:0},                              {edge:0},                              {edge: 1, st:'15:40', et:'22:05'}],
//     ['Jaipur',  {edge: 1, st:'15:40', et:'22:05'},     {edge: 1, st:'15:40', et:'22:05'},    {edge:0},                              {edge: 1, st:'15:40', et:'22:05'},    {edge:0},                                {edge:0},                              {edge: 1, st:'15:40', et:'22:05'},     {edge:0}]
// ]
//
// for (let i = 1; i < map.length; i ++) {
//     for(let j = 1; j < map.length; j ++) {
//         if (map[i][j].edge === 1) {
//             trains.push(new Train({
//                 startLocation: map[i][0],
//                 endLocation: map[0][j],
//                 startTime: map[i][j].st,
//                 endTime: map[i][j].et,
//                 id: map[i][0] + '2' + map[0][j],
//                 noCoaches: 12
//             }))
//         }
//     }
// }
//
// let classes = ['AC-1', 'AC-2', 'AC-3', 'Sleeper', 'General']
//
// trains.forEach((train) => {
//     classes.forEach((cls) => {
//         switch (cls) {
//             case 'AC-1':
//                 train.AC_1Coaches.push(new Coach({
//                     class: cls
//                 }))
//                 train.AC_1Coaches.forEach((coach) => {
//                     for(let i = 0; i < coach.noSeats; i ++) {
//                         if ( i % 2 === 0) {
//                             coach.seats.push(new Seat({
//                                 seatNo: i + 1,
//                                 birth: 'Lower'
//                             }))
//                         } else {
//                             coach.seats.push(new Seat({
//                                 seatNo: i + 1,
//                                 birth: 'Upper'
//                             }))
//                         }
//                     }
//                 })
//                 break
//             case 'AC-2':
//                 train.AC_2Coaches.push(new Coach({
//                     class: cls
//                 }))
//                 train.AC_2Coaches.forEach((coach) => {
//                     for(let i = 0; i < coach.noSeats; i ++) {
//                         if ( i % 2 === 0) {
//                             coach.seats.push(new Seat({
//                                 seatNo: i + 1,
//                                 birth: 'Lower'
//                             }))
//                         } else {
//                             coach.seats.push(new Seat({
//                                 seatNo: i + 1,
//                                 birth: 'Upper'
//                             }))
//                         }
//                     }
//                 })
//                 break
//             case 'AC-3':
//                 train.AC_3Coaches.push(new Coach({
//                     class: cls
//                 }))
//                 train.AC_3Coaches.forEach((coach) => {
//                     for(let i = 0; i < coach.noSeats; i ++) {
//                         if ( i % 3 === 0) {
//                             coach.seats.push(new Seat({
//                                 seatNo: i + 1,
//                                 birth: 'Lower'
//                             }))
//                         } else if (i % 3 === 1) {
//                             coach.seats.push(new Seat({
//                                 seatNo: i + 1,
//                                 birth: 'Middle'
//                             }))
//                         } else {
//                             coach.seats.push(new Seat({
//                                 seatNo: i + 1,
//                                 birth: 'Upper'
//                             }))
//                         }
//                     }
//                 })
//                 break
//             case 'General':
//                 train.GENCoaches.push(new Coach({
//                     class: cls
//                 }))
//                 train.GENCoaches.forEach((coach) => {
//                     for(let i = 0; i < coach.noSeats; i ++) {
//                         if ( i % 2 === 0) {
//                             coach.seats.push(new Seat({
//                                 seatNo: i + 1,
//                                 birth: 'Lower'
//                             }))
//                         } else {
//                             coach.seats.push(new Seat({
//                                 seatNo: i + 1,
//                                 birth: 'Upper'
//                             }))
//                         }
//                     }
//                 })
//                 break
//             case 'Sleeper':
//                 train.SLCoaches.push(new Coach({
//                     class: cls
//                 }))
//                 train.SLCoaches.forEach((coach) => {
//                     for(let i = 0; i < coach.noSeats; i ++) {
//                         if ( i % 3 === 0) {
//                             coach.seats.push(new Seat({
//                                 seatNo: i + 1,
//                                 birth: 'Lower'
//                             }))
//                         } else if (i % 3 === 1) {
//                             coach.seats.push(new Seat({
//                                 seatNo: i + 1,
//                                 birth: 'Middle'
//                             }))
//                         } else {
//                             coach.seats.push(new Seat({
//                                 seatNo: i + 1,
//                                 birth: 'Upper'
//                             }))
//                         }
//                     }
//                 })
//                 break
//         }
//     })
// })

// searchBtn.onclick = function () {
//     const data = [trains, startPos.value, endPos.value]
//     module.exports = {data}
// }



// module.exports = {trains, startPos, endPos}
// searchBtn.onClick = function () {
//     window.location.replace('./display.html')
// }
// searchBtn.onclick = function () {
//
//     window.location.replace('display.html')
//
//     let trainID = document.getElementById('trainID')
//     let noCoaches = document.getElementById('noOfCoaches')
//     let startingTime = document.getElementById('startingTime')
//     let reachingTime = document.getElementById('reachingTime')
//     let startingPoint = document.getElementById('startingPoint')
//     let endingPoint = document.getElementById('endingPoint')
//
//     console.log(trainID)
//
//     // console.log(trainId)
//     // let trainFound = false
//     // let trainTobeFound = null
//     //
//     // for (let i = 0; i < trains.length; i ++) {
//     //     let train = trains[i]
//     //     if (train.startLocation === startPos.value && train.endLocation === endPos.value) {
//     //
//     //         // trainId.textContent = 'Train ID: ' + '4'
//     //         // noOfCoaches.innerHTML = train.noCoaches
//     //         // startingTime.innerHTML = train.startTime
//     //         // endingTime.innerHTML = train.endTime
//     //         // startPoint.innerHTML = train.startLocation
//     //         // endPoint.innerHTML = train.endLocation
//     //         console.log(train.trainId + "  " + train.startTime)
//     //         trainTobeFound = train
//     //         trainFound = true
//     //         break
//     //     }
//     // }
//     // if (!trainFound) {
//     //     window.alert('Train not found')
//     // }
//     // module.exports(trains)
//
// }
// stations.forEach((station1) => {
//     stations.forEach((station2) => {
//         if (station1 !== station2) {
//             trains.push(new Train({
//                 startLocation: station1,
//                 endLocation: station2,
//                 startTime: 1,
//                 endTime: 2,
//                 id: station1 + '2' + station2,
//                 noCoaches: 12
//             }))
//         }
//     })
// })
// if (cls === 'AC-1') {
//     train.AC_1Coaches.push(new Coach({
//         class: cls
//     }))
// } else if (cls === 'AC-2') {
//     train.AC_2Coaches.push(new Coach({
//         class: cls
//     }))
// } else if (cls === 'AC-3') {
//     train.AC_3Coaches.push(new Coach({
//         class: cls
//     }))
// } else if (cls === 'Sleeper') {
//     train.SLCoaches.push(new Coach({
//         class: cls
//     }))
// } else if (cls === 'General') {
//     train.GENCoaches.push(new Coach({
//         class: cls
//     }))
// }
// console.log('AC-1')
// trains[0].AC_1Coaches[0].seats.forEach((seat) => {
//     console.log(seat.seatNo + "  " + seat.birth)
// })
//
// console.log('AC-2')
// trains[0].AC_2Coaches[0].seats.forEach((seat) => {
//     console.log(seat.seatNo + "  " + seat.birth)
// })
//
// console.log('AC-3')
// trains[0].AC_3Coaches[0].seats.forEach((seat) => {
//     console.log(seat.seatNo + "  " + seat.birth)
// })
//
// console.log('SL')
// trains[0].SLCoaches[0].seats.forEach((seat) => {
//     console.log(seat.seatNo + "  " + seat.birth)
// })
//
// console.log('GEN')
// trains[0].GENCoaches[0].seats.forEach((seat) => {
//     console.log(seat.seatNo + "  " + seat.birth)
// })