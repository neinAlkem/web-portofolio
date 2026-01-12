import { useEffect, useState, useRef } from 'react'
import TitleHeader from '../components/TitleHeader'
import { use } from 'react'
import emailjs from '@emailjs/browser'


const ContactSection = () => {
  
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    try{
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      setFormData({
        name: '',
        email: '',
        message: '',
      })
      alert('Message Sent')
    } catch(error) {
      console.log('Sending Email Error:', error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <section
      id="contact"
      className="w-full section-padding md:mt-40 mt-15"
    >
      <div className="max-w-full md:max-w-3/4 mx-auto px-5 md:px-20">
        {/* Header */}
        <div className="mb-16">
          <TitleHeader 
          title='Contact Me'
          subTitle='Get in Touch'/>
        </div>
{/* 
        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT COLUMN — INFO */}
          <div className="space-y-8">
            <p className="text-lg text-white-50 leading-relaxed">
              I’m open to freelance work, full-time opportunities, remotes, and exciting
              collaborations. <br />Send me a message and I’ll get back to you.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg">bagasrizal.work@gmail.com</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-lg">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — FORM */}
          <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full bg-black-100 border border-black-50 rounded-lg px-4 py-3 outline-none focus:border-white"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full bg-black-100 border border-black-50 rounded-lg px-4 py-3 outline-none focus:border-white"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows="5"
                name='message'
                placeholder="Your message"
                className="w-full bg-black-100 border border-black-50 rounded-lg px-4 py-3 outline-none focus:border-white resize-none"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit" disabled={loading} 
              className="cta-button group w-full">
                <div className='bg-circle' />
                    <p className='text'>{loading? 'Sending...' : 'Send Message'}</p>
                    <div className='arrow-wrapper'>
                        <img src="/assets/images/arrow-down.svg" alt="arrow" />
                </div>
            </button>
          </form>
        </div> 

      </div>
    </section>
  )
}

export default ContactSection
