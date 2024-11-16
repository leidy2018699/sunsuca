import React, { useState } from "react";

function Admin() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");

  const addEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent("");
  };

  return (
    <div className="admin">
      <h2>Panel de Administración</h2>
      <input
        type="text"
        placeholder="Nuevo Evento"
        value={newEvent}
        onChange={(e) => setNewEvent(e.target.value)}
      />
      <button onClick={addEvent}>Agregar</button>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;

