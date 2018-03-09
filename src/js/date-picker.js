import '../sass/date-picker.scss';

import util from './date-picker.util';

console.log(util);

document.addEventListener('DOMContentLoaded', () => {
    const data = {
        currentYear: '2018',
        currentMonth: '3',
        weekDay: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'],
        day: [{
            className: 'calendar__day__cell calendar__day__cell--past-month',
            date: 29
        }, {
            className: 'calendar__day__cell calendar__day__cell--past-month',
            date: 30
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 1
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 2
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 3
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 4
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 5
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 6
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 7
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 8
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 9
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 10
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 11
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 12
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 13
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 14
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 15
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 16
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 17
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--past-day',
            date: 18
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month calendar__day__cell--today',
            date: 19
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month',
            date: 20
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month',
            date: 21
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month',
            date: 22
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month',
            date: 23
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month',
            date: 24
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month',
            date: 25
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month',
            date: 26
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month',
            date: 27
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month',
            date: 28
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month',
            date: 29
        }, {
            className: 'calendar__day__cell calendar__day__cell--current-month',
            date: 30
        }, {
            className: 'calendar__day__cell calendar__day__cell--after-month',
            date: 1
        }, {
            className: 'calendar__day__cell calendar__day__cell--after-month',
            date: 2
        }, {
            className: 'calendar__day__cell calendar__day__cell--after-month',
            date: 3
        }]
    };

    document.querySelector('#calendarWrap').innerHTML = util.tmpl('tmpl_calendar', data);
});
