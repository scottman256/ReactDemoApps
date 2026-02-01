import {useState} from 'react'
const CalendarApp = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "January", "February", "March", 
    "April", "May", "June",
    "July", "August", "September",
     "October", "November", "December"
  ];
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventTime, setEventTime] = useState({hours: '00', minutes: '00'});
  const [eventText, setEventText] = useState('');

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  console.log(currentMonth, currentYear, currentDate);
  console.log(daysInMonth, firstDayOfMonth);

  const prevMonth = () => {
    setCurrentMonth((prevMonth => (prevMonth === 0 ? 11 : prevMonth - 1)));
    setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear));
  }

    const nextMonth = () => {
    setCurrentMonth((prevMonth => (prevMonth === 11 ? 0 : prevMonth + 1)));
    setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear));
  }

  const handleDayClick = (day) => {
     const clickedDate = new Date(currentYear, currentMonth, day);
     const today = new Date();
     if (clickedDate >= today || isSameDay(clickedDate, today)) {
       setEventText('');
       setEventTime({hours: '00', minutes: '00'});
       setSelectedDate(clickedDate);
       setShowEventPopup(true);
     }
  }

  const isSameDay = (date1, date2) => {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  const handleEventSubmit = () => {
    const newEvent = {
      date: selectedDate,
      time: `${eventTime.hours.padStart(2, '0')}:${eventTime.minutes.padStart(2, '0')}`,
      text: eventText,
    }
    setEvents([...events, newEvent]);
    setEventTime({hours: '00', minutes: '00'});
    setEventText("");
    setShowEventPopup(false);
  }

  return <><div className="calendar-app">
    <div className="calendar">
    <h1 className="heading">Calendar</h1>
    <div className="navigate-date">
      <h2 className="month">{monthsOfYear[currentMonth]},</h2>
      <h2 className="year">{currentYear}</h2>
      <div className="buttons">
        <i className="bx bx-chevron-left" onClick={prevMonth}></i>
        <i className="bx bx-chevron-right" onClick={nextMonth}></i>
      </div>
  </div>
  <div className="weekdays">
    {daysOfWeek.map((day) => <span key={day}>{day}</span>)}
  </div>
  <div className="days">
 {[...Array(firstDayOfMonth).keys()].map((_, index) => <span key={`empty-${index}`} className="empty"></span>)}
 {[...Array(daysInMonth).keys()].map((day) => <span key={day + 1} className={day + 1 === currentDate.getDate() 
  && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear() ? "current-day" : ""}
 onClick={() => handleDayClick(day + 1)}
 >{day + 1}</span>)}
    </div>
  </div>
  <div className="events">
    {showEventPopup  && (    
      <div className="event-popup">
      <div className="time-input">
        <div className="event-popup-time">Time</div>
          <input type="number" name = "hours" min={0} max={24} className="hours" value={eventTime.hours} onChange={(e) => setEventTime({...eventTime, hours: e.target.value})}/>
          <input type="number" name = "minutes" min={0} max={60} className="minutes" value={eventTime.minutes} onChange={(e) => setEventTime({...eventTime, minutes: e.target.value})}/>
        </div>
        <textarea placeholder="Enter Event Text (Maximum 60 Characters)" value={eventText} onChange={(e) => {
          if (e.target.value.length <= 60) {
          setEventText(e.target.value);
          }
        }}
        ></textarea>
        <button className="event-popup-btn" onClick={handleEventSubmit}>Add Event</button>
        <button className="close-event-popup" onClick={() => setShowEventPopup(false)}>
          <i className="bx bx-x"></i>
        </button>
      </div>
    )}
    {events.map((event, index) => (
        <div className="event" key={index}>
        <div className="event-date-wrapper">
          <div className="event-date">{monthsOfYear[event.date.getMonth()]} {event.date.getDate()}, {event.date.getFullYear()}</div>
          <div className="event-time">{event.time}</div>
        </div>
        <div className="event-text">{event.text}</div>
        <div className="event-buttons">
          <i className="bx bxs-edit-alt"></i>
          <i className="bx bxs-message-alt-x"></i>
        </div>
      </div>
))}
    </div>
  </div>
  </>
}

export default CalendarApp