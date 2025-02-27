import React, { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useState } from 'react';

// ✅ Define validation schema
const schema = yup.object().shape({
  status: yup.string().required('Status is required'),
  room_Type: yup.string().required('Room type is required'),
  roomId: yup.number().positive().required('ID is required'),
  room_Number: yup.number().positive().required('Room number is required'),
  cost_Per_Day: yup.number().positive().required('Cost per day is required'),
});

const RoomEdit = () => {
  
    const[roomId,setRoomId]=useState("")
    const[room_Number,setRoom_Number]=useState("")
    const[status,setStatus]=useState("")
    const[cost_Per_Day,setCost_Per_Day]=useState("")
    const[room_Type,setRoom_Type]=useState("")
  

  const navigate = useNavigate();
  const  param = useParams(); 

  // ✅ Initialize react-hook-form
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ Fetch existing room data
  useEffect(() => {
    axios.get(axios.get(`http://localhost:8008/room/id`, { params: { id: param } }))

      .then((res) => {
        reset(res.data); 
        setRoomId(res.data.roomId)
        setRoom_Number(res.data.room_Number)
        setStatus(res.data.status)
        setCost_Per_Day(res.data.cost_Per_Day)
        setRoom_Type(res.data.room_Type)
      })
      .catch((err) => {
        console.error('Error fetching room data:', err.message);
      });
  }, [param]);
  console.log(res);

                                                                                                                                                 
  const handleUpdate = (data) => {
    axios.post(`http://localhost:8008/room/update ${param}`, data, {  
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => {
        alert('Updated successfully');
        navigate('/'); // 
      })
      .catch((err) => {
        console.error('Error updating room data:', err.message);
      });
  };

  return (
    <div className="room-edit-container">

      
          
     
      <h2 className="room-edit-title">Edit Room</h2>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="form-group">
          <label>Room Id:</label>
          <input type="number" className="input-field" {...register('roomId')} />
          <span className="error-text">{errors.roomId?.message}</span>
        </div>

        <div className="form-group">
          <label>Room Number:</label>
          <input type="number" className="input-field" {...register('room_Number')} />
          <span className="error-text">{errors.room_Number?.message}</span>
        </div>

        <div className="form-group">
          <label>Status:</label>
          <input type="text" className="input-field" {...register('status')} />
          <span className="error-text">{errors.status?.message}</span>
        </div>

        <div className="form-group">
          <label>Cost Per Day:</label>
          <input type="number" className="input-field" {...register('cost_Per_Day')} />
          <span className="error-text">{errors.cost_Per_Day?.message}</span>
        </div>

        <div className="form-group">
          <label>Room Type:</label>
          <input type="text" className="input-field" {...register('room_Type')} />
          <span className="error-text">{errors.room_Type?.message}</span>
        </div>

        <div className="button-group">
          <button type="submit" className="btn btn-save">Update</button>
          <Link to="/RoomShow" className="btn btn-back"  >Back</Link>
        </div>
      </form>
    </div>
  );
};

export default RoomEdit;
