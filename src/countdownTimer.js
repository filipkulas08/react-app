import $ from 'jquery';
import { where, getDocs, collection } from "firebase/firestore";
const countdownTimer = (db) => {
    const $bookingForm = $('.booking-form');
    const $nextVisit = $('.nextVisit');
    const $countdownTiles = $(".tiles");
    const userId = localStorage.getItem('userID');
    var today = new Date().getTime();


    // db.collection("Visits").where("dateNumber", ">=", today).where("userId", "==", userId)
    //     .get()
    //     .then(function (querySnapshot) {
    //         querySnapshot.forEach(function (doc) {
    //             var data = doc.data();
    //             var date = data.date;
    //             var hour = data.hour;
    //             if (date) {
    //                 $bookingForm.addClass('hidden');
    //                 $nextVisit.addClass('visible');
    //                 countdown(date,hour);
    //             } else {
    //                 $bookingForm.removeClass('hidden');
    //                 $nextVisit.removeClass('visible');
    //             }
    //         });
    //     })
    //     .catch(function (error) {
    //         console.log("Error getting documents: ", error);
    //     });

    getDocs(collection(db, "Visits"), where("dateNumber", "==", today), where("userId", "==", userId)).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            var date = data.date;
            var hour = data.hour;
            if (date) {
                $bookingForm.addClass('hidden');
                $nextVisit.addClass('visible');
                countdown(date, hour);
            } else {
                $bookingForm.removeClass('hidden');
                $nextVisit.removeClass('visible');
            }
        })
    })

    var countdown = (date, hour) => {
        var countdownDate = new Date(date + ' ' + hour).getTime();
        var x = setInterval(function () {

            var now = new Date().getTime();
            var distance = countdownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            $countdownTiles.html("<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>");
        }, 1000);
    }

}
export default countdownTimer