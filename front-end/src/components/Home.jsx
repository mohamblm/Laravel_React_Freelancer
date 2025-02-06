import React from 'react';
import { Search, Star, CheckCircle, TrendingUp, Clock, Shield } from 'lucide-react';


function Homme() {
  return (
    <div className="min-vh-100 bg-white">
      {/* Navigation */}
    

      {/* Hero Section */}
      <div className="bg-light pt-5" style={{backgroundImage:'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)', backgroundSize:'cover'}}>
        <div className="container pt-5 pb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-4">
                Find the perfect <span className="text-success">freelance</span> services for your business
              </h1>
              <div className="position-relative mb-3">
                <input
                  type="text"
                  placeholder="Search for any service..."
                  className="form-control form-control-lg"
                />
                <Search className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
              </div>
              <div className="d-flex align-items-center">
                <span className="text-white me-3">Popular:</span>
                <div className="d-flex gap-2">
                  {['Website Design', 'WordPress', 'Logo Design', 'AI Services'].map((tag) => (
                    <span key={tag} className="text-white text-decoration-underline cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              {/* <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Team working"
                className="img-fluid rounded shadow"
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="bg-light py-4">
        <div className="container text-center">
          <p className="text-muted mb-3">Trusted by:</p>
          <div className="d-flex justify-content-center gap-5">
            {['Meta', 'Google', 'Netflix', 'P&G', 'PayPal'].map((company) => (
              <span key={company} className="text-muted fw-semibold">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Services */}
      <div className="py-5 bg-white">
        <div className="container">
          <h2 className="display-6 fw-bold mb-5">Popular Professional Services</h2>
          <div className="row g-4">
            {[
              {
                title: 'AI Artists',
                image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              },
              {
                title: 'Web Development',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
              },
              {
                title: 'Logo Design',
                image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
              },
            ].map((service) => (
              <div key={service.title} className="col-md-4">
                <div className="position-relative overflow-hidden rounded cursor-pointer">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid w-100 h-100 object-cover"
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50">
                    <h3 className="text-white fw-semibold mb-0">{service.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="display-6 fw-bold text-center mb-5">How it works</h2>
          <div className="row g-4">
            {[
              { icon: Search, title: 'Search', description: 'Find the perfect service for your needs' },
              { icon: Star, title: 'Choose', description: 'Review seller profiles and choose the best match' },
              { icon: CheckCircle, title: 'Connect', description: 'Discuss project details with your seller' },
              { icon: Shield, title: 'Payment', description: 'Get quality work delivered on time' },
            ].map((step) => (
              <div key={step.title} className="col-md-3 text-center">
                <div className="mb-3">
                  <step.icon className="text-success" size={48} />
                </div>
                <h3 className="h5 fw-bold mb-2">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homme;