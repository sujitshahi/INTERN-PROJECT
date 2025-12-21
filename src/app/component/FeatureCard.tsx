import React from 'react'

export default function FeatureCard() {
  return (
    <div>

            <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center">

          {/* 1️⃣ School Bus */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mb-6">
              🚍
            </div>

            <div className="w-72 h-72 rounded-full bg-orange-50 flex flex-col items-center justify-center px-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                School Bus
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit
              </p>
            </div>
          </div>

          {/* 2️⃣ Playground */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
              ⚽
            </div>

            <div className="w-72 h-72 rounded-full bg-green-50 flex flex-col items-center justify-center px-6">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Playground
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit
              </p>
            </div>
          </div>

          {/* 3️⃣ Healthy Canteen */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
              🏠
            </div>

            <div className="w-72 h-72 rounded-full bg-yellow-50 flex flex-col items-center justify-center px-6">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Healthy Canteen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit
              </p>
            </div>
          </div>

          {/* 4️⃣ Positive Learning */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center mb-6">
              🎓
            </div>

            <div className="w-72 h-72 rounded-full bg-sky-50 flex flex-col items-center justify-center px-6">
              <h3 className="text-2xl font-bold text-sky-500 mb-4">
                Positive Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
        
      
    </div>
  )
}
