import React, {useCallback} from "react";

import {useSelector, useDispatch} from "react-redux"
import {createCheckBoxToggle, showCheckBoxStatus} from "../../store/profile";

const Profile = () => {

   // const {checked, status} = useSelector((store) => store.profileInitialState) // во тут ен пойму, если делаю, как в методичке деструктуризацию, то получаю ошибку TypeError: Cannot destructure property 'checked' of 'Object(...)(...)' as it is undefined.
    const checked = useSelector((store) => store.profileInitialState) // во тут ен пойму, если делаю, как в методичке деструктуризацию, то получаю ошибку TypeError: Cannot destructure property 'checked' of 'Object(...)(...)' as it is undefined.
    const dispatch = useDispatch()
    //console.log(checked) как вывести и посмотреть его?
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
            <span>Show Status</span>
            {showStatus && <div>SHOWSTATUS</div>}


        </div>
    );
};

export default Profile;
