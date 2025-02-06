import { useSelector } from "react-redux";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {

    const {categories}=useSelector(state=>state.categories)
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          {/* Categories Section */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Categories</h5>
            <ul className="list-unstyled">
              {
                categories.map((category,i)=>(
                    <li key={i}><a href="#" className="text-secondary text-decoration-none d-block mb-2">{category.name}</a></li>
                ))
              }
              
            </ul>
          </div>

          {/* About Section */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">About</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none d-block mb-2">Careers</a></li>
              <li><a href="#" className="text-secondary text-decoration-none d-block mb-2">Press & News</a></li>
              <li><a href="#" className="text-secondary text-decoration-none d-block mb-2">Partnerships</a></li>
              <li><a href="#" className="text-secondary text-decoration-none d-block mb-2">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none d-block mb-2">Help & Support</a></li>
              <li><a href="#" className="text-secondary text-decoration-none d-block mb-2">Trust & Safety</a></li>
              <li><a href="#" className="text-secondary text-decoration-none d-block mb-2">Selling on Fiverr</a></li>
              <li><a href="#" className="text-secondary text-decoration-none d-block mb-2">Buying on Fiverr</a></li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Community</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-secondary"><Facebook size={20} /></a>
              <a href="#" className="text-secondary"><Twitter size={20} /></a>
              <a href="#" className="text-secondary"><Instagram size={20} /></a>
              <a href="#" className="text-secondary"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-top border-secondary mt-4 pt-4 text-center">
          <p className="text-secondary mb-0">© 2024 GoFreelancer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
