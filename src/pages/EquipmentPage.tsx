import { Link } from "react-router-dom";
import { Award, Sparkles } from "lucide-react";
import { equipmentCatalog } from "../data/siteData";

const EquipmentPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/previews/053/886/690/large_2x/camera-sits-on-a-table-with-other-cameras-the-camera-is-black-and-has-a-yellow-lens-free-photo.jpg?auto=compress&cs=tinysrgb&w=1000')] bg-cover bg-center"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInDown">
            <Sparkles className="w-4 h-4" />
            التجهيزات
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
            الأجهزة والمعدات
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            تعرف على ما نحتاجه لدعم المشايخ في نشر العلم الشرعي الصحيح
          </p>
        </div>
      </section>

      {/* Equipment Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              قائمة الأجهزة
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
              نوفر للمشايخ جميع الأدوات اللازمة لتسجيل ونشر دروسهم بجودة عالية.
              يمكنك المساهمة بالتبرع المالي أو شراء وتبرع الأجهزة مباشرة.
            </p>
            {/* Price Disclaimer */}
            <div className="inline-flex items-start gap-3 bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 text-right max-w-3xl mx-auto">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-white font-bold text-lg">!</span>
              </div>
              <div className="flex-1">
                <p className="text-amber-900 font-semibold text-sm leading-relaxed">
                  <strong>ملاحظة هامة:</strong> الأسعار المذكورة هي أسعار
                  تقريبية وقد تختلف قليلاً حسب المواصفات والجودة والتوفر في
                  السوق. للتبرع بأجهزة محددة، يرجى التواصل معنا مباشرة.
                </p>
              </div>
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeInUp delay-200 xl:justify-items-center">
            {equipmentCatalog.map((equipment, index) => (
              <div
                key={equipment.id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-300 hover:-translate-y-2 w-full max-w-sm"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image */}
                <div
                  className="relative h-56 bg-gray-100 overflow-hidden bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${equipment.image})`,
                  }}
                >
                  {/* Price Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-emerald-600 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      {equipment.price.toLocaleString("ar-MA")} د
                    </div>
                  </div>
                  {/* Price Note Badge - overlay on bottom left */}
                  {equipment.priceNote && (
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-blue-600/95 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm flex items-center gap-1">
                        <span>💡</span>
                        <span>{equipment.priceNote}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-2 leading-snug">
                    {equipment.name}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">
                    {equipment.nameEn}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {equipment.description}
                  </p>

                  {/* Action Button */}
                  <Link
                    to="/donate"
                    className="block w-full text-center bg-gradient-to-l from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-2.5 rounded-xl transition-all duration-300 text-sm shadow-md hover:shadow-lg"
                  >
                    ساهم في توفيره
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center animate-fadeInUp delay-300">
            <div className="bg-gradient-to-l from-emerald-600 to-emerald-700 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                كل مساهمة تحدث فرقاً
              </h3>
              <p className="text-emerald-100 text-lg mb-6 max-w-2xl mx-auto">
                سواء بتبرع مالي أو بشراء جهاز مباشرة، أنت تساهم في نشر العلم
                الشرعي الصحيح
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/donate"
                  className="bg-white hover:bg-gray-50 text-emerald-700 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2"
                >
                  <Award className="w-5 h-5" />
                  تبرع الآن
                </Link>
                <Link
                  to="/contact"
                  className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
                >
                  تواصل للتبرع بأجهزة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipmentPage;
