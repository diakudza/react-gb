import React from "react";
import {useSelector, useDispatch} from "react-redux"
import {createCheckBoxToggle, showCheckBoxStatus} from "../../store/profile";


const Profile = () => {
    const checked = useSelector((store) => store.checked)
    const dispatch = useDispatch()
    console.log(checked)
    const showStatus = () => {
        dispatch(showCheckBoxStatus())
    }

    return (
        <div className='padding020'>
            <h2>Profile</h2>
            <p>Страница пользователя MIXA</p>

            <input
                type="checkbox"
                checked={checked}
                value={checked}
                onChange={() => dispatch(createCheckBoxToggle())}
            />
            {checked && <div>CHECKED!!!</div>}


        </div>
    );
};

export default Profile;
