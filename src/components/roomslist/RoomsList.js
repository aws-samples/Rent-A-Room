import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../roomslist/roomslist.css"


function RoomsList() {

    return (

        <div className="RoomsList">

            <div className="room">
                <div className="name">{"Detroit Condo Room"}</div>
                <div className="description">{"This condo sits next to the Ford Field arena where the Detroit Lions play! The room is 15x16 sqft and comes furnished with a bed, nightstand, and television."}</div>
                <div className="location">{"Detroit"}{","} {"MI"} {" - Per Night: $"}{"75"}</div>
            </div>
        </div>
    );
}

export default RoomsList;
