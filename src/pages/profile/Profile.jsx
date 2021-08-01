import React from "react";
import {profileConnect} from "../../connects/profileConnect"

export const ProfileRender = ({status,change}) => {
    // const checked = useSelector((store) => store.checked)
    // const dispatch = useDispatch()
    console.log(status)
    // const showStatus = () => {
    //     dispatch(showCheckBoxStatus())
    // }

    return (
        <div className='padding020'>
            <h2>Profile</h2>
            <p>Страница пользователя MIXA</p>

            <input
                type="checkbox"
                checked={status}
                value={status}
                onChange={() => change()}
            />
            {status && <div>CHECKED!!!</div>}


        </div>
    );
};

export const Profile = profileConnect(ProfileRender);

