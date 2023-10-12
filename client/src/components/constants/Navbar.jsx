import React , { useState , useEffect } from 'react'
import Search from './Search'
import * as images from '../../assets/'
import { Link } from 'react-router-dom';
import  {UserAuth} from '../../context/AuthContext'

const Navbar = () => {

  const { user, logOut } = UserAuth();
    
    const handleSignOut = async () => {
        try {
          await logOut()
          window.location.reload()
        } catch (error) {
          console.log(error)
        }
      }

      const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 

  return (
    <nav id="NavCOntainer" className="bg-white dark:bg-white ">
     {/*  <nav className={`bg-white dark:bg-black ${isSticky ? 'sticky top-0 shadow-md z-50' : ''}`}>  */}
    <div id="containerNavBar" className="container py-4 mx-auto">
        <div id="Navbar" className="flex items-center justify-center mt-6 text-black-600 uppercase dark:text-black-300">
      {/* <img className='mr-8' src={images.logo} width={150} alt="" /> */}
      <svg id= "LogoBmw" viewBox="0 0 498.503 498.503" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M249.251 498.503c66.577 0 129.168-25.928 176.247-73.005 47.077-47.078 73.005-109.67 73.005-176.247 0-66.576-25.928-129.168-73.005-176.246C378.42 25.927 315.828 0 249.251 0 111.813 0 0 111.813 0 249.251c0 66.577 25.927 129.169 73.005 176.247 47.078 47.077 109.67 73.005 176.246 73.005z"></path><path d="M8.624 249.251c0-64.272 25.03-124.699 70.479-170.148 45.449-45.45 105.875-70.479 170.148-70.479s124.7 25.029 170.148 70.479c45.449 45.449 70.479 105.875 70.479 170.148 0 132.683-107.945 240.628-240.627 240.628-64.273 0-124.699-25.03-170.148-70.479C33.654 373.95 8.624 313.524 8.624 249.251z" fill="#56957e"></path><path d="M249.251 18.541c-127.416 0-230.71 103.294-230.71 230.71s103.294 230.711 230.71 230.711c127.416 0 230.71-103.295 230.71-230.711s-103.294-230.71-230.71-230.71z"></path><path d="M249.251 396.621c-81.389 0-147.37-65.98-147.37-147.37 0-81.389 65.981-147.37 147.37-147.37 81.389 0 147.37 65.981 147.37 147.37 0 81.39-65.98 147.37-147.37 147.37z" fill="#56957e"></path><path d="M111.362 249.251h137.889V111.362c-76.153 0-137.889 61.737-137.889 137.889zM249.251 249.251v137.89c76.153 0 137.889-61.736 137.889-137.89H249.251z"></path><path d="M140.952 108.643c-4.885-4.748-12.436-6.179-19.525-1.784 1.354-3.509.801-7.09.082-9.066-3.054-5.569-4.12-6.266-6.637-8.378-8.148-6.837-16.723-1-22.856 6.309l-29.632 35.313 46.581 39.087 31.249-37.24c7.14-8.509 8.244-16.945.738-24.241zM256.97 91.863l15.997-42.401v42.401h12.158V31.137h-18.267l-16.615 43.479h.172L233.8 31.137h-18.266v60.726h12.157V49.462l15.998 42.401h13.281zM420.43 117.127l-22.89 32.407 35.486-16.847 9.396 11.603-55.854 27.075-11.027-13.727 21.969-32.123-.13-.161-35.989 14.81-11.135-13.64 38.097-49.004 9.396 11.603-23.857 31.208 36.458-15.652 10.08 12.448z" fill="#56957e"></path><path d="M98.491 104.464c2.062-2.458 6.722-2.357 9.719.157 3.295 2.765 3.303 6.685 1.09 9.321l-17.597 20.971-11.01-9.239 17.798-21.21zM129.8 129.203l-18.553 22.11-11.634-9.762 18.703-22.29c2.112-2.517 6.821-3.25 9.997-.584 3.595 3.015 3.951 7.59 1.487 10.526z"></path></g></svg>
            <a href="/" id="links" className="border-b-2 border-transparent hover:border-black-800 hover:text-black-800 dark:hover:text-black  ease-in duration-300 mx-1.5 sm:mx-6">Home</a>

            <a href="/" id="links" className="border-b-2 border-transparent hover:border-black-800 hover:text-black-800 dark:hover:text-black  ease-in duration-300 mx-1.5 sm:mx-6">About</a>

            <a href="/" id="links" className="border-b-2 border-transparent hover:border-black-800 hover:text-black-800 dark:hover:text-black  ease-in duration-300 mx-1.5 sm:mx-6">Car Models</a>

            <a href="/" id="links" className="border-b-2 border-transparent hover:border-black-800 hover:text-black-800 dark:hover:text-black  ease-in duration-300 mx-1.5 sm:mx-6">Categories</a>

            <a href="/" id="links" className="border-b-2 border-transparent hover:border-black-800 hover:text-black-800 dark:hover:text-black  ease-in duration-300 mx-1.5 sm:mx-6">FAQs</a>

           <Link to='/contact' id="links" className="border-b-2 border-transparent hover:border-black-800 hover:text-black-800 dark:hover:text-black  ease-in duration-300 mx-1.5 sm:mx-6">Contact</Link>

<Search />

            <a href="https://www.facebook.com" className="hover:text-black-800 dark:hover:text-black mx-1.5 sm:mx-3 ">
           
            <svg fill="#56957e"id="facebookIcon"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#56957e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </g></svg>
             </a>

            <a href="https://www.instagram.com" className="hover:text-black-800 dark:hover:text-white mx-1.5 sm:mx-3">
          <svg viewBox="0 0 24 24" fill="none" id="facebookIcon" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#56957e"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#56957e"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#56957e"></path> </g></svg>
            
             </a>

{user?.displayName ? (
             <div className="ml-6">
<div className="dropdown inline-block relative">
<div className="flex items-center space-x-4">
    <img className="w-10 h-10 object-cover border-2 rounded-full" src={user.photoURL} alt="" />
    <div className="font-medium dark:text-white">
        {/* <div id="Username">{user?.displayName}</div> */}
    </div>
    <div className="LogOut">
    <button
      onClick={handleSignOut}
      className="rounded-b bg-black-200  py-2 px-4 block w-full uppercase whitespace-no-wrap"
    >
      Logout
    </button>
  </div>
</div>

  
</div>

</div>
 ) : (
  <Link to="/signin">
                  <li className='list-none'>
                    <span
                      aria-label="Sign in"
                      title="Sign in"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-normal border-orange-500 border-b-3 transition duration-500  "
                      id="StyleSignIn">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person mr-2" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
                      Sign in
                    </span>
                  </li>
                </Link>

 )}


        </div>
    </div>
</nav>

  )
}

export default Navbar