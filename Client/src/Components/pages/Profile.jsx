import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Store/authSlice'; // Update with the correct path to your login action
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {
    const navigate = useNavigate();
    const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('token'))
        ?.split('=')[1];

    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                if (!token) {
                    navigate('/login');
                    return;
                }
                const response = await fetch(`http://localhost:2000/api/user/profile/`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `${token}`,
                    },
                    credentials: 'include'
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch user profile');
                }
                const data = await response.json();
                setUser(data.user);
                dispatch(login(data.user)); // Dispatch the login action with user data


            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [token]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    // Logout function
    function logoutUser() {
        fetch("http://localhost:2000/api/user/logout", {
            method: "POST",
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success("Logout successful!"); // Show success message
                    // Clear user data from cookies 
                    navigate('/login'); // Redirect to login page after logout
                    dispatch(logout()); // Dispatch the logout action
                }
                else {
                    toast.error("Logout failed!"); // Show error message
                }
            })
    }

    return (

        <>
            {/* name of each tab group should be unique */}
            <div div className="tabs tabs-box" >
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Profile" defaultChecked />
                <div className="tab-content border-base-300 p-6">
                    <h1>Profile</h1>
                    <div style={{ marginTop: '20px' }}>

                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                            </div>
                            <h2>Name : {user.name}</h2>
                        </div>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Role:</strong> {user.role}</p>
                    </div>
                    <button className='btn btn-primary mt-4' onClick={logoutUser}>Logout</button>
                </div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Orders" />
                <div className="tab-content border-base-300 p-6">Tab content 2</div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Tab 3" />
                <div className="tab-content border-base-300 p-6">Tab content 3</div>
            </div >
        </>
    );
};

export default Profile;