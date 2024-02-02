import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../roomslist/roomslist.css"


function RoomsList() {
    const [listOfPosts, setListOfPosts] = useState([]);
    let navigate = useNavigate();


    return (

        <div className="RoomsList">
            {listOfPosts.map((value, key) => {
                return (
                    <div className="room" onClick={() => { navigate(`/room/${value.id}`) }}>
                        <div className="name">{value.name}</div>
                        <div className="description">{value.description}</div>
                        <div className="location">{value.city}{","} {value.state} {" - Per Night: $"}{value.price}</div>

                    </div>
                );
            })}

        </div>
    );
}

export default RoomsList;
