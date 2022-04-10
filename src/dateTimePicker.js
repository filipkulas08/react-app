import $ from 'jquery';
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { query, addDoc, where, getDocs, collection } from "firebase/firestore";
import { datetimepicker } from "jquery-datetimepicker/build/jquery.datetimepicker.full"

const dateTimePicker = (db) => {
    var array = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
    const $bookingSection = $('.booking');
    const $timePicker = $('.timepicker');
    const userId = localStorage.getItem('userID');
    const auth = getAuth();

    $('#datepicker').datetimepicker({
        onGenerate: function (ct) {
            array = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
        },

        onSelectDate: function () {

            const $Fulldate = $('#datepicker').datetimepicker('getValue');
            const $year = $Fulldate.getFullYear();
            const $month = $Fulldate.getMonth() + 1;
            const $day = $Fulldate.getDate();
            var date = $month + '/' + $day + '/' + $year;
        
            getDocs(query(collection(db, "Visits"), where("date", "==", date))).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    var data = doc.data();
                        var hour = data.hour;
                        var index = array.indexOf(hour);;
                        if (index !== -1) {
                            array.splice(index, 1);
                        }
                })
            })  
        },
        weekends: [],
        timepicker: false,
        format: 'd.m.Y',
        minDate: 0
    });

    $('#datepicker').on('change', () => {
        $timePicker.addClass('show');
        $('#timepicker').datetimepicker({
            onGenerate: function (array) {},
            datepicker: false,
            format: 'H,i',
            allowTimes: array
        });
    })


    $('#submit').on('click', () => {
        var $Fulldate = $('#datepicker').datetimepicker('getValue');
        var $FullHour = $('#timepicker').datetimepicker('getValue');
        var $year = $Fulldate.getFullYear();
        var $month = $Fulldate.getMonth() + 1;
        var $day = $Fulldate.getDate();
        var $date = $month + '/' + $day + '/' + $year;
        var $hour = $FullHour.getHours() + ':00';
        var $dateNumber = new Date($date + ' ' + $hour).getTime();
        const $firstName = $('#firstName').val();
        const $lasttName = $('#lastName').val();
        const $email = $('#email').val();
        const $number = $('#number').val();

        addDoc(collection(db, "Visits"), {
                date: $date,
                hour: $hour,
                userId: userId,
                dateNumber: $dateNumber,
                firstName: $firstName,
                lastName:$lasttName,
                email:$email,
                phoneNumber:$number,
        })
        .then((docRef) => {
            window.location.reload();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        })
    });

    onAuthStateChanged(auth, (user) => {
        if (localStorage.getItem('myPage.expectSignIn')) {
            $bookingSection.addClass('visible');
        }
    });
}
export default dateTimePicker;