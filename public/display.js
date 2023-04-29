// import {endPos, startPos, trains} from "./main.js";
//
// let trainFound = false
// let trainTobeFound = null
//
// for (let i = 0; i < trains.length; i ++) {
//     let train = trains[i]
//     if (train.startLocation === startPos.value && train.endLocation === endPos.value) {
//         alert("Train found")
//
//         // trainID.innerHTML = "Train NO: " + train.trainId.toString()
//         // noCoaches.innerHTML = "No of Coaches: " + train.noCoaches.toString()
//         // startingTime.innerHTML = "Starting Time: " + train.startTime.toString()
//         // trainTobeFound = train
//         trainFound = true
//         break
//         // console.log(train.trainId + "  " + train.startTime
//     }
// }
// if (!trainFound) {
//     window.alert('Train not found')
// }

const something = () => {
    let trainId = document.querySelector('#trainID')
    let noCoaches = document.querySelector('#noOfCoaches')
    let startTime = document.querySelector('#startingTime')
    let reachTime = document.querySelector('#reachingTime')
    let startLoc = document.querySelector('#startingPoint')
    let endLoc = document.querySelector('#endingPoint')
    trainId.innerHTML = '1'
}

module.exports = {something}