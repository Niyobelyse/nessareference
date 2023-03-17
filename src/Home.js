import React from 'react'
import { FaArrowRight, FaTag, FaTwitter } from 'react-icons/fa';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import 'animate.css';


import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home = () => {
  return (
    <>
    <div>
    
      <Navbar/>
      <div className='bgimage mt-0'>
        <div className='p-24'>
        <h1 className='text-white text-6xl ml-8 mt-32 font-bold animate__animated animate__bounce animate__repeat animate__slower'>NESSA</h1>
        <h3 className='text-white mt-8 ml-8 font-medium text-3x animate__animated animate__bounce animate__slower animate__repeat'>National Examination and School Inspection Authority</h3>
        </div>
        
      </div>
     <div id='section_call_to_action'>
<div className='grid sm:grid-cols-3 p-6 space-x-4 h-72 -translate-y-24'>
       
<div class=" ml-8 w-96  p-6 px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <FaTag className='w-8 h-10 mb-2 text-blue-600 dark:text-gray-400'/>
    
    <Link to="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Basic Education and TVET Quality Assurance Department</h5>
    </Link>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">• Manage and coordinate all examination, selection, assessment and certification related activities • Initiate policies, principles,…</p>
    <Link to="#" class="inline-flex items-center text-black-600 hover:underline">
    Read more
    <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
</div>
<div class="ml-8 p-6 w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<FaTag className='w-8 h-10 mb-2 text-blue-600 dark:text-gray-400'/>
    <Link to="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Basic Education and TVET Quality Assurance Department</h5>
    </Link>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">• Manage and coordinate all examination, selection, assessment and certification related activities • Initiate policies, principles,…</p>
    <Link to="#" class="inline-flex items-center text-black-600 hover:underline">
        Read more
        <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
</div>
<div class="ml-8 w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<FaTag className='w-8 h-10 mb-2 text-blue-600 dark:text-gray-400'/>
    <Link to="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Basic Education and TVET Quality Assurance Department</h5>
    </Link>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">• Manage and coordinate all examination, selection, assessment and certification related activities • Initiate policies, principles,…</p>
    <Link to="#" class="inline-flex items-center text-black-600 hover:underline">
    Read more
    <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
</div>
<div></div>
<div className=''>
    <button className='h-8 w-44 bg-blue-600 ml-32 mt-8'>
        Explore More
    </button>
</div>
</div>

</div> 


<div>
<div className='font-bold text-4xl ml-24 mt-14'>Latest News</div>
<div className='grid grid-cols-3 gaps-3 px-32 mt-40'>
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to="#">
        <img class="rounded-t-lg w-full" src="./WEB_3.jpg" alt="" />
    </Link>
    <div class="p-5">
        <Link to="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Link to="#" class="inline-flex font-bold items-center text-black-600 hover:underline">
        Read more
        <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
    </div>
</div>

<div class="max-w-sm ml-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to="#">
        <img class="rounded-t-lg h-60 w-full" src="./WEB_4.jpg" alt="" />
    </Link>
    <div class="p-5">
        <Link to="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Link to="#" class="inline-flex font-bold items-center text-black-600 hover:underline">
        Read more
        <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
    </div>
</div>

<div class="max-w-sm ml-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to="#">
        <img className="h-60  rounded-t-lg  w-full" src="./WEB_5.jpg" alt="" />
    </Link>
    <div class="p-5">
        <Link to="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Link to="#" class="inline-flex font-bold items-center text-black-600 hover:underline">
        Read more
        <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
    </div>
</div>

<div></div>
<div className=''>
    <button className='text-white h-8 w-44 bg-blue-600 ml-32 mt-8'>
        Explore More
    </button>
</div>
<div></div>

</div>




</div>
{/* <div className='twitter mt-14'>
    <div className='grid grid-cols-2'>
        <div className='bg-blue-600 rounded-full w-10 h-10 p-2 ml-28 mt-16'><FaTwitter className='text-white font-bold text-2xl'/></div>
        <div className='ml-52 w-1/2 mt-16'>
        <Link class="prev px-8 font-bold text-3xl" onclick="plusSlides(-1)">❮</Link>
        <Link class="next font-bold text-3xl" onclick="plusSlides(1)">❯</Link>
        </div>
    </div>
    
   */}


<div className='twitter px-28 mt-14'> 

    <div className='grid grid-cols-2'>
        <div className='bg-blue-600 rounded-full w-10 h-10 p-2 ml-28 mt-16'><FaTwitter className='text-white font-bold text-2xl'/></div>
        <div className='ml-52 w-1/2 mt-16'>
        <Link class="prev px-8 font-bold text-3xl" onclick="nav(-1)">❮</Link>
        <Link class="next font-bold text-3xl" onclick="nav(+1)">❯</Link>
        </div>
    </div> 

 
       <div class='' >            
        <OwlCarousel items={3}  
          className="owl-theme"
          autoplay  
          
          autoplayTimeout={3000}
          loop  
          margin={8} > 
           
           <div className='px-2'>
        <h1 className='mt-12 font-bold'><span className='email'>@NESA_Rwanda</span></h1>
    <p class="text-grey mt-8 indent-0">ITANGAZO KU NGENDO Z'ABANYESHURI BIGA BACUMBIKIRWA MU GIHE CYO GUSUBIRA MU MIRYANGO YABO (IGIHEMBWE CYA II UMWAKA W… <Link to="#" target="_blank" rel="noreferrer">https://t.co/mzqxlYmj1q</Link>
    </p>
    <hr className='w-80 font-bold mt-8'/>
     <div className='inline-flex mt-8'>
     <p>2 hours ago</p>
     <FaTwitter className='ml-48  text-blue-700'/>
     </div>

    </div>  



               <div className='px-2'>
               <h1 className='mt-12'>NESA_Rwanda Replying to <span className='email'>@U_munyamateka</span> </h1>
    <p className='mt-8 text-grey'>@U_munyamateka @REBRwanda @Rwanda_Edu icyo gihe bisuzumwa kubufatanye bwa NESA ,akarere ndetse n'ishuri umwana yigamo.</p>
    <hr className='w-80 font-bold'/>
     <div className='inline-flex mt-14'>
     <p>2 hours ago</p>
     <FaTwitter className='ml-48  text-blue-700'/>
     </div>

    </div>


        <div>
        <h1 className='mt-12'>NESA_Rwanda Replying to <span className='email'>@jmv200345</span></h1>
    <p class="text-grey mt-8">mwaramutse, mushobora gusoma amabwiriza mugasobanukirwa neza <Link to="#" className='' target="_blank" rel="noreferrer">https://t.co/mzqxlYmj1q</Link>
    </p>
    <hr className='w-80'/>
     <div className='inline-flex mt-16'>
     <p>2 hours ago</p>
     <FaTwitter className='ml-48  text-blue-700'/>
     </div>

    </div>  
 
          





      </OwlCarousel>  
      </div>  
  
      </div>  
















{/* <div >
    <div className='mt-24 ml-32 font-bold text-4xl'>Our Partners</div>
    <div className='inline-flex mt-32 ml-3'>
    <div ><img src='./images/REB_Logo.png' alt='koica' className='border h-32 w-32 p-8 mb-2 ml-36'/></div>
    <div><img src='./images/enabel_logo_70.png' alt='' className='border h-32 w-32 p-8 ml-16'/></div>
    <div ><img src='./images/Koica_Logo.jpeg' alt='' className='border w-32 h-32 p-8 ml-16'/></div>
    <div ><img src='./images/Coat_04.png' alt='' className='border w-32 h-32 p-8 ml-16'/></div>
    <div ><img src='./images/giz-logo.gif' alt='' className='border h-32 w-32 p-8 ml-14'/></div>
    <div ><img src='./images/RP.png' alt='' className='border w-32 h-32 p-8 ml-14 '/></div>
    </div>
</div> */}


<div className='mt-4 ml-32 font-bold text-2xl'>Our Partners</div>
<div>  
 
        <div className='px-40 mt-14'>            
        <OwlCarousel items={6}  
          className="owl-theme"
          autoplay  
          nav
          autoplayTimeout={3000}
          loop  
          margin={30} > 
          
           <div claaName='w-6'><img  className="img border h-32 w-14 p-12" alt='1' src= {'./images/REB_Logo.png'}/></div>  
           <div claaName='w-6'><img  className="img border h-32 w-14 p-12 " alt='2' src= {'./images/enabel_logo_70.png'}/></div>  
           <div claaName='w-6'><img  className="img border h-32 w-14 p-12 " alt='3' src= {'./images/Koica_Logo.jpeg'}/></div>  
           <div claaName='w-6'><img  className="img border h-32 w-14 p-12" alt='4' src= {'./images/Coat_04.png'}/></div>  
           <div claaName='w-6'><img className="img border h-32 w-14 p-12 " alt='5' src= {'./images/giz.gif'}/></div>  
           <div claaName='w-6'><img className="img border h-32 w-14 p-12 " alt='5' src= {'./images/RP.png'}/></div>  
           





      </OwlCarousel>  
      </div>  
  
      </div>  
<Footer/>




</div>
   

    </>
  )
}

export default Home