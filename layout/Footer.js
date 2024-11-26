import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container pb-1 pb-lg-5">
        <div className="row content-space-t-2">
          <div className="col-lg-3 mb-7 mb-lg-0">
            {/* Logo */}
            <div className="mb-5">
              <Link href="/" aria-label="Space">
                <Image
                  className="navbar-brand-logo"
                  src="/images/logo/appo.png"
                  alt="Logo"
                  width={150}
                  height={50} // Set your dimensions as per the SVG size
                />
              </Link>
            </div>
            {/* End Logo */}

            {/* List */}
            <ul className="list-unstyled list-py-1">
              <li>
                <a className="link-sm link-light" href="#">
                  <i className="bi-geo-alt-fill me-1"></i> 153 Williamson Plaza, Maggieberg
                </a>
              </li>
              <li>
                <a className="link-sm link-light" href="tel:1-062-109-9222">
                  <i className="bi-telephone-inbound-fill me-1"></i> +1 (062) 109-9222
                </a>
              </li>
            </ul>
            {/* End List */}
          </div>
          {/* End Col */}

          {/* Company Section */}
          <div className="col-sm mb-7 mb-sm-0">
            <h5 className="text-white mb-3">Company</h5>
            <ul className="list-unstyled list-py-1 mb-0">
              <li><a className="link-sm link-light" href="#">About</a></li>
              <li>
                <a className="link-sm link-light" href="#">
                  Careers{" "}
                  <span className="badge bg-warning text-dark rounded-pill ms-1">We're hiring</span>
                </a>
              </li>
              <li><a className="link-sm link-light" href="#">Blog</a></li>
              <li>
                <a className="link-sm link-light" href="#">
                  Customers <i className="bi-box-arrow-up-right small ms-1"></i>
                </a>
              </li>
              <li><a className="link-sm link-light" href="#">Hire us</a></li>
            </ul>
          </div>
          {/* End Company Section */}

          {/* Other Columns */}
          <div className="col-sm mb-7 mb-sm-0">
            <h5 className="text-white mb-3">Features</h5>
            <ul className="list-unstyled list-py-1 mb-0">
              <li><a className="link-sm link-light" href="#">Press <i className="bi-box-arrow-up-right small ms-1"></i></a></li>
              <li><a className="link-sm link-light" href="#">Release Notes</a></li>
              <li><a className="link-sm link-light" href="#">Integrations</a></li>
              <li><a className="link-sm link-light" href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="col-sm mb-7 mb-sm-0">
            <h5 className="text-white mb-3">Documentation</h5>
            <ul className="list-unstyled list-py-1 mb-0">
              <li><a className="link-sm link-light" href="#">Support</a></li>
              <li><a className="link-sm link-light" href="#">Docs</a></li>
              <li><a className="link-sm link-light" href="#">Status</a></li>
              <li><a className="link-sm link-light" href="#">API Reference</a></li>
              <li><a className="link-sm link-light" href="#">Tech Requirements</a></li>
            </ul>
          </div>

          <div className="col-sm">
            <h5 className="text-white mb-3">Resources</h5>
            <ul className="list-unstyled list-py-1 mb-5">
              <li><a className="link-sm link-light" href="#"><i className="bi-question-circle-fill me-1"></i> Help</a></li>
              <li><a className="link-sm link-light" href="#"><i className="bi-person-circle me-1"></i> Your Account</a></li>
            </ul>
          </div>
        </div>
        {/* End Row */}

        <div className="border-top border-white-10 my-7"></div>

        <div className="row mb-7">
          <div className="col-sm mb-3 mb-sm-0">
           {/* Copyright */}
        <div className="w-md-85 text-lg-center mx-lg-auto">
          <p className="text-white-50 small">
            &copy; Appointify. 2024. All rights reserved.
          </p>
         
        </div>
          </div>

          <div className="col-sm-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a className="btn btn-soft-light btn-xs btn-icon" href="#"><i className="bi-facebook"></i></a></li>
              <li className="list-inline-item"><a className="btn btn-soft-light btn-xs btn-icon" href="#"><i className="bi-google"></i></a></li>
              <li className="list-inline-item"><a className="btn btn-soft-light btn-xs btn-icon" href="#"><i className="bi-twitter"></i></a></li>
              <li className="list-inline-item"><a className="btn btn-soft-light btn-xs btn-icon" href="#"><i className="bi-github"></i></a></li>
              <li className="list-inline-item">
                
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
