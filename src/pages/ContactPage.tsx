import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Heart,
  CheckCircle,
  ArrowLeft,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo } from "../data/siteData";
import emailjs from "@emailjs/browser";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  message: "",
  website: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d\s()-]{8,20}$/;

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const whatsappNumber = useMemo(
    () => contactInfo.whatsapp?.replace(/\D/g, "") || "",
    [],
  );

  const validateForm = (values: ContactFormData): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim() || values.name.trim().length < 3) {
      nextErrors.name = "يرجى إدخال اسم صحيح (3 أحرف على الأقل).";
    }

    if (!EMAIL_REGEX.test(values.email.trim())) {
      nextErrors.email = "يرجى إدخال بريد إلكتروني صحيح.";
    }

    if (!PHONE_REGEX.test(values.phone.trim())) {
      nextErrors.phone = "يرجى إدخال رقم هاتف صحيح.";
    }

    if (!values.message.trim() || values.message.trim().length < 10) {
      nextErrors.message = "الرسالة يجب أن تكون 10 أحرف على الأقل.";
    }

    return nextErrors;
  };

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSubmitError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Excellent anti-bot guard! Keep this.
    if (formData.website) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } =
        import.meta.env;

      if (
        !VITE_EMAILJS_SERVICE_ID ||
        !VITE_EMAILJS_TEMPLATE_ID ||
        !VITE_EMAILJS_PUBLIC_KEY
      ) {
        console.log(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY);
        setSubmitError("إعدادات البريد غير مكتملة. يرجى المحاولة لاحقاً.");
        return;
      }

      // Create the exact object expected by your EmailJS Template
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        city: formData.city.trim() || "غير محدد", // default if empty
        message: formData.message.trim(),
      };

      // Send using EmailJS instead of standard fetch
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitted(true);
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitError(
        "تعذر إرسال الرسالة الآن. يرجى المحاولة مرة أخرى أو التواصل عبر الهاتف.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickContactOptions = [
    {
      label: "اتصل بنا",
      value: contactInfo.phone,
      icon: Phone,
      href: `tel:${contactInfo.phone}`,
      containerClass: "bg-emerald-100",
      iconClass: "text-emerald-600",
    },
    {
      label: "واتساب",
      value: "مراسلة فورية",
      icon: MessageCircle,
      href: whatsappNumber ? `https://wa.me/${whatsappNumber}` : "",
      containerClass: "bg-green-100",
      iconClass: "text-green-600",
    },
    {
      label: "البريد",
      value: contactInfo.email,
      icon: Mail,
      href: `mailto:${contactInfo.email}`,
      containerClass: "bg-blue-100",
      iconClass: "text-blue-600",
    },
    {
      label: "أوقات العمل",
      value: "24/7",
      icon: Clock,
      href: "",
      containerClass: "bg-amber-100",
      iconClass: "text-amber-600",
    },
  ] as const;

  const contactReasons = [
    {
      title: "استفسار عن التبرع",
      desc: "لديك سؤال حول طرق التبرع أو كيفية وصول تبرعك؟ نجيبك",
      icon: Heart,
      containerClass: "bg-red-100",
      iconClass: "text-red-600",
    },
    {
      title: "بيانات التحويل البنكي",
      desc: "نوضح لك بيانات الحساب البنكي وكيفية تنفيذ التحويل بسهولة",
      icon: CheckCircle,
      containerClass: "bg-emerald-100",
      iconClass: "text-emerald-600",
    },
    {
      title: "متابعة التبرع",
      desc: "تواصل معنا لتأكيد تحويلك أو الاستفسار عن حالة مساهمتك",
      icon: MessageCircle,
      containerClass: "bg-blue-100",
      iconClass: "text-blue-600",
    },
  ] as const;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInDown">
            <Headphones className="w-4 h-4" />
            نسعد بتواصلكم
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            تواصل معنا
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم في كل ما يخص المشروع
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="bg-white border-b animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickContactOptions.map((item) => {
              const content = (
                <>
                  <div
                    className={`w-14 h-14 ${item.containerClass} rounded-2xl flex items-center justify-center mx-auto mb-3`}
                  >
                    <item.icon className={`w-7 h-7 ${item.iconClass}`} />
                  </div>
                  <p className="font-bold text-gray-900">{item.label}</p>
                  <p
                    className="text-gray-600 text-sm"
                    dir={item.label === "اتصل بنا" ? "ltr" : "rtl"}
                  >
                    {item.value}
                  </p>
                </>
              );

              if (!item.href) {
                return (
                  <div
                    key={item.label}
                    className="text-center p-4 rounded-2xl transition-all duration-300"
                  >
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-center p-4 rounded-2xl transition-all duration-300 hover-lift hover:bg-gray-50 cursor-pointer"
                  target={item.label === "واتساب" ? "_blank" : undefined}
                  rel={item.label === "واتساب" ? "noreferrer" : undefined}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 animate-fadeInRight">
              <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-8">معلومات التواصل</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-sm text-emerald-200 mb-1">الهاتف</p>
                        <p className="font-bold text-lg" dir="ltr">
                          {contactInfo.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-sm text-emerald-200 mb-1">
                          البريد الإلكتروني
                        </p>
                        <p className="font-bold">{contactInfo.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-sm text-emerald-200 mb-1">العنوان</p>
                        <p className="font-bold">{contactInfo.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-emerald-200 mb-1">واتساب</p>
                        <p className="font-bold" dir="ltr">
                          {contactInfo.whatsapp}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 animate-fadeInLeft">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Send className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      أرسل رسالتك
                    </h2>
                    <p className="text-gray-600">سنرد عليك في أقرب وقت ممكن</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="text-center py-16 animate-scaleIn">
                    <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                      تم إرسال رسالتك بنجاح!
                    </h3>
                    <p className="text-gray-600 text-lg mb-8">
                      سنتواصل معك في أقرب وقت إن شاء الله
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 font-bold px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      إرسال رسالة أخرى
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {submitError ? (
                      <div
                        className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700"
                        role="alert"
                      >
                        {submitError}
                      </div>
                    ) : null}

                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleFieldChange}
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-bold text-gray-700 mb-2"
                        >
                          الاسم الكامل *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleFieldChange}
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-gray-50 focus:bg-white"
                          placeholder="أدخل اسمك الكامل"
                          autoComplete="name"
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name ? (
                          <p id="name-error" className="mt-2 text-sm text-red-600">
                            {errors.name}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-bold text-gray-700 mb-2"
                        >
                          البريد الإلكتروني *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleFieldChange}
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-gray-50 focus:bg-white"
                          placeholder="example@email.com"
                          dir="ltr"
                          autoComplete="email"
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                        />
                        {errors.email ? (
                          <p id="email-error" className="mt-2 text-sm text-red-600">
                            {errors.email}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-bold text-gray-700 mb-2"
                        >
                          رقم الهاتف *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleFieldChange}
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-gray-50 focus:bg-white"
                          placeholder="+212 6XX XX XX XX"
                          dir="ltr"
                          autoComplete="tel"
                          aria-describedby={
                            errors.phone ? "phone-error" : undefined
                          }
                        />
                        {errors.phone ? (
                          <p id="phone-error" className="mt-2 text-sm text-red-600">
                            {errors.phone}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-bold text-gray-700 mb-2"
                        >
                          المدينة
                        </label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          value={formData.city}
                          onChange={handleFieldChange}
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-gray-50 focus:bg-white"
                          placeholder="مدينتك"
                          autoComplete="address-level2"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        الرسالة *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleFieldChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-gray-50 focus:bg-white resize-none"
                        placeholder="اكتب استفسارك حول التبرع أو المشروع..."
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                      />
                      {errors.message ? (
                        <p id="message-error" className="mt-2 text-sm text-red-600">
                          {errors.message}
                        </p>
                      ) : null}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-l from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 disabled:from-emerald-400 disabled:to-emerald-500 text-white font-bold py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          إرسال الرسالة
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              لماذا تتواصل معنا؟
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              نحن هنا لخدمتكم
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp delay-200">
            {contactReasons.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 hover:bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <div
                  className={`w-16 h-16 ${item.containerClass} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <item.icon className={`w-8 h-8 ${item.iconClass}`} />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Simplified) */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fadeInUp">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">موقعنا</h2>
            <p className="text-gray-600">نعمل في مختلف مدن المملكة المغربية</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-3xl p-10 text-white text-center relative overflow-hidden animate-fadeInUp delay-200">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/269790/pexels-photo-269790.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
            </div>
            <div className="relative z-10">
              <MapPin className="w-16 h-16 text-amber-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">المملكة المغربية</h3>
              <p className="text-emerald-100 text-lg mb-6 max-w-2xl mx-auto">
                نعمل على دعم الدعاة في مختلف المدن المغربية، من طنجة شمالاً إلى
                الداخلة جنوباً
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "الرباط",
                  "الدار البيضاء",
                  "فاس",
                  "مراكش",
                  "طنجة",
                  "أكادير",
                ].map((city) => (
                  <span
                    key={city}
                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-l from-amber-400 to-yellow-500 animate-fadeInUp">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            ساهم في دعم الدعاة
          </h2>
          <p className="text-emerald-800 mb-8 text-lg">
            تبرعك يصل مباشرة للمستفيدين ويساهم في نشر العلم الشرعي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
            >
              <Heart className="w-5 h-5" />
              تبرع الآن
            </Link>
            <Link
              to="/about"
              className="bg-white hover:bg-gray-50 text-emerald-800 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2 hover-lift"
            >
              تعرف علينا أكثر
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
