import React from 'react'
import './TopBar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Topbar() {
  return (
   <div className="topbar">
    <div className="WrapperTopbar">
        <div className="TopbarRight">
        <FavoriteIcon/> <span> دنیای برنامه نویسی</span> <FavoriteIcon/>
        </div>
        <div className="TopbarLeft">
            <img className='topbarImg' src="./image/roya.jpg" alt="پروفایل کاربر" />
        <div className='ListGroupIcon'>
            <div className='settingIcon'><SettingsIcon style={{fontSize: '2em',color: '#424957'}}/></div>
            <div className='NotficationIcon'><NotificationsIcon style={{fontSize: '2em',color: '#424957'}}/><span>2</span></div>
            <div className='LanguageIcon'><LanguageIcon style={{fontSize: '2em',color: '#424957'}}/><span>4</span></div>
        </div>
        </div>
    </div>

   </div>
  )
}
