const About = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="col-lg-8">
          <div className="contact-wrap">
            <h3 className="mb-4 text-center">Get in touch with us</h3>
            <div id="form-message-warning" className="mb-4 w-100 text-center"></div>
            <div id="form-message-success" className="mb-4 w-100 text-center">
              Your message was sent, thank you!
            </div>
            <form method="POST" id="contactForm" name="contactForm" className="contactForm" noValidate="novalidate">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea name="message" className="form-control" id="message" cols="30" rows="8" placeholder="Message"></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="submit" value="Send Message" className="btn btn-primary" />
                    <div className="submitting"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;