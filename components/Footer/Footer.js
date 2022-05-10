export default function Footer() {
    return (
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto pt-6 pb-6 px-4 sm:px-6 md:flex md:items-center md:justify-center lg:px-8">
          <div className="mt-0 md:order-1">
            <p className="text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Discover. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  