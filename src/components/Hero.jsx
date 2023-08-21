import { logo } from '../assets/assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
  <nav className='flex justify-between items-center w-full mb-10 pt-3'>
    {/* <img src={logo} alt="sumz_logo" className='w-28 object-contain' /> */}
  </nav>
  <h1 className="head_text" style={{ color: 'white' }}>
    Summarize Articles in just a  <br className='max-md:hidden' />
    <span className='orange_gradient'>
      Paste and Click.
    </span>
  </h1>
  <h2 className="desc">
    Summarize any article with the power of OpenAI's GPT-4 model.
  </h2>
</header>
  )
}

export default Hero
