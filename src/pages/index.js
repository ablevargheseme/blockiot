import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black pb-2 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30">
        <p className="font-bold text-center text-xl">BlockIoT</p>
        {/* Add any additional navbar items or links here */}
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
        <div className="flex  items-center justify-around space-x-8 w-screen mb-8">
          <div className="max-w-full">
            <h1 className="text-5xl font-bold mb-4">BlockIoT</h1>
            <p className="text-2xl opacity-80">
            Paving the Way for a Smarter and Secure Future!"
            </p>
            {/* Add any other text or components as needed */}
          </div>
          <div className="relative w-96 h-96">
            {/* Add your image here */}
            <Image
              src="/hero.png" // Replace with your actual image path
              alt="Your Image Alt Text"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* How It Works Section */}
        <section className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-md">
              <Image
                src="/icon1.png" // Replace with your actual image path
                alt="Icon 1"
                width={64}
                height={64}
              />
              <p className="text-lg font-bold mt-4">Step 1</p>
              <p className="text-gray-300 text-center">
                Describe the first step here.
              </p>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-md">
              <Image
                src="/icon2.png" // Replace with your actual image path
                alt="Icon 2"
                width={64}
                height={64}
              />
              <p className="text-lg font-bold mt-4">Step 2</p>
              <p className="text-gray-300 text-center">
                Describe the second step here.
              </p>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-md">
              <Image
                src="/icon3.png" // Replace with your actual image path
                alt="Icon 3"
                width={64}
                height={64}
              />
              <p className="text-lg font-bold mt-4">Step 3</p>
              <p className="text-gray-300 text-center">
                Describe the third step here.
              </p>
            </div>
          </div>
        </section>

        <div className="grid text-center grid-cols-4 gap-8">
          {/* Your existing grid items */}
        </div>

        <Link
          className="rounded-lg px-8 py-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white text-bold hover:bg-blue-600 duration-300 mt-8"
          href="/appletpage"
        >
          Launch BlockIoT
        </Link>
      </main>
    </div>
  );
}
