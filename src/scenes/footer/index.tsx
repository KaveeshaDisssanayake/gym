import Logo from '@/assets/Logo.png';



const Footer = ()  => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex '>
          <div className='mt-16 basis-1/2 md:mt-0 '>
          <img src={Logo} alt="logo" />
          <p className='my-5 '>
          "Transform your fitness journey with our personalized training programs, expert guidance, and interactive workout plans. Achieve your goals and stay motivated every step of the way!"
          </p>
          <p>
            Evogym All Rights Reserved.
          </p>
          </div>
          <div className='mt-16 basis-1/4 md:mt-0' >
            <h4 className='font-bold '>Links</h4>
            <p className='my-5'>Get fit with experts.</p>
            <p className='my-5'>Transform your body today.</p>
            <p>Achieve your fitness goals.</p>
          </div>
          <div className='mt-16 basis-1/4 md:mt-0' >
            <h4 className='font-bold '>Contact Us</h4>
            <p className='my-5'>Connect with us</p>
            <p >+94 71 123 4567</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer