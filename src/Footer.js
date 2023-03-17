import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    
<div className="footer px-32 mt-14 bg-steel-700 dark:bg-steel-700">
    <div class="mt-8 inline-flex">

        <div>
            <h2 class="mt-16 text-sm font-semibold text-white uppercase dark:text-white">Useful Links</h2>
            <ul class="text-white mt-8 dark:text-white">
                <li class="mb-4">
                    <Link to="#" class="hover:underline">❯ Mineduc</Link>
                </li>
                <li class="mb-4">
                    <Link to="#" class="hover:underline"> ❯REB</Link>
                </li>
                <li class="mb-4">
                    <Link to="#" class="hover:underline">❯ Rwanda Polytechnic</Link>
                </li>
                <li class="mb-4">
                    <Link to="#" class="hover:underline">❯ Webmail</Link>
                </li>
                <li class="mb-4">
                    <Link to="#" class="hover:underline">❯ IT service request form</Link>
                </li>

            </ul>
        </div>
        <div className='px-2'>
            <h2 class="mt-16  text-sm font-semibold text-white uppercase dark:text-gray-400">Contact Us</h2>
            <ul class=" mt-8 block  text-white dark:text-white">
                <li class="mb-4 inline-flex">
                    <FaEnvelope className='text-white'/><Link to="#" class="hover:underline">info@nesa.gov.rw</Link>
                </li><br></br>
                <li class="mb-4 inline-flex">
                    <FaPhone className='text-white'/><Link to="#" class="hover:underline">Toll free:9070</Link>
                </li>

            </ul>
        </div>
        <div className='ml-40'>
           
            <ul >
                <li class="mb-2">
               
                <iframe src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.872944828452!2d30.10117235!3d-1.9666365000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2srw!4v1678806913488!5m2!1sen!2srw " className='' width='600' height='450'style={{ border:0, }} allowfullscreen="" title="This is a unique title" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               
                </li>
                
            </ul>
           
        </div>
    </div>    

</div>

  )
}

export default Footer