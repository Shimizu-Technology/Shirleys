import RestaurantImage from '../assets/restaurant.jpeg';

export default function Story() {
  return (
    <section className="bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative h-48 w-full md:w-48">
                <img
                  className="h-full w-full object-cover"
                  src={RestaurantImage}
                  alt="Restaurant interior"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">Our Legacy</div>
              <p className="mt-2 text-gray-700">
                Since our founding, our coffee shop has been serving delicious comfort food from our first location downtown. Our dream was to create a perfect blend of international and American cuisine that would bring people together.
              </p>
              <p className="mt-4 text-gray-700">
                Today, we're proud to be known for the best fried rice, pancakes, and omelets in town. Our unique combination of international and American cooking continues to delight customers, making us a beloved destination for locals and visitors alike.
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-900">Established 1983</p>
                <p className="text-sm text-gray-500">A Local Tradition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
