import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import logo from "../images/association_logo.png";
import { contactInfo, socialLinks, associationInfo } from "../data/siteData";

const Footer = () => {
  const quickLinks = [
    { name: "من نحن", path: "/about" },
    { name: "مبادراتنا", path: "/initiatives" },
    { name: "ساهم معنا", path: "/donate" },
    { name: "الشفافية والتقارير", path: "/transparency" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  const otherLinks = [
    { name: "آخر الأخبار", path: "/news" },
    { name: "شهادات وتزكيات", path: "/testimonials" },
    { name: "أسئلة شائعة", path: "/faq" },
    { name: "حملة فلسطين", path: "/palestine" },
  ];

  return (
    <footer className="bg-gradient-to-b from-emerald-900 to-emerald-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="شعار تجهيز الدعاة"
                className="w-16 h-16 object-contain"
              />
              <div className="text-right">
                <h3 className="text-xl font-bold">{associationInfo.name}</h3>
                <p className="text-emerald-300 text-sm">
                  {associationInfo.fullName}
                </p>
              </div>
            </div>
            <p className="text-emerald-200 text-sm leading-relaxed mb-4">
              {associationInfo.mission}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-800 hover:bg-red-600 rounded-full flex items-center justify-center transition"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">
              روابط سريعة
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-emerald-200 hover:text-amber-400 transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">
              روابط أخرى
            </h4>
            <ul className="space-y-2">
              {otherLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-emerald-200 hover:text-amber-400 transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">
              تواصل معنا
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-emerald-200">
                <Phone size={18} className="text-emerald-400" />
                <span className="text-sm" dir="ltr">
                  {contactInfo.phone}
                </span>
              </li>
              <li className="flex items-center gap-3 text-emerald-200">
                <Mail size={18} className="text-emerald-400" />
                <span className="text-sm">{contactInfo.email}</span>
              </li>
              <li className="flex items-center gap-3 text-emerald-200">
                <MapPin size={18} className="text-emerald-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </li>
            </ul>
            {/* Donate Button */}
            <Link
              to="/donate"
              className="mt-6 inline-block bg-gradient-to-l from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-emerald-900 font-bold px-6 py-3 rounded-full text-sm shadow-lg transition transform hover:scale-105"
            >
              ساهم الآن 💚
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-emerald-300 text-sm text-center md:text-right">
              © {new Date().getFullYear()} {associationInfo.fullName}. جميع
              الحقوق محفوظة.
            </p>
            <p className="text-emerald-400 text-sm text-center">
              "وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
