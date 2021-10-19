import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Feed() {


    const [menuData, setMenuData] = useState([])

    useEffect(() => {
        const fathUserData = () => {
            axios
                .get("https://run.mocky.io/v3/157717b2-5a35-466b-a867-a5e1eade1206")
                .then((res) => {
                    console.log(res);
                    setMenuData(res.data)
                    console.log(menuData);
                })
                .catch((err) => {
                    console.error(err);
                });
        };
        fathUserData();
    }, []);


    return (
        <div className='dark:bg-gray-900 w-1/3 hidden feed-show py-2 overflow-y-scroll h-screen'>
            {
                menuData.map((data) => (
                    <div key={data.id} className='flex items-center px-2 py-1 mb-4 mx-3 dark:hover:bg-gray-700 duration-200 cursor-pointer rounded-md'>
                        <img src={data.icon} alt={data.title} className='w-10' />
                        <p className='text-base dark:text-gray-100 ml-2'>{data.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Feed


// [
// {
// "id":1,
// "title":"Siril M P",
// "icon":""
// },
// {
// "id":2,
// "title":"Find Friends",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/XF4FQcre_i.png"
// },
// {
// "id":3,
// "title":"Groups",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
// },
// {
// "id":3,
// "title":"Groups",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
// },
// {
// "id":4,
// "title":"Marketplace",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
// },
// {
// "id":5,
// "title":"Watch",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
// },
// {
// "id":6,
// "title":"Memories",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png"
// },
// {
// "id":7,
// "title":"Saved",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
// },
// {
// "id":8,
// "title":"Pages",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png"
// },
// {
// "id":9,
// "title":"Events",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/9-o1e6LN_TX.png"
// },
// {
// "id":10,
// "title":"Jobs",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/EWFR9xI64Mg.png"
// },
// {
// "id":11,
// "title":"Most resent",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/l6e-P1BHJLy.png"
// },
// {
// "id":12,
// "title":"Ads",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/qR88GIDM38e.png"
// },
// {
// "id":13,
// "title":"Boold Donations",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/K4SvMBrrneO.png"
// },
// {
// "id":14,
// "title":"Climate Science Information Center",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/tKwWVioirmj.png"
// },
// {
// "id":15,
// "title":"Community Help",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/WreZVYrGEZH.png"
// },
// {
// "id":16,
// "title":"COVIDE-19 Information Center",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png"
// },
// {
// "id":17,
// "title":"Emotional Helth",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/GyZZ7Jrr5OV.png"
// },
// {
// "id":18,
// "title":"Favourites",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png"
// },
// {
// "id":19,
// "title":"Fundraisers",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png"
// },
// {
// "id":19,
// "title":"Fundraisers",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png"
// },
// {
// "id":20,
// "title":"Gaming Video",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/uGfRd5KPhOI.png"
// },
// {
// "id":21,
// "title":"Live Videos",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/FBOwekDrmB5.png"
// },
// {
// "id":22,
// "title":"Messenger",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/YF1bztyGuX-.png"
// },
// {
// "id":23,
// "title":"Messenger Kids",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/HBcx-giUZ2Y.png"
// },
// {
// "id":24,
// "title":"Play Games",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png"
// },
// {
// "id":25,
// "title":"Recent ad Activity",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/WcCzeboYevF.png"
// },
// {
// "id":26,
// "title":"Weather",
// "icon":"https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/kULMG0uFcEQ.png"
// }
// ]

