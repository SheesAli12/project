import React, { useEffect, useState } from 'react'

const ContactUs = () => {
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  })
  const [error, setError] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true })
  }

  const handleBlur = (field) => {
    setFocused({ ...focused, [field]: false })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let hasError = false
    const newError = { name: '', email: '', message: '' }

    if (!name) {
      newError.name = 'Name is required.'
      hasError = true
    }

    if (!email) {
      newError.email = 'Email is required.'
      hasError = true
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(email)) {
        newError.email = 'Please enter a valid email address.'
        hasError = true
      } else if (email.includes('@mailinator.com')) {
        newError.email = 'Mailinator emails are not allowed.'
        hasError = true
      }
    }

    if (!message) {
      newError.message = 'Message is required.'
      hasError = true
    }

    setError(newError)

    if (hasError) {
      return
    }

    setLoading(true)

    // Simulate a network request
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
    }, 2000)
  }

  useEffect(() => {
    if (name) {
      setError({ ...error, name: '' })
    }

    if (email) {
      setError({ ...error, email: '' })
    }

    if (message) {
      setError({ ...error, message: '' })
    }
    // eslint-disable-next-line
  }, [name, email, message])

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center client-section"
      style={{ height: '100vh', backgroundColor: '#00291B' }}
    >
      <div className="col-lg-6 col-md-8 col-sm-10 col-12 p-4 border rounded shadow-lg">
        {/* Title and Subtitle */}
        <div className="text-center mb-4 text-white">
          <h1>Contact Us</h1>
          <p className="">
            We would love to hear from you. Please fill out the form below to
            get in touch.
          </p>
        </div>

        {/* Success Alert */}
        {success && (
          <div className="alert alert-success" role="alert">
            Your message has been sent successfully.
          </div>
        )}

        {/* Error Alerts */}
        {error.name && (
          <div className="alert alert-danger" role="alert">
            {error.name}
          </div>
        )}
        {error.email && (
          <div className="alert alert-danger" role="alert">
            {error.email}
          </div>
        )}
        {error.message && (
          <div className="alert alert-danger" role="alert">
            {error.message}
          </div>
        )}

        {/* Contact Form */}
        <form className="" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="form-control"
              rows="4"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
            ></textarea>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-success btn-block">
              {loading ? (
                <div
                  className="spinner-border text-white"
                  role="status"
                  style={{
                    display: loading ? 'inline-block' : 'none',
                    width: '1.5rem',
                    height: '1.5rem',
                    marginLeft: '10px',
                  }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="shape2">
        <img src="/images/page-design-assets/clipart-2/1.png" alt="shape2" />
      </div>
      <div className="shape3">
        <img src="/images/page-design-assets/clipart-2/2.png" alt="shape3" />
      </div>
      <div className="shape4">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape4" />
      </div>
      <div className="shape5">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape5" />
      </div>
      <div className="shape6">
        <img src="/images/page-design-assets/clipart-2/2.png" alt="shape6" />
      </div>
      <div className="shape7">
        <img src="/images/page-design-assets/clipart-2/1.png" alt="shape6" />
      </div>
      <div className="shape8">
        <img src="/images/page-design-assets/clipart-2/1.png" alt="shape6" />
      </div>
      <div className="shape9">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape4" />
      </div>
      <div className="shape10">
        <img src="/images/page-design-assets/clipart-2/1.png" alt="shape2" />
      </div>

      <div className="shape11">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape5" />
      </div>
      <div className="shape12">
        <img src="/images/page-design-assets/clipart-2/3.png" alt="shape5" />
      </div>
    </div>
  )
}

export default ContactUs
