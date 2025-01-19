import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">ABOUT FEEDs & GRIDs</h3>
          <p className="text-sm leading-relaxed">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double-click me to add your own
            content and make changes to the font.
          </p>
        </div>

        {/* Socials Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SOCIALS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Google+
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pinterest
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Linkedin
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SUBSCRIBE</h3>
          <p className="text-sm leading-relaxed mb-4">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email here*"
              className="w-full px-4 py-2 text-sm text-gray-800 rounded-lg border border-gray-300 focus:outline-none"
            />
            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 rounded-lg"
              variant="default"
              size="sm"
            >
              Subscribe Now
            </Button>
          </form>
        </div>

        {/* Bottom Links */}
        <div className="col-span-full md:col-span-3 lg:col-span-4 mt-10 text-center text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="space-x-4">
              <a href="#" className="hover:underline">
                HOME
              </a>
              <a href="#" className="hover:underline">
                CONTACT US
              </a>
            </div>
            <p>© 2035 by FEEDs & GRIDs. Powered and secured by Wix</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
