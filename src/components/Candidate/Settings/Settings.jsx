"use client"
import React, { useState } from 'react'
import PasswordChangeModal from './PasswordChangeModal';
import UpdateModalModal from './UpdateModalModal';
import ToggleSwitch from './ToggleSwitch';
import Image from 'next/image';

const Settings = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [desktopNotifications, setDesktopNotifications] = useState(false);
    const [inAppNotifications, setInAppNotifications] = useState(true);
    const [passwordChange, setPasswordChange] = useState(false)
    const [update, setUpdate] = useState(false)


    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPasswordChange(!passwordChange);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        setUpdate(!update);
    }

    const handleCloseUpdate = () => {
        setUpdate(false);
    }
    const handleClose = () => {
        setPasswordChange(false);
    }

    const handleSave = () => {
        const settings = {
            emailNotifications,
            desktopNotifications,
            inAppNotifications,
        };
        console.log("Saved Settings:", settings);
    };


    return (
        <div className='flex flex-col gap-7'>
            <h2 className='text-[40px] font-bold'>Settings</h2>
            <form className='shadow-lg flex flex-col gap-5 px-5 py-3 border'>
                <div className='flex gap-7 items-center'>
                    <Image height={100} width={150} src={"/user.svg"} alt='' />
                    <div>
                        <label className='text-[16px] font-semibold'>Username</label>
                        <input type='text'
                            placeholder='John Doe'
                            className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full'
                        />
                    </div>
                    <div>
                        <label className='text-[16px] font-semibold'>Email</label>
                        <input type='text'
                            placeholder='example@gmail.com'
                            className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-1/2'>
                    <label className='text-[20px] font-medium'>Privacy and Security</label>
                    <div className='flex items-center gap-2'>
                        <label className='text-[16px] font-semibold'>Password:</label>
                        <input type='password'
                            placeholder='Enter new password'
                            className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full'
                        />
                        <button onClick={handlePasswordChange} className='bg-[#3C4E70] rounded-full w-[158px] h-[40px] text-white'>Change</button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <label className='text-[16px] font-semibold'>Contact:</label>
                        <input type='password'
                            placeholder='733xxxxx91'
                            className='rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full'
                        />
                        <button onClick={handleUpdate} className='bg-[#3C4E70] rounded-full w-[158px] h-[40px] text-white'>Update</button>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-[20px] font-medium'>Notifications</h2>
                    <div className="">
                        <label className="flex justify-between items-center">
                            <span className='text-[16px] font-normal'>Turn on Email Notifications for Receiving our mails at your Doorstep. </span>
                            <ToggleSwitch
                                isOn={emailNotifications}
                                handleToggle={() => setEmailNotifications(!emailNotifications)}
                            />
                        </label>
                    </div>
                    <div className="">
                        <label className="flex justify-between items-center">
                            <span className='text-[16px] font-normal'>Turn on Desktop Notifications for Receiving our mails at your Doorstep. </span>
                            <ToggleSwitch
                                isOn={desktopNotifications}
                                handleToggle={() => setDesktopNotifications(!desktopNotifications)}
                            />
                        </label>
                    </div>
                    <div className="">
                        <label className="flex justify-between items-center">
                            <span className='text-[16px] font-normal'>Turn on In-app Notifications for Receiving our mails at your Doorstep. </span>
                            <ToggleSwitch
                                isOn={inAppNotifications}
                                handleToggle={() => setInAppNotifications(!inAppNotifications)}
                            />
                        </label>
                    </div>
                </div>
                <div className='flex gap-4 justify-end'>
                    <button className='w-[150px] h-[40px] border-[#3C4E70] border text-[#3C4E70] rounded-full text-center font-medium'>Cancel</button>
                    <button className='w-[150px] h-[40px] bg-[#3C4E70] text-white rounded-full text-center font-medium' onClick={handleSave}>Save</button>
                </div>
            </form>
            {passwordChange && <PasswordChangeModal onClose={handleClose} />}
            {update && <UpdateModalModal onClose={handleCloseUpdate} />}
        </div>
    )
}

export default Settings